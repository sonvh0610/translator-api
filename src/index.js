import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import translateRouter from './controllers/translate';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(translateRouter);

const server = http.createServer(app);
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on port: ${PORT}`); // eslint-disable-line
});