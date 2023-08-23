import express from 'express';
import { Request, Response, NextFunction } from 'express';
import { UserRoute } from '../MVC/routes/User';

export function createServer() {
    const app = express();
    app.use(express.json());

    app.get("/", (req: Request , res: Response, next: NextFunction) => {
        res.send("Createing Done");
    })
    app.use("/user", UserRoute);

    return app;
}