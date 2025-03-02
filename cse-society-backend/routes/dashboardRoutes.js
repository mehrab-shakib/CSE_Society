const express = require("express");
const { getSuperadminStats } = require("../controllers/dashboardController");
const { verifySuperadmin } = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/stats", verifySuperadmin, getSuperadminStats);

module.exports = router;
