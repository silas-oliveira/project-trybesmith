import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const secret = 'InAmLiQCSC69';
 
const decodeToken = (authorization: string) => {
  const token = jwt.verify(authorization, secret);
  if (!token) {
    console.log('error');
  }
  return token;
};

export default {
  decodeToken,
};
