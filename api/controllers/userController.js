const { check, validationResult } = require("express-validator");
const config = require("../config.json");
const axios = require("axios");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

exports.createUser = [
  // Data Validation and sanitation.
  check("username")
    .exists()
    .trim()
    .isLength({ min: 4 })
    .withMessage("Username must be at least 4 characters")
    .toLowerCase()
    // Makes sure the username is not already in use by another member
    .custom(async (value) => {
      const user = await User.findOne({ username: value });
      if (user) {
        return Promise.reject("Username already exists");
      }
    }),
  check("password")
    .exists()
    .trim()
    .isLength({ min: 4 })
    .withMessage("Password must be at least 4 characters"),
  check("fullName")
    .exists()
    .trim()
    .isLength({ min: 4 })
    .withMessage("Name must be at least 4 characters"),
  // Check results of validation
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
      // Hash password provided by user
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const user = new User({
        username: req.body.username,
        password: hashedPassword,
        fullName: req.body.fullName,
        profilePicture:
          "https://res.cloudinary.com/de2ymful4/image/upload/v1649203693/messenger/default_vrsymg.jpg",
      });
      // Save new user and move on to next middleware.
      await user.save();
      // Save user in order to provide login details to our endpoint to retrieve authentication token.
      res.locals.user = {
        username: user.username,
        password: req.body.password,
      };
      next();
    } catch (errors) {
      return req
        .status(400)
        .json({ message: "Error creating new account", errors });
    }
  },
  // Make request to our login endpoint to retrieve and send back authentication token.
  async (req, res, next) => {
    try {
      // Use our login endpoint to send user back a authentication token.
      const {
        data: { token },
      } = await axios.post(`${config.apiUrl}/login`, res.locals.user);

      return res.json({ token });
    } catch (errors) {
      return res
        .status(400)
        .json({ message: "Error retrieving authentication token", errors });
    }
  },
];

exports.getUser = [
  // Verify token exists - if so, pull and save for next middleware.
  (req, res, next) => {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "undefined") {
      const bearer = bearerHeader.split(" ");
      const bearerToken = bearer[1];

      // Save token and move on.
      req.token = bearerToken;
      next();
    } else {
      return res.status(403).json({
        message: "Protected route - not authorized",
      });
    }
  },
  // Verify token is valid, and retrieve user.
  async (req, res, next) => {
    try {
      const { _id } = jwt.verify(req.token, process.env.SECRET_STRING);
      const user = await User.findById(_id).select(
        "username fullName profilePicture"
      );

      return res.json({ user });
    } catch (errors) {
      return res.status(401).json({ message: "Token is not valid", errors });
    }
  },
];

// To be implemented in the future
exports.updateUser = (req, res, next) => {
  res.json({ msg: "Get User Endpoint" });
};
exports.deleteUser = (req, res, next) => {
  res.json({ msg: "Get User Endpoint" });
};
