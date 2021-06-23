const express = require("express");
const {
  everyEndPoint
} = require("./controllers/controller");
const {
  notFound,
  serverError
} = require("./errorHandlers");
const mainRouter = require("./routers/router");

const serverApp = express();

serverApp.use(everyEndPoint);

serverApp.use(mainRouter);

serverApp.use(notFound)
serverApp.use(serverError)

module.exports = serverApp;