require("dotenv/config");
const { env } = process;
const config = {
  PORT: env.PORT || 8000,
  db_connection:
    "postgres://jsxyxjvu:3aV_LFawAVeCOQ-o45uJjGksQxzy6Cbe@tiny.db.elephantsql.com/jsxyxjvu",
  jwt_secret_key: "^^%%^^&&(^*&**(&",
};
module.exports = config;