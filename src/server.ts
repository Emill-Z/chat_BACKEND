import express, { Application } from 'express';
import chalk from 'chalk';
import http from 'http';
import socket, { Socket } from 'socket.io';
import RoutesMiddleware from './routes';
import GraphqlInit from './graphql';
import { PORT } from './env-list';

import { connection } from './DB';

// interface NewRoomI {
//   userId: number;
//   chatId: number;
//   isBot: boolean;
// }

// function onCreateRoom(data: NewRoomI): void {
//   console.log(data);
//     //   socket.join(`Room:${data.roomId}`);
//     //   this._io.to(`Room:${data.roomId}`).emit(JSON.stringify({ roomId: `Room:${data.roomId}` }));
// }

class Server {

  private readonly _port: string = PORT;

  private _app: Application;
  private _server: http.Server;
  private _io: socket.Server;

  constructor() {
    this.init();
    this.listen();
  }

  public getApp(): express.Application {
    return this._app;
  }

  private init(): void {
    this._app = express();
    RoutesMiddleware(this._app);
    this.initServer();
    // this.initSocket();
    GraphqlInit(this._app);
  }

  private initServer(): void {
    this._server = http.createServer(this._app);
  }

  // private initSocket(): void {
  //   this._io = new socket.Server(this._server, { cors: { origin: '*' }});

  //   this._io.on('connection', (socket: Socket) => {
  //     console.log(socket.id);

  //     socket
  //       .on('createRoom', onCreateRoom);
  //   });

  //   this._app.set('io', this._io);
  // }

  private async listen(): Promise<void> {
    try {
      await connection;
      this._server.listen(this._port, () => {
        console.log(chalk.blue('⚡️[Postgres connected]'));
        console.log(chalk.blue('⚡️[server]: Server is running at'), chalk.white(`https://localhost:${this._port}`));
      });
    } catch(e) {
      console.log(e);
    }
  }

}

export const app =  new Server().getApp();