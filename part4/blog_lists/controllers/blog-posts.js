const postsRouter = require("express").Router();
const Posts = require("../models/blog-post");

postsRouter.get("/", (request, response) => {
  Posts.find({}).then((blogs) => {
    response.json(blogs);
  });
});

postsRouter.post("/", (request, response) => {
  const blog = new Posts(request.body);

  blog.save().then((result) => {
    response.status(201).json(result);
  });
});

module.exports = postsRouter;
