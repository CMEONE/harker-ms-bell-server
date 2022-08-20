const socket = require("socket.io");

/** @type {SocketIO.Server} */
var io;
async function connect(server) {
  io = socket(server, {
    pingTimeout: 15000, // consider increasing pingTimeout
    pingInterval: 25000,
    origins: [
      "msbell.harker.xyz:443",
      "msbell.harker.xyz:80",
      "harkermsbell.netlify.com:443",
      "harkermsbell.netlify.com:80",
      "localhost:8080",
      "localhost:8081",
    ]
  });
  return io;
}
function get() {
  return io;
}

module.exports = {get, connect};