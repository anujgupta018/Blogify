const mongoose = require("mongoose");
require("dotenv").config();
const uri = process.env.MONGO_URI;

const connectDb = async () => {
  const connection = await mongoose.connect(uri, {
    ssl: true,
  });
  if (connection) console.log("Datebase connection successful");
  else console.log("Database connection failed");
};

module.exports = {
  connectDb,
};
