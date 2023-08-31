const errorHandler = require("../middlewares/error-handler");
const cookieParser = require("cookie-parser");
const routes = require("../routes/index");
const modules = (app, express) => {
  app.use(express.json());
  app.use(express.urlencoded({ extends: true }));
  app.use(cookieParser());
  app.use("/api", routes);
  app.use(errorHandler);
};
module.exports = modules;
