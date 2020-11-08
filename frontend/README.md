# websocket-calculator frontend
Frontend for the calculator is built using React, TypeScript, and WebSockets.

## Running
To run the frontend, the following environment variables need to be set first:
```bash
REACT_APP_WS_URL=wss://xxxxxx
```
These can also be loaded from a `.env` file placed in the root directory.  
  
The frontend can then be started in development mode by running:
```bash
npm install
npm run start
```

or built for production using:
```bash
npm run build
```