import logo from "../assets/footerLogo.svg";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// React Icons
import { IoIosArrowDown, IoIosArrowUp, IoIosSearch } from "react-icons/io";
import { TbLogout2, TbUsersGroup, TbMenu3 } from "react-icons/tb";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineFire, AiOutlineNotification } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { IoSettingsOutline, IoCalendarClearOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

const DashboardNav = ({
  sidebarOpen,
  setSidebarOpen,
  activeSection,
  setActiveSection,
  user,
}) => {
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="flex items-center gap-3 justify-between w-full relative shadow-lg">
      <div className="flex items-center gap-3">
        {/* Sidebar Toggle Icon */}
        <TbMenu3
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-[1.8rem] text-violet-600 cursor-pointer transition delay-80 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
        />

        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="w-32 mx-auto" />
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="items-center gap-[20px] text-[1rem] text-[#424242] md:flex hidden">
        <div className="relative mt-5 mb-5">
          <input
            className="py-1.5 pr-4 w-full pl-10 rounded-full border border-gray-200 outline-none focus:border-[#8F00FF]"
            placeholder="Search..."
          />
          <IoIosSearch className="absolute top-[8px] left-3 text-gray-500 text-[1.3rem]" />
        </div>

        <li className="flex items-center hover:text-[#8F00FF] group gap-[5px] cursor-pointer">
          <AiOutlineNotification className="text-[1.1rem] group-hover:text-[#8F00FF] text-gray-600" />
          Announcements
        </li>
        <li className="flex items-center hover:text-[#8F00FF] group gap-[5px] cursor-pointer">
          <IoCalendarClearOutline className="text-[1.1rem] group-hover:text-[#8F00FF] text-gray-600" />
          Events
        </li>
      </ul>

      {/* User Account Section */}
      <div className="flex items-center gap-[15px]">
        <div
          className="flex items-center gap-[10px] cursor-pointer relative"
          onClick={() => setAccountMenuOpen(!accountMenuOpen)}
        >
          <div className="relative">
            <FaRegCircleUser className="text-[1.5rem] text-gray-600" />
            <div className="w-[10px] h-[10px] rounded-full bg-green-500 absolute bottom-[0px] right-0 border-2 border-white"></div>
          </div>

          <h1 className="text-[1rem] font-[400] text-gray-600 sm:block hidden">
            {user ? user.name : "Guest"}
          </h1>

          <div
            className={`${
              accountMenuOpen
                ? "translate-y-0 opacity-100 z-[1]"
                : "translate-y-[10px] opacity-0 z-[-1]"
            } bg-white w-max rounded-md absolute top-[45px] right-0 p-[10px] flex flex-col transition-all duration-300 gap-[5px]`}
          >
            <p className="flex items-center gap-[5px] rounded-md p-[8px] text-[1rem] text-gray-600 hover:bg-gray-50">
              <FiUser />
              View Profile
            </p>
            <p className="flex items-center gap-[5px] rounded-md p-[8px] text-[1rem] text-gray-600 hover:bg-gray-50">
              <IoSettingsOutline />
              Settings
            </p>

            <div className="mt-3 border-t border-gray-200 pt-[5px]">
              <p
                className="flex items-center gap-[5px] rounded-md p-[8px] text-[1rem] text-red-500 hover:bg-red-50"
                onClick={handleLogout}
              >
                <TbLogout2 />
                Logout
              </p>
            </div>
          </div>

          <IoIosArrowUp
            className={`${
              accountMenuOpen ? "rotate-0" : "rotate-[180deg]"
            } transition-all duration-300 text-gray-600 sm:block hidden`}
          />
        </div>

        {/* Mobile Sidebar Toggle */}
        <CiMenuFries
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          className="text-[1.8rem] text-[#424242] cursor-pointer md:hidden flex"
        />
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-[250px] bg-white shadow-lg transition-transform transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } p-5 z-20`}
      >
        {/* Sidebar Header with Close Button */}
        <div className="flex justify-between items-center mb-5">
        <Link to ="/">
          <img src={logo} alt="logo" className="w-[90px]" />
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-xl text-gray-600 bg-violet-300 rounded-full hover:bg-violet-400 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            <MdOutlineKeyboardDoubleArrowLeft />
          </button>
        </div>

        {/* Sidebar Content with Active State Highlighting */}
        <ul className="space-y-4 text-gray-700">
          <li className="hover:text-[#8F00FF] bg-gray-100 p-2 cursor-pointer flex items-center gap-2">
            <AiOutlineFire />
            Dashboard
          </li>

          {/* Clubs Section */}
          <li className="text-gray-500 uppercase font-bold mt-4 bg-gray-100 p-2">
            Clubs
          </li>
          <li
            className={`p-2 cursor-pointer flex items-center gap-2 ${
              activeSection === "my-clubs"
                ? "bg-[#f4ebff] text-[#45009b]"
                : "hover:text-[#8F00FF] hover:bg-gray-100"
            }`}
            onClick={() => setActiveSection("my-clubs")}
          >
            <TbUsersGroup />
            My Clubs
          </li>
          <li
            className={`p-2 cursor-pointer flex items-center gap-2 ${
              activeSection === "join-club"
                ? "bg-[#f4ebff] text-[#45009b]"
                : "hover:text-[#8F00FF] hover:bg-gray-100"
            }`}
            onClick={() => setActiveSection("join-club")}
          >
            <IoIosArrowDown />
            Join New Club
          </li>

          {/* User Section (RESTORED) */}
          <li className="text-gray-500 uppercase font-bold mt-4 bg-gray-100 p-2">
            User
          </li>
          <li className="hover:text-[#8F00FF] hover:bg-gray-100 p-2 cursor-pointer flex items-center gap-2">
            <FiUser />
            Profile
          </li>
          <li className="hover:text-[#8F00FF] hover:bg-gray-100 p-2 cursor-pointer flex items-center gap-2">
            <IoSettingsOutline />
            Settings
          </li>
        </ul>
      </aside>
    </nav>
  );
};

export default DashboardNav;
