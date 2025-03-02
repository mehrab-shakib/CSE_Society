exports.createAnnouncement = async (req, res) => {
    const { club_id, title, message } = req.body;
    try {
      await db.query("INSERT INTO announcements (club_id, title, message, created_by) VALUES (?, ?, ?, ?)", [
        club_id,
        title,
        message,
        req.user.id,
      ]);
      res.json({ message: "Announcement created successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error creating announcement" });
    }
  };
  
  exports.getAnnouncements = async (req, res) => {
    try {
      const [announcements] = await db.query("SELECT * FROM announcements");
      res.json(announcements);
    } catch (error) {
      res.status(500).json({ message: "Error fetching announcements" });
    }
  };
  