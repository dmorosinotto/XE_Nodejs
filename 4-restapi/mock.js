console.time("INIT MOCK USERS");
var users = require("xe-nodejs-mock")(1000);
console.timeEnd("INIT MOCK USERS");

module.exports = exports = users;