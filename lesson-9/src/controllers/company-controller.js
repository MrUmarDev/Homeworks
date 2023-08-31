const dbKnex = require("../database/index");
const createCompany = async (req, res, next) => {
  const { company_name, founded_year } = req.body;
  if (!company_name || !founded_year) {
    return res.status(400).json({
      message: "Invalid company name",
    });
  }
  const user = req.user_id;
  const readBase = await dbKnex("company");
  const findCompany = readBase.find(
    (company) => company.company_name === company_name
  );
  if (!findCompany) {
    const data = await dbKnex("company")
      .insert({
        company_name,
        founded_year,
        owner_id: user,
      })
      .returning("*");
    if (data) {
      return res.status(201).json({
        message: "Company registred successfully",
      });
    }
  } else {
    return res.status(400).json({
      message: "Company already exists",
    });
  }
};
const getAllCompany = async (req, res, next) => {
  try {
    const data = await dbKnex("company");
    res.json({
      msg: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};
const getOneCompany = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await dbKnex("company").where("company_id", "=", id).first();
    if (data) {
      return res.status(200).json({
        msg: "Success",
        data,
      });
    } else {
      return res.status(404).json({
        message: "Company not found",
      });
    }
  } catch (error) {
    next(error);
  }
};
const updateCompany = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { company_name, founded_year } = req.body;
    if (!company_name || !founded_year)
      return res.status(400).json({
        message: "company_name,founded_year are required",
      });
    const data = await dbKnex("company")
      .update({
        company_name,
        founded_year,
        updated_at: new Date().toLocaleDateString(),
      })
      .where("company_id", "=", id)
      .returning("*");
    if (data) {
      return res.status(200).json({
        message: "Company updated successfully",
      });
    }
  } catch (error) {
    next(error);
  }
};
const removeCompany = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await dbKnex("company")
      .update({
        deleted_at: new Date().toLocaleDateString(),
      })
      .returning("*");
    if (data) {
      return res.status(200).json({
        message: "Company deleted successfully",
      });
    }
  } catch (error) {
    next(error);
  }
};
module.exports = {
  createCompany,
  getAllCompany,
  getOneCompany,
  updateCompany,
  removeCompany,
};
