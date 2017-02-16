require("colour");
var add = require("./sum");
var op = require("./operations");
console.log( add( .1 , op.sub(3.2,3), '' ).rainbow );
