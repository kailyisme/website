const express = require("express");
const {
  logEveryEndPoint,
  notFound,
  serverError
} = require("./errorHandlers");
const mainRouter = require("./routers/router");

const serverApp = express();

serverApp.use(logEveryEndPoint);

serverApp.use(mainRouter);

serverApp.use(notFound);
serverApp.use(serverError);

module.exports = serverApp;