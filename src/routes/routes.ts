import express, { Router } from 'express';
import userRoutes from './User.route';

class Routes {

  private _router: Router = express.Router();

  constructor() {
    this.init();
  }

  get router(): Router {
    return this._router;
  }

  private init(): void {
    this._router.get('/', (req, res) => { res.status(200).send({ ok: 1 }); });

    this._router.use('/', userRoutes);
  }
}

const routes = new Routes();

export default routes.router;