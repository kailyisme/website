const {
  errorDocs
} = require("./constants")
const {
  writeToStdOut,
  writeToStdErr
} = require("./utils");
const {
  NODE_ENV
} = process.env

exports.logEveryEndPoint = (req, res, next) => {
  writeToStdOut(`Requested ${req.method} ${req.url}`);
  next();
};

exports.notFound = (req, res, next) => {
  writeToStdErr(`Not Found EndPoint ${req.method} ${req.url}`);
  if (NODE_ENV === "development") res.status(404).send(`Not Found EndPoint ${req.method} ${req.url}`)
  else res.status(404).sendFile(`${errorDocs}/not_found.html`);
}

exports.serverError = (err, req, res, next) => {
  writeToStdErr(`Server Error at ${req.method} ${req.url} err: ${err}`);
  if (NODE_ENV === "development")
    res.status(500).send(err)
  else res.status(500).sendFile(`${errorDocs}/internal_server_error.html`);
}