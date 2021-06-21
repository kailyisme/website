const serverApp = require("./src/serverApp");

const PORT = 80;

serverApp.listen(PORT, ()=>{console.log(`Listening to port: ${PORT}`)})