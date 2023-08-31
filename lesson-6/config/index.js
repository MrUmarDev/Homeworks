require("dotenv/config");
const { env } = process;
const config = {
  PORT: env.PORT || 8000,
};
module.exports = config;
