const expiresDate = require("../utils/expires-date");
const dbKnex = require("../database");
const { v4: uuid } = require("uuid");
const createPromo = async (req, res, next) => {
  try {
    const { cashback, status, service_id, user_id } = req.body;
    if (!cashback != 0 || !status || !user_id || !service_id) {
      return res.status(400).json({
        message: "Invalid cashback or status",
      });
    }
    const promo = uuid().slice(0, 6);
    const data = await dbKnex("promo_codes")
      .insert({
        promo_code: promo,
        cashback,
        status,
        user_id,
        service_id,
        expires_date: expiresDate,
      })
      .returning("*");
    if (data) {
      return res.status(201).json({
        message: "Promo Code generated successfully",
      });
    }
  } catch (error) {
    next(error);
  }
};
module.exports = {
  createPromo,
};
