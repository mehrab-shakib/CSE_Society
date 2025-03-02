import ClubCard from "../components/ClubCard";

const clubs = [
  { id: 1, name: "Programming Club", description: "Learn coding and problem-solving.", logo: "/assets/images/programming.png" },
  { id: 2, name: "Sports Club", description: "Join sports events and activities.", logo: "/assets/images/sports.png" },
];

const Clubs = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">All Clubs</h2>
      <div className="grid grid-cols-3 gap-6">
        {clubs.map((club) => (
          <ClubCard key={club.id} club={club} />
        ))}
      </div>
    </div>
  );
};

export default Clubs;
