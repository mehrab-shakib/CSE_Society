const express = require("express");
const { getSuperadminStats } = require("../controllers/dashboardController");
const { verifySuperadmin } = require("../middlewares/verifySuperadmin") ; 

const router = express.Router();

router.get("/stats", verifySuperadmin, getSuperadminStats);

module.exports = router;
