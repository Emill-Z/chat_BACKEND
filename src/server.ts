import express, { Application } from 'express';
import chalk from 'chalk';
import http from 'http';
import socket from 'socket.io';
import RoutesMiddleware from './routes';
import GraphqlInit from './graphql';

export class Server {

  public readonly PORT: number = 3000;

  private _app: Application;
  private _server: http.Server;
  private _io: socket.Server;

  constructor() {
    this.init();
    GraphqlInit(this._app);
    RoutesMiddleware(this._app);
    this.listen();
  }

  public getApp(): express.Application {
    return this._app;
  }

  private init(): void {
    this._app = express();
    this.initServer();
    this.initSocket();
  }

  private initServer(): void {
    this._server = http.createServer(this._app);
  }

  private initSocket(): void {
    this._io = new socket.Server(this._server);
    this._app.set('io', this._io);
  }

  private listen(): void {
    this._server.listen(this.PORT, () => {
      console.log(chalk.blue('⚡️[server]: Server is running at'), chalk.white(`https://localhost:${this.PORT}`));
    });
  }

}