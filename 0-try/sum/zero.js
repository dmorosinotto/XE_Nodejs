const per = require("../operations").mul;
const THE_MEANING_OF_LIFE = per(42, parseInt(process.env.ZERO||0));
module.exports = exports = THE_MEANING_OF_LIFE;