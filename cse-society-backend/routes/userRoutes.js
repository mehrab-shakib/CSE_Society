const express = require("express");
const {getUserById, updateUserProfile } = require("../controllers/userController.js");
const { verifySuperadmin } = require("../middlewares/authMiddleware.js");



const router = express.Router();

// router.get("/", verifySuperadmin, getAllUsers);
router.get("/:userId", getUserById);
// router.put("/promote/:userId", verifySuperadmin, promoteToAdmin);
// router.put("/demote/:userId", verifySuperadmin, demoteToMember);
// router.delete("/:userId", verifySuperadmin, deleteUser);
router.put("/update/:userId", updateUserProfile);

module.exports = router;