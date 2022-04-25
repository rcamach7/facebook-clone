const Post = require("../models/Post");
const jwt = require("jsonwebtoken");

exports.getPosts = [
  // Verify token exists - if so, pull and save for next middleware.
  (req, res, next) => {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "undefined") {
      const bearer = bearerHeader.split(" ");
      const bearerToken = bearer[1];

      // If token exists, but is not valid - we will not process request.
      try {
        jwt.verify(bearerToken, process.env.SECRET_STRING);
      } catch (errors) {
        return res.status(401).json({ message: "Token is not valid", errors });
      }
      next();
    } else {
      return res.status(403).json({
        message: "Protected route - not authorized",
      });
    }
  },
  async (req, res) => {
    try {
      const posts = await Post.find();
      return res.json({ posts });
    } catch (errors) {
      return res
        .status(500)
        .json({ message: "Error retrieving posts", errors });
    }
  },
];
exports.createPost = (req, res, next) => {};

// To be implemented in the future
exports.editPost = (req, res, next) => {
  res.json({ message: "Hit Endpoint" });
};
exports.deletePost = (req, res, next) => {
  res.json({ message: "Hit Endpoint" });
};
