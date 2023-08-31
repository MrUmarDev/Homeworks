const { Router } = require("express");
const {
  createService,
  getOneService,
  getAllServices,
  removeService,
  updateService
} = require("../controllers/services-controller");
const servicesRouter = Router();
servicesRouter.post("/service", createService);
servicesRouter.get("/service/:id", getOneService);
servicesRouter.get("/services", getAllServices);
servicesRouter.delete("/service/:id", removeService);
servicesRouter.put("/service/:id", updateService);
module.exports = servicesRouter;
