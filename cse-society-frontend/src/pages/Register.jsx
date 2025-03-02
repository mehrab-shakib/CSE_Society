import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Name" className="w-full p-2 border rounded" onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded mt-2" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="w-full p-2 border rounded mt-2" onChange={(e) => setPassword(e.target.value)} />
        <button className="w-full bg-blue-500 text-white px-4 py-2 mt-4 rounded">Register</button>
      </form>
    </div>
  );
};

export default Register;
