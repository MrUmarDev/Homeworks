const { Router } = require("express");
const {
  createUser,
  onLogin,
} = require("../controllers/users/users-controller");
const userRouter = Router();
userRouter.post("/user", createUser);
userRouter.post("/login", onLogin);
module.exports = userRouter;
