const joi = require("joi");
const customError = require("../../utils/customError");
const {
  createServiceQuery,
  getAllServicesQuery,
  getOneServiceQuery,
  removeServiceQuery,
} = require("./query");
const createService = async (req, res, next) => {
  try {
    const { service_name, price } = req.body;
    if (!service_name || !price) {
      return res.status(400).json({
        message: "service name and price are required",
      });
    }
    const schema = joi.object({
      service_name: joi.string(),
      price: joi.number(),
    });
    const { error } = schema.validate({
      service_name,
      price,
    });
    if (error) {
      throw new customError(error.message, 400);
    }
    const user = req?.user_id;
    const readData = await getAllServicesQuery();
    const findService = readData.find(
      (service) => service.service_name === service_name
    );
    if (!findService) {
      const data = await createServiceQuery(service_name, price, user);
      if (data) {
        return res.status(201).json({
          message: "Service created",
        });
      }
    } else {
      return res.status(400).json({
        message: "Service already exists",
      });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};
const getOneService = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await getOneServiceQuery(id);
    res.json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

const getAllServices = async (req, res) => {
  try {
    const data = await getAllServicesQuery();
    if (data) {
      res.json({
        message: "Success",
        data,
      });
    }
  } catch (error) {
    next(error);
  }
};

const removeService = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await removeServiceQuery(id);
    console.log(data)
    if (data) {
      return res.json({
        message: "Successfully removed service",
      });
    }
  } catch (error) {
    console.log(error)
    next(error);
  }
};

module.exports = {
  createService,
  getOneService,
  getAllServices,
  removeService,
};
