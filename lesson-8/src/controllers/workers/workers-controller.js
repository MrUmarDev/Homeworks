const joi = require("joi");
const customError = require("../../utils/custom-error");
const { createWorkerQuery, getAllWorkersQuery } = require("./query");
const createWorker = async (req, res, next) => {
  console.log("ss");
  try {
    const { fullname, email, password } = req.body;
    if (!fullname || !email || !password) {
      return res.status(400).json({
        message: "Invalid fullname or email",
      });
    }
    const schema = joi.object({
      fullname: joi.string(),
      email: joi.string().email(),
      password: joi.string(),
    });
    const { error } = schema.validate({
      fullname,
      email,
      password,
    });
    if (error) {
      throw new customError(error.message, 400);
    }
    const readData = await getAllWorkersQuery();
    const findWorker = readData.find((worker) => worker.email === email);
    if (!findWorker) {
      const data = await createWorkerQuery(fullname, email, password);
      if (data) {
        return res.status(200).json({
          message: "Worker successfully created",
        });
      }
    } else {
      return res.status(400).json({
        message: "Worker already exists",
      });
    }
  } catch (error) {
    next(error);
  }
};
module.exports = createWorker;
