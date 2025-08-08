// components/Layout.jsx
import Sidebar from '../layout/SideBar';
import TopNavbar from '../layout/TopNavbar'; // adjust path if needed
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar always visible */}
      <Sidebar />

      {/* Main content area with TopNavbar + page content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar always visible */}
        <TopNavbar />

        {/* Page content changes based on route */}
        <div className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
