const serverApp = require("./src/serverApp");
const http = require("http");
const { stdout } = require("process");

const PORT = 9091;
if (process.env.PORT) PORT = process.env.PORT;

http.createServer(serverApp).listen(PORT, () => {
  stdout.write(`Listening to port: ${PORT}`);
});
