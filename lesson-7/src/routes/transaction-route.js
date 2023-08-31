const { Router } = require("express");
const {
  Transaction,
} = require("../controllers/transaction/transaction-controllers");
const transactionRouter = Router();
transactionRouter.post("/transaction", Transaction);
module.exports = transactionRouter;
