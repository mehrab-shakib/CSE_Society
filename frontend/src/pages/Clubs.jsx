import React, { useState, useEffect } from "react";
import AllClubsCard from "../components/AllClubsCard";

const Clubs = () => {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    // Fetch clubs data from the backend API
    const fetchClubs = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/clubs/all");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const contentType = response.headers.get("Content-Type");
        if (!contentType || !contentType.includes("application/json")) {
          const text = await response.text(); // Capture the response body
          console.error(
            `Invalid response format. Expected JSON, but received ${contentType}. Response body: ${text}`
          );
          throw new Error(
            `Invalid response format. Expected JSON, but received ${contentType}.`
          );
        }
        const data = await response.json();
        setClubs(data);
      } catch (error) {
        console.error("Error fetching clubs:", error);
      }
    };

    // Fetch club images data from the JSON file

    fetchClubs();
  }, []);

  // Map the club images to the clubs

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {clubs.map((club) => (
          <AllClubsCard key={club.id} club={club} />
        ))}
      </div>
    </div>
  );
};

export default Clubs;
