/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { TiUserAddOutline } from "react-icons/ti";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from "../assets/footerLogo.svg";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();
    // Handle input changes
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    // Handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      setSuccess("");
  
      try {
        const response = await axios.post("http://localhost:5000/api/auth/register", formData);
        setSuccess(response.data.message);
        setTimeout(() => navigate("/login"), 2000); // Redirect to login page after success
      } catch (err) {
        setError(err.response?.data?.message || "Registration failed");
      }
    };
  return (
    <div className='container'>
      <div className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div>
            <img
              src={logo}
              className="w-50 mx-auto"
              alt="Logo"
            />
          </div>
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">
              Join Us Today!
            </h1>
            <div className="w-full flex-1 mt-8">
              <div className="flex flex-col items-center">
                <button
                  className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
                >
                  <div className="bg-white p-2 rounded-full">
                    <FaGoogle className="w-6 h-6" />
                  </div>
                  <span className="ml-4">
                    Sign Up with Google
                  </span>
                </button>

                <button
                  className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5"
                >
                  <div className="bg-white p-1 rounded-full">
                  <FaGithub className="w-6 h-6" />
                    
                  </div>
                  <span className="ml-4">
                    Sign Up with GitHub
                  </span>
                </button>
              </div>

              <div className="my-12 border-b text-center">
                <div
                  className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"
                >
                  Or sign up with e-mail
                </div>
              </div>

              <div className="mx-auto max-w-xs">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  className="mt-5 tracking-wide font-semibold bg-violet-500 text-gray-100 w-full py-4 rounded-lg hover:bg-violet-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  onClick={handleSubmit}
                >
                  <TiUserAddOutline className="w-6 h-6" />
                  <span className="ml-3">
                    Sign Up
                  </span>
                </button>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  I agree to all {" "} 
                  <a href="#" className="border-b border-gray-500 border-dotted">
                     Terms of Service {" "} 
                  </a>
                  and its {" "} 
                  <a href="#" className="border-b border-gray-500 border-dotted">
                    Privacy Policy.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-violet-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')" }}
          ></div>
        </div>
      </div>
      
    </div>
  );
};

export default Register;