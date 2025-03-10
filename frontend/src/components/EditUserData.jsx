import React, { useState } from "react";
import { CiSaveDown2, CiCircleRemove } from "react-icons/ci";

const EditUserData = ({ user, setUser, onCancel }) => {
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    roll: user?.roll || "",
    batch: user?.batch || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/users/update/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const updatedUser = await response.json();
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
      alert("Profile updated successfully!");
      onCancel();
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile.");
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-xl rounded-2xl border border-gray-200 p-6">
      <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
        Edit Profile
      </h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        {["name", "email", "phone", "roll", "batch"].map((field, index) => (
          <div key={index} className="relative">
            <label
              htmlFor={field}
              className="block text-gray-600 font-medium mb-1"
            >
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <input
              type={field === "email" ? "email" : "text"}
              id={field}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg shadow-sm text-gray-700 focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition duration-300 outline-none"
              required
            />
          </div>
        ))}
        <div className="flex justify-between items-center mt-6">
          <button
            type="submit"
            className="flex items-center bg-violet-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-violet-700 transition-all duration-300 shadow-lg"
          >
            <CiSaveDown2  className="h-5 w-5 mr-2" />
            Update Profile
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="flex items-center bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 shadow-lg"
          >
            <CiCircleRemove className="h-5 w-5 mr-2" />
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUserData;
