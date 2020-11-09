# websocket-calculator frontend
Frontend for the calculator is built using React, TypeScript, and WebSockets.

## Dependencies
Requires Node.js in order to run and build (has only been tested on Node.js v14.12.0).  

## Running
To run the frontend, the following environment variables need to be set first:
```bash
REACT_APP_WS_URL=wss://xxxxxx
```
These can also be loaded from a `.env` file placed in the this directory.  
  
The frontend can then be started in development mode by running:
```bash
npm install
npm run start
```

or built for production using:
```bash
npm run build
```