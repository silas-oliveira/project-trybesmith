// import { Request, Response, NextFunction } from 'express';
// import decodeToken from '../Auth/decodeToken';

// const validateToken = (async (req: Request, _res: Response, next: NextFunction) => {
//   const { authorization } = req.headers;
//   const decode = decodeToken(authorization);
//   if (!decode) return console.log('error');
//   next();
// });