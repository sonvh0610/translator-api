import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import translateRouter from './controllers/translate';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
app.use(translateRouter);

const server = http.createServer(app);
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on port: ${PORT}`); // eslint-disable-line
});