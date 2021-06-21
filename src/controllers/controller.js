const { httpDocsDir } = require("../constants");
const { appendToLog } = require("../utils");

exports.everyEndPoint = (req, res, next) => {
  appendToLog(req.method + " " + req.url);
  next();
};

exports.root = (req, res) => {
  res.sendFile(httpDocsDir + "/index.html");
};
