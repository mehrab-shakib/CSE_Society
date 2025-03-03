import logo from "../assets/footerLogo.svg";
import React, { useState } from "react";
// react icons
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { TbLogout2, TbUsersGroup } from "react-icons/tb";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineFire, AiOutlineNotification } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { IoSettingsOutline, IoCalendarClearOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";

const DashboardNav = () => {
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full relative">
      {/* logo */}
      <img src={logo} alt="logo" className="w-[90px]  " />

      {/* nav links */}
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

      {/* user account */}
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
            Member
          </h1>

          <div
            className={`${
              accountMenuOpen
                ? "translate-y-0 opacity-100 z-[1]"
                : "translate-y-[10px] opacity-0 z-[-1]"
            } bg-white w-max rounded-md absolute top-[45px] right-0 p-[10px] flex flex-col transition-all duration-300 gap-[5px]`}
          >
            <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] text-gray-600 hover:bg-gray-50">
              <FiUser />
              View Profile
            </p>
            <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] text-gray-600 hover:bg-gray-50">
              <IoSettingsOutline />
              Settings
            </p>

            <div className="mt-3 border-t border-gray-200 pt-[5px]">
              <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] text-red-500 hover:bg-red-50">
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

        <CiMenuFries
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          className="text-[1.8rem] text-[#424242]c cursor-pointer md:hidden flex"
        />
      </div>

      {/* mobile sidebar */}
      <aside
        className={` ${
          mobileSidebarOpen
            ? "translate-x-0 opacity-100 z-20"
            : "translate-x-[200px] opacity-0 z-[-1]"
        } md:hidden bg-white p-4 text-center absolute top-[55px] right-0 sm:w-[300px] w-full rounded-md transition-all duration-300`}
      >
        <ul className="items-start gap-[20px] text-[1rem] text-gray-600 flex flex-col">
          {/* product mega menu */}

          <li className="hover:text-[#8F00FF] transition-all duration-500 cursor-poin ter capitalize">
            Announcements
          </li>
          <li className="hover:text-[#8F00FF] transition-all duration-500 cursor-pointer capitalize">
            Events
          </li>
        </ul>
      </aside>
    </nav>
  );
};

export default DashboardNav;
