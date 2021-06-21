const express = require("express");
const mainRouter = require("./routers/router");

const serverApp = express();

serverApp.use(mainRouter);

module.exports = serverApp;
