import { GiHamburgerMenu } from "react-icons/gi";
import { BiHome, BiUser } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { RiArticleLine } from "react-icons/ri";
import { FaComments } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="hidden md:flex flex-col w-64 bg-gray-800 rounded-r-2xl">
      <div className="flex flex-col flex-1 overflow-y-auto">
        <nav className="flex flex-col flex-1 overflow-y-auto bg-gradient-to-b from-gray-700 to-blue-500 px-2 py-4 rounded-r-2xl">
          <div>
            <a href="#" className="flex items-center pr-9">
             <img
             src="/Logo/zeenox.png"
             />
            </a>
          </div>
          <div className="flex flex-col flex-1 gap-1">
            <a href="#" className="flex items-center gap-2 px-4 py-2 mt-2 text-gray-100 hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl">
              <BiHome style={{ fontSize: "20px" }} />
              Home
            </a>
            <a href="#" className="flex items-center gap-2 px-4 py-2 mt-2 text-gray-100 hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl">
              <CgProfile style={{ fontSize: "20px" }} />
              Profile
            </a>
            <a href="#" className="flex items-center gap-2 px-4 py-2 mt-2 text-gray-100 hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl">
              <RiArticleLine style={{ fontSize: "20px" }} />
              Article
            </a>
            <a href="#" className="flex items-center gap-2 px-4 py-2 mt-2 text-gray-100 hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl">
              <BiUser style={{ fontSize: "20px" }} />
              Users
            </a>
            <a href="#" className="flex items-center gap-2 px-4 py-2 mt-2 text-gray-100 hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl">
              <FaComments style={{ fontSize: "20px" }} />
              Comments
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
