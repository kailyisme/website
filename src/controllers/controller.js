const { httpDocsDir } = require("../constants");
const { stdout } = require("process");

exports.everyEndPoint = (req, res, next) => {
  stdout.write(req.method + " " + req.url);
  next();
};

exports.root = (req, res) => {
  res.send('this is generated from node');
};
