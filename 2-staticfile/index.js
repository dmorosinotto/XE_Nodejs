var http = require("http");
var path = require("path");
var fs = require("fs");

function static(file, res, ct = "text/html") {
    res.writeHead(200,{"Content-Type": ct});
    fs.createReadStream(path.join(__dirname,"assets",file))
        .pipe(res);
}

http.createServer(function(req, res){
    console.log(req.method, req.url);
    if (req.url.indexOf("style.css")>0) {
        static("style.css", res, "text/css");
    } else {
        static("page.html", res);
    }
}).listen(3002, () => console.log("Serving page.html on :3002"));