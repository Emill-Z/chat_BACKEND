import express, { Router } from 'express';
import { UserCtrl } from '../controllers';

class MeRoutes {

  private _router: Router = express.Router();

  constructor() {
    this.init();
  }

  get router(): Router {
    return this._router;
  }

  private init(): void {
    const userCtrl = new UserCtrl();

    this._router.get('/me', userCtrl.test);
  }

}

export default (new MeRoutes()).router;