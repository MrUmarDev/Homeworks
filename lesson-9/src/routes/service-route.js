const { Router } = require("express");
const serviceRouter = Router();
const {
  createService,
  usingService,
  updateService,
  removeService,
} = require("../controllers/service-controller");
const isAuth = require("../middlewares/isAuth");
serviceRouter.post("/service", createService);
serviceRouter.post("/using/service/:id", isAuth, usingService);
serviceRouter.put("/service/:id", updateService);
serviceRouter.delete("/service/:id", removeService);
module.exports = serviceRouter;
