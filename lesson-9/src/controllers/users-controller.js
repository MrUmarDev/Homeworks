const jwt = require("jsonwebtoken");
const dbKnex = require("../database/index");
const config = require("../../config");
const register = async (req, res, next) => {
  const { username, first_name, last_name, country, balance, password } =
    req.body;
  try {
    if (!username || !first_name || !last_name || !country || !password) {
      return res.status(400).json({
        message: "username,first_name,last_name,country  are required",
      });
    }
    const readBase = await dbKnex("users");
    const findUser = readBase.find((user) => user.username === username);
    if (!findUser) {
      const [addUser] = await dbKnex("users")
        .insert({
          username,
          first_name,
          last_name,
          password,
          country,
          balance,
        })
        .returning("*");
      if (addUser) {
        const token = jwt.sign(
          { user_id: addUser.user_id },
          config.jwt_secret_key,
          {
            expiresIn: "300h",
          }
        );
        res.cookie("token", token);
        res.status(201).json({
          message: "User added successfully",
        });
      }
    } else {
      return res.status(403).json({
        message: "Username already in use",
      });
    }
  } catch (error) {
    next(error);
  }
};
const onLogin = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      console.log(!username);
      return res.status(400).json({
        message: "username,password are required",
      });
    }
    const readBase = await dbKnex("users");
    const findUser = readBase.find((user) => user.username === username);
    const checkPassword = findUser.password === password;
    if (findUser && checkPassword) {
      const token = jwt.sign(
        { user_id: findUser.user_id },
        config.jwt_secret_key,
        {
          expiresIn: "300h",
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
const getUsers = async (req, res, next) => {
  try {
    const data = await dbKnex("users");
    if (data) {
      return res.json({
        message: "Success",
        data,
      });
    } else {
      return res.status(404).json({
        message: "users not found",
      });
    }
  } catch (error) {
    next(error);
  }
};
module.exports = {
  register,
  onLogin,
  getUsers,
};
