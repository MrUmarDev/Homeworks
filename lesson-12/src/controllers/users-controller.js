const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dbKnex = require("../../database/index");
const joi = require("joi");
const config = require("../../config");
const register = async (req, res, next) => {
  try {
    const { username, password, balance } = req.body;
    if (username && password) {
      const schema = joi.object({
        username: joi.string().min(3).max(32).alphanum(),
        password: joi.string().min(3).max(32),
        balance: joi.number(),
      });
      const { error } = schema.validate({
        username: username.trim(),
        password: password.trim(),
        balance,
      });
      if (error) {
        next(error);
      }
    } else {
      return res.status(403).json({
        message: "Invalid username or password",
      });
    }
    const readBase = await dbKnex("users");
    const findUser = readBase.find((user) => user.username === username);
    if (!findUser) {
      const hashPassword = await bcrypt.hash(password, 12);
      const data = await dbKnex("users")
        .insert({
          username,
          password: hashPassword,
          balance,
        })
        .returning("*");
      if (data) {
        const token = jwt.sign(
          {
            user_id: data.user_id,
          },
          config.jwt_secret_key,
          {
            expiresIn: "500h",
          }
        );
        res.cookie("token", token);
        return res.status(201).json({
          message: "Success",
        });
      }
    } else {
      return res.status(403).json({
        message: "Username already exists",
      });
    }
  } catch (error) {
    next(error);
  }
};
const onLogin = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    console.log(username, password);
    if (username && password) {
      const schema = joi.object({
        username: joi.string().min(3).max(32).alphanum(),
        password: joi.string().min(3).max(32),
      });
      const { error } = schema.validate({
        username: username.trim(),
        password: password.trim(),
      });
      if (error) {
        next(error);
      }
    } else {
      return res.status(403).json({
        message: "Invalid username or password",
      });
    }
    const readBase = await dbKnex("users");
    const findUser = readBase.find((user) => user.username === username);
    const checkPassword = await bcrypt.compare(password, findUser.password);
    if (findUser && checkPassword) {
      const token = jwt.sign(
        {
          user_id: findUser.user_id,
        },
        config.jwt_secret_key,
        {
          expiresIn: "400h",
        }
      );
      res.cookie("token", token);
      return res.json({
        message: "Login Successfully",
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  onLogin,
};
