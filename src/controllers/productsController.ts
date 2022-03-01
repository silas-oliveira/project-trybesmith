import { Request, Response, NextFunction } from 'express';
import decodeToken from '../Auth/decodeToken';
import { IProducts } from '../interfaces/usersInterface';
import productsService from '../services/productsService';
import { getStatusProducts, productsSchema } from '../validations/productsValidation';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (authorization === undefined || !authorization) {
    return res.status(401).json({ error: 'Token not found' });
  }

  const authToken = decodeToken(authorization);
  if (authToken === 401) {
    return res.status(401).json({ error: 'Invalid token' });
  }
    
  next();
};

const validateProducts = (req: Request, res: Response, next: NextFunction) => {
  const { error } = productsSchema.validate(req.body);
  if (error) {
    const status = getStatusProducts(error.message);
    return res.status(status).json({ error: error.message });
  }
  next();
};

const createProduct = (async (req: Request, res: Response, _next: NextFunction) => {
  const { name, amount }: IProducts = req.body;
  const create = await productsService.createProduct({ name, amount });
  if (create.id === 0) {
    return res.status(401).json({ error: 'Erro de id' });
  }
  const { id } = create;
  return res.status(201).json({ item: { id, name, amount } });
});

const getAllProducts = (async (req: Request, res: Response, _next: NextFunction) => {
  const products = await productsService.getAllProducts();
  return res.status(200).json(products);
});

export default {
  createProduct,
  validateToken,
  validateProducts,
  getAllProducts,
};
