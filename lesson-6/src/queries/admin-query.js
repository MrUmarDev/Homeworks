const { fetch, fetchOne } = require("../utils/pg");
const createQuery =
  "insert into admins(username,email,password) values($1,$2,$3) RETURNING*";
const findQuery = "select * from admins";

module.exports = {
  create: async (username, email, password) => {
    const data = await fetchOne(createQuery, username, email, password);
    return data;
  },
  getData: async() => {
    const data = await fetch(findQuery)
    return data;
  }
};
