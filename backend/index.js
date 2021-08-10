const express = require('express');
const app = express();
const http = require('http');
const socketIO = require('socket.io');

// const cors = require('cors');
// app.use(cors()); // Enable CORS

const server = http.Server(app);
const port = process.env.PORT || 9090;
server.listen(port, () => console.log(`The stock server is listening on port - ${port}`));
// WARNING !!! app.listen(3000); will not work here, as it creates a new HTTP server

const io = socketIO(server, {
  cors: {
    origin: "http://localhost:4200",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});

io.on('connection', function(socket) {
  getStockValues(socket);
  setInterval(() => {
    getStockValues(socket);
  }, 5000);
});

const RandomStockObject = require("./random-stock-values");
function getStockValues(socket) {
  socket.emit("appleStocks", RandomStockObject.getAppleStockValues());
  socket.emit("googleStocks", RandomStockObject.getGoogleStockValues());
  socket.emit("microsoftStocks", RandomStockObject.getMicrosoftStockValues());
}
