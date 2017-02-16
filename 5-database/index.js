var db = require("./routes/customer/custdb.js");
//db.getAll()
//   .then(rst => console.log(rst.length, "ROWS"))
//   .catch( e => console.error("ERR:" , e));

db.getOne(30119)
    .then( data => console.log("OK", data) )
    .catch(console.error);