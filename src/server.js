import express from 'express';
import config from './config/config';

const server = express();
const data = 'Hello World';

server.get(config.server.root, (request, response) => {
  response.send({ data });
});

server.listen(config.server.port, () => {
  console.log(`Listening at port ${config.server.port}`);
});

export default server;
