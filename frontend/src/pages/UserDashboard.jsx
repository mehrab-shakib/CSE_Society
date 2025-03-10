import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardNav from "../components/DashboardNav";
import DashboardFooter from "../components/DashboardFooter";
import ClubCard from "../components/ClubCard";

const UserDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("my-clubs"); // Default section
  const [clubs, setClubs] = useState([]);
  const [availableClubs, setAvailableClubs] = useState([]);

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  // Load data when component mounts
  useEffect(() => {
    // Fetch clubs data from the backend API
    const fetchClubs = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/clubs/user/${user?.id}`
        );
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

    fetchClubs();
  }, [user]);

  // fetch available clubs for the user

  useEffect(() => {
    // Fetch clubs data from the backend API
    const fetchAvailableClubs = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/clubs/not-joined/${user?.id}`
        );
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
        setAvailableClubs(data);
      } catch (error) {
        console.error("Error fetching clubs:", error);
      }
    };

    // Fetch club images data from the JSON file

    fetchAvailableClubs();
  }, [user]);

  return (
    <>
      <DashboardNav
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        user={user}
      />

      <div
        className={`transition-all duration-300 p-5 ${
          sidebarOpen ? "ml-[250px]" : "ml-0"
        }`}
      >
        <h1 className="text-3xl font-bold mb-5">
          {activeSection === "my-clubs" ? "My Clubs" : "Join a Club"}
        </h1>

        {/* Conditional rendering based on activeSection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {activeSection === "my-clubs"
            ? clubs.map((club) => (
                <ClubCard
                  key={club.id}
                  club={club}
                  activeSection={activeSection}
                />
              ))
            : availableClubs.map((club) => (
                <ClubCard
                  key={club.id}
                  club={club}
                  activeSection={activeSection}
                  onJoinClub={() => navigate("/join-club/")} // Navigate when clicking "Join Club"
                />
              ))}
        </div>
      </div>

      <DashboardFooter />
    </>
  );
};

export default UserDashboard;
