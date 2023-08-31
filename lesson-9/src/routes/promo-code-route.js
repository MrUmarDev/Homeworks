const { Router } = require("express");
const promocodeRouter = Router();
const { createPromo } = require("../controllers/promo-code-controller");
promocodeRouter.post("/promo", createPromo);
module.exports = promocodeRouter;
