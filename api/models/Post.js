const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Post = new Schema({
  postedBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
  postID: { type: String, required: true },
  timeStamp: { type: Date, required: true },
  description: { type: String, required: true },
  picture: { type: String },
  likes: [
    {
      _id: { type: Schema.Types.ObjectId, ref: "User", required: true },
    },
  ],
  comments: [
    {
      _id: { type: Schema.Types.ObjectId, ref: "User", required: true },
      comment: { type: String, required: true, minlength: 4 },
    },
  ],
});

module.exports = mongoose.model("Post", Post);
