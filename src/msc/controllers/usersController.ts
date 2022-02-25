import { Request, Response, NextFunction } from 'express';
import token from '../../Auth/createToken';
import { IUser } from '../../interfaces/usersInterface';
import { userSchema, getStatus } from '../../validations/userValidation';
import usersService from '../services/usersService';

const validateUser = (req: Request, res: Response, next: NextFunction) => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    const status = getStatus(error.message);
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

export default {
  createUser,
  validateUser,
};