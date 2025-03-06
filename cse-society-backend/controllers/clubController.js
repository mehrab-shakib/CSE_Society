const db = require("../config/db").promise();

// Get all clubs
exports.getAllClubs = async (req, res) => {
  try {
    const [clubs] = await db.query("SELECT * FROM clubs");
    res.json(clubs);
    console.log(clubs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching clubs" });
  }
};

exports.createClub = async (req, res) => {
  const { name, description, created_by } = req.body;
  try {
    await db.query(
      "INSERT INTO clubs (name, description, created_by) VALUES (?, ?, ?)",
      [name, description, created_by]
    );
    res.status(201).json({ message: "Club created, pending approval" });
  } catch (error) {
    console.error(error); // Add this line to log the error
    res.status(500).json({ message: "Error creating club" });
  }
};

// Approve a club
exports.approveClub = async (req, res) => {
  const { clubId } = req.params;
  try {
    await db.query("UPDATE clubs SET status = 'approved' WHERE id = ?", [
      clubId,
    ]);
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

//add member to club

exports.addMemberToClub = async (req, res) => {
  const { userId, clubId } = req.body;

  try {
    // Check if the user is already a member of the club
    const [existingMembership] = await db.query(
      "SELECT * FROM club_members WHERE user_id = ? AND club_id = ?",
      [userId, clubId]
    );

    if (existingMembership.length > 0) {
      return res
        .status(400)
        .json({ message: "User is already a member of the club" });
    }

    // Start a transaction to ensure atomicity
    await db.beginTransaction();

    // Update the users table to set the club_id
    await db.query("UPDATE users SET club_id = ? WHERE id = ?", [
      clubId,
      userId,
    ]);

    // Insert a new record into the club_members table
    await db.query(
      "INSERT INTO club_members (user_id, club_id) VALUES (?, ?)",
      [userId, clubId]
    );

    // Commit the transaction
    await db.commit();

    res.json({ message: "Member added to club successfully" });
  } catch (error) {
    // Rollback the transaction in case of error
    await db.rollback();
    res
      .status(500)
      .json({ message: "Error adding member to club", error: error.message });
  }
};

//delete member from club
exports.deleteMemberFromClub = async (req, res) => {
  const { userId, clubId } = req.body;

  try {
    // Check if the user is a member of the club
    const [existingMembership] = await db.query(
      "SELECT * FROM club_members WHERE user_id = ? AND club_id = ?",
      [userId, clubId]
    );

    if (existingMembership.length === 0) {
      return res.status(404).json({ message: "User is not a member of the club" });
    }

    // Start a transaction to ensure atomicity
    await db.beginTransaction();

    // Remove the user from the club_members table
    await db.query("DELETE FROM club_members WHERE user_id = ? AND club_id = ?", [userId, clubId]);

    // Update the users table to set club_id to NULL
    await db.query("UPDATE users SET club_id = NULL WHERE id = ?", [userId]);

    // Commit the transaction
    await db.commit();

    res.json({ message: "Member removed from club successfully" });
  } catch (error) {
    // Rollback the transaction in case of error
    await db.rollback();
    res.status(500).json({ message: "Error removing member from club", error: error.message });
  }
};

// Update club information
exports.updateClub = async (req, res) => {
  const { clubId } = req.params;
  const { name, description } = req.body;

  try {
    await db.query(
      "UPDATE clubs SET name = ?, description = ? WHERE id = ?",
      [name, description, clubId]
    );
    res.json({ message: "Club information updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error updating club information", error: error.message });
  }
};