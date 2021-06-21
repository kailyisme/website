const fs = require("fs");

exports.rootDir = process.cwd();
const makeLogsDir = () => {
  if (!fs.existsSync(this.rootDir + "/logs"))
    fs.mkdirSync(this.rootDir + "/logs");
  return this.rootDir + "/logs";
};
exports.logsDir = makeLogsDir();
exports.httpDocsDir = this.rootDir + "/httpdocs";
exports.logFileName = Date.now() + ".log";
exports.currentLogPath = this.logsDir + "/" + this.logFileName;
