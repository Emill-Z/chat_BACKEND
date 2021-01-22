import express, { Router } from 'express';

class UserRoutes {

  private _router: Router = express.Router();

  constructor() {
    this.init();
  }

  get router(): Router {
    return this._router;
  }

  private init(): void {
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

export default (new UserRoutes()).router;