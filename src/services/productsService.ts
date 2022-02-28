import productsModel from '../models/productsModel';
import { IProducts } from '../interfaces/usersInterface';

const createProduct = (async ({ name, amount }: IProducts) => {
  const create = await productsModel.productRegistration({ name, amount });
  return create;
});

export default {
  createProduct,
};