import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 flex overflow-hidden">
      {/* Sidebar - Fix height to prevent internal scrolling of layout */}
      <Sidebar isCollapsed={isSidebarCollapsed} setIsCollapsed={setIsSidebarCollapsed} />

      {/* Main Content Area */}
      <div 
        className="flex-1 flex flex-col min-h-screen transition-all duration-300 relative"
        style={{ marginLeft: isSidebarCollapsed ? '80px' : '256px' }}
      >
        <Header 
          isSidebarCollapsed={isSidebarCollapsed} 
          setIsSidebarCollapsed={setIsSidebarCollapsed} 
        />

        {/* Page Content */}
        <main className="flex-1 p-4 lg:p-8 mt-16 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
