const fs = require("fs/promises");

exports.root = async function (req, res) {
  const indexPage = await fs.readFile("./index.html");
  res.send(indexPage);
};
