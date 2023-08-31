const { Router } = require("express");
const userRouter = Router();
const {
  createUser,
  getOneUser,
  getUsersAll,
  deleteUser,
  updateUser,
} = require("../controllers/users.controller");
userRouter.get("/users", getUsersAll);
userRouter.get("/users/:id", getOneUser);
userRouter.post("/user", createUser);
userRouter.delete("/users/:id", deleteUser);
userRouter.put("/users/:id", updateUser);
module.exports = {
  userRouter,
};
