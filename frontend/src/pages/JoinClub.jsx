/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

const JoinClub = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", reason: "" });

  useEffect(() => {
    alert("Steps to join a club:\n\n1️⃣ Select a Club\n2️⃣ Fill Information\n3️⃣ Proceed to Payment\n4️⃣ Complete!");
  }, []);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-5 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-5 text-center">Join a Club</h1>

      <div className="flex justify-between mb-5">
        {["Select a Club", "Fill Information", "Proceed to Payment", "Complete"].map((label, index) => (
          <div key={index} className={`px-3 py-1 rounded-full ${step === index + 1 ? "bg-blue-500 text-white" : "bg-gray-300"}`}>
            {label}
          </div>
        ))}
      </div>

      {step === 1 && <button onClick={nextStep} className="bg-blue-500 text-white py-2 px-4 rounded">Next</button>}
      {step === 4 && <p className="text-center text-green-600">🎉 You have successfully joined the club!</p>}
    </div>
  );
};

export default JoinClub;
