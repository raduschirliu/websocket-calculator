require('dotenv').config();

import WebSocket = require('ws');
import math = require('mathjs');

const PORT = process.env.PORT || 8080;
const MAX_LENGTH = process.env.MAX_LENGTH || 50;

const wss = new WebSocket.Server({
  port: PORT as number,
});

wss.on('connection', (ws: WebSocket) => {
  ws.on('message', (data: WebSocket.Data) => {
    const dataJson = JSON.parse(data.toString());
    const expression = dataJson.expression || '';
    let result = '';

    if (expression.length <= MAX_LENGTH) {
      try {
        result = math.evaluate(expression);
      } catch (e) {
        result = 'ERROR';
      }
    } else {
      result = 'ERROR';
    }

    wss.clients.forEach((client: WebSocket) => {
      client.send(
        JSON.stringify({
          timestamp: new Date(),
          expression: expression,
          result,
        })
      );
    });
  });
});
