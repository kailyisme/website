const serverApp = require("./src/serverApp");
const http = require("http");
const { writeToStdOut } = require("./src/utils");

const PORT = 9091;
if (process.env.PORT) PORT = process.env.PORT;

http.createServer(serverApp).listen(PORT, () => {
  writeToStdOut(`Listening to port: ${PORT}`);
});