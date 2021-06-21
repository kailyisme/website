const serverApp = require("./src/serverApp");
const { appendToLog } = require("./src/utils");

const PORT = 9091;

serverApp.listen(PORT, () => {
  appendToLog(`Listening to port: ${PORT}`);
});
