const userRouter = require("../routes/users-route");
const workersRouter = require("../routes/workers-route");
const productRouter = require("../routes/product-route");
const categoriesRouter = require("../routes/categories-route");
module.exports = [
  userRouter,
  workersRouter,
  productRouter,
  categoriesRouter
];
