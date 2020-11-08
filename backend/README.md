# websocket-calculator backend
Backend for the calculator is built using Node.js and TypeScript.  
It makes use of the `ws` library for the WebSocket Server, as well as `mathjs` to safely parse mathematical expressions.

## Running
Before running the backend, the following optional environment variables can be set:
```bash
# Port to run on. Defaults to 8080
PORT=8080

# Max length of an expression string to evaluate - defaults to 50 characters
MAX_LENGTH=50
```
These can also be loaded from a `.env` file placed in the root directory.  
  
The frontend can then be started in development mode by running:
```bash
npm install
npm run start
```

or built and ran for production using:
```bash
npm run build
node ./dist/index.js
```