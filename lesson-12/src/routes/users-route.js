const { Router } = require("express");
const usersRouter = Router();
const { register, onLogin } = require("../controllers/users-controller");
usersRouter.post("/auth/register", register);
usersRouter.post("/auth/login", onLogin);
module.exports = usersRouter;
