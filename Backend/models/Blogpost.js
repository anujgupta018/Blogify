const mongoose = require("mongoose");

const blogPostSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);
const Blogpost = mongoose.model("Blogpost", blogPostSchema);
module.exports = Blogpost;
