const express = require("express");
const { getAllUsers, promoteToAdmin, demoteToMember, deleteUser, getUserById, updateUserProfile } = require("../controllers/userController");
const { verifySuperadmin } = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", verifySuperadmin, getAllUsers);
router.put("/promote/:userId", verifySuperadmin, promoteToAdmin);
router.put("/demote/:userId", verifySuperadmin, demoteToMember);
router.delete("/:userId", verifySuperadmin, deleteUser);
// 
router.put("/update/:userId", updateUserProfile);

module.exports = router;