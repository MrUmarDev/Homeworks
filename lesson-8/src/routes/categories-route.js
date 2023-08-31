const { Router } = require("express");

const categoriesRouter = Router();
const {
  createCategory,
} = require("../controllers/categories/categories-controller");

categoriesRouter.post("/category", createCategory);

module.exports = categoriesRouter;
