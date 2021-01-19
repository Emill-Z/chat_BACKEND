export interface IAuthUser {
  id: number;
  name: number;
}

export interface ICreateUser {
  firstname: string;
  lastname: string
  email: string;
  password: string;
}

export interface ICreateUserInput {
  input: ICreateUser;
}