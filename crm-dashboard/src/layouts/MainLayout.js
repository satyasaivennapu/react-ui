import React, { useState, useEffect } from 'react';
import TopNavbar from '../components/Nav/TopNavbar';
import SideNav from '../components/Nav/SideNav';

const MainLayout = ({ children }) => {
  // State for desktop sidenav (expanded/collapsed)
  const [isDesktopSideNavExpanded, setIsDesktopSideNavExpanded] = useState(true);
  // State for mobile sidenav (open/closed)
  const [isMobileSideNavOpen, setIsMobileSideNavOpen] = useState(false);

  const toggleDesktopSideNav = () => {
    setIsDesktopSideNavExpanded(!isDesktopSideNavExpanded);
  };

  const toggleMobileSideNav = () => {
    setIsMobileSideNavOpen(!isMobileSideNavOpen);
  };

  // Close mobile sidenav on larger screens if it's open
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileSideNavOpen) { // 768px is Tailwind's 'md' breakpoint
        setIsMobileSideNavOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileSideNavOpen]);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* SideNav for Desktop */}
      <div className="hidden md:flex"> {/* Hidden on mobile, flex on md and up */}
        <SideNav
          isOpen={isDesktopSideNavExpanded}
          toggle={toggleDesktopSideNav}
          isMobile={false}
        />
      </div>

      {/* SideNav for Mobile (Overlay) */}
      {isMobileSideNavOpen && (
        <div className="md:hidden fixed inset-0 z-30">
           {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={toggleMobileSideNav}
          ></div>
          <div className="relative"> {/* Container for the actual SideNav */}
            <SideNav
              isOpen={true} // Mobile nav is always "expanded" when open
              toggle={toggleMobileSideNav}
              isMobile={true}
            />
          </div>
        </div>
      )}

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNavbar
          toggleDesktopSideNav={toggleDesktopSideNav}
          toggleMobileSideNav={toggleMobileSideNav}
          isDesktopSideNavExpanded={isDesktopSideNavExpanded}
        />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
