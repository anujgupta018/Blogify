const mongoose = require("mongoose");

const blogPostSchema = new mongoose.Schema({
  title: String,
  Description: String,
});
const Blogpost = mongoose.model("Blogpost", blogPostSchema);
module.exports = Blogpost;
