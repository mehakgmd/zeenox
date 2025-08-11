import { MdOutlineNotificationsActive } from "react-icons/md";
import { AiOutlineSetting, AiOutlineLogout, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const TopNavbar = ({ onHamburgerClick }) => {
  return (
    <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200 px-4 py-4">
      
      <button
        onClick={onHamburgerClick}
        className="md:hidden p-2 hover:bg-gray-100 rounded"
      >
        <AiOutlineMenu className="text-2xl" />
      </button>

      <div className="hidden sm:flex items-center">
        <input
          className="border border-gray-300 h-10 w-72 px-3 rounded-lg text-sm"
          type="search"
          placeholder="Search"
        />
      </div>

      {/* Action Icons */}
      <div className="flex items-center space-x-4">
        <Link to="/notifications" className="text-gray-700 hover:text-gray-900">
          <MdOutlineNotificationsActive className="text-xl" />
        </Link>
        <Link to="/settings" className="text-gray-700 hover:text-gray-900">
          <AiOutlineSetting className="text-xl" />
        </Link>
        <Link to="/logout" className="flex items-center text-gray-700 hover:text-gray-900">
          <AiOutlineLogout className="text-xl" />
          <span className="hidden sm:inline ml-1 font-bold">Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default TopNavbar;
