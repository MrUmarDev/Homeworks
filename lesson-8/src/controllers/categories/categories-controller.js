const joi = require("joi");
const {
  createCategoryQuery,
  getAllCategoriesQuery,
} = require("../categories/query");
const customError = require("../../utils/custom-error");
const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name)
      return res.status(400).json({
        message: "Name is required",
      });
    const schema = joi.object({
      name: joi.string(),
    });
    const { error } = schema.validate({
      name,
    });
    if (error) {
      throw new customError(error.message, 400);
    }
    const readData = await getAllCategoriesQuery();
    const findCategory = readData.find((category) => category.name === name);
    if (!findCategory) {
      const data = await createCategoryQuery(name);
      if (data) {
        return res.status(201).json({
          message: "Success",
        });
      }
    } else {
      return res.status(400).json({
        message: "Category already exists",
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createCategory,
};
