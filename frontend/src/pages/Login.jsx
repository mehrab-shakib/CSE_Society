import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import access from "../assets/accessAccount.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      // Store token and user data
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      navigate("/userDashboard"); // Redirect to the dashboard after login
    } catch (err) {
      // Set error message from backend
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div>
      <section className="flex flex-col md:flex-row h-screen items-center">
        {/* Left Side - Image */}
        <div className="bg-violet-600 hidden lg:block w-full md:w-2/3 xl:w-1/2 h-screen">
          <img src={access} alt="Login Illustration" className="mt-20 w-150 h-auto object-cover" />
        </div>

        {/* Right Side - Login Form */}
        <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
          <div className="w-full h-100">
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>

            {error && <p className="text-red-500 mt-2">{error}</p>}

            <form className="mt-6" onSubmit={handleLogin}>
              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  required
                />
              </div>

              <div className="text-right mt-2">
                <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700">Forgot Password?</a>
              </div>

              <button
                type="submit"
                className="w-full block bg-violet-500 hover:bg-violet-300 text-white font-semibold rounded-lg px-8 py-3 mt-6"
              >
                Log In
              </button>
            </form>

            <hr className="my-6 border-gray-300 w-full" />

            <button className="w-full block bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
              <div className="flex items-center justify-center">
                <span className="ml-4">Log in with Google</span>
              </div>
            </button>

            <p className="mt-8">
              Need an account?{" "}
              <Link to="/register" className="text-blue-500 hover:text-blue-700 font-semibold">Create an account</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
