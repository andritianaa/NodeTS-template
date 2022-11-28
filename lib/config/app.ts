import morgan from "morgan";
import express, { Application } from "express";
import bodyParser from "body-parser";
import { Routes } from "../routes/routes";
import { CommonRoutes } from "../routes/common.routes";
import env from "../environment";
import mongoose from "mongoose";

class App {
    public app: Application;
    private routes: Routes = new Routes();
    private commonRoutes: CommonRoutes = new CommonRoutes();
    public mongoUrl: string = "mongodb://root:Test123456@167.86.96.66:30007/?authMechanism=DEFAULT";
    constructor() {
        this.mongoSetup();
        this.app = express();
        this.config();
        this.routes.route(this.app);
        this.commonRoutes.route(this.app);
    }

    private config(): void {
        this.app.use(morgan('dev'));

        this.app.use(bodyParser.json());
        // support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    private mongoSetup(): void{
        mongoose.connect(this.mongoUrl,()=>{
            console.log("⚡️ Database connected");
        })
    }
}

export default new App().app;