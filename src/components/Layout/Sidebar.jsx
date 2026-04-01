import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  CheckSquare, 
  FolderKanban, 
  CalendarCheck, 
  Clock, 
  Building2, 
  Settings, 
  LogOut,
  ChevronRight,
  Menu,
  CalendarDays,
  TrendingUp,
  History,
  Camera,
  BarChart3,
  Users,
  User,
  Lock
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Sidebar = ({ isCollapsed, setIsCollapsed, isMobileOpen, setIsMobileOpen }) => {
  const { logout } = useAuth();
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
    { 
      name: 'Reports', 
      icon: FileText, 
      path: '/reports',
      hasSubmenu: true,
      subItems: [
        { name: 'Tracked Hours', icon: Clock, path: '/reports/tracked-hours' },
        { name: 'Attendance', icon: CalendarDays, path: '/reports/attendance' },
        { name: 'Activity Level', icon: TrendingUp, path: '/reports/activity-level' },
        { name: 'Timeline', icon: History, path: '/reports/timeline' },
        { name: 'Screenshots', icon: Camera, path: '/reports/screenshots' },
        // { name: 'Task Reports', icon: BarChart3, path: '/reports/task-reports' },
      ]
    },
    { name: 'Tasks', icon: CheckSquare, path: '/tasks' },
    { name: 'Projects', icon: FolderKanban, path: '/projects' },
    { name: 'Attendance', icon: CalendarCheck, path: '/attendance' },
    // { name: 'Time Requests', icon: Clock, path: '/time-requests' },
    { 
      name: 'My Company', 
      icon: Building2, 
      path: '/company', 
      hasSubmenu: true,
      subItems: [
        { name: 'Employees', icon: Users, path: '/company/employees' },
        { name: 'Roles & Permissions', icon: FileText, path: '/company/roles' },
      ]
    },
    { 
      name: 'Settings', 
      icon: Settings, 
      path: '/settings', 
      hasSubmenu: true,
      subItems: [
        { name: 'Profile', icon: User, path: '/settings/profile' },
        { name: 'Change Password', icon: Lock, path: '/settings/password' },
        { name: 'Email Templates', icon: FileText, path: '/settings/email-templates' },
      ]
    },
  ];

  const [expandedMenus, setExpandedMenus] = useState(['Reports']);

  const toggleSubmenu = (menuName) => {
    setExpandedMenus(prev => 
      prev.includes(menuName) 
        ? prev.filter(m => m !== menuName) 
        : [...prev, menuName]
    );
  };

  return (
    <aside className={`fixed top-0 left-0 h-full transition-all duration-300 z-50 flex flex-col bg-[#12141a] text-slate-400 border-r border-zinc-800 w-64 ${
      isCollapsed ? 'lg:w-20' : 'lg:w-64'
    } ${
      isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
    }`}>
      {/* Logo Section */}
      <div className="h-16 flex items-center gap-3 px-6 mb-4">
        <div className="min-w-[32px] h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/20">T</div>
        {!isCollapsed && (
          <span className="text-xl font-bold tracking-tight text-white">Trackify</span>
        )}
      </div>

      <div className="px-4 mb-2">
          {!isCollapsed && <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-600 mb-4 px-2">Navigation</p>}
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 overflow-y-auto px-2 space-y-1">
        {menuItems.map((item) => (
          <div key={item.name}>
            <NavLink
              to={item.path}
              onClick={(e) => {
                if (item.hasSubmenu && !isCollapsed) {
                  e.preventDefault();
                  toggleSubmenu(item.name);
                }
              }}
              className={({ isActive }) => 
                `flex items-center gap-3 px-3 py-3 rounded-lg transition-all group relative ${
                  (isActive || (item.hasSubmenu && expandedMenus.includes(item.name)))
                  ? 'bg-blue-600/10 text-white font-medium' 
                  : 'hover:bg-zinc-800 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <item.icon size={20} className={isActive ? 'text-blue-500' : 'group-hover:text-blue-400'} />
                  {!isCollapsed && <span className="flex-1 text-sm">{item.name}</span>}
                  {!isCollapsed && item.hasSubmenu && (
                    <ChevronRight 
                      size={14} 
                      className={`transition-transform duration-200 ${expandedMenus.includes(item.name) ? 'rotate-90' : 'opacity-40'}`} 
                    />
                  )}
                  
                  {/* Active Indicator Line */}
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-blue-500 rounded-r-full" />
                  )}
                </>
              )}
            </NavLink>

            {/* Submenu Items */}
            {!isCollapsed && item.hasSubmenu && expandedMenus.includes(item.name) && (
              <div className="mt-1 ml-4 space-y-1 animate-in slide-in-from-top-2 duration-200">
                {item.subItems?.map((sub) => (
                  <NavLink
                    key={sub.name}
                    to={sub.path}
                    className={({ isActive }) => 
                      `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group text-sm ${
                        isActive 
                        ? 'text-white font-bold bg-zinc-800/50' 
                        : 'text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800/30'
                      }`
                    }
                  >
                    <sub.icon size={16} className="group-hover:text-blue-400 opacity-70" />
                    <span>{sub.name}</span>
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Footer / Logout */}
      <div className="p-4 border-t border-zinc-900">
        <button 
          onClick={logout}
          className="w-full flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-red-500/10 hover:text-red-500 transition-all group relative"
        >
          <LogOut size={20} />
          {!isCollapsed && <span className="text-sm font-medium">Logout</span>}
          {isCollapsed && (
              <div className="absolute left-full ml-2 px-2 py-1 bg-red-900/90 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap shadow-xl z-[100]">
                Logout
              </div>
          )}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
