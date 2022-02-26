import { Request, Response, NextFunction } from 'express';
import token from '../../Auth/createToken';
import { ILogin, IUser } from '../../interfaces/usersInterface';
import { getStatusLogin, loginSchema } from '../../validations/loginValidation';
import { userSchema, getStatusUser } from '../../validations/userValidation';
import usersService from '../services/usersService';

const validateUser = (req: Request, res: Response, next: NextFunction) => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    const status = getStatusUser(error.message);
    return res.status(status).json({ error: error.message });
  }
  next();
};

const createUser = (async (req: Request, res: Response, _next: NextFunction) => {
  const { username, classe, level, password }: IUser = req.body;
  const newUser = await usersService.createUser({ username, classe, level, password });
  console.log({ newUser });
  const { id } = newUser;
  const created = token(id);
  return res.status(201).json({ token: created });
});

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const { error } = loginSchema.validate(req.body);
  if (error) {
    const status = getStatusLogin(error.message);
    return res.status(status).json({ error: error.message });
  }
  next();
};

const loginUser = (async (req: Request, res: Response, _next: NextFunction) => {
  const { username, password }: ILogin = req.body;
  const login = await usersService.loginUser({ username, password });
  if (login.id === 0 || login.username === '') {
    return res.status(401).json({ error: 'Username or password invalid' });
  }
  const { id } = login;
  const authUser = token({ id, username });
  return res.status(200).json({ token: authUser });
});

export default {
  createUser,
  validateUser,
  loginUser,
  validateLogin,
};