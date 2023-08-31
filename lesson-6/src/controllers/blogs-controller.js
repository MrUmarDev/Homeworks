const { v4: uuid } = require("uuid");
const path = require("path");
const joi = require("joi");
const customError = require("../utils/customError");
const {
  create: blogQuery,
  blogAll,
} = require("../queries/blogs-query");
const { create: photoQuery } = require("../queries/photo-query");
const {
  blogOne,
  removeBlog: removeBlogOne,
  blogUpd,
} = require("../queries/blogs-query");
const createBlog = async (req, res, next) => {
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
    const data = await blogQuery(title, description, true);
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
const getOneBlog = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await blogOne(id);
    if (data) {
      res.status(200).json({
        message: "success",
        data,
      });
    } else {
      res.status(404).json({
        message: "blog not found",
      });
    }
  } catch (error) {
    next(error);
  }
};
const getAllBlogs = async (req, res) => {
  const data = await blogAll();
  if (!data) {
    return res.status(404).json({
      message: "Blog not found",
    });
  }
  res.json({
    message: "Success",
    data,
  });
};
const removeBlog = async (req, res) => {
  const { id } = req.params;
  const data = await removeBlogOne(id);
  if (!data) {
    return res.status(404).json({
      message: "Blog not found",
    });
  }
  res.status(200).json({
    message: "Blog is successfully removed",
  });
};
const updateBlog = async (req, res, next) => {
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
    const data = await blogUpd(id, title, description, fileName);
    if (data && fileName) {
      await photoQuery(fileName);
      if (data) {
        return res.status(201).json({
          message: "Succes",
        });
      }
    } else {
      res.status(404).json({
        message: "Blog not found",
      });
    }
  } catch (error) {
    next(error)
  }
};
module.exports = {
  createBlog,
  getOneBlog,
  getAllBlogs,
  removeBlog,
  updateBlog,
};
