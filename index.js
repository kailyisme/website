const serverApp = require("./src/serverApp");

const PORT = process.env.NODE_ENV === "production" ? 443 : 8080;

serverApp.listen(PORT, () => {
  console.log(`Listening to port: ${PORT}`);
});
