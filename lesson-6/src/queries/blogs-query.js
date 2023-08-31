const { fetchOne, fetch } = require("../utils/pg");

const createQuery =
  "insert into blogs(title, description,is_active)values($1,$2,$3) RETURNING*";
const findQueryAll = "select * from blogs";
const findQueryById = "select * from blogs where id = $1";
const findQueryByIdRemove =
  "UPDATE blogs SET deleted_at = current_timestamp WHERE id = $1 RETURNING*";
const findQueryUpdate =
  "UPDATE blogs SET title = $1,description = $2,updated_at = current_timestamp WHERE id = $3 and deleted_at is null RETURNING*";
module.exports = {
  create: async (title, description, is_active) => {
    const data = await fetchOne(createQuery, title, description, is_active);
    return data;
  },
  blogOne: async (id) => {
    const data = await fetchOne(findQueryById, id);
    return data;
  },
  blogAll: async () => {
    const data = await fetch(findQueryAll);
    return data;
  },
  removeBlog: async (id) => {
    const data = await fetchOne(findQueryByIdRemove, id);
    return data;
  },
  blogUpd: async (id, title, description) => {
    const data = await fetchOne(findQueryUpdate, title, description,id);
    return data;
  },
};
