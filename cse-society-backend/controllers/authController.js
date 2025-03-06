const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../config/db");
require("dotenv").config();

// User Registration
exports.register = (req, res) => {
    console.log(req.body);
    const { name, email, password, role, phone } = req.body;

    // Validate inputs
    if (!name || !email || !password || !phone) {
        return res.status(400).json({ message: "All fields are required" });
    }

    // Hash password
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) return res.status(500).json({ message: "Error hashing password" });

        // Insert into database
        db.query(
            "INSERT INTO users (name, email, password, role, phone) VALUES (?, ?, ?, ?, ?)",
            [name, email, hashedPassword, role || "member", phone],
            (err, result) => {
                if (err) {
                    if (err.code === "ER_DUP_ENTRY") {
                        return res.status(400).json({ message: "Email already exists" });
                    }
                    return res.status(500).json({ message: "Database error", error: err });
                }
                res.status(201).json({ message: "User registered successfully" });
            }
        );
    });
};

// User Login
exports.login = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    // Check user in database
    db.query("SELECT * FROM users WHERE email = ?", [email], (err, results) => {
        if (err) return res.status(500).json({ message: "Database error" });
        if (results.length === 0) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const user = results[0];

        // Compare password
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) return res.status(500).json({ message: "Error comparing passwords" });
            if (!isMatch) return res.status(401).json({ message: "Invalid email or password" });

            // Generate JWT Token
            const token = jwt.sign(
                { id: user.id, role: user.role },
                process.env.JWT_SECRET,
                { expiresIn: "7d" }
            );

            res.status(200).json({ message: "Login successful", token, user });
        });
    });
};

// Get User Profile
exports.getUserProfile = (req, res) => {
    const userId = req.user.id;

    db.query("SELECT id, name, email, role FROM users WHERE id = ?", [userId], (err, results) => {
        if (err) return res.status(500).json({ message: "Database error" });
        if (results.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(results[0]);
    });
};
