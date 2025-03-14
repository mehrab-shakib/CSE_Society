/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import SuperAdminNav from "../components/SuperAdminNav";
import DashboardFooter from "../components/DashboardFooter";
import ClubCard from "../components/ClubCard";
import AllClubsCard from "../components/AllClubsCard";
import AddClubForm from "../components/AddClubForm"; // Import the new component
import AdminControl from "../components/AdminControl"; // Import the new component

const SuperadminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("admin-control"); // Default section
  const [clubs, setClubs] = useState([]);

  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Load data when component mounts
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

  useEffect(() => {
    // Fetch user data (from localStorage or API)
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleAddClub = async (club) => {
    try {
      const token = localStorage.getItem("token"); // Retrieve the token from localStorage
      const response = await fetch("http://localhost:5000/api/clubs/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
        body: JSON.stringify(club),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const newClub = await response.json();
      setClubs([...clubs, newClub]);
      setActiveSection("all-clubs"); // Switch back to "All Clubs" section after adding
      alert("Club added successfully!");
      window.location.reload(); // Reload the page to reflect the changes
      // navigate("/superadmin-dashboard");
    } catch (error) {
      console.error("Error adding club:", error);
    }
  };

  return (
    <>
      <SuperAdminNav
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
        {/* Further digging here */}
        <h1 className="text-2xl mb-5">
          {activeSection === "all-clubs"
            ? "All Clubs"
            : activeSection === "add-club"
            ? "Add New Club"
            : "Admin Control"}
        </h1>

        {/* Conditional rendering based on activeSection */}
        {activeSection === "all-clubs" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {clubs.map((club) => (
              <AllClubsCard
                key={club.id}
                club={club}
                activeSection={activeSection}
                isSuperAdmin={true}
              />
            ))}
          </div>
        )}

        {activeSection === "add-club" && (
          <div className="w-screen max-w-6xl mx-auto  ">
            <AddClubForm onSubmit={handleAddClub} />
          </div>
        )}

        {activeSection === "admin-control" && (
          <div className="w-screen max-w-6xl mx-auto  ">
            <AdminControl clubs={clubs} />
          </div>
        )}
      </div>

      {/* <DashboardFooter /> */}
    </>
  );
};

export default SuperadminDashboard;
