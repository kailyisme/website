const {
  httpDocsDir
} = require("../constants");

exports.root = (req, res) => {
  res.send('this is running on Node');
};

exports.github = (req, res) => {
  res.redirect(303, "https://github.com/kailyisme");
};
exports.linkedin = (req, res) => {
  res.redirect(303, "https://www.linkedin.com/in/kailyisme/");
};