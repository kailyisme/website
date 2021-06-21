const serverApp = require("./src/serverApp");
const { appendToLog } = require("./src/utils");
const http = require("http");

const PORT = 9091;
if (process.env.PORT) PORT = process.env.PORT;

http.createServer(serverApp).listen(PORT, () => {
  appendToLog(`Listening to port: ${PORT}`);
});
