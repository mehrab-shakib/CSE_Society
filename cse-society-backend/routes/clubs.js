const express = require("express");
const router = express.Router();
const db = require("../config/db"); // MySQL connection
const { verifySuperadmin } = require("../middlewares/authMiddleware"); // Superadmin auth middleware

// ✅ Create a new club
router.post("/create", verifySuperadmin, async (req, res) => {
    const { name, description, logo, created_by } = req.body;
    try {
        const [result] = await db.execute(
            "INSERT INTO clubs (name, description, logo, created_by) VALUES (?, ?, ?, ?)",
            [name, description, logo, created_by]
        );
        res.status(201).json({ message: "Club created successfully", clubId: result.insertId });
    } catch (error) {
        res.status(500).json({ error: "Database error", details: error });
    }
});

// ✅ Get all clubs
router.get("/all", async (req, res) => {
    try {
        const [clubs] = await db.execute("SELECT * FROM clubs");
        res.status(200).json(clubs);
    } catch (error) {
        res.status(500).json({ error: "Database error", details: error });
    }
});

// ✅ Update club details
router.put("/update/:id", verifySuperadmin, async (req, res) => {
    const { id } = req.params;
    const { name, description, logo } = req.body;
    try {
        await db.execute("UPDATE clubs SET name = ?, description = ?, logo = ? WHERE id = ?", 
            [name, description, logo, id]);
        res.status(200).json({ message: "Club updated successfully" });
    } catch (error) {
        res.status(500).json({ error: "Database error", details: error });
    }
});

// ✅ Delete a club
router.delete("/delete/:id", verifySuperadmin, async (req, res) => {
    const { id } = req.params;
    try {
        await db.execute("DELETE FROM clubs WHERE id = ?", [id]);
        res.status(200).json({ message: "Club deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Database error", details: error });
    }
});

module.exports = router;
