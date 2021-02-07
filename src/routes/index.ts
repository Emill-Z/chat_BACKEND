import { Application } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import bodyparser from 'body-parser';
import userRoutes from './User.routes';
// import meRoutes from './Me.routes';

const ROUTES_LIST = [
  userRoutes,
  // meRoutes,
];

export default function (app: Application): void {
  app.use((req, res, next) => {
    console.log('TEST');
    console.log(req.url);
    console.log(req.url);
    console.log(req.url);
    next();
  });
  app.use(helmet());
  app.use(cors());
  app.use(bodyparser.json());
  app.use('/api', ROUTES_LIST);
}