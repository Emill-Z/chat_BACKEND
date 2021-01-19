import express, { Application } from 'express';
import chalk from 'chalk';
import http from 'http';
import socket from 'socket.io';
import { RoutesBuilder } from './routes/routes';
import helmet from 'helmet';
import cors from 'cors';
import { GraphqlService } from './graphql/Graphql.service';

export class Server {

  public readonly PORT: number = 3000;

  private _app: Application;
  private _server: http.Server;
  private _io: socket.Server;

  constructor() {
    this._appInit();
    this._initServer();
    this._initSocket();
    this._initQqraphql();
    this._initAppRoutes();
    this._listen();
  }

  public getApp(): express.Application {
    return this._app;
  }

  private _appInit(): void {
    this._app = express();
    this._app.use(helmet());
    this._app.use(cors());
  }

  private _initServer(): void {
    this._server = http.createServer(this._app);
  }

  private _initAppRoutes(): void {
    new RoutesBuilder(this._app);
  }

  private _initSocket(): void {
    this._io = new socket.Server(this._server);
    this._app.set('io', this._io);
  }

  private _initQqraphql(): void {
    GraphqlService.init(this._app);
  }

  private _listen(): void {
    this._server.listen(this.PORT, () => {
      console.log(chalk.blue('⚡️[server]: Server is running at'), chalk.white(`https://localhost:${this.PORT}`));
    });
  }

}