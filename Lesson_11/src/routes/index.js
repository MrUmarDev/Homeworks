const usersRouter = require("./users-route");
const incomingRouter = require("./incoming-category-route");
const outgoingRouter = require("./outgoing-category-route");
const calculateAmountRouter = require("./calculate-amount");
module.exports = [
  usersRouter,
  incomingRouter,
  outgoingRouter,
  calculateAmountRouter,
];
