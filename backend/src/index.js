const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const {serverPort, clientOrigins} = require("./config/env.dev");
const {messagesRouter} = require("./messages/messages.router");

const fs = require('fs');
const https = require('https');

const key = fs.readFileSync('/etc/nginx/server.key');
const cert = fs.readFileSync('/etc/nginx/server.crt');


var corsOptions = {
  origin: clientOrigins,
  optionsSuccessStatus: 200,
  credentials: true
}

const app = express();
app.use(cors(corsOptions));

const keys = {key: key, cert: cert};
const server = https.createServer(keys, app);


const apiRouter = express.Router();

app.use(helmet());
app.use(express.json());


app.use("/api", apiRouter);

apiRouter.use("/messages", messagesRouter);

app.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).send(err.message);
});



 server.listen(serverPort, "0.0.0.0", () =>
  console.log(`API Server listening on port ${serverPort}`)
);
