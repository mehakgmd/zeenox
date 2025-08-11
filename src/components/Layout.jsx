import Sidebar from '../layout/SideBar';
import TopNavbar from '../layout/TopNavbar';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <TopNavbar onHamburgerClick={() => setIsSidebarOpen(true)} />

        <div className="flex-1 p-4 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
