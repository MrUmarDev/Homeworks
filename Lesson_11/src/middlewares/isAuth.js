const jwt = require("jsonwebtoken");
const config = require("../../config");
const isAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (token) {
      const {user_id} = jwt.verify(token, config.jwt_secret_key);
      req.user_id = user_id;
      next();
    }
  } catch (error) {
    next(error);
  }
};
module.exports = isAuth;
