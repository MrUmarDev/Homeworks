const { fetchOne, fetchAll } = require("../../utils/pg");

const createUserQuery =
  "insert into users(username, email, password,balance) values($1, $2, $3, $4) RETURNING*";
const getUserQuery = "select * from users";
module.exports = {
  createQuery: async (username, email, password, balance) => {
    const data = await fetchOne(
      createUserQuery,
      username,
      email,
      password,
      balance
    );
    return data;
  },
  getQueryAll: async () => {
    const data = await fetchAll(getUserQuery);
    return data;
  },
};
