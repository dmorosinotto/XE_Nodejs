var http = require("http");
var path = require("path");
var fs = require("fs");


http.createServer(function(req, res){
    fs.createReadStream(path.join(__dirname,"assets","page.html"))
        .pipe(res);
}).listen(3002, () => console.log("Serving page.html on :3002"));