const express = require("express");
const { getAllUsers, promoteToAdmin, demoteToMember, deleteUser } = require("../controllers/userController");
const { verifySuperadmin } = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", verifySuperadmin, getAllUsers);
router.put("/promote/:userId", verifySuperadmin, promoteToAdmin);
router.put("/demote/:userId", verifySuperadmin, demoteToMember);
router.delete("/:userId", verifySuperadmin, deleteUser);

module.exports = router;
