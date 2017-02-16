var express = require("express");
var app = express();
var cors = require("cors");
var users = require("xe-nodejs-mock")(1000);

//ENABLE CORS MIDDLEWARE
app.use(cors(/*{ //SPECIFIC CONFIGURATION
         origin: ["http://localhost:3002"],
         allowedHeaders: ["Content-Type", "X-Auth"]
}*/));

app.get("/api/users", function(req,res){
    res.send(users); //JSON ARRAY
});

//USE CUSTOM MYAUTH MIDDLEWARE TO RESTRICT ACCESS TO THIS ENTRYPOINT
app.get("/api/users/:userid", require("./myauth") , (req,res)=> {
    const id = parseInt(req.params.userid,10);
    let idx = users.findIndex( u => u.id === id );
    if (idx>=0) {
        res.send(users[idx]); //JSON OBJECT
    } else {
        res.status(404).send(`Not found user with id=${id}`);
    }
});

//ERROR HANDLER MIDDLEWARE
app.use(function errorHandler(err, req, res, next) {
    console.warn("Internal Server ERROR:", err.stack);
    if (process.env.NODE_ENV === "production") delete err.stack;
    res.status(500).send({ error: err });
});

app.listen(3006, ()=>console.log("Express with cors running on :3006/api/users"));