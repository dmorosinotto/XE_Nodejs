var express = require("express");
var app = express();

app.get("/add", (req, res)=>{
    //console.log(req.query);
    res.send(req.query.a + req.query.b);
});

app.listen(3003, ()=>"Express server running on :3003");