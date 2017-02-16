var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json()); //JSON body parsing for all verbs: POST, PUT, DELETE, ...
//app.use(bodyParser.urlencoded({extended: true})); //Needed only if you use FORM POST

//ROUTES CONFIG using separte express.Router()
app.use("/customer", require("./routes/customer"));

process.on("unhandledRejection", (err) => {
    console.error("Promise REJECTION:", err);
    if (process.env.NODE_ENV === "production") delete err.stack;
    throw new Error(err);
});

app.listen(3005, ()=>console.log("Express rest-api + database running on :3005/customer"));