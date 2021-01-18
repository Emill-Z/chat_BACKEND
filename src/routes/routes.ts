import { Application, } from 'express';
import { UserCtrl } from '../controllers';

export class RoutesBuilder {

  private _app: Application;

  constructor(app: Application) {
    this._app = app;
    this._createRoutes();
  }

  private _createRoutes(): void {
    const userCtrl = new UserCtrl();

    this._app.get('/', userCtrl.test);

    this._app.get('/me', userCtrl.test);
  }
}