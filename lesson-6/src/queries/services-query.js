const { fetchOne, fetch } = require("../utils/pg");

const createQuery =
  "insert into services(title, description,is_active)values($1,$2,$3) RETURNING*";
const findQueryAll = "select * from services";
const findQueryById = "select * from services where id = $1";
const findQueryByIdRemove =
  "UPDATE services SET deleted_at = current_timestamp WHERE id = $1 RETURNING*";
const findQueryUpdate =
  "UPDATE services SET title = $1,description = $2,updated_at = current_timestamp WHERE id = $3 and deleted_at is null RETURNING*";
module.exports = {
  create: async (title, description, is_active) => {
    const data = await fetchOne(createQuery, title, description, is_active);
    return data;
  },
  serviceOne: async (id) => {
    const data = await fetchOne(findQueryById, id);
    return data;
  },
  serviceAll: async () => {
    const data = await fetch(findQueryAll);
    return data;
  },
  removeService: async (id) => {
    const data = await fetchOne(findQueryByIdRemove, id);
    return data;
  },
  ServiceUpd: async (id, title, description) => {
    const data = await fetchOne(findQueryUpdate, title, description,id);
    return data;
  },
};
