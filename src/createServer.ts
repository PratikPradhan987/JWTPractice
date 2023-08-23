import express from 'express';
import { Request, Response, NextFunction } from 'express';

export function createServer() {
    const app = express();
    app.use(express.json());

    app.get("/", (req: Request , res: Response, next: NextFunction) => {
        res.send("Createing Done");
    })

    return app;
}