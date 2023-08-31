const { Router } = require("express");
const {
  createService,
  getOneService,
  getAllServices,
  removeService,
} = require("../controllers/services/service-controller");
const isAuth = require("../middlewares/isAuth");
const serviceRouter = Router();
serviceRouter.post("/service", isAuth, createService);
serviceRouter.get("/services", getAllServices);
serviceRouter.get("/services/:id", getOneService);
serviceRouter.delete("/services/:id", removeService);
module.exports = serviceRouter;
