import React, { useState } from "react";
import { FaStar, FaRegStar, FaCalendarAlt, FaUser } from "react-icons/fa";
import JoinClubForm from "./JoinClubForm";

const ClubCard = ({ club, activeSection }) => {
  const [isFavorite, setIsFavorite] = useState(club.isFavorite);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showJoinForm, setShowJoinForm] = useState(false); // Show/hide form

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const description = showFullDescription
    ? club.description
    : club.description
    ? `${club.description.slice(0, 100)}...`
    : ""; // Fix for null description

  return (
    <div className="w-full shadow-md hover:shadow-none bg-white rounded-md relative cursor-pointer group before:absolute before:top-0 hover:before:top-[10px] before:left-0 hover:before:left-[-10px] before:w-full before:h-full before:rounded-md before:bg-[#ddc2ff] before:transition-all before:duration-300 before:z-[-1] after:w-full after:h-full after:absolute after:top-0 hover:after:top-[20px] after:left-0 hover:after:left-[-20px] after:rounded-md after:bg-[#efe2ff] after:z-[-2] after:transition-all after:duration-500">
      {/* Club Image */}
      <img
        src={club.image_url}
        alt={club.name}
        className="w-full h-[200px] rounded-t-md object-cover"
      />

      {/* Club Details */}
      <div className="p-[18px] pt-2.5 bg-white rounded-b-md">
        <h3 className="text-[1.5rem] font-bold text-[#45009b]">{club.name}</h3>
        <p className=" mt-2 text-[1rem] font-[400] text-gray-600">
          {description}
          {club.description?.length > 100 && (
            <button
              onClick={toggleDescription}
              className="text-violet-600 ml-2 hover:text-violet-800"
            >
              {showFullDescription ? "See Less" : "See More"}
            </button>
          )}
        </p>

        {/* Show "Member Since" & "Events" Only for "My Clubs" */}
        {activeSection === "my-clubs" && (
          <div className="flex justify-between items-center mt-3 text-gray-600 text-sm">
            <p className="flex items-center gap-1">
              <FaUser className="text-[#45009b]" />
              Member Since: {new Date(club.memberSince).toLocaleDateString()}
            </p>
            <p className="flex items-center gap-1">
              <FaCalendarAlt className="text-[#45009b]" />
              Events: {club.events}
            </p>
          </div>
        )}

        {/* Buttons */}
        <div className="flex justify-between items-center mt-4">
          {/* View Club Button */}
          <button className="py-2 px-4 text-[1rem] transition-all duration-300 bg-[#45009b] text-white rounded-md hover:bg-[#c0e6ed] hover:text-black">
            View Club
          </button>

          {/* Show Favorites Only for "My Clubs" */}
          {activeSection === "my-clubs" && (
            <button
              className="text-[#8727ff] hover:text-[#b070ff] text-lg"
              onClick={() => setIsFavorite(!isFavorite)}
            >
              {isFavorite ? <FaStar /> : <FaRegStar />}
            </button>
          )}

          {/* Show "Join Club" Only for "Join New Club" Section */}
          {activeSection === "join-club" && (
            <button
               onClick={() => setShowJoinForm(true)}
              className="py-2 px-4 text-[1rem] transition-all duration-300 bg-violet-500 text-white rounded-md hover:bg-violet-700"
            >
              Join Club
            </button>
          )}
        </div>
        {/* Show JoinClubForm when button is clicked */}
        {showJoinForm && <JoinClubForm club={club} onSubmit={() => setShowJoinForm(false)} onCancel={() => setShowJoinForm(false)} />}

      </div>
    </div>
  );
};

export default ClubCard;
