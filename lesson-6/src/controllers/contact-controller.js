const joi = require("joi");
const customError = require("../utils/customError");
const { create, updContactStatus } = require("../queries/contact-query");
const createContact = async (req, res, next) => {
  try {
    const { name, phone_number, email, message, is_viewed } = req.body;
    if (!name || !phone_number || !email || !message) {
      return res.status(400).json({
        message: "name,phone_number,email,message are required",
      });
    }
    const schema = joi.object({
      name: joi.string(),
      phone_number: joi.string(),
      email: joi.string().email(),
      message: joi.string(),
    });
    const { error } = schema.validate({
      name,
      phone_number,
      email,
      message,
    });
    if (error) {
      throw new customError(error.message, 400);
    }
    const data = await create(name, phone_number, email, message);
    if (data) {
      return res.status(201).json({
        message: "Contact successfully created",
      });
    }
  } catch (error) {
    next(error);
  }
};
const getOneContact = async (req, res, next) => {
  const { id } = req.params;
  const data = await updContactStatus(true, id);
  if (data) {
    res.json({
      message: "Success",
      data,
    });
  } else {
    res.status(404).json({
      message: "Contact not found",
    });
  }
};
module.exports = {
  createContact,
  getOneContact,
};
