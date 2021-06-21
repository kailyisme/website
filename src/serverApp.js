const express = require("express");
const { everyEndPoint } = require("./controllers/controller");
const mainRouter = require("./routers/router");

const serverApp = express();

serverApp.use(everyEndPoint);

serverApp.use(mainRouter);

module.exports = serverApp;
