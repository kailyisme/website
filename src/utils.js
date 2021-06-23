const {
  stdout,
  stderr
} = require("process");

exports.writeToStdOut = (str) => {
  const nowDate = new Date();
  stdout.write(`${nowDate.toISOString()} - ${str}\n`);
}
exports.writeToStdErr = (str) => {
  const nowDate = new Date();
  stderr.write(`${nowDate.toISOString()} - ${str}\n`);
}