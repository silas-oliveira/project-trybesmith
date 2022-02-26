export interface IUser {
  username: string;
  classe: string;
  level: number;
  password: string;  
}

export interface User extends IUser {
  id: number;
}

export interface Schema {
  field: string;
}
export interface ILogin {
  username: string;
  password?: string;
}

export interface ReturnLogin extends ILogin {
  id: number;
}

export interface Login extends ILogin {
  id: number;
}

export interface Authorization {
  authorization: string;
}
