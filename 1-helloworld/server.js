var http = require("http");

http.createServer(function(req, res){
    res.statusCode = 201;
    res.setHeader("Content-Type", "text/plain");
    res.end("<h1>Hello world</h1>");
}).listen(3001);