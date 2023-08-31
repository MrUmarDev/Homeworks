const { Router } = require("express");
const blogRouter = Router();
const {
  createBlog,
  getOneBlog,
  getAllBlogs,
  removeBlog,
  updateBlog,
} = require("../controllers/blogs-controller");
blogRouter.post("/blog", createBlog);
blogRouter.get("/blogs/:id", getOneBlog);
blogRouter.get("/blogs", getAllBlogs);
blogRouter.delete("/blog/:id", removeBlog);
blogRouter.put("/blogs/:id", updateBlog);
module.exports = blogRouter;
