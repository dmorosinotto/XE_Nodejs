var express = require("express");
var app = express();

app.get("/add", (req, res)=>{
    var a = parseInt(req.query.a,10);
    var b = parseInt(req.query.b,10);
    res.end("ADD=" + (a+b));
});

app.listen(3003, ()=>"Express server running on :3003");