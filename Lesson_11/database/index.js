const { development } = require("../knexfile");
const knex = require("knex");
const dbKnex = knex(development);
module.exports = dbKnex;
