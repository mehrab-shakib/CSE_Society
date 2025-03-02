const db = require("../config/db");

// Fetch All Users
exports.getAllUsers = async (req, res) => {
  try {
    const [users] = await db.query("SELECT id, name, email, role FROM users");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
  }
};

// Promote User to Admin
exports.promoteToAdmin = async (req, res) => {
  const { userId } = req.params;
  try {
    await db.query("UPDATE users SET role = 'admin' WHERE id = ?", [userId]);
    res.json({ message: "User promoted to admin" });
  } catch (error) {
    res.status(500).json({ message: "Error promoting user" });
  }
};

// Demote Admin to Member
exports.demoteToMember = async (req, res) => {
  const { userId } = req.params;
  try {
    await db.query("UPDATE users SET role = 'member' WHERE id = ?", [userId]);
    res.json({ message: "Admin demoted to member" });
  } catch (error) {
    res.status(500).json({ message: "Error demoting admin" });
  }
};

// Delete User
exports.deleteUser = async (req, res) => {
  const { userId } = req.params;
  try {
    await db.query("DELETE FROM users WHERE id = ?", [userId]);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user" });
  }
};
