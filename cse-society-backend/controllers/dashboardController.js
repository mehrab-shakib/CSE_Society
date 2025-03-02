const db = require("../config/db");

exports.getSuperadminStats = async (req, res) => {
  try {
    const [[totalClubs]] = await db.query("SELECT COUNT(*) AS count FROM clubs");
    const [[totalMembers]] = await db.query("SELECT COUNT(*) AS count FROM users WHERE role = 'member'");
    const [[totalAdmins]] = await db.query("SELECT COUNT(*) AS count FROM users WHERE role = 'admin'");
    const [[pendingApprovals]] = await db.query("SELECT COUNT(*) AS count FROM clubs WHERE status = 'pending'");

    res.json({
      totalClubs: totalClubs.count,
      totalMembers: totalMembers.count,
      totalAdmins: totalAdmins.count,
      pendingApprovals: pendingApprovals.count,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching stats" });
  }
};
