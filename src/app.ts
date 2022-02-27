import express from 'express';
import usersController from './controllers/usersController';

const app = express();

app.use(express.json());

app.post('/users', usersController.validateUser, usersController.createUser);

app.post('/login', usersController.validateLogin, usersController.loginUser);

export default app;
