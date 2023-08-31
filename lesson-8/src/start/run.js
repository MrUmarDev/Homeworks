const config = require("../../config/index");
const run = (app) => {
  app.listen(config.PORT, () => {
    console.log(`listening on ${config.PORT}`);
  });
};
module.exports = run;
