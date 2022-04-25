const Post = require("../models/Post");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");

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
      const posts = await Post.find().populate({
        path: "postedBy",
        model: "User",
        select: ["username", "fullName", "profilePicture"],
      });
      return res.json({ posts });
    } catch (errors) {
      return res
        .status(500)
        .json({ message: "Error retrieving posts", errors });
    }
  },
];
exports.createPost = [
  // Data Validation and sanitation.
  check("postedBy")
    .exists()
    .trim()
    .isLength({ min: 4 })
    .withMessage("Must provide author (postedBy) of post."),
  check("description")
    .exists()
    .trim()
    .isLength({ min: 4 })
    .withMessage("Description must be at least 4 characters"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }
    // If no errors, move on to step.
    next();
  },
  async (req, res, next) => {
    try {
      const post = new Post({
        postedBy: req.body.postedBy,
        timeStamp: new Date(),
        description: req.body.description,
        picture: req.body.picture ? req.body.picture : null,
        likes: [],
        comments: [],
      });

      await post.save();
      res.json({ post });
    } catch (errors) {
      return res
        .status(500)
        .json({ message: "Error creating new post", errors });
    }
  },
];

// To be implemented in the future
exports.editPost = (req, res, next) => {
  res.json({ message: "Hit Endpoint" });
};
exports.deletePost = (req, res, next) => {
  res.json({ message: "Hit Endpoint" });
};
