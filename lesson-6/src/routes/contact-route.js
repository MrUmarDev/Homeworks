const { Router } = require("express");
const contactRouter = Router();
const {
  createContact,
  getOneContact,
} = require("../controllers/contact-controller");
contactRouter.post("/contact", createContact);
contactRouter.get("/contact/:id", getOneContact);
module.exports = contactRouter;
