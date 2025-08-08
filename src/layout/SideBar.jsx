import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiHome, BiUser } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaComments } from "react-icons/fa";
import { MdOutlinePayment } from 'react-icons/md';
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      {/* Hamburger Icon (mobile only) */}
      <div className="md:hidden p-4">
        <button onClick={() => setIsDrawerOpen(true)}>
          <GiHamburgerMenu className="text-2xl text-gray-800" />
        </button>
      </div>

      {/* Overlay (mobile only) */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      {/* Sidebar / Drawer */}
      <div
        className={`
          fixed md:static top-0 left-0 h-full w-64 text-white z-50 
          transform transition-transform duration-300
          ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:flex flex-col rounded-r-2xl
        `}
      >
        <div className="flex flex-col h-full bg-gradient-to-b from-gray-700 to-blue-500 px-4 py-6 rounded-r-2xl">
         {/* Logo */}
          <div className="flex items-center mb-6">
                 <a href="#" className="flex items-center pr-9">
             <img
             src="/Logo/zeenox.png"
             />
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-2">
            <SidebarLink icon={<BiHome />} text="Home" to="/dashboard"/>
            <SidebarLink icon={<CgProfile />} text="Profile" />
            <SidebarLink icon={<MdOutlinePayment />} text="Subscription" to="/subscriptions" />
            <SidebarLink icon={<BiUser />} text="Users" />
            <SidebarLink icon={<FaComments />} text="Comments" />
          </nav>
        </div>
      </div>
    </>
  );
};

const SidebarLink = ({ icon, text, to }) => {
  return (
    <Link
      to={to}
      className="flex items-center gap-3 px-4 py-2 hover:bg-gray-700 text-white rounded transition-all"
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
};
export default Sidebar;
