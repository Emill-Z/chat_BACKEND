export interface UserI {
  id: number;
  name: string;
  email: string;
  rooms?: unknown[];
  subscriptions?: number[];
  avatar?: string;
  token?: string;
}

export interface ICreateUser extends Omit<UserI, 'id'> {
  password: string;
}

export interface ICreateUserInput {
  input: ICreateUser;
}
export interface IUserInput {
  input: UserI;
}