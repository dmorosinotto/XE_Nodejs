//ESTRAE UN ELEMENTO RANDOM DA UN ARRAY
exports.oneOf = function(arr) {
    return arr[parseInt(Math.random()*arr.length,10)];
}

//GENERA STRINGA NUMERICA RANDOM CON N CIFRE
exports.fixed = n => Math.random().toFixed(n).substr(2);

//GENERA UNA DATA BASATA SU N
exports.daten = n => new Date(1900+n%120, n%12, n%28, n%24, n%60, n%60, n%1000);