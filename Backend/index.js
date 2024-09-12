const express = require("express");
const cors = require("cors");
const { connectDb } = require("./connection");
const Blogpost = require("./models/Blogpost");

const app = express();
const port = 5000;

connectDb();

app.use(express.json());
app.use(cors());

app.post("/post-blog", async (req, res) => {
  const blog = new Blogpost({
    title: req.body.title,
    description: req.body.description,
  });
  await blog.save();
  res.json({ msg: "Blog post saved successfully", blog });
});
app.get("/get-blogs", async (req, res) => {
  let blogs = await Blogpost.find();
  if (!blogs) {
    res.status(404).json({ msg: "No blogs found" });
  }
  res.json({ blogs });
});
app.delete("/delete-blog/:id", async (req, res) => {
  let blog = await Blogpost.findByIdAndDelete(req.params.id);
  if (!blog) {
    res.status(404).json({ msg: "No blogs found" });
  }
  res.status(200).json({ msg: "Blog deleted successfully" });
});
app.put("/update-blog/:id", async (req, res) => {
  let blog = await Blogpost.findByIdAndUpdate(req.params.id);
  if (!blog) {
    res.status(404).json({ msg: "No blogs found" });
  }
  if (!req.body.title && !req.body.description) {
    res.json({ msg: "Please enter a title or description" });
  } else if (!req.body.title) {
    blog.description = req.body.description;
  } else if (!req.body.description) {
    blog.title = req.body.title;
  } else {
    blog.title = req.body.title;
    blog.description = req.body.description;
  }
  await blog.save();
  res.status(200).json({ msg: "Blog updated successfully" });
});
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
