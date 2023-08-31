const { fetchOne, fetchAll } = require("../../utils/pg");

const createQuery =
  "insert into products(name,kg,count,buy_price, total_sumBuy,category_id)values($1,$2,$3,$4,$5,$6) RETURNING*";
const getAllQuery = "select * from products";
const updateQuery =
  "UPDATE products SET count = count + $1,kg = kg + $2,total_sumBuy = total_sumBuy + $3 WHERE product_id = $4 RETURNING*";
const updatedProductQuerySell =
  "UPDATE products SET count = count + $1,kg = kg + $2,sell_price = $3, total_sumsell = total_sumsell + $4 WHERE product_id = $5 RETURNING*";
module.exports = {
  createProductQuery: async (
    name,
    kg,
    count,
    buy_price,
    total_sumBuy,
    category_id
  ) => {
    const data = await fetchOne(
      createQuery,
      name,
      kg,
      count,
      buy_price,
      total_sumBuy,
      category_id
    );
    return data;
  },
  getAllCategoriesQuery: async () => {
    const data = await fetchAll(getAllQuery);
    return data;
  },
  updateProductQuery: async (kg, count, total_sumBuy, id) => {
    const data = await fetchOne(updateQuery, count, kg, total_sumBuy, id);
    return data;
  },
  updateProductQuerySell: async (kg, count, sell_price, total_sumSell, id) => {
    const data = await fetchOne(
      updatedProductQuerySell,
      count,
      kg,
      sell_price,
      total_sumSell,
      id
    );
    return data;
  },
};
