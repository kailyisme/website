const {
  errorDocs
} = require("./constants")
const {
  stderr
} = require("process");

exports.notFound = (req, res, next) => {
  stderr.write("Not Found EndPoint " + req.method + " " + req.url);
  res.status(404).sendFile(`${errorDocs}/not_found.html`)
}

exports.serverError = (err, req, res, next) => {
  stderr.write("Server Error at " + req.method + " " + req.url + `err: ${err}`);
  res.status(500).sendFile(`${errorDocs}/internal_server_error.html`)
}