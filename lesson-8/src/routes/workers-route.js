const { Router } = require("express");
const createWorker = require("../controllers/workers/workers-controller");
const isAuth = require("../middlewares/isAuth");
const workersRouter = Router();
workersRouter.post("/worker", isAuth, createWorker);

module.exports = workersRouter;
