const knex = require("knex");
const { development } = require("../utils/knexfile");
const dbKnex = knex(development);
module.exports = dbKnex;
