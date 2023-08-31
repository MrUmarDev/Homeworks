const { Router } = require("express");
const usersRouter = Router();
const {
  register,
  getUsers,
  onLogin,
} = require("../controllers/users-controller");
usersRouter.post("/auth/register", register);
usersRouter.post("/auth/login", onLogin);
usersRouter.get("/users", getUsers);
module.exports = usersRouter;
