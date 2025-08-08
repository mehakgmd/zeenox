// import { AiOutlineSearch, AiOutlineSetting, AiOutlineLogout } from 'react-icons/ai';
// import { MdOutlineNotificationsActive } from 'react-icons/md';
// import { Link } from 'react-router-dom';

// const TopNavbar = () => {
//   return (
//     <>
//       {/* Top Navbar */}
//       <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
//         <div className="flex items-center px-4">
//           <div className="relative mx-auto text-gray-600">
//             <input
//               className="border border-gray-300 h-10 w-96 px-5 pl-10 rounded-lg text-sm placeholder-current focus:outline-none dark:border-gray-500 dark:text-gray-400"
//               type="search"
//               name="search"
//               placeholder="Search"
//             />
//             <button type="submit" className="absolute left-5 top-0 mt-3 mr-4">
//               <AiOutlineSearch style={{ fontSize: '20px' }} />
//             </button>
//           </div>
//         </div>
//         <div className="flex items-center space-x-4 mr-4">
//           <Link to="/notifications" className="text-gray-600 hover:text-gray-800">
//             <MdOutlineNotificationsActive style={{ fontSize: '20px' }} />
//           </Link>
//           <Link to="/settings" className="text-gray-600 hover:text-gray-800">
//             <AiOutlineSetting style={{ fontSize: '20px' }} />
//           </Link>
//           <Link to="/logout" className="flex items-center text-gray-600 hover:text-gray-800">
//             <AiOutlineLogout style={{ fontSize: '20px' }} />
//             <span className="ml-1 font-bold">Logout</span>
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default TopNavbar;


import { AiOutlineSearch, AiOutlineSetting, AiOutlineLogout } from 'react-icons/ai';
import { MdOutlineNotificationsActive } from 'react-icons/md';
import { Link } from 'react-router-dom';

const TopNavbar = () => {
  return (
    <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
      
      {/* Search bar - hidden on small devices */}
      <div className="hidden sm:flex items-center px-4">
        <div className="relative mx-auto text-gray-600">
          <input
            className="border border-gray-300 h-10 w-96 px-5 pl-10 rounded-lg text-sm placeholder-current focus:outline-none dark:border-gray-500 dark:text-gray-400"
            type="search"
            name="search"
            placeholder="Search"
          />
          <button type="submit" className="absolute left-5 top-0 mt-3 mr-4">
            <AiOutlineSearch style={{ fontSize: '20px' }} />
          </button>
        </div>
      </div>

      {/* Action icons */}
      <div className="flex items-center space-x-4 mr-4 md:ml-44">
        <Link to="/notifications" className="text-gray-600 hover:text-gray-800">
          <MdOutlineNotificationsActive style={{ fontSize: '20px' }} />
        </Link>
        <Link to="/settings" className="text-gray-600 hover:text-gray-800">
          <AiOutlineSetting style={{ fontSize: '20px' }} />
        </Link>
        <Link to="/logout" className="flex items-center text-gray-600 hover:text-gray-800">
          <AiOutlineLogout style={{ fontSize: '20px' }} />
          <span className="ml-1 font-bold">Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default TopNavbar;
