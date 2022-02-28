import { ResultSetHeader } from 'mysql2';
import { IProducts, Products } from '../interfaces/usersInterface';
import connection from './connection';

const productRegistration = (async ({ name, amount }: IProducts): Promise<Products> => {
  const query = 'INSERT INTO Trybesmith.Products (name, amount) values (?, ?)';
  const [result] = await connection.execute<ResultSetHeader>(query, [name, amount]);

  console.log('result', result.affectedRows);

  const { insertId: id } = result;

  const newItem: Products = { id, name, amount };
  return newItem;
});

export default {
  productRegistration,
};