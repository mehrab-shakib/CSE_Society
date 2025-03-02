import { useEffect, useState } from "react";
import axios from "axios";

const SuperadminUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => setUsers(res.data))
      .catch((error) => console.error("Error fetching users", error));
  }, []);

  const handlePromote = (id) => {
    axios.put(`http://localhost:5000/api/users/promote/${id}`).then(() => {
      setUsers(users.map((user) => (user.id === id ? { ...user, role: "admin" } : user)));
    });
  };

  const handleDemote = (id) => {
    axios.put(`http://localhost:5000/api/users/demote/${id}`).then(() => {
      setUsers(users.map((user) => (user.id === id ? { ...user, role: "member" } : user)));
    });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/users/${id}`).then(() => {
      setUsers(users.filter((user) => user.id !== id));
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold">User Management</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                {user.role === "member" && <button onClick={() => handlePromote(user.id)}>Promote</button>}
                {user.role === "admin" && <button onClick={() => handleDemote(user.id)}>Demote</button>}
                <button onClick={() => handleDelete(user.id)} className="text-red-500">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SuperadminUsers;
