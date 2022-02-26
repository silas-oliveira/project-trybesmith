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

  // const blabla = await connection.execute<ResultSetHeader>(query, [
  //   username, password,
  // ]);
  // console.log('blabla', blabla);
  // console.log([blabla]);

  const [result] = await connection.execute<RowDataPacket[]>(query, [
    username, password,
  ]);
  // console.log(result[0].id, username);
  const user = result[0].id;
  // console.log('insertId', result);
  // const user = { id, username };
  return { id: user, username };
});

export default {
  createUser,
  loginUser,
};
