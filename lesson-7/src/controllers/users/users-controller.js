const jwt = require("jsonwebtoken");
const joi = require("joi");
const customError = require("../../utils/customError");
const { createQuery, getQueryAll } = require("./query");
const createUser = async (req, res, next) => {
  try {
    const { username, email, password, balance } = req.body;
    if (!username || !password || !email || !balance) {
      return res.status(400).json({
        message: "Invalid username or password",
      });
    }
    const schema = joi.object({
      username: joi.string().min(3).max(32),
      email: joi.string().email(),
      password: joi.string(),
      balance: joi.number(),
    });
    const { error } = schema.validate({
      username,
      email,
      password,
      balance,
    });
    if (error) {
      throw new customError(error.message, 400);
    }
    const readData = await getQueryAll();
    const findUser = readData.find((user) => user.username == username);
    if (!findUser) {
      const data = await createQuery(username, email, password, balance);
      const token = jwt.sign(
        {
          user_id: data.user_id,
        },
        process.env.jwt_secret_key
      );
      res.cookie("token", token);
      if (data) {
        return res.status(201).json({
          message: "User created successfully",
        });
      }
    } else {
      return res.status(400).json({
        message: "User already exists",
      });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};
const onLogin = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({
        message: "Invalid username or password",
      });
    }
    const schema = joi.object({
      username: joi.string().min(3).max(32),
      password: joi.string(),
    });
    const { error } = schema.validate({
      username,
      password,
    });
    if (error) {
      throw new customError(error.message, 400);
    }
    const readData = await getQueryAll();
    const findUser = readData.find((user) => user.username == username);
    const checkPassword = findUser?.password === password;
    if (findUser && checkPassword) {
      const token = jwt.sign(
        {
          user_id: findUser.user_id,
        },
        process.env.jwt_secret_key
      );
      res.cookie("token", token);
      return res.status(200).json({
        message: "Login successful",
      });
    } else {
      return res.status(400).json({
        message: "username or password incorrect",
      });
    }
  } catch (error) {
    next(error);
  }
};
module.exports = {
  createUser,
  onLogin,
};
