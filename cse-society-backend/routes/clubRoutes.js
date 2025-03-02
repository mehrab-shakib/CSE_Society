const express = require("express");
const { getAllClubs, createClub, approveClub, deleteClub } = require("../controllers/clubController");
const { verifySuperadmin } = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/all", getAllClubs);
router.post("/create", verifySuperadmin, createClub);
router.post("/approve", verifySuperadmin, approveClub);
router.delete("/delete/:clubId", verifySuperadmin, deleteClub);

module.exports = router;
