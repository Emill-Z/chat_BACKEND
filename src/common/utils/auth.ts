import { sign, verify } from 'jsonwebtoken';
import { compare } from 'bcrypt';
import { JWT_SECRET, JWT_EXPIRATION } from '../../env-list';

export const createToken = async (payload: { id: number, email: string }): Promise<string> => {
  return await sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
};

export const verifyToken = (token: string): unknown | string => {
  return verify(token, JWT_SECRET);
};

export const verifyPassword = async (password: string, hashpw: string): Promise<boolean> => {
  try {
    return await compare(password, hashpw);
  } catch (e) {
    throw e.message;
  }
};
