const { create, getData } = require("../queries/admin-query");
const joi = require("joi");
const customError = require("../utils/customError");
const createAdmin = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({
        message: "Username,email,password is required!!",
      });
    }
    const schema = joi.object({
      username: joi.string().min(3).max(32).required(),
      email: joi.string().email(),
      password: joi.string(),
    });
    const { error } = schema.validate({
      username,
      email,
      password,
    });
    if (error) {
      throw new customError(error.message, 400);
    }
    const readData = await getData();
    const findUser = readData.find((user) => user.username === username);
    if (!findUser) {
      const data = await create(username, email, password);
      if (data) {
        return res.status(201).json({
          message: "Successfully created",
        });
      }
    } else {
      return res.status(400).json({
        message: "Username already exists",
      });
    }
  } catch (error) {
    next(error);
  }
};
module.exports = createAdmin;
