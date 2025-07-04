import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LayoutDashboard, MapPin, Building, Car, Tags, Lock, Users, Settings, ChevronDown, ChevronUp, X } from 'lucide-react';

const navItemsConfig = [
  { path: '/', name: 'Dashboard', icon: LayoutDashboard },
  {
    name: 'Masters',
    icon: Settings,
    subItems: [
      { path: '/masters/locations', name: 'Locations', icon: MapPin },
      { path: '/masters/location-type', name: 'Location Type', icon: Building },
      { path: '/masters/room-type', name: 'Room Type', icon: Building },
      { path: '/masters/parking-type', name: 'Parking Type', icon: Car },
      { path: '/masters/tax-type', name: 'Tax Type', icon: Tags },
    ],
  },
  {
    name: 'Lockers',
    icon: Lock,
    subItems: [
      { path: '/lockers/mobile', name: 'Mobile Locker', icon: Lock },
      { path: '/lockers/normal', name: 'Normal Locker', icon: Lock },
    ],
  },
  {
    name: 'Rooms',
    icon: Users,
    subItems: [
        { path: '/rooms/room-type', name: 'Room Type', icon: Building }
    ]
  },
  {
    name: 'Parking',
    icon: Car,
    subItems: [
        { path: '/parking/parking-type', name: 'Parking Type', icon: Car }
    ]
  },
];

const SideNavItem = ({ item, isOpen, isMobile, closeMobileNav }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const location = useLocation();

  // Check if the current item or any of its sub-items are active
  const isActiveParent = item.subItems && item.subItems.some(sub => location.pathname.startsWith(sub.path));

  // Open submenu if a child is active
  React.useEffect(() => {
    if (isActiveParent) {
      setIsSubMenuOpen(true);
    }
  }, [isActiveParent]);


  const handleItemClick = () => {
    if (item.subItems) {
      setIsSubMenuOpen(!isSubMenuOpen);
    } else if (isMobile) {
      closeMobileNav(); // Close mobile nav on item click
    }
  };

  if (item.subItems) {
    return (
      <li className="mb-1">
        <button
          onClick={handleItemClick}
          className={`w-full flex items-center justify-between py-2.5 px-4 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition-colors duration-150 ${
            isActiveParent && isOpen ? 'bg-gray-700 text-white' : ''
          }`}
        >
          <div className="flex items-center">
            <item.icon size={isOpen ? 20 : 24} className={isOpen ? "mr-3" : "mx-auto"} />
            {isOpen && <span className="text-sm font-medium">{item.name}</span>}
          </div>
          {isOpen && (isSubMenuOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />)}
        </button>
        {isSubMenuOpen && isOpen && (
          <ul className="pl-7 mt-1 space-y-1">
            {item.subItems.map((subItem) => (
              <SideNavItem key={subItem.name} item={subItem} isOpen={isOpen} isMobile={isMobile} closeMobileNav={closeMobileNav} />
            ))}
          </ul>
        )}
      </li>
    );
  }

  return (
    <li className="mb-1">
      <NavLink
        to={item.path}
        onClick={handleItemClick}
        className={({ isActive }) =>
          `flex items-center py-2.5 px-4 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition-colors duration-150 ${
            isActive ? 'bg-blue-600 text-white shadow-lg font-semibold' : ''
          }`
        }
      >
        <item.icon size={isOpen ? 20 : 24} className={isOpen ? "mr-3" : "mx-auto"} />
        {isOpen && <span className="text-sm font-medium">{item.name}</span>}
      </NavLink>
    </li>
  );
};

const SideNav = ({ isOpen, toggle, isMobile }) => {
  // For mobile, 'isOpen' is always true visually, actual open/close is managed by MainLayout state
  const displayOpen = isMobile ? true : isOpen;

  return (
    <div
      className={`bg-gray-800 text-white flex flex-col h-full shadow-xl
                  ${isMobile ? 'w-64 fixed' : 'relative'}
                  ${displayOpen ? (isMobile ? 'w-64' : 'w-64') : 'w-20'}
                  transition-all duration-300 ease-in-out z-20`} // z-20 for desktop, mobile is handled by MainLayout's z-30
    >
      <div className={`p-4 flex items-center justify-between border-b border-gray-700 h-16 ${displayOpen ? '' : 'px-0'}`}>
        {displayOpen && <span className="text-lg font-bold text-white ml-1">Main Menu</span>}
        {isMobile && ( // Show close button only on mobile SideNav
          <button onClick={toggle} className="text-gray-400 hover:text-white p-1 rounded hover:bg-gray-700">
            <X size={22} />
          </button>
        )}
         {!isMobile && !displayOpen && ( // Placeholder for icon when collapsed on desktop, if needed
            <div className="w-full flex justify-center">
                 {/* Could be a small logo or generic icon if menu text is hidden */}
            </div>
        )}
      </div>
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        <ul>
          {navItemsConfig.map((item) => (
            <SideNavItem
              key={item.name}
              item={item}
              isOpen={displayOpen}
              isMobile={isMobile}
              closeMobileNav={isMobile ? toggle : () => {}} // Pass down the toggle function to close mobile nav
            />
          ))}
        </ul>
      </nav>
      {displayOpen && (
         <div className="p-4 border-t border-gray-700 text-center text-xs text-gray-400">
            CRM Dashboard &copy; 2024
        </div>
      )}
    </div>
  );
};

export default SideNav;
