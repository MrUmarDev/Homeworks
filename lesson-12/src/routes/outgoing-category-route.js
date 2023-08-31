const { Router } = require("express");
const outgoingRouter = Router();
const sendFunds = require("../controllers/outgoing-controller");
const isAuth = require("../middlewares/isAuth");
outgoingRouter.post("/outgoing", isAuth, sendFunds);
module.exports = outgoingRouter;
