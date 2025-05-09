const express = require("express");
const { getAllAdmins, assignAdmin, removeAdmin, getJoinRequests } = require("../controllers/adminController");
const {verifySuperadmin} = require("../middlewares/verifySuperadmin")

const router = express.Router();

router.get("/all", verifySuperadmin, getAllAdmins);
router.post("/assign", verifySuperadmin, assignAdmin);
router.post("/remove", verifySuperadmin, removeAdmin);

router.get("/get-requests",  getJoinRequests);

module.exports = router;
