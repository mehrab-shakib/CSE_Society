import React from "react";
import { FaEdit } from "react-icons/fa";

const UserData = ({ user, onEdit }) => {
  return (
    <div className="max-w-md mx-auto bg-white  overflow-hidden border border-gray-100 p-6">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">User Profile</h2>
        <p className="text-sm text-gray-500">Personal Information</p>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between border-b pb-2">
          <span className="text-gray-500 font-medium">Name:</span>
          <span className="text-gray-800 font-semibold">{user.name}</span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span className="text-gray-500 font-medium">Email:</span>
          <span className="text-gray-800 font-semibold">{user.email}</span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span className="text-gray-500 font-medium">Phone:</span>
          <span className="text-gray-800 font-semibold">{user.phone}</span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span className="text-gray-500 font-medium">Roll:</span>
          <span className="text-gray-800 font-semibold">{user.roll}</span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span className="text-gray-500 font-medium">Batch:</span>
          <span className="text-gray-800 font-semibold">{user.batch}</span>
        </div>
      </div>

      <button
        onClick={onEdit}
        className="mt-5 flex items-center justify-center w-full  bg-violet-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-violet-700 transition-all duration-300 shadow-lg"
      >
        <FaEdit className="h-5 w-5 mr-2" />
        Edit Profile
      </button>
    </div>
  );
};

export default UserData;
