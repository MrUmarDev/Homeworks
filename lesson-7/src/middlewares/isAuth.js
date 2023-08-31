const jwt = require("jsonwebtoken");
const isAuth = (req, res, next) => {
  try {
    const data = req.cookies;
    const verifyUser = jwt.verify(data.token, process.env.jwt_secret_key);
    if (verifyUser) {
      req.user_id = verifyUser.user_id;
      return next();
    }
  } catch (error) {
    next(error);
  }
};
module.exports = isAuth;
