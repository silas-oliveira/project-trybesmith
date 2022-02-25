import express from 'express';
import usersController from './msc/controllers/usersController';

const app = express();

app.use(express.json());

app.post('/users', usersController.validateUser, usersController.createUser);

export default app;
