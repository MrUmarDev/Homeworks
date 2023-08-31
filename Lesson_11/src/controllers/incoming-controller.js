const joi = require("joi");
const dbKnex = require("../../database");
const getFunds = async (req, res, next) => {
  try {
    const { title, amount } = req.body;
    if (!title) {
      return res.status(400).json({
        message: "Invalid title",
      });
    }
    const schema = joi.object({
      title: joi.string().min(3).max(64),
      amount: joi.number(),
    });
    const { error } = schema.validate({
      title,
      amount,
    });
    if (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
    await dbKnex("history").insert({
      history_title: title,
      history_amount: amount,
      statusComing: "incoming",
      user_id: req.user_id,
    });
    const [data] = await dbKnex("incoming_category")
      .insert({ title, amount })
      .returning("*");
    if (data) {
      const readUsers = await dbKnex("users");
      const findUser = readUsers.find((user) => user.user_id === req.user_id);
      const userBalance = +findUser.balance + +data.amount;
      await dbKnex("users").update({ balance: userBalance });
      return res.json({
        message: "success",
      });
    }
  } catch (error) {
    next(error);
  }
};
module.exports = getFunds;
