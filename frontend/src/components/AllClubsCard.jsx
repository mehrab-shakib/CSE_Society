import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import { BsEye, BsThreeDotsVertical } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { HiMiniShare } from "react-icons/hi2";
import { BiLike } from "react-icons/bi";

const AllClubsCard = ({ club, isSuperAdmin }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const navigate = useNavigate();

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  // const description = showFullDescription ? club.description : `${club.description.slice(0, 100)}...`;
  const description = showFullDescription ? club.description : (club.description ? `${club.description.slice(0, 100)}...` : ''); // Fix for null description
  const handleEditClick = () => {
    navigate(`/edit-club/${club.id}`); // Navigate to the Edit Club form
  };
  const handleDeleteClick = async (clubId) => {
    try {
      const token = localStorage.getItem('token'); // or however you're storing the token
      const response = await axios.delete(`http://localhost:5000/api/clubs/delete/${clubId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        alert("Club deleted successfully");
        console.log("Club deleted successfully");
        window.location.reload(); // Reload the page to reflect the changes
        // Optionally, update the state or UI to reflect the deletion
      } else {
        console.error("Failed to delete the club");
      }
    } catch (error) {
      console.error("An error occurred while deleting the club:", error);
    }
  };

  return (
    <div className="w-full md:w-[90%] shadow-lg bg-white rounded-lg mx-auto my-8 hover:shadow-xl transition duration-150 ease-in-out">
      {club.image_url ? (
        <img src={club.image_url} alt={club.name} className="w-full h-64 object-cover rounded-t-lg" />
      ) : (
        <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-t-lg">
          <span className="text-gray-500">No Image Available</span>
        </div>
      )}

      <div className="p-4">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-2xl">{club.name}</h2>
          <BsThreeDotsVertical className="text-gray-600 text-2xl cursor-pointer hover:text-gray-800" />
        </div>

        <div className="flex space-x-4 text-gray-600 my-2">
          <button className="flex items-center gap-1">
            <BsEye className="text-xl" /> 50
          </button>
          <button className="flex items-center gap-1">
            <BiLike className="text-xl" /> 10
          </button>
        </div>
        
        <p className="text-gray-700 my-2">
          {description}
          {club.description?.length > 100 && (
            <button onClick={toggleDescription} className="text-violet-600 ml-2 hover:text-violet-800">
              {showFullDescription ? "See Less" : "See More"}
            </button>
          )}
        </p>

        <div className="flex justify-between items-center mt-4">
          {!isSuperAdmin ? (
            <div className="flex gap-4">
              <FaHeart
                className={`text-xl cursor-pointer ${
                  isFavorite ? "text-violet-600" : "text-gray-600"
                }`}
                onClick={() => setIsFavorite(!isFavorite)}
              />
              <HiMiniShare className="text-xl text-gray-600 cursor-pointer hover:text-gray-800" />
            </div>
          ) : (
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
              onClick={handleEditClick}
              >
                Edit Club
              </button>
              <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition" onClick={() => handleDeleteClick(club.id)}>
                Delete Club
              </button>
            </div>
          )}

          <button className="px-2 py-2 bg-violet-600 text-white  rounded-md hover:bg-violet-700 transition">
            View Club
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllClubsCard;
