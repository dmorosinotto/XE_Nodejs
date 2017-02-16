var express = require("express");
var app = express();

app.get("/api/users", function(req,res){
    res.send(require("./mock")); //JSON ARRAY
});

app.get("/api/users/:userid", (req,res)=> {
    const id = parseInt(req.params.userid,10);
    
    let arr = require("./mock");
    let idx = arr.findIndex( u => u.id === id );
    if (idx>=0) {
        res.send(arr[idx]); //JSON OBJECT
    } else {
        res.status(404).send(`Not found user with id=${id}`);
    }
});

app.listen(3004, ()=>console.log("Express rest-api running on :3004/api/users"));