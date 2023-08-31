const { Pool } = require("pg");
const pool = new Pool({
  connectionString:
    "postgres://jsxyxjvu:3aV_LFawAVeCOQ-o45uJjGksQxzy6Cbe@tiny.db.elephantsql.com/jsxyxjvu",
});
const fetchAll = async (SQL, ...params) => {
  const client = await pool.connect();
  try {
    const { rows } = await client.query(SQL, params);
    return rows;
  } catch (error) {
  } finally {
    client.release();
  }
};
const fetchOne = async (SQL, ...params) => {
  const client = await pool.connect();
  try {
    const {
      rows: [data],
    } = await client.query(SQL, params);
    return data;
  } catch (error) {
  } finally {
    client.release();
  }
};
module.exports = {
  fetchAll,
  fetchOne,
};
