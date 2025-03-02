const db = require("../config/db");

// Get all clubs
exports.getAllClubs = async (req, res) => {
  try {
    const [clubs] = await db.query("SELECT * FROM clubs");
    res.json(clubs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching clubs" });
  }
};

// Create a new club
exports.createClub = async (req, res) => {
  const { name, description, created_by } = req.body;
  try {
    await db.query("INSERT INTO clubs (name, description, created_by, status) VALUES (?, ?, ?, ?)", [name, description, created_by, "pending"]);
    res.status(201).json({ message: "Club created, pending approval" });
  } catch (error) {
    res.status(500).json({ message: "Error creating club" });
  }
};

// Approve a club
exports.approveClub = async (req, res) => {
    const { clubId } = req.params;
    try {
      await db.query("UPDATE clubs SET status = 'approved' WHERE id = ?", [clubId]);
      res.json({ message: "Club approved successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error approving club" });
    }
  };
  

// Delete a club
exports.deleteClub = async (req, res) => {
  const { clubId } = req.params;
  try {
    await db.query("DELETE FROM clubs WHERE id = ?", [clubId]);
    res.json({ message: "Club deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting club" });
  }
};
