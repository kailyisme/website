const fs = require("fs/promises");
const { currentLogPath } = require("./constants");

exports.prefixLogEntry = function (str) {
  let nowDate = new Date();
  return nowDate.toISOString() + " - " + str;
};
exports.appendToLog = (str) => {
  fs.appendFile(currentLogPath, this.prefixLogEntry(str) + "\n");
};
