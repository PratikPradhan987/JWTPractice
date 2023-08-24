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
  Npm install express
```
Scripts
```bash
  "dev": "tsnd --respawn --transpile-only main.ts"
```


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
