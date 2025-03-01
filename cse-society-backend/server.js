const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./config/db");

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON data

// Routes
app.get("/", (req, res) => {
  res.send("CSE Society Backend Running...");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
