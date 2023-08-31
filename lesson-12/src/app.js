const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const config = require("../config/index");
const routes = require("./routes/index");
const errorHandler = require("./middlewares/error-handler");
app.use(express.json());
app.use(cookieParser());
app.use("/api", routes);
app.use(errorHandler);
app.listen(config.PORT, () => {
  console.log("listening on port " + config.PORT);
});
