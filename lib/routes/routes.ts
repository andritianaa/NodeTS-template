import { Application, Request, Response } from "express";

export class Routes {
    public route(app: Application) {
        app.get('/api/test', (req: Request, res: Response) => {
            res.status(200).send({ message: "Server is up" });
        });
        app.post('/api/test', (req: Request, res: Response) => {
            res.status(200).json({ message: "Post request successfull" })
        });
    }
}