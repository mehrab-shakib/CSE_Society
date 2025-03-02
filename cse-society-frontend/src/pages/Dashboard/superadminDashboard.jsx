import { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const SuperadminDashboard = () => {
  const [stats, setStats] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/dashboard/stats", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => setStats(res.data))
      .catch((error) => console.error("Error fetching stats", error));
  }, []);

  const data = [
    { name: "Clubs", count: stats.totalClubs },
    { name: "Members", count: stats.totalMembers },
    { name: "Admins", count: stats.totalAdmins },
    { name: "Pending", count: stats.pendingApprovals },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold">Superadmin Dashboard</h2>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="p-4 bg-white shadow-md">
          <h3 className="text-lg font-semibold">Total Clubs</h3>
          <p className="text-2xl font-bold">{stats.totalClubs || 0}</p>
        </div>
        <div className="p-4 bg-white shadow-md">
          <h3 className="text-lg font-semibold">Total Members</h3>
          <p className="text-2xl font-bold">{stats.totalMembers || 0}</p>
        </div>
        <div className="p-4 bg-white shadow-md">
          <h3 className="text-lg font-semibold">Total Admins</h3>
          <p className="text-2xl font-bold">{stats.totalAdmins || 0}</p>
        </div>
        <div className="p-4 bg-white shadow-md">
          <h3 className="text-lg font-semibold">Pending Approvals</h3>
          <p className="text-2xl font-bold">{stats.pendingApprovals || 0}</p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-white shadow-md">
        <h3 className="text-lg font-semibold">Statistics Overview</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#4A90E2" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SuperadminDashboard;
