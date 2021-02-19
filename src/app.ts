import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import routes from './routes';

class App {
  public express: express.Application

  public constructor() {
    this.express = express();

    // this.database();
    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private database(): void {
    // mongoose.connect( ** config ** );
  }

  private routes(): void {
    this.express.use(routes);
  }
}

export default new App().express;
