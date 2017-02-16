module.exports = (...args) => 
    args.reduce( (s,i)=>s+i, require("./zero") );