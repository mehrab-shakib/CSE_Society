const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifySuperadmin = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Access denied" });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (verified.role !== "superadmin") {
      return res
        .status(403)
        .json({ message: "Forbidden: Superadmin access only" });
    }
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid token" });
  }
};

module.exports = { verifySuperadmin };
