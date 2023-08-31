const { fetchOne, fetchAll } = require("../../utils/pg");

const createQuery =
  "insert into workers(fullname,email,password)values($1,$2,$3) RETURNING*";
const getAllQuery = "select * from workers";
module.exports = {
  createWorkerQuery: async (fullname, email, password) => {
    const data = await fetchOne(createQuery, fullname, email, password);
    return data;
  },
  getAllWorkersQuery: async () => {
    const data = await fetchAll(getAllQuery);
    return data;
  },
};
