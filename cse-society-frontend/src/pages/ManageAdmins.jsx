/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";

const ManageAdmins = () => {
  const [admins, setAdmins] = useState([]);
  const [users, setUsers] = useState([]);
  const [clubs, setClubs] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [selectedClub, setSelectedClub] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/admins/all").then((res) => setAdmins(res.data));
    axios.get("http://localhost:5000/api/clubs/all").then((res) => setClubs(res.data));
    axios.get("http://localhost:5000/api/users/all").then((res) => setUsers(res.data));
  }, []);

  const handleAssignAdmin = async () => {
    try {
      await axios.post("http://localhost:5000/api/admins/assign", { userId: selectedUser, clubId: selectedClub }, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      });
      alert("User assigned as Admin");
    } catch (error) {
      alert("Error assigning admin");
    }
  };

  const handleRemoveAdmin = async (userId) => {
    try {
      await axios.post("http://localhost:5000/api/admins/remove", { userId }, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      });
      setAdmins(admins.filter((admin) => admin.id !== userId));
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      alert("Error removing admin");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold">Manage Club Admins</h2>

      <div className="mt-4 p-4 bg-white shadow-md">
        <h3 className="text-lg font-semibold">Assign Admin</h3>
        <select onChange={(e) => setSelectedUser(e.target.value)} className="border p-2 w-full my-2">
          <option value="">Select User</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>{user.name} ({user.email})</option>
          ))}
        </select>
        <select onChange={(e) => setSelectedClub(e.target.value)} className="border p-2 w-full my-2">
          <option value="">Select Club</option>
          {clubs.map((club) => (
            <option key={club.id} value={club.id}>{club.name}</option>
          ))}
        </select>
        <button onClick={handleAssignAdmin} className="bg-blue-500 text-white px-4 py-2">Assign</button>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">Club Admins</h3>
        {admins.map((admin) => (
          <div key={admin.id} className="p-4 bg-white shadow-md mt-2 flex justify-between items-center">
            <div>
              <h4 className="font-bold">{admin.name}</h4>
              <p>{admin.email}</p>
              <p className="text-sm text-gray-500">Club ID: {admin.club_id}</p>
            </div>
            <button onClick={() => handleRemoveAdmin(admin.id)} className="bg-red-500 text-white px-3 py-1">Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageAdmins;
