const User = require("../models/User");

exports.getUser = (req, res, next) => {
  res.json({ msg: "Get User Endpoint" });
};
