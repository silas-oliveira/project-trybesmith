import express from 'express';
import usersController from './controllers/usersController';
import productsController from './controllers/productsController';

const app = express();

app.use(express.json());

app.post('/users', usersController.validateUser, usersController.createUser);

app.post('/login', usersController.validateLogin, usersController.loginUser);

app.post(
  '/products',
  productsController.validateToken,
  productsController.validateProducts,
  productsController.createProduct,
);

export default app;
