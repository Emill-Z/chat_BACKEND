import { createConnection, Connection } from 'typeorm';
import { User } from './entities/User';
import {
  POSTGRES_PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
} from  '../env-list';

export const connection: Promise<Connection> = createConnection({
  type: 'postgres',
  host: '172.19.0.2',
  port: Number(POSTGRES_PORT),
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  entities: [
    User,
  ],
  synchronize: true,
  logging: false
});
