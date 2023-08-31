require("dotenv/config");
const { env } = process;
const config = {
  PORT: env.PORT || 8080,
  jwt_secret_key: env.jwt_secret_key,
};
module.exports = config;
