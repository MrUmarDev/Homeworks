const { Router } = require("express");
const createAdmin = require("../controllers/admin-controller");
const adminRouter = Router();
adminRouter.post("/admin", createAdmin);
module.exports = adminRouter;
