const errorHandler = require("../middlewares/error-handler");
const routes = require("../routes/index");
const cookieParser = require("cookie-parser");
const modules = (app, express) => {
  app.use(express.json());
  app.use(cookieParser());
  app.use("/api", routes);
  app.use(errorHandler);
};
module.exports = modules;
