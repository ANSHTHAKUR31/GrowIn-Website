// Import required modules
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");

const userRoutes = require("./routes/user");




// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json()); // JSON data handle karne ke liye
app.use(cors()); // CORS enable karne ke liye
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected Successfully! ✅"))
  .catch((err) => console.log("MongoDB Connection Error ❌", err));

// Basic Route
app.get("/", (req, res) => {
  res.send("Growin Community API is running...");
});

// Server Listen
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
