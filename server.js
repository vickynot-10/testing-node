const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Hello from Dockhand new regsi", port }));
});

server.listen(port, function () {
  console.log(`Listening on ${port} hiii`);
});
