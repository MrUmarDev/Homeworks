const { fetchOne, fetchAll } = require("../../utils/pg");

const createQuery = "insert into categories(name)values($1) RETURNING*";
const getAllCategories = "select * from categories";
module.exports = {
  createCategoryQuery: async (name) => {
    const data = await fetchOne(createQuery, name);
    return data;
  },
  getAllCategoriesQuery: async () => {
    const data = await fetchAll(getAllCategories);
    return data;
  },
};
