import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Calendar, 
  ChevronDown, 
  RotateCcw, 
  LogIn, 
  LogOut, 
  FileEdit, 
  CheckCircle2, 
  Clock, 
  Coffee,
  MoreVertical,
  User,
  Monitor,
  MapPin
} from 'lucide-react';

const Timeline = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState('All Employees');
  const [selectedDate, setSelectedDate] = useState('27 March, 2026');

  const activities = [
    {
      id: 1,
      type: 'login',
      user: 'Vatsal Prajapati',
      action: 'Logged into the system',
      time: '09:00 AM',
      date: '27 Mar, 2026',
      details: 'System: Chrome v122 - Windows 11',
      location: 'Ahmedabad, India',
      status: 'success'
    },
    {
      id: 2,
      type: 'task_update',
      user: 'Vatsal Prajapati',
      action: 'Updated task "Dashboard UI Refactor"',
      time: '10:30 AM',
      date: '27 Mar, 2026',
      details: 'Changed status from In Progress to Review',
      location: 'Internal Network',
      status: 'info'
    },
    {
      id: 3,
      type: 'break',
      user: 'Vatsal Prajapati',
      action: 'Started morning break',
      time: '11:45 AM',
      date: '27 Mar, 2026',
      details: 'Duration: 15 minutes',
      location: 'N/A',
      status: 'warning'
    },
    {
      id: 4,
      type: 'task_complete',
      user: 'Vatsal Prajapati',
      action: 'Completed task "API Integration"',
      time: '02:15 PM',
      date: '27 Mar, 2026',
      details: 'All test cases passed',
      location: 'Internal Network',
      status: 'success'
    },
    {
      id: 5,
      type: 'logout',
      user: 'Vatsal Prajapati',
      action: 'Logged out from the system',
      time: '06:30 PM',
      date: '27 Mar, 2026',
      details: 'Session duration: 9h 30m',
      location: 'Ahmedabad, India',
      status: 'error'
    }
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'login': return <LogIn size={18} className="text-emerald-500" />;
      case 'logout': return <LogOut size={18} className="text-rose-500" />;
      case 'task_update': return <FileEdit size={18} className="text-blue-500" />;
      case 'task_complete': return <CheckCircle2 size={18} className="text-indigo-500" />;
      case 'break': return <Coffee size={18} className="text-amber-500" />;
      default: return <Clock size={18} className="text-slate-500" />;
    }
  };

  const getBadgeColor = (status) => {
    switch (status) {
      case 'success': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case 'info': return 'bg-blue-50 text-blue-600 border-blue-100';
      case 'warning': return 'bg-amber-50 text-amber-600 border-amber-100';
      case 'error': return 'bg-rose-50 text-rose-600 border-rose-100';
      default: return 'bg-slate-50 text-slate-600 border-slate-100';
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-800 dark:text-white tracking-tight">Activity Timeline</h1>
          <p className="text-slate-500 dark:text-zinc-400 font-medium mt-1">Track employee activities in real-time</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search activity..."
              className="pl-10 pr-4 py-2.5 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl text-sm font-medium focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all w-64 shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border border-slate-100 dark:border-zinc-800 p-5 rounded-2xl shadow-sm flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-zinc-900 rounded-lg text-slate-500 dark:text-zinc-400">
          <Filter size={16} />
          <span className="text-xs font-bold uppercase tracking-wider">Filters</span>
        </div>

        {/* Employee Select */}
        <div className="relative group">
          <select 
            value={selectedEmployee}
            onChange={(e) => setSelectedEmployee(e.target.value)}
            className="pl-4 pr-10 py-2.5 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl text-sm font-bold text-slate-600 dark:text-zinc-400 appearance-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all cursor-pointer hover:border-slate-300 dark:hover:border-zinc-700 min-w-[180px]"
          >
            <option>All Employees</option>
            <option>Vatsal Prajapati</option>
            <option>Jaydeep Solanki</option>
          </select>
          <div className="absolute inset-y-0 right-3.5 flex items-center pointer-events-none text-slate-400">
            <ChevronDown size={16} />
          </div>
        </div>

        {/* Date Select */}
        <div className="relative group">
          <div className="flex items-center gap-2 pl-4 pr-4 py-2.5 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl text-sm font-bold text-slate-600 dark:text-zinc-400 min-w-[180px]">
            <Calendar size={16} className="text-slate-400" />
            <span>{selectedDate}</span>
          </div>
        </div>

        <button 
          className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl text-sm font-black text-slate-600 dark:text-zinc-400 hover:bg-slate-50 dark:hover:bg-zinc-800 transition-all active:scale-95 shadow-sm ml-auto"
        >
          <RotateCcw size={16} />
          Reset
        </button>
      </div>

      {/* Timeline Section */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-[2px] bg-linear-to-b from-blue-500 via-indigo-500 to-transparent opacity-20 hidden md:block"></div>
        <div className="absolute left-[31px] top-0 bottom-0 w-[2px] bg-linear-to-b from-blue-500 via-indigo-500 to-transparent opacity-20 md:hidden"></div>

        <div className="space-y-12">
          {activities.map((activity, index) => (
            <div key={activity.id} className={`flex flex-col md:flex-row items-center gap-8 relative ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              
              {/* Timeline Dot/Icon */}
              <div className="absolute left-[8px] md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-10">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-zinc-900 border-4 border-slate-50 dark:border-zinc-950 shadow-xl flex items-center justify-center transition-transform hover:scale-110 duration-300">
                  {getIcon(activity.type)}
                </div>
              </div>

              {/* Timestamp (Desktop - alternating) */}
              <div className={`hidden md:block w-1/2 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                <span className="text-sm font-black text-slate-400 tracking-tighter uppercase">{activity.time}</span>
                <p className="text-xs font-bold text-blue-500 mt-1">{activity.date}</p>
              </div>

              {/* Activity Card */}
              <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                <div className="group bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 p-6 rounded-[2rem] shadow-sm hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 relative overflow-hidden">
                  {/* Subtle Gradient Background */}
                  <div className="absolute inset-0 bg-linear-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/2 group-hover:to-indigo-500/2 transition-colors duration-500"></div>
                  
                  <div className="relative space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <div className={`inline-flex px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${getBadgeColor(activity.status)}`}>
                          {activity.type.replace('_', ' ')}
                        </div>
                        <h3 className="text-lg font-bold text-slate-800 dark:text-white leading-tight mt-2">
                          {activity.action}
                        </h3>
                      </div>
                      <button className="text-slate-300 hover:text-slate-600 dark:hover:text-white transition-colors">
                        <MoreVertical size={20} />
                      </button>
                    </div>

                    <p className="text-sm text-slate-500 dark:text-zinc-400 font-medium">
                      {activity.details}
                    </p>

                    <div className="pt-4 border-t border-slate-50 dark:border-zinc-800/50 flex flex-wrap gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-zinc-800 flex items-center justify-center text-slate-400">
                          <User size={14} />
                        </div>
                        <span className="text-xs font-bold text-slate-600 dark:text-zinc-300">{activity.user}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Monitor size={14} className="text-slate-400" />
                        <span className="text-xs font-medium text-slate-500 dark:text-zinc-500">{activity.location}</span>
                      </div>
                    </div>

                    {/* Mobile Time (visible only on mobile) */}
                    <div className="md:hidden pt-2 flex items-center gap-2">
                      <Clock size={14} className="text-blue-500" />
                      <span className="text-xs font-black text-blue-500">{activity.time} - {activity.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Empty State / Footer */}
      <div className="text-center py-12">
        <p className="text-slate-400 text-sm font-medium">End of activities for Mar 27, 2026</p>
      </div>
    </div>
  );
};

export default Timeline;
