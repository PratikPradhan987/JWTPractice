import { createServer } from "./src/createServer"
const PORT = 3000;

function main() {

    const app = createServer();
    
    app.listen(PORT, () => {
        console.log(`listening on ${PORT} `);
    })
    
}

main()