var express = require("express");
var app = express();

app.get("/add", (req, res)=>{
    if (isNaN(req.query.a) || isNaN(req.query.b)) {
        res.status(400) //BAD REQUEST
            .end("Invalid or missing querystring params a,b number!");
    } else { 
        res.send( { add: parseFloat(req.query.a) + parseFloat(req.query.b) } ) //RETURN JSON
    }
});

app.listen(3003, ()=>console.log("Express server running on :3003"));