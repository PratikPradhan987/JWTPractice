# JWTPractice
Using express and typescript 


## Steps on Starting the project 

Using typescript, express 

To run tests, run the following command

Initialise the project 
```bash
  npm  init -y
```
Dev-dependencies
```bash
  npm install -D typescript ts-node-dev @types/express @types/node @types/cookie @types/jsonwebtoken
```
dependencies
```bash
  Npm install express jsonwebtoken cookie
```
Scripts
```bash
  "dev": "tsnd --respawn --transpile-only main.ts"
```

## Adding a docker images for mongo 
install docker before 
```bash
  sudo apt install docker.io
```

```bash
  docker pull mongo:latest
```
```bash
  docker run --name ("mongo_test") -p 27017:27017 -d mongo
```

```bash
  docker exec -it ("mopngo-test") bash
```

## File Structure

![App Screenshot](https://github.com/PratikPradhan987/JWTPractice/blob/main/GithubFiles/Screenshots/File-Structure.png)

## Breaking code into small files

CreateServver.ts

```javascript
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
```
main.ts
```javascript

import { createServer } from "./utils/createServer"
const PORT = 3000;

(function main() {

    const app = createServer();
    
    app.listen(PORT, () => {
        console.log(`listening on ${PORT} `);
    })
    
})();

// main()
```

Creating Routes
```javascript
import express, { Response, response } from "express";
const router = express.Router();
import cookie, { serialize } from "cookie";

import { DashBoard, Jtoken } from "../controllers/User";

router.get("/dashboard", DashBoard);

export { router as UserRoute}
```

Creating Controllers
```javascript
import { Request, Response } from "express";

export const DashBoard = (req: Request , res: Response ) => {
    return res.send("DashBoard Done");
}
```
