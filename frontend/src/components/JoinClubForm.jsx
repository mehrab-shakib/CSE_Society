import React, { useState } from "react";

const JoinClubForm = ({ club, onSubmit, onCancel }) => {
  const [step, setStep] = useState(1);
  const [interest, setInterest] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/clubs/join-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId:user.id , clubId: club.id, interest, name: user.name }),
      });

      if (!response.ok) throw new Error("Failed to join club");

      alert("Request sent successfully!");
      onSubmit(); // Notify parent component
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending request.");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg w-full max-w-md mx-auto shadow-md">
      {step === 1 && (
        <div>
          <h2 className="text-xl font-bold mb-4">Join {club.name}?</h2>
          <p>Are you sure you want to join this club?</p>
          <div className="flex justify-end mt-4">
            <button onClick={onCancel} className="mr-2 px-4 py-2 bg-gray-400 text-white rounded">Cancel</button>
            <button onClick={nextStep} className="px-4 py-2 bg-blue-500 text-white rounded">Next</button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className="text-xl font-bold mb-4">Why do you want to join?</h2>
          <textarea
            className="w-full p-2 border rounded"
            rows="3"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            placeholder="Write your reason here..."
          ></textarea>
          <div className="flex justify-end mt-4">
            <button onClick={prevStep} className="mr-2 px-4 py-2 bg-gray-400 text-white rounded">Back</button>
            <button onClick={nextStep} className="px-4 py-2 bg-blue-500 text-white rounded">Next</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <form onSubmit={handleSubmit}>
          <h2 className="text-xl font-bold mb-4">Confirm Request</h2>
          <p><strong>Club:</strong> {club.name}</p>
          <p><strong>Interest:</strong> {interest}</p>
          <div className="flex justify-end mt-4">
            <button onClick={prevStep} className="mr-2 px-4 py-2 bg-gray-400 text-white rounded">Back</button>
            <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default JoinClubForm;
