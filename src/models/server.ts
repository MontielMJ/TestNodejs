import express, { Application } from "express";
import routesProduct from "../routes/products.routes";


export class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        console.log(this.port);
        this.listen();
        this.routes();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Aplicacion corriendo en el puerto ' + this.port)

        });
    }

    routes()
    {
        this.app.use('/api/products', routesProduct);
    }
}
export default Server;