var express = require("express");
var path = require("path");

var app = express();
app.use(express.static(path.join(__dirname,"assets")));
app.get("/", (req,res) => res.sendFile(__dirname + "/assets/page.html"));
app.listen(3002, () => console.log("Serving static with express on :3002"));