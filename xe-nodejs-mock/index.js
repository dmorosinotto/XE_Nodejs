var rnd = require("./rnd.js");
const names = ["Andrea","Daniele","Pippo","Pluto","Paperino"];
const surns = ["Dottor","Morosinotto","Verdi","Rossi","Giallo"];
const citys = ["Milano", "Roma", "Venezia", "Padova", "Treviso"];
const addrs = ["Via", "Piazza", "Vicolo"];


function init(n) {
    var arr = [];
    for(let i=0; i<n; i++) {
        arr[i] = {
            id: i,
            name: rnd.oneOf(names) + " " + rnd.oneOf(surns),
            addr: rnd.oneOf(addrs) + " " + rnd.oneOf(citys),
            city: rnd.oneOf(citys),
            age: 10 + i % 50,
            sex: !!(i % 2),
            cap: rnd.fixed(5),
            data: rnd.daten(i)
        }
    }
    console.log("FINISH GENERATE", n);
    return arr;
}

module.exports = exports = init;
