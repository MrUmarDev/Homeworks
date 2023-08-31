const { Router } = require("express");
const {
  getFundsAmount,
  getOneMonthAmounts,
} = require("../controllers/calculate-amount-controller");
const calculateAmountRouter = Router();
calculateAmountRouter.post("/monthly-amount/from-to", getFundsAmount);
calculateAmountRouter.get("/monthly-amount", getOneMonthAmounts);
module.exports = calculateAmountRouter;
