import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  Bell, 
  Moon, 
  Sun, 
  Maximize, 
  Minimize, 
  User,
  ChevronDown,
  Search,
  LogOut
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Header = ({ 
  isSidebarCollapsed, 
  setIsSidebarCollapsed,
  isMobileSidebarOpen,
  setIsMobileSidebarOpen
}) => {
  const { user, logout } = useAuth();
  const { isDarkMode, toggleDarkMode } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const notifications = [
    {
      id: 1,
      title: "New Project Assigned",
      desc: "You have been assigned to 'Trackify UI Redesign'",
      time: "2 min ago",
      type: "project"
    },
    {
      id: 2,
      title: "Team Meeting",
      desc: "Daily standup starts in 15 minutes",
      time: "15 min ago",
      type: "event"
    },
    {
      id: 3,
      title: "System Update",
      desc: "Service maintenance scheduled for tonight",
      time: "1 hour ago",
      type: "alert"
    }
  ];

  // Get dynamic title from route
  const getPageTitle = () => {
    const path = location.pathname;
    if (path === '/') return 'Dashboard';
    
    // Handle nested routes
    const segments = path.split('/').filter(Boolean);
    const lastSegment = segments[segments.length - 1];
    
    return lastSegment 
      ? lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1).replace(/-/g, ' ')
      : 'Dashboard';
  };


  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  // Sync fullscreen state
  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handler);
    return () => document.removeEventListener('fullscreenchange', handler);
  }, []);

  return (
    <header className={`h-16 fixed top-0 right-0 z-40 bg-white dark:bg-zinc-950 border-b border-slate-200 dark:border-zinc-800 flex items-center justify-between px-4 lg:px-6 transition-all duration-300 ${
      isSidebarCollapsed ? 'left-0 lg:left-20' : 'left-0 lg:left-64'
    }`}>
      
      <div className="flex items-center gap-2 lg:gap-6">
        <Button 
          variant="ghost"
          size="icon"
          onClick={() => {
            if (window.innerWidth < 1024) {
              setIsMobileSidebarOpen(!isMobileSidebarOpen);
            } else {
              setIsSidebarCollapsed(!isSidebarCollapsed);
            }
          }}
          className="text-slate-500 dark:text-zinc-400"
        >
          <Menu size={22} />
        </Button>
        
        <h1 className="text-xl font-bold text-slate-800 dark:text-white tracking-tight">{getPageTitle()}</h1>
      </div>

      <div className="flex items-center gap-2 lg:gap-4">
        {/* Right Action Icons */}
        <div className="flex items-center gap-1 border-r border-slate-200 dark:border-zinc-800 px-2 mr-2">
          {/* Notifications */}
          <div className="relative">
            <button 
              onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
              className={`p-2.5 text-slate-500 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-900 rounded-full transition-all relative ${isNotificationsOpen ? 'bg-slate-100 dark:bg-zinc-900' : ''}`}
            >
              <Bell size={22} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-zinc-950"></span>
            </button>

            {isNotificationsOpen && (
              <>
                <div 
                  className="fixed inset-0 z-10" 
                  onClick={() => setIsNotificationsOpen(false)}
                ></div>
                
                <div className="absolute right-0 mt-3 w-80 bg-white dark:bg-zinc-900 rounded-xl shadow-xl border border-slate-200 dark:border-zinc-800 py-0 z-20 animate-in fade-in zoom-in duration-200 overflow-hidden">
                  <div className="px-4 py-3 border-b border-slate-100 dark:border-zinc-800 flex items-center justify-between">
                    <p className="text-sm font-bold text-slate-800 dark:text-white">Notifications</p>
                    <span className="text-[10px] bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded-full font-bold">3 New</span>
                  </div>
                  
                  <div className="max-h-[350px] overflow-y-auto">
                    {notifications.map((n) => (
                      <div key={n.id} className="p-4 border-b border-slate-50 dark:border-zinc-800/50 hover:bg-slate-50 dark:hover:bg-zinc-800/50 cursor-pointer transition-colors">
                        <div className="flex gap-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                            n.type === 'project' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600' :
                            n.type === 'event' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600' :
                            'bg-orange-100 dark:bg-orange-900/30 text-orange-600'
                          }`}>
                            <Bell size={16} />
                          </div>
                          <div>
                            <p className="text-[13px] font-bold text-slate-800 dark:text-zinc-200 leading-tight mb-1">{n.title}</p>
                            <p className="text-[11px] text-slate-500 dark:text-zinc-500 line-clamp-2">{n.desc}</p>
                            <p className="text-[10px] text-slate-400 dark:text-zinc-600 mt-2 font-medium">{n.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button className="w-full py-3 text-xs font-bold text-blue-600 dark:text-blue-400 hover:bg-slate-50 dark:hover:bg-zinc-800 transition-colors border-t border-slate-100 dark:border-zinc-800">
                    Mark all as read
                  </button>
                </div>
              </>
            )}
          </div>
          
          <button 
            onClick={toggleDarkMode}
            className="p-2.5 text-slate-500 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-900 rounded-full transition-all"
          >
            {isDarkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>
          
          <button 
            onClick={toggleFullscreen}
            className="p-2.5 text-slate-500 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-900 rounded-full transition-all hidden sm:flex"
          >
            {isFullscreen ? <Minimize size={22} /> : <Maximize size={22} />}
          </button>
        </div>

        {/* User Profile */}
        <div className="relative">
          <div 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-3 pl-2 cursor-pointer group"
          >
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-slate-800 dark:text-white leading-none mb-1">{user?.name}</p>
              <p className="text-[10px] text-slate-500 dark:text-zinc-500 font-medium">
                {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '-') + ' ' + new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-zinc-800 flex items-center justify-center p-0.5 border-2 border-slate-200 dark:border-zinc-800 group-hover:border-blue-500 transition-all">
                <div className="w-full h-full rounded-full bg-slate-400 dark:bg-zinc-700 flex items-center justify-center text-white">
                  <User size={22} />
                </div>
            </div>
          </div>

          {/* Profile Dropdown */}
          {isProfileOpen && (
            <>
              <div 
                className="fixed inset-0 z-10" 
                onClick={() => setIsProfileOpen(false)}
              ></div>
              <div className="absolute right-0 mt-3 w-48 bg-white dark:bg-zinc-900 rounded-xl shadow-xl border border-slate-200 dark:border-zinc-800 py-2 z-20 animate-in fade-in zoom-in duration-200">
                <div className="px-4 py-2 border-b border-slate-100 dark:border-zinc-800 mb-1">
                  <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400 dark:text-zinc-500">Welcome</p>
                </div>
                
                <Link 
                  to="/my-profile" 
                  onClick={() => setIsProfileOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 dark:text-zinc-300 hover:bg-slate-50 dark:hover:bg-zinc-800 transition-colors"
                >
                  <User size={18} className="text-slate-400" />
                  My Profile
                </Link>

                <button 
                  onClick={() => {
                    logout();
                    navigate('/login');
                  }}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
