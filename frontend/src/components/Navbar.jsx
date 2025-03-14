import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/CSE SOCIETY.svg"; // Ensure the logo path is correct

const Navbar = () => {
  const location = useLocation(); // Get the current route
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data from local storage or an API
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  const handleLogout = () => {
    // Clear user data from local storage and update state
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center h-16 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center p-2">
          <img src={logo} alt="CSE Society Logo" className="h-10 w-auto" />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden lg:flex space-x-6">
          <Link
            to="/"
            className={`text-gray-700 hover:text-violet-600 hover:border-b-2 hover:border-violet-600 transition duration-300 ${
              location.pathname === "/"
                ? "text-violet-600 border-b-2 border-violet-600"
                : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-gray-700 hover:text-violet-600 hover:border-b-2 hover:border-violet-600 transition duration-300 ${
              location.pathname === "/about"
                ? "text-violet-600 border-b-2 border-violet-600"
                : ""
            }`}
          >
            About CSE Society
          </Link>
          <Link
            to="/clubs"
            className={`text-gray-700 hover:text-violet-600 hover:border-b-2 hover:border-violet-600 transition duration-300 ${
              location.pathname === "/clubs"
                ? "text-violet-600 border-b-2 border-violet-600"
                : ""
            }`}
          >
            Clubs
          </Link>
          <Link
            to="/contact"
            className={`text-gray-700 hover:text-violet-600 hover:border-b-2 hover:border-violet-600 transition duration-300 ${
              location.pathname === "/contact"
                ? "text-violet-600 border-b-2 border-violet-600"
                : ""
            }`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Sign In / Sign Up Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
        {user ? (
            <>
              <span className="text-gray-700">Hello, {user.name}</span>
              {user.role === "member" && (
                <Link
                  to="/userDashboard"
                  className="px-6 py-2 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition duration-300"
                >
                  Dashboard
                </Link>
              )} {user.role === "superadmin" && (

                <Link
                  to="/superadminDashboard"
                  className="px-6 py-2 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition duration-300"
                >
                  Dashboard
                </Link>
              )}{user.role === "admin" && (
                <Link 
                  to="/adminDashboard"
                  className="px-6 py-2 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition duration-300"
                >
                  Dashboard
                </Link>
              )}
              <button
                onClick={handleLogout}
                className="px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-full transition duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-full transition duration-300"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="px-6 py-2 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition duration-300"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
