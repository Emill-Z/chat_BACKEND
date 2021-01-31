interface UserI {
  id: number;
  name: string;
  email: string;
  rooms?: unknown[];
  avatar?: string;
}

const USERS: UserI[] = [];

export const usersDB = USERS;