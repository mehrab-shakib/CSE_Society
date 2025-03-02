import { NavLink } from "react-router-dom";
import { HomeIcon, UsersIcon, Cog6ToothIcon, BuildingOfficeIcon } from "@heroicons/react/24/outline";

const Sidebar = () => {
  return (
    <aside className="h-screen w-64 bg-white border-r shadow-lg">
      <div className="p-4 text-lg font-bold">CSE Society</div>
      <nav className="mt-4">
        <NavLink to="/dashboard" className="flex items-center p-3 hover:bg-gray-200">
          <HomeIcon className="w-6 h-6 mr-2" /> Dashboard
        </NavLink>
        <NavLink to="/clubs" className="flex items-center p-3 hover:bg-gray-200">
          <BuildingOfficeIcon className="w-6 h-6 mr-2" /> Clubs
        </NavLink>
        <NavLink to="/users" className="flex items-center p-3 hover:bg-gray-200">
          <UsersIcon className="w-6 h-6 mr-2" /> Users
        </NavLink>
        <NavLink to="/settings" className="flex items-center p-3 hover:bg-gray-200">
          <Cog6ToothIcon className="w-6 h-6 mr-2" /> Settings
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
