import { createConnection, Connection } from 'typeorm';
import { User } from './entities/User';

export const connection: Promise<Connection> = createConnection({
  type: 'postgres',
  host: '172.19.0.2',
  port: 5432,
  username: 'pguser',
  password: 'qwerty',
  database: 'chatDb',
  entities: [
    User,
  ],
  synchronize: true,
  logging: false
});
