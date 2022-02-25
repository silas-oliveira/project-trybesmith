import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const secret = 'InAmLiQCSC69';

const decodeToken = (tokenInfo: string) => {
  try {
    const token = jwt.verify(tokenInfo, secret);
    return token;
  } catch (error) {
    // if (tokenInfo === undefined || !tokenInfo) {
    //   const objError = { status: 401, message: 'Token not found' };
    //   throw objError;
    // }
    // const objError = { status: 401, message: 'Expired or invalid token' };
    // throw objError;
  }
};

export default {
  decodeToken,
};
