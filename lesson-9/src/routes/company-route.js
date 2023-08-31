const { Router } = require("express");
const companyRoute = Router();
const isAuth = require("../middlewares/isAuth");
const {
  createCompany,
  getAllCompany,
  getOneCompany,
  updateCompany,
  removeCompany,
} = require("../controllers/company-controller");
companyRoute.post("/company", isAuth, createCompany);
companyRoute.get("/companies", isAuth, getAllCompany);
companyRoute.get("/companies/:id", isAuth, getOneCompany);
companyRoute.put("/companies/:id", isAuth, updateCompany);
companyRoute.delete("/companies/:id", isAuth, removeCompany);
module.exports = companyRoute;
