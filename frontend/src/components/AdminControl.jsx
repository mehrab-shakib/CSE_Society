/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const AdminControl = ({ clubs }) => {
  const [requests, setRequests] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/admins/get-requests");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Invalid data format from API");
        }

        const transformedData = data.map((item) => ({
          id: item.id,
          user_id: item.user_id,
          club_id: item.club_id,
          name: item.name || "Unknown Member",
          interest: item.interest || "No interest provided",
          applied_at: item.created_at || new Date().toISOString(),
        }));

        setRequests(transformedData);
      } catch (error) {
        console.error("Error fetching requests:", error);
        setError("Failed to load requests. Please try again.");
        
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  const addMember = async (clubId, userId) => {
    try {
      const response = await fetch("http://localhost:5000/api/clubs/add-member", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ clubId, userId }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Added member:", data);

      // Remove the approved request from state
      setRequests((prevRequests) => prevRequests.filter((req) => req.user_id !== userId));
    } catch (error) {
      console.error("Error adding member:", error);
      setError("Failed to approve request. Please try again.");
    }
  };

  const toggleDetails = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getClubDetails = (clubId) => {
    return clubs.find((club) => club.id === clubId) || {
      name: "Unknown Club",
      description: "No description available",
    };
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Pending Club Join Requests</h2>

      {loading ? (
        <p className="text-gray-500">Loading requests...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : requests.length === 0 ? (
        <p className="text-gray-500">No pending requests</p>
      ) : (
        <div className="grid gap-4">
          {requests.map((req) => {
            const clubDetails = getClubDetails(req.club_id);

            return (
              <div key={req.id} className="p-4 bg-gray-100 rounded-md shadow">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-black">{req.name}</h3>
                  <div className="flex gap-2">
                    <button
                      className="px-4 py-2 bg-violet-500 text-white rounded hover:bg-violet-600 transition"
                      onClick={() => toggleDetails(req.id)}
                    >
                      {expandedId === req.id ? "Hide Details" : "Show Details"}
                    </button>
                    <button
                      className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                      onClick={() => addMember(req.club_id, req.user_id)}
                    >
                      Approve Request
                    </button>
                  </div>
                </div>

                {expandedId === req.id && (
                  <div className="mt-3 p-3 bg-white rounded-md shadow border border-gray-300">
                    <p>
                      <strong>Club:</strong> {clubDetails.name}
                    </p>
                    <p>
                      <strong>Reason for Joining:</strong> {req.interest}
                    </p>
                    <p>
                      <strong>Applied On:</strong> {new Date(req.applied_at).toLocaleDateString()}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AdminControl;
