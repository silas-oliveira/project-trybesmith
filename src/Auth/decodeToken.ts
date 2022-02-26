import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const secret = 'InAmLiQCSC69';
 
const decodeToken = ({ tokenInfo }: any) => {
  const token = jwt.verify(tokenInfo, secret);
  if (!token) {
    console.log('error');
  }
  return token;
};

export default {
  decodeToken,
};
