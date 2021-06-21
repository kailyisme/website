const serverApp = require("./src/serverApp");
const { appendToLog } = require("./src/utils");

const PORT = 9091;
if (process.env.PORT) PORT = process.env.PORT;

serverApp.listen(PORT, () => {
  appendToLog(`Listening to port: ${PORT}`);
});
