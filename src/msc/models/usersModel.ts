import { ResultSetHeader, RowDataPacket } from 'mysql2';
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
  const query = 'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?';
  console.log(username, password);
  const [result] = await connection.execute<RowDataPacket[]>(query, [
    username, password,
  ]);
  console.log('tiagaoResult', result);
  if (result.length === 0) {
    return { id: 0, username: '' };
  }
  const user = await result[0].id;
  // console.log('user', user);

  return { id: user, username };
});

export default {
  createUser,
  loginUser,
};
