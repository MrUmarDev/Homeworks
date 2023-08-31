const joi = require("joi");
const dbKnex = require("../../database");
const getFundsAmount = async (req, res, next) => {
  try {
    const { from_date, to_date } = req.body;
    if (!from_date || !to_date)
      return res.status(400).json({
        message: "Invalid from_date or to_date",
      });
    const schema = joi.object({
      from_date: joi.string(),
      to_date: joi.string(),
    });
    const { error } = schema.validate({
      from_date,
      to_date,
    });
    if (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
    const fromDate = new Date(from_date);
    const toDate = new Date(to_date);
    const dataHistory = dbKnex("history")
      .select("created_at", "history_amount", "statusComing")
      .where("created_at", ">=", fromDate)
      .where("created_at", "<=", toDate)
      .orderBy("created_at", "asc")
      .returning("*");
    const data = await dataHistory;
    const incomingFunds = data
      .filter((funds) => funds.statusComing === "incoming")
      .reduce((prevVal, currentVal) => prevVal + currentVal.history_amount, 0);
    const outgoingFunds = data
      .filter((funds) => funds.statusComing === "outgoing")
      .reduce((prevVal, currentVal) => prevVal + currentVal.history_amount, 0);
    return res.json({
      fromDate: fromDate,
      toDate: toDate,
      incomingFunds: incomingFunds,
      outgoingFunds: outgoingFunds,
    });
  } catch (error) {
    next(error);
  }
};
const getOneMonthAmounts = async (req, res, next) => {
  try {
    const now = new Date();
    const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    const data = dbKnex("history")
      .select("created_at", "history_amount", "statusComing")
      .whereBetween("created_at", [firstDayOfMonth, lastDayOfMonth])
      .orderBy("created_at", "asc");
    const result = await data;
    const incomingFunds = result
      .filter((funds) => funds.statusComing === "incoming")
      .reduce((prevVal, currentVal) => prevVal + currentVal.history_amount, 0);
    const outgoingFunds = result
      .filter((funds) => funds.statusComing === "outgoing")
      .reduce((prevVal, currentVal) => prevVal + currentVal.history_amount, 0);
    return res.json({
      message: "monthly transaction",
      incomingFunds: incomingFunds,
      outgoingFunds: outgoingFunds,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = { getFundsAmount, getOneMonthAmounts };
