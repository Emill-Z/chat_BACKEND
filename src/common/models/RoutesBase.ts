import express, { Router } from 'express';

export abstract class RoutesBase {

  private _router: Router = express.Router();

  constructor() {
    this.init();
  }

  get router(): Router {
    return this._router;
  }

  abstract init(): void;

}