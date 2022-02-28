import dotenv from 'dotenv';
import jwt, { JwtPayload } from 'jsonwebtoken';

dotenv.config();

const secret = 'InAmLiQCSC69';
 
// const decodeToken = (authorization: string): string | JwtPayload | undefined | Data => {
//   const token = jwt.verify(authorization, secret);
//   return token;
// };

const decodeToken = (tokenInfo: string): string | JwtPayload | undefined | number => {
  try {
    const token = jwt.verify(tokenInfo, secret);
    return token;
  } catch (error) {
    const STATUS_ERROR = 401;

    console.log(STATUS_ERROR);

    return STATUS_ERROR;
  }
};

export default decodeToken;
