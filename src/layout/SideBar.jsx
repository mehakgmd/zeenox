import { BiHome, BiUser } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaComments } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed md:static top-0 left-0 h-full w-64 text-white z-50
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:flex flex-col rounded-r-2xl
        `}
      >
        <div className="flex flex-col h-full bg-gradient-to-b from-gray-800 to-blue-500 px-4 py-6 rounded-r-2xl">
          {/* Logo */}
          <div className="flex items-center mb-6 mr-6">
            <img src="/Logo/zeenox.png" alt="Logo" height={"10px"}/>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-2">
            <SidebarLink icon={<BiHome />} text="Home" to="/dashboard" setIsOpen={setIsOpen} />
            <SidebarLink icon={<CgProfile />} text="Profile" to="/profile" setIsOpen={setIsOpen} />
            <SidebarLink icon={<MdOutlinePayment />} text="Subscription" to="/subscriptions" setIsOpen={setIsOpen} />
            <SidebarLink icon={<BiUser />} text="Users" to="/users" setIsOpen={setIsOpen} />
            <SidebarLink icon={<FaComments />} text="Comments" to="/comments" setIsOpen={setIsOpen} />
          </nav>
        </div>
      </div>
    </>
  );
};

const SidebarLink = ({ icon, text, to, setIsOpen }) => {
  return (
    <Link
      to={to}
      onClick={() => setIsOpen(false)}
      className="flex items-center gap-3 px-4 py-2 hover:bg-white/20 text-white rounded transition-all"
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
};

export default Sidebar;
