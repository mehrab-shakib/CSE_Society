import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardNav from "../components/DashboardNav";
import DashboardFooter from "../components/DashboardFooter";
import ClubCard from "../components/ClubCard";
import clubsData from "../data/clubs.json"; // Data for joined clubs
import availableClubsData from "../data/availableClubs.json"; // Data for joinable clubs

const SuperadminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("my-clubs"); // Default section
  const [clubs, setClubs] = useState([]);
  const [availableClubs, setAvailableClubs] = useState([]);
  const navigate = useNavigate();

  // Load data when component mounts
  useEffect(() => {
    setClubs(clubsData);
    setAvailableClubs(availableClubsData);
  }, []);

  return (
    <>
      <DashboardNav
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
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

export default SuperadminDashboard;
