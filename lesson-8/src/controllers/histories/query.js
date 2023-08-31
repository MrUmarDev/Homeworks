const { fetchOne } = require("../../utils/pg");

const createQuery =
  "insert into history(worker_id,product_id,kg,count,sell_price,buy_price)values($1,$2,$3,$4,$5,$6) RETURNING*";

module.exports = {
  createHistoryQuery: async (
    worker_id,
    product_id,
    kg,
    count,
    buy_price,
    sell_price
  ) => {
    console.log(buy_price);
    const data = await fetchOne(
      createQuery,
      worker_id,
      product_id,
      kg,
      count,
      sell_price,
      buy_price
    );
    return data;
  },
};
