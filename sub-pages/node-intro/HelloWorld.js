var http = require('http');

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  console.log("request received.");
  response.end("<h1>Hello World</h1>");
});

server.listen(8000);

console.log("Server running at http://127.0.0.1:8000/");
