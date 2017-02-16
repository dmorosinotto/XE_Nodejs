var http = require("http");
var fs = require("fs");

http.createServer(function(req, res){
    res.end(fs.readFileSync(__dirname + "/assets/page.html","utf8"));
}).listen(3002, () => console.log("Serving page.html on :3002"));