import React, { useEffect, useState } from "react";

const AdminControl = () => {
  const [requests, setRequests] = useState([]);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    const fetchRequests = async () => {
        try {
            const response = await fetch(
              "http://localhost:5000/api/clubs/requests"
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
            setRequests(data);
          } catch (error) {
            console.error("Error fetching requests:", error);
          }
    };

    fetchRequests();
  }, []);

//   const toggleDetails = (id) => {
//     setExpandedId(expandedId === id ? null : id);
//   };

//   const approveRequest = (id) => {
//     fetch(`/api/club-join-requests/approve/${id}`, { method: "POST" })
//       .then((res) => res.json())
//       .then(() => {
//         setRequests(requests.filter((req) => req.id !== id));
//       })
//       .catch((err) => console.error("Error approving request:", err));
//   };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Pending Club Join Requests</h2>
      {requests.length === 0 ? (
        <p>No pending requests</p>
      ) : (
        <div className="grid gap-4">
          {requests.map((req) => (
            <div key={req.id} className="p-4 bg-gray-100 rounded-md shadow">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{req.member_name}</h3>
                <div className="flex gap-2">
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                    // onClick={() => toggleDetails(req.id)}
                  >
                    {expandedId === req.id ? "Hide Details" : "Show Details"}
                  </button>
                  <button
                    className="px-4 py-2 bg-green-500 text-white rounded"
                    // onClick={() => approveRequest(req.id)}
                  >
                    Approve Request
                  </button>
                </div>
              </div>

              {/* Expandable Details Section */}
              {expandedId === req.id && (
                <div className="mt-3 p-3 bg-white rounded-md shadow">
                  <p>
                    <strong>Club:</strong> {req.club_name}
                  </p>
                  <p>
                    <strong>Email:</strong> {req.email}
                  </p>
                  <p>
                    <strong>Reason for Joining:</strong> {req.reason}
                  </p>
                  <p>
                    <strong>Applied On:</strong>{" "}
                    {new Date(req.applied_at).toLocaleDateString()}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminControl;
