export interface UserI {
  id: number;
  name: string;
  email: string;
  rooms?: number[];
  avatar?: string;
}

export interface ICreateUser extends UserI {
  password: string;
}

export interface ICreateUserInput {
  input: ICreateUser;
}