import React from 'react';
import { Menu, UserCircle, Bell, ChevronsLeft, ChevronsRight } from 'lucide-react'; // Added Chevrons for desktop toggle

const TopNavbar = ({ toggleMobileSideNav, toggleDesktopSideNav, isDesktopSideNavExpanded }) => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center h-16 z-10 relative">
      <div className="flex items-center">
        {/* Mobile Hamburger Menu */}
        <button
          onClick={toggleMobileSideNav}
          className="text-gray-600 hover:text-blue-500 md:hidden mr-3 p-1 rounded hover:bg-gray-100 transition-colors"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>

        {/* Desktop Nav Toggle Button */}
        <button
          onClick={toggleDesktopSideNav}
          className="hidden md:block text-gray-600 hover:text-blue-500 mr-4 p-1 rounded hover:bg-gray-100 transition-colors"
          aria-label={isDesktopSideNavExpanded ? "Collapse menu" : "Expand menu"}
        >
          {isDesktopSideNavExpanded ? <ChevronsLeft size={22} /> : <ChevronsRight size={22} />}
        </button>

        {/* Logo Placeholder */}
        <div className="text-xl font-bold text-blue-600">CRM Corp</div>
      </div>
      <div className="flex items-center space-x-3 md:space-x-4">
        <button className="text-gray-500 hover:text-blue-500 p-1 rounded-full hover:bg-gray-100 transition-colors" aria-label="Notifications">
          <Bell size={20} />
        </button>
        <button className="flex items-center text-gray-600 hover:text-blue-500 p-1 rounded hover:bg-gray-100 transition-colors" aria-label="User menu">
          <UserCircle size={24} className="mr-1 md:mr-2" />
          <span className="hidden sm:inline text-sm font-medium">User Name</span>
        </button>
      </div>
    </header>
  );
};

export default TopNavbar;
