import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Clubs = () => {
  const [clubs, setClubs] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || user.role !== "superadmin") {
      navigate("/dashboard");
      return;
    }

    axios.get("http://localhost:5000/api/clubs/all", {
      headers: { Authorization: `Bearer ${user.token}` }
    }).then((res) => setClubs(res.data));
  }, [navigate]);

  const handleCreateClub = async () => {
    try {
      await axios.post("http://localhost:5000/api/clubs/create", { name, description });
      alert("Club created successfully!");
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      alert("Error creating club!");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold">Manage Clubs</h2>

      <div className="mt-4 p-4 bg-white shadow-md">
        <h3 className="text-lg font-semibold">Create Club</h3>
        <input type="text" placeholder="Club Name" value={name} onChange={(e) => setName(e.target.value)} className="border p-2 w-full my-2" />
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="border p-2 w-full my-2" />
        <button onClick={handleCreateClub} className="bg-blue-500 text-white px-4 py-2">Create</button>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">Club List</h3>
        {clubs.map((club) => (
          <div key={club.id} className="p-4 bg-white shadow-md mt-2">
            <h4 className="font-bold">{club.name}</h4>
            <p>{club.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clubs;
