const express = require("express");
const { getAllClubs, createClub, approveClub, deleteClub, addMemberToClub, deleteMemberFromClub, updateClub, getClubById, getClubByUser, getClubsNotJoinedByUser, joinRequest } = require("../controllers/clubController");
const {verifySuperadmin} = require("../middlewares/verifySuperadmin");
const { verifyAdmin } = require("../middlewares/verifyAdmin");


const router = express.Router();

router.get("/all", getAllClubs);
router.post("/create", verifySuperadmin, createClub);
router.post("/approve", verifySuperadmin, approveClub);
router.delete("/delete/:clubId", verifySuperadmin, deleteClub);
router.post("/add-member", verifyAdmin, addMemberToClub);
router.delete("/remove-member/", verifyAdmin, deleteMemberFromClub);
router.put("/update/:clubId", verifySuperadmin, updateClub);
router.get("/:clubId", getClubById);
router.get("/user/:userId", getClubByUser);
router.get("/not-joined/:userId", getClubsNotJoinedByUser);
router.post("/join-request", joinRequest);


module.exports = router;
