const express = require("express");
const cors = require("cors");
const { connectDb } = require("./connection");
const app = express();
const port = 5000;

connectDb();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to my server" });
});
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
