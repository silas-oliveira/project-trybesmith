import { ILogin, IUser, Login, User } from '../../interfaces/usersInterface';
import usersModel from '../models/usersModel';

const createUser = (async ({ username, classe, level, password }: IUser): Promise<User> => {
  const newUser = await usersModel.createUser({ username, classe, level, password });
  return newUser;
});

const loginUser = (async ({ username, password }: ILogin): Promise<Login> => {
  const login = await usersModel.loginUser({ username, password });
  return login;
});

export default {
  createUser,
  loginUser,
};
