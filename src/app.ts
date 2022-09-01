import express, { Application } from 'express';
import cors from 'cors';
import ip from 'ip';
import { Code, Status } from './enum';
import { HttpResponse } from './domain/response';
import { userRoutes } from './routes';

type Port = string | number | undefined;

class App {
  private readonly app: Application;
  private readonly port: Port = process.env.SERVER_PORT || 3000;

  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  private middleware(): void {
    //  TODO: cors
    this.app.use(cors({ origin: '*' }));
    //  TODO: reading of the body
    this.app.use(express.json());
    //  TODO: folder public
    this.app.use(express.static('public'));
  }

  private routes(): void {
    this.app.use('/user', userRoutes);
    this.app.all('*', (_, resp) =>
      resp
        .status(Code.NOT_FOUND)
        .json(
          new HttpResponse(Code.NOT_FOUND, Status.NOT_FOUND, 'Route not found')
        )
    );
  }

  listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Run server...`);
      console.log(`=== http://localhost:${this.port} ===`);
      console.log(`=== http://${ip.address()}:${this.port} ===`);
    });
  }
}

export { App };
