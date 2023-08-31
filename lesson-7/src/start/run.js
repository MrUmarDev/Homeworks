const config = require("../../config/index");
const run = (app) => {
  app.listen(config.PORT, () => {
    console.log("listening on port 4000");
  });
};
module.exports = run;
