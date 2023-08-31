const { v4: uuid } = require("uuid");
const path = require("path");
const joi = require("joi");
const customError = require("../utils/customError");
const {
  create: ServiceQuery,
  serviceAll,
} = require("../queries/services-query");
const { create: photoQuery } = require("../queries/photo-query");
const {
  serviceOne,
  removeService: removeServiceOne,
  ServiceUpd,
} = require("../queries/services-query");
const { fetchOne } = require("../utils/pg");
const createService = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const file = req.files;
    if (!title || !description || !file?.photo) {
      throw new customError("title,description,photo are required", 400);
    }
    const schema = joi.object({
      title: joi.string(),
      description: joi.string(),
    });
    const { error } = schema.validate({
      title,
      description,
    });
    if (error) {
      throw new customError(error.message, 400);
    }
    const mimeType = path.extname(file.photo.name);
    const fileName = uuid() + mimeType;
    const data = await ServiceQuery(title, description, true);
    if (data && fileName) {
      const data = await photoQuery(fileName);
      if (data) {
        return res.status(201).json({
          message: "Succes",
        });
      }
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};
const getOneService = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await serviceOne(id);
    if (data) {
      res.status(200).json({
        message: "success",
        data,
      });
    } else {
      res.status(404).json({
        message: "Service not found",
      });
    }
  } catch (error) {
    next(error);
  }
};
const getAllServices = async (req, res) => {
  const data = await serviceAll();
  if (!data) {
    return res.status(404).json({
      message: "Services not found",
    });
  }
  res.json({
    message: "Success",
    data,
  });
};
const removeService = async (req, res) => {
  const { id } = req.params;
  const data = await removeServiceOne(id);
  if (!data) {
    return res.status(404).json({
      message: "Service not found",
    });
  }
  res.status(200).json({
    message: "Service is successfully removed",
  });
};
const updateService = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const file = req.files;
    if (!title || !description || !file?.photo) {
      throw new customError("title,description,photo are required", 400);
    }
    const schema = joi.object({
      title: joi.string(),
      description: joi.string(),
    });
    const { error } = schema.validate({
      title,
      description,
    });
    if (error) {
      throw new customError(error.message, 400);
    }
    const mimeType = path.extname(file.photo.name);
    const fileName = uuid() + mimeType;
    const data = await ServiceUpd(id, title, description, fileName);
    if (data && fileName) {
      await photoQuery(fileName);
      if (data) {
        return res.status(201).json({
          message: "Succes",
        });
      }
    } else {
      res.status(404).json({
        message: "Service not found",
      });
    }
  } catch (error) {
    next(error)
  }
};
module.exports = {
  createService,
  getOneService,
  getAllServices,
  removeService,
  updateService,
};
