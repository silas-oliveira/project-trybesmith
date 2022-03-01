import productsModel from '../models/productsModel';
import { IProducts } from '../interfaces/usersInterface';

const createProduct = (async ({ name, amount }: IProducts) => {
  const create = await productsModel.productRegistration({ name, amount });
  return create;
});

const getAllProducts = (async () => {
  const products = await productsModel.getAllProducts();
  return products;
});

export default {
  createProduct,
  getAllProducts,
};