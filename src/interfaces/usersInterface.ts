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
