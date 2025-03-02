const express = require("express");
const { register, login, getUserProfile } = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");
const verifySuperadmin = require("../middlewares/verifySuperadmin")

const router = express.Router();

// Authentication Routes
router.post("/register",  register);
router.post("/login", login);
router.get("/profile",  authMiddleware, getUserProfile);

module.exports = router;
