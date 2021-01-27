export interface UserI {
  id: number;
  name: string;
  email: string;
  rooms?: unknown[];
  avatar?: string;
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