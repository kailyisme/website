const rootDir = process.cwd()

exports.root = async function (req, res) {
  res.sendFile(rootDir + '/index.html');
};
