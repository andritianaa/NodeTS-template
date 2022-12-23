import morgan from "morgan";
import express, { Application } from "express";
import bodyParser from "body-parser";
import { UserRoutes } from "../modules/user/routes";
import { CommonRoutes } from "../modules/common/routes";
import mongoose from "mongoose";
import cors from "cors"
import environment from "../environment";

class App {
    public app: Application;
    private UserRoutes: UserRoutes = new UserRoutes();
    private commonRoutes: CommonRoutes = new CommonRoutes();
    public mongoUrl: string = environment.getDBStringConnection();
    constructor() {
        this.mongoSetup();
        this.app = express();
        this.config();
        this.UserRoutes.route(this.app);
        this.commonRoutes.route(this.app);
    }

    private config(): void {
        this.app.use(morgan('dev'));
        this.app.use(cors({ origin: '*' }));
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