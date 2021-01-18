import { Server } from './src/server';

const app = new Server().getApp();
export { app };