import Sidebar from "../layout/SideBar";
import { AiOutlineSearch, AiOutlineSetting, AiOutlineLogout } from "react-icons/ai";
import { MdOutlineNotificationsActive } from "react-icons/md";

function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
          <div className="flex items-center px-4">
            <div className="relative mx-auto text-gray-600">
              <input
                className="border border-gray-300 h-10 w-96 px-5 pl-10 rounded-lg text-sm placeholder-current focus:outline-none dark:border-gray-500 dark:text-gray-400"
                type="search"
                name="search"
                placeholder="Search"
              />
              <button type="submit" className="absolute left-5 top-0 mt-3 mr-4">
                <AiOutlineSearch style={{ fontSize: "20px" }} />
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-4 mr-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <MdOutlineNotificationsActive style={{ fontSize: "20px" }} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <AiOutlineSetting style={{ fontSize: "20px" }} />
            </a>
            <a href="#" className="flex items-center text-gray-600 hover:text-gray-800">
              <AiOutlineLogout style={{ fontSize: "20px" }} />
              <span className="font-bold">Logout</span>
            </a>
          </div>
        </div>
       <div className="flex-1 flex items-center justify-center">
  <div className="text-center">
    <h1 className="text-2xl font-bold">Welcome to my dashboard!</h1>
  </div>
</div>
      </div>
    </div>
  );
}

export default Dashboard;
