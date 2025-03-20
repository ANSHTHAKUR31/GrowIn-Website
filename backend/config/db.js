const mongoose = require("mongoose");
require("dotenv").config(); // Environment variables load karne ke liye

const connectDB = async () => {
  try {
    await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));
    console.log("MongoDB Connected Successfully! ✅");
  } catch (error) {
    console.error("MongoDB Connection Failed ❌", error);
    process.exit(1); // Server ko band kar deta hai agar connection fail ho
  }
};

module.exports = connectDB;
