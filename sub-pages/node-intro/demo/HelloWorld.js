var http = require('http');

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  console.log("request received.");
  response.end("<h1>Hello World</h1>");
});

server.listen(8000);

console.log("Server running at http://127.0.0.1:8000/");

// closure example
//var init = function () {var numbers = [ 1, 2, 4, 8, 16, 32 ];return {addEntry: function () {numbers.push( Math.pow(2, numbers.length) );},get: function (n) {if( n < numbers.length ) {return numbers[n];} else {console.err("Nice try!");}}};};
