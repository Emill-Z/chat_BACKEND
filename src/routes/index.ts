import { Application, } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import bodyparser from 'body-parser';

import userRoutes from './User.routes';
import meRoutes from './Me.routes';

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

    const routes = [
      userRoutes,
      meRoutes,
    ];

    this._app.use('/api', routes);
  }

}