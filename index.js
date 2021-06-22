const serverApp = require("./src/serverApp");
const http = require("http");

const PORT = 9091;
if (process.env.PORT) PORT = process.env.PORT;

http.createServer(serverApp).listen(PORT, () => {
  console.log(`Listening to port: ${PORT}`);
});
