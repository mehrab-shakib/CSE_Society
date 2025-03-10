const db = require("../config/db").promise();



// // Fetch All Users
// exports.getAllUsers = async (req, res) => {
//   try {
//     const [users] = await db.query("SELECT id, name, email, role FROM users");
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching users" });
//   }
// };

// // Promote User to Admin
// exports.promoteToAdmin = async (req, res) => {
//   const { userId } = req.params;
//   try {
//     await db.query("UPDATE users SET role = 'admin' WHERE id = ?", [userId]);
//     res.json({ message: "User promoted to admin" });
//   } catch (error) {
//     res.status(500).json({ message: "Error promoting user" });
//   }
// };

// // Demote Admin to Member
// exports.demoteToMember = async (req, res) => {
//   const { userId } = req.params;
//   try {
//     await db.query("UPDATE users SET role = 'member' WHERE id = ?", [userId]);
//     res.json({ message: "Admin demoted to member" });
//   } catch (error) {
//     res.status(500).json({ message: "Error demoting admin" });
//   }
// };

// // Delete User
// exports.deleteUser = async (req, res) => {
//   const { userId } = req.params;
//   try {
//     await db.query("DELETE FROM users WHERE id = ?", [userId]);
//     res.json({ message: "User deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Error deleting user" });
//   }
// };

// Get User by ID
exports.getUserById = async (req, res) => {
  const { userId } = req.params;
  try {
    const [user] = await db.query("SELECT * FROM users WHERE id = ?", [userId]);
    if (user.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user[0]);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user" });
  }
};

// Update User Profile
exports.updateUserProfile = async (req, res) => {
  const { userId } = req.params;
  const { name, email, phone, roll, batch } = req.body;
  try {
    await db.query(
      "UPDATE users SET name = ?, email = ?, phone = ?, roll = ?, batch = ? WHERE id = ?",
      [name, email, phone, roll, batch, userId]
    );
    const [updatedUser] = await db.query("SELECT * FROM users WHERE id = ?", [userId]);
    res.json(updatedUser[0]);
  } catch (error) {
    res.status(500).json({ message: "Error updating user profile", error: error.message });
  }
};