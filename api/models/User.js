const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  username: { type: String, required: true, minlength: 4 },
  password: { type: String, required: true, minlength: 4 },
  fullName: { type: String, required: true, minlength: 4 },
  profilePicture: { type: String, required: true },
});

module.exports = mongoose.model("User", User);
