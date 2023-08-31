const errorHandler = require("../middlewares/error-handler");
const routes = require("../routes/index");
const fileUpload = require("express-fileupload");
const modules = (app, express) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(fileUpload());
  app.use(express.static(process.cwd() + "/uploads"));
  app.use("/api", routes);
  app.use(errorHandler);
};
module.exports = modules;
