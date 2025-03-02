const db = require("../config/db").promise();

// Get all club admins
exports.getAllAdmins = async (req, res) => {
  try {
    const [admins] = await db.query("SELECT id, name, email, club_id FROM users WHERE role = 'admin'");
    res.json(admins);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching admins" });
  }
};

// Assign admin to a club
exports.assignAdmin = async (req, res) => {
  const { userId, clubId } = req.body;
  try {
    await db.query("UPDATE users SET role = 'admin', club_id = ? WHERE id = ?", [clubId, userId]);
    res.json({ message: "User assigned as Club Admin" });
  } catch (error) {
    res.status(500).json({ message: "Error assigning admin" });
  }
};

// Remove admin role
exports.removeAdmin = async (req, res) => {
  const { userId } = req.body;
  try {
    await db.query("UPDATE users SET role = 'member', club_id = NULL WHERE id = ?", [userId]);
    res.json({ message: "Admin removed successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error removing admin" });
  }
};
