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

exports.editPost = [
  // Verify token exists - if so, pull and save for next middleware.
  (req, res, next) => {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "undefined") {
      const bearer = bearerHeader.split(" ");
      const bearerToken = bearer[1];

      // If token exists, but is not valid - we will not process request.
      try {
        const { _id } = jwt.verify(bearerToken, process.env.SECRET_STRING);
        res.locals.userId = _id;
      } catch (errors) {
        return res.status(401).json({ message: "Token is not valid.", errors });
      }
      next();
    } else {
      return res.status(403).json({
        message: "Protected route - not authorized",
      });
    }
  },
  // Check if user is liking a post = if so process that. If not, move on.
  async (req, res, next) => {
    if (!req.body.like) {
      next();
    } else {
      // User intends to add a like to the post ID passed in the params.
      try {
        const post = await Post.findById(req.params.id);
        for (let i = 0; i < post.likes.length; i++) {
          console.log(post.likes);
          console.log(res.locals.userId);
          // Indicates user has already liked this posts - so we assume user wants to remove their like.
          if (post.likes[i]._id.equals(res.locals.userId)) {
            await Post.updateOne(
              { _id: req.params.id },
              { $pullAll: { likes: [{ _id: res.locals.userId }] } }
            );
            return res.json({ message: "Like removed from post" });
          }
        }
        // If the previous loop didn't end request - we assume user is intending to like this post now.
        const updatedPost = await Post.updateOne(
          { _id: req.params.id },
          { $push: { likes: [{ _id: res.locals.userId }] } }
        );
        return res.json({ message: "Like added to post", updatedPost });
      } catch (errors) {
        return res
          .status(400)
          .json({ message: "Error updating post likes", errors });
      }
    }
  },
  async (req, res) => {
    if (!req.body.comment) {
      // End request since user didn't send a valid field to update.
      return res
        .status(400)
        .json({ message: "Please provide a field to update" });
    } else {
      try {
        const post = await Post.updateOne(
          { _id: req.params.id },
          {
            $push: {
              comments: [
                // Add new comment with required fields to post
                {
                  _id: res.locals.userId,
                  comment: req.body.comment,
                  timeStamp: new Date(),
                },
              ],
            },
          }
        );
        return res.json({ message: "Comment added to post", post });
      } catch (error) {
        return res
          .status(500)
          .json({ message: "Error adding comment to post" });
      }
    }
  },
];

// To be implemented in the future
exports.deletePost = (req, res, next) => {
  res.json({ message: "Hit Endpoint" });
};
