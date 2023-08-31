const { fetchOne, fetchAll } = require("../../utils/pg");

const createQuery =
  "insert into services(service_name,price,owner_id) values($1,$2,$3) RETURNING*";
const getQueryAll = "select * from services";
const getOneQuery = "select * from services WHERE service_id = $1";
const removeQuery =
  "UPDATE services SET deleted_at = current_timestamp WHERE service_id = $1 RETURNING*";
const updateQuery =
  "UPDATE services SET service_name = $1,price = $2,updated_at = current_timestamp WHERE id = $3 RETURNING*";

module.exports = {
  createServiceQuery: async (name, price, id) => {
    const data = await fetchOne(createQuery, name, price, id);
    return data;
  },
  getAllServicesQuery: async () => {
    const data = await fetchAll(getQueryAll);
    return data;
  },
  getOneServiceQuery: async (id) => {
    const data = await fetchOne(getOneQuery, id);
    return data;
  },
  removeServiceQuery: async (id) => {
    const data = await fetchOne(removeQuery, id);
    return data;
  },
  updateServiceQuery: async (name, price, id) => {
    const data = await fetchOne(updateQuery, name, price, id);
    return data;
  },
};
