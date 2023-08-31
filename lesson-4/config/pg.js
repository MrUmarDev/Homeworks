const pg = require("pg");

const pool = new pg.Pool({
  user: "jsxyxjvu",
  database: "jsxyxjvu",
  host: "tiny.db.elephantsql.com",
  password: "3aV_LFawAVeCOQ-o45uJjGksQxzy6Cbe",
});

const connectionData = async (SQL, params = []) => {
  const client = await pool.connect();
  try {
    const { rows: data } = await client.query(SQL, params);
    return data;
  } catch (error) {
  } finally {
    client.release();
  }
};
module.exports = connectionData;
