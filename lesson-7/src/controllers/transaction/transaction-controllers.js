const joi = require("joi");
const customError = require("../../utils/customError");
const { getQueryAll } = require("../users/query");
const { getAllServicesQuery } = require("../services/query");
const {
  transactionStart,
  increseBalance,
  decreaseBalance,
  rollbackTransaction,
  commitTransaction,
} = require("./query");
const Transaction = async (req, res, next) => {
  try {
    const { from_id, service_id, quantity } = req.body;
    if (!from_id || !service_id || !quantity) {
      return res.status(400).json({
        message: "from_id and to_id required",
      });
    }
    const schema = joi.object({
      from_id: joi.number(),
      service_id: joi.number(),
      quantity: joi.number(),
    });
    const { error } = schema.validate({
      from_id,
      service_id,
      quantity,
    });
    if (error) {
      throw new customError(error.message, 400);
    }
    await transactionStart();
    const readBaseUsers = await getQueryAll();
    const findUser = readBaseUsers.find((user) => +user.user_id === +from_id);
    if (findUser.balance > 0) {
      await decreaseBalance(quantity, from_id);
    } else {
      return res.status(400).json({
        message: "Not enough balance user",
      });
    }
    const readServices = await getAllServicesQuery();
    const findService = readServices.find(
      (service) => +service.service_id === +service_id
    );
    if (+findService.price < +quantity) {
      return res.status(400).json({
        message: "Invalid quantity",
      });
    }
    await increseBalance(quantity, findService.owner_id);
    await commitTransaction();
    res.json({
      message: "Transaction successfully",
    });
  } catch (error) {
    await rollbackTransaction();
    next(error);
  }
};
module.exports = {
  Transaction,
};
