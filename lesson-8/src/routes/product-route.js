const { Router } = require("express");
const productRouter = Router();
const isAuth = require("../middlewares/isAuth");
const {
  createProduct,
  sellProduct,
} = require("../controllers/product/product-controller");
productRouter.post("/buy/product", isAuth, createProduct);
productRouter.post("/sell/product", isAuth, sellProduct);
module.exports = productRouter;
