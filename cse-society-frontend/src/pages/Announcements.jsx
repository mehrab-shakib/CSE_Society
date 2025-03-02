import { useEffect, useState } from "react";
import axios from "axios";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/announcements")
      .then((res) => setAnnouncements(res.data))
      .catch((error) => console.error("Error fetching announcements", error));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold">Announcements</h2>
      {announcements.map((announcement) => (
        <div key={announcement.id} className="p-4 bg-white shadow-md">
          <h3 className="text-lg font-semibold">{announcement.title}</h3>
          <p>{announcement.message}</p>
        </div>
      ))}
    </div>
  );
};

export default Announcements;
