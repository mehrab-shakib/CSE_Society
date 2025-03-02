const express = require("express");
const { getAllAdmins, assignAdmin, removeAdmin } = require("../controllers/adminController");
const { verifySuperadmin } = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/all", verifySuperadmin, getAllAdmins);
router.post("/assign", verifySuperadmin, assignAdmin);
router.post("/remove", verifySuperadmin, removeAdmin);

module.exports = router;
