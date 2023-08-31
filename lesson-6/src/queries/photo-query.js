const { fetchOne } = require("../utils/pg");

const createQuery = "insert into photos (url)values($1)RETURNING*";
const findQuery = "select * from photos";

module.exports = {
  create: async (photo) => {
    const data = await fetchOne(createQuery, photo);
    return data;
  },
};
