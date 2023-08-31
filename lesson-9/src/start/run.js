const config = require("../../config");
const run = (app) => {
  app.listen(config.PORT, () => {
    console.log("listening on port " + config.PORT);
  });
};
module.exports = run;
