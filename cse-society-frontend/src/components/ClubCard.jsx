const ClubCard = ({ club }) => {
    return (
      <div className="border p-4 rounded-lg shadow-lg">
        <img src={club.logo} alt={club.name} className="w-full h-32 object-cover rounded-md" />
        <h3 className="text-xl font-bold mt-2">{club.name}</h3>
        <p className="text-sm text-gray-600">{club.description}</p>
        <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded">View Club</button>
      </div>
    );
  };
  
  export default ClubCard;
  