import express, { Router } from 'express';
import { UserCtrl } from '../controllers';

class UserRoute {

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

    this._router.get('/user', (req, resp) => {
      resp
        .status(200)
        .send('/user');
    });

    this._router.get('/user/:id', (req, resp) => {
      resp
        .status(200)
        .send({ id: req.params.id });
    });
  }

}

const userRoutes = new UserRoute();

export default userRoutes.router;