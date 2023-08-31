const adminRouter = require("./admin-route");
const blogRouter = require("./blogs-route");
const contactRouter = require("./contact-route");
const feedbackRouter = require("./feedbacks-route");
const galleryRouter = require("./gallery-route");
const servicesRouter = require("./services-route");
const subscribeRouter = require("./subscribe-route");
module.exports = [
  adminRouter,
  blogRouter,
  contactRouter,
  feedbackRouter,
  galleryRouter,
  servicesRouter,
  subscribeRouter,
];
