import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const secret = 'InAmLiQCSC69';

const token = (infoUser: string | number) => {
  console.log(infoUser);
  const tokenCreate = jwt.sign({ data: infoUser }, secret, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });
  // console.log(tokenCreate);
  return tokenCreate;
};

export default token;
