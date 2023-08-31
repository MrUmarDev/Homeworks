const joi = require("joi");
const customError = require("../../utils/custom-error");
const {
  createProductQuery,
  getAllCategoriesQuery,
  updateProductQuery,
  createProductQuerySell,
  updateProductQuerySell,
} = require("./query");
const { createHistoryQuery } = require("../histories/query");
const URL = require("url");
const createProduct = async (req, res, next) => {
  try {
    const workerId = req.user_id;
    const { name, kg, count, buy_price } = req.body;
    const url = URL.parse(req.url, true);
    const query = url;
    let categoryId = null;
    for (let val in query.query) {
      categoryId = query.query[val];
    }
    if (!name || !kg || !count || !buy_price)
      return res.status(400).json({
        message: "Invalid name or buy_price",
      });
    const schema = joi.object({
      name: joi.string(),
      kg: joi.number(),
      count: joi.number(),
      buy_price: joi.number(),
    });
    const { error } = schema.validate({
      name,
      kg,
      count,
      buy_price,
    });
    if (error) {
      throw new customError(error.message, 400);
    }
    const readData = await getAllCategoriesQuery();
    const findProduct = readData.find(
      (product) => product.name === name && +product.buy_price === +buy_price
    );
    if (!findProduct) {
      const data = await createProductQuery(
        name,
        kg,
        count,
        buy_price,
        (total_sumBuy = +buy_price * +count),
        +categoryId
      );
      if (data) {
        const buy_price = data?.buy_price || 0;
        await createHistoryQuery(
          workerId,
          data.product_id,
          kg,
          count,
          buy_price,
          (sell_price = 0)
        );
        return res.status(201).json({
          message: "Product successfully created",
        });
      }
    } else {
      const data = await updateProductQuery(
        kg,
        count,
        +buy_price * +count,
        findProduct.product_id
      );
      const sell_priceH = findProduct?.sell_price || 0;
      const buy_priceH = findProduct?.buy_price || 0;
      await createHistoryQuery(
        workerId,
        findProduct.product_id,
        kg,
        count,
        sell_priceH,
        buy_priceH
      );
      if (data) {
        return res.status(201).json({
          message: "Product successfully updated",
        });
      }
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};
const sellProduct = async (req, res, next) => {
  try {
    const workerId = req.user_id;
    const { name, kg, count, sell_price } = req.body;
    const url = URL.parse(req.url, true);
    const query = url;
    let categoryId = null;
    for (let val in query.query) {
      categoryId = query.query[val];
    }
    if (!name || !kg || !count || !sell_price)
      return res.status(400).json({
        message: "Invalid name or sell_price",
      });
    const schema = joi.object({
      name: joi.string(),
      kg: joi.number(),
      count: joi.number(),
      sell_price: joi.number(),
    });
    const { error } = schema.validate({
      name,
      kg,
      count,
      sell_price,
    });
    if (error) {
      throw new customError(error.message, 400);
    }
    const readData = await getAllCategoriesQuery();
    const findProduct = readData.find((product) => product.name === name);
    const data = await updateProductQuerySell(
      kg,
      count,
      sell_price,
      +sell_price * +count,
      findProduct.product_id
    );
    const sell_priceH = findProduct?.sell_price || 0;
    await createHistoryQuery(
      workerId,
      findProduct.product_id,
      kg,
      count,
      (buy_price = 0),
      sell_priceH
    );
    if (data) {
      return res.status(201).json({
        message: "Product successfully updated",
      });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};
module.exports = {
  createProduct,
  sellProduct,
};
