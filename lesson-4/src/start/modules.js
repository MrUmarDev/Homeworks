const routes = require("../routes/index");
const modules = (app, express) => {
  app.use(express.json());
  app.use("/api", routes);
};
module.exports = modules;
