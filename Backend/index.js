const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to my server" });
});
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
