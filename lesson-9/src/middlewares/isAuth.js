const jwt = require("jsonwebtoken");
const config = require("../../config");
const isAuth = (req, res, next) => {
  try {
    const data = req.cookies;
    const token = data?.token;
    if (token) {
      const { user_id } = jwt.verify(token, config.jwt_secret_key);
      req.user_id = user_id;
      next();
    } else {
      return res.status(403).json({
        message: "Access denied",
      });
    }
  } catch (error) {
    next(error);
  }
};
module.exports = isAuth;
