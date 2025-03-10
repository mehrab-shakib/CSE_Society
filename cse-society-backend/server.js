const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./config/db").promise();
const clubRoutes = require("./routes/clubRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const adminRoutes = require("./routes/adminRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON data

// Routes

app.use("/api/auth", authRoutes);
app.use("/api/clubs", clubRoutes);
 app.use("/api/users", userRoutes);
app.use("/api/admins", adminRoutes);
app.use("/api/dashboard", dashboardRoutes);

app.get("/", (req, res) => {
  res.send("CSE Society Backend Running...");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
