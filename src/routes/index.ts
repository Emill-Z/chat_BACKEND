import { Application, } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import bodyparser from 'body-parser';

import userRoutes from './User.routes';
import meRoutes from './Me.routes';

const ROUTE_LIST = [
  userRoutes,
  meRoutes,
];

export class RoutesMiddleware {

  private _app: Application;

  constructor(app: Application) {
    this._app = app;
    this.initMiddleware();
  }

  private initMiddleware(): void {
    this._app.use(helmet());
    this._app.use(cors());
    this._app.use(bodyparser.json());

    this._app.use('/api', ROUTE_LIST);
  }

}