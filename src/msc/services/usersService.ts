import { IUser, User } from '../../interfaces/usersInterface';
import usersModel from '../models/usersModel';

const createUser = (async ({ username, classe, level, password }: IUser): Promise<User> => {
  const newUser = await usersModel.createUser({ username, classe, level, password });
  return newUser;
});

export default {
  createUser,
};
