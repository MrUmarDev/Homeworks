const { fetchOne } = require("../../utils/pg");

const createQuery =
  "insert into transactions(from_id, service_id, quantity)values($1, $2, $3) RETURNING*";
const increseBalanceQuery =
  "UPDATE users SET balance = balance + $1 where user_id = $2";
const decreaseBalanceQuery =
  "UPDATE users SET balance = balance - $1 where user_id = $2";
const beginTransactionQuery = "BEGIN TRANSACTION";
const rollbackTransactionQuery = "ROLLBACK";
const commitTransactionQuery = "COMMIT";
module.exports = {
  createTransaction: async (from_id, to_id, quantity) => {
    const data = await fetchOne(createQuery, from_id, to_id, quantity);
    return data;
  },
  transactionStart: async () => {
    const data = await fetchOne(beginTransactionQuery);
    return data;
  },
  decreaseBalance: async (quantity, id) => {
    console.log(quantity, id);
    const data = await fetchOne(decreaseBalanceQuery, quantity, id);
    return data;
  },
  increseBalance: async (quantity, id) => {
    const data = await fetchOne(increseBalanceQuery, quantity, id);
    return data;
  },
  rollbackTransaction: async () => {
    const data = await fetchOne(rollbackTransactionQuery);
  },
  commitTransaction: async () => {
    const data = await fetchOne(commitTransactionQuery);
  },
};
