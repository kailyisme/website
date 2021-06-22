const { httpDocsDir } = require("../constants");
const { stdout } = require("process");

exports.everyEndPoint = (req, res, next) => {
  stdout.write(req.method + " " + req.url);
  next();
};

exports.root = (req, res) => {
  res.send('this is running on Node');
};

exports.github = (req, res) => {
  res.redirect(301, "https://github.com/kailyisme");
};
exports.linkedin = (req, res) => {
  res.redirect(301, "https://www.linkedin.com/in/kailyisme/");
};
