import { createConnection, Connection } from 'typeorm';
import {
  POSTGRES_PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  TYPEORM_LOGGING,
} from  '../env-list';
import { join } from 'path';

export const connection: Promise<Connection> = createConnection({
  type: 'postgres',
  host: '172.19.0.2',
  port: Number(POSTGRES_PORT),
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  logging: TYPEORM_LOGGING === 'true',
  entities: [join(__dirname, './entities/*.entity.ts')],
  migrationsRun: true,
  migrations: [join(__dirname, './../migration/*.ts')],
});