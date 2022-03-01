import { ResultSetHeader } from 'mysql2';
import { IProducts, Products } from '../interfaces/usersInterface';
import connection from './connection';

const productRegistration = (async ({ name, amount }: IProducts): Promise<Products> => {
  const query = 'INSERT INTO Trybesmith.Products (name, amount) values (?, ?)';
  const [result] = await connection.execute<ResultSetHeader>(query, [name, amount]);

  const { insertId: id } = result;

  const newItem: Products = { id, name, amount };
  return newItem;
});

const getAllProducts = (async () => {
  const query = 'SELECT * FROM Trybesmith.Products';
  const [products] = await connection.execute(query);
  return products;
});

export default {
  productRegistration,
  getAllProducts,
};