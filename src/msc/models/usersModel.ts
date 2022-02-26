import { ResultSetHeader } from 'mysql2';
import dotenv from 'dotenv';
import { ILogin, IUser, ReturnLogin, User } from '../../interfaces/usersInterface';
import connection from './connection';

dotenv.config();

const createUser = async ({ username, classe, level, password }: IUser):Promise<User> => {
  console.log('params', username, classe, level, password);
  const query = `INSERT INTO Trybesmith.Users (username, classe, level, password)
  values (?, ?, ?, ?)`;

  const [result] = await connection.execute<ResultSetHeader>(query, [
    username,
    classe,
    level,
    password,
  ]);
  console.log([result]);

  const { insertId: id } = result;
  const newUser = { id, username, classe, level, password };
  console.log('newUser', newUser);
  return newUser;
};

const loginUser = (async ({ username, password }: ILogin): Promise<ReturnLogin> => {
  const query = 'SELECT * FROM Trybesmith.Users WHERE (username, password) VALUES (?, ?)';

  const [result] = await connection.execute<ResultSetHeader>(query, [
    username, password,
  ]);

  const { insertId: id } = result;
  const user = { id, username };
  return user;
});

export default {
  createUser,
  loginUser,
};
