var http = require("http");

let server = http.createServer(function(req, res){
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("<h1>Hello world</h1>");
});

const port = process.env.PORT || 3001;
const host = process.env.HOST || "127.0.0.1";
server.listen(port, () => {
    console.log(`Server running at http://${host}:${port}...`);
});