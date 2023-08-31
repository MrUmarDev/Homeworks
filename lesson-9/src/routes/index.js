const usersRouter = require("../routes/users-route");
const companyRoute = require("../routes/company-route");
const serviceRouter = require("../routes/service-route");
const promocodeRouter = require("./promo-code-route");
module.exports = [usersRouter, companyRoute, serviceRouter, promocodeRouter];
