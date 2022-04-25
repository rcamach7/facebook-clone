const Post = require("../models/Post");

exports.getPosts = (req, res, next) => {
  res.json({ message: "Hit Endpoint" });
};

exports.createPost = (req, res, next) => {
  res.json({ message: "Hit Endpoint" });
};

// To be implemented in the future
exports.editPost = (req, res, next) => {
  res.json({ message: "Hit Endpoint" });
};
exports.deletePost = (req, res, next) => {
  res.json({ message: "Hit Endpoint" });
};
