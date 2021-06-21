const { httpDocsDir } = require("../constants");
const { appendToLog } = require("../utils");

exports.everyEndPoint = (req, res, next) => {
  console.log(req.method + " " + req.url);
  next();
};

exports.root = (req, res) => {
  res.send('this is generated from node');
};
