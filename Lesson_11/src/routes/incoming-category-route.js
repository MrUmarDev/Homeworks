const { Router } = require("express");
const incomingRouter = Router();
const getFunds = require("../controllers/incoming-controller");
const isAuth = require("../middlewares/isAuth");
incomingRouter.post("/incoming",isAuth, getFunds);
module.exports = incomingRouter;
