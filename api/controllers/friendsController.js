const User = require("../models/User");
const jwt = require("jsonwebtoken");
const v4 = require("uuid").v4;
const { check, validationResult } = require("express-validator");

exports.addFriends = (req, res, next) => {
  res.json({ message: "Ok" });
};
