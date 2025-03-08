import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";



const EditClub = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [club, setClub] = useState({
    name: "",
    description: "",
    image_url: "",
  });

  useEffect(() => {
    // Fetch the club details from the backend using the id
    const fetchClubDetails = async () => {
    //   try {
    //     const response = await fetch(`http://localhost:5000/api/clubs/${id}`);
    //     const data = await response.json();
    //     setClub(data);
    //   } catch (error) {
    //     console.log(error); 
    //     console.error("Error fetching club details:", error);
    //   }

    try {
        const response = await fetch(`http://localhost:5000/api/clubs/${id}`);
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
        setClub(data);
      } catch (error) {
        console.error("Error fetching clubs:", error);
      }
    };

    fetchClubDetails();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClub({ ...club, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/clubs/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(club),
      });
      if (!response.ok) {
        throw new Error("Failed to update club");
      }
      navigate("/"); // Navigate back to the main page after updating
    } catch (error) {
      console.error("Error updating club:", error);
    }
  };

  return (
   <>
   
     <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-30 mb-30">
      <h2 className="text-2xl font-semibold mb-4">Edit Club</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Club Name</label>
          <input
            type="text"
            name="name"
            value={club.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={club.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Image URL</label>
          <input
            type="text"
            name="image_url"
            value={club.image_url}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
    
   </>
  );
};

export default EditClub;
