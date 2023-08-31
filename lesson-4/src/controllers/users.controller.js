const connectionData = require("../../config/pg");
const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({
        message: "username and email are required",
      });
    }
    const readDataBase = await connectionData("SELECT * FROM USERS");
    const findUser = readDataBase.find((user) => user.username === username);
    if (!findUser) {
      const [data] = await connectionData(
        "INSERT INTO USERS(username, email, password) VALUES($1,$2,$3) RETURNING *",
        [username, email, password]
      );
      if (!data) {
        return res.status(500).json({
          message: "Database error",
        });
      }
    } else {
      return res.status(400).json({
        message: "Username already exists",
      });
    }
    res.status(201).json({
      message: "Successfully created",
    });
  } catch (error) {
    res.status(500).json({
      message: "INTERNAL SERVER ERROR",
    });
  }
};
const getUsersAll = async (req, res) => {
  try {
    const data = await connectionData("SELECT * FROM USERS");
    if (!data) {
      return res.status(500).json({
        message: "INTERNAL SERVER ERROR",
      });
    }
    res.json({
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "INTERNAL SERVER ERROR",
    });
  }
};

const getOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await connectionData("SELECT * FROM USERS WHERE id = $1", [
      id,
    ]);
    if (!data) {
      res.status(404).json({
        message: "User not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "ITERNAL SERVER ERROR",
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const [data] = await connectionData(
      "UPDATE users SET deleted_at = current_timestamp WHERE id = $1 RETURNING *",
      [id]
    );
    if (data) {
      res.status(200).json({
        message: "Successfully deleted user",
      });
    } else {
      res.status(404).json({
        message: "User not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "INTERNAL SERVER ERROR",
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const { username, email } = req.body;
    const { id } = req.params;
    const [data] = await connectionData(
      "UPDATE users SET username = $1, email = $2, updated_at = current_timestamp WHERE id = $3 and deleted_at IS NULL RETURNING *",
      [username, email, id]
    );
    if (!data) {
      return res.status(404).json({
        message: "user not found",
      });
    }
    res.status(200).json({
      message: "Successfully updated user",
    });
  } catch (error) {
    res.status(500).json({
      message: "INTERNAL SERVER ERROR",
    });
  }
};

module.exports = {
  createUser,
  getOneUser,
  getUsersAll,
  deleteUser,
  updateUser,
};
