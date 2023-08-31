const userRouter = require("../routes/users-route");
const serviceRouter = require("./service-route");
const transactionRouter = require("./transaction-route");
module.exports = [userRouter, serviceRouter, transactionRouter];
