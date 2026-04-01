import React, { useState } from 'react';
import { 
  Users, 
  Briefcase, 
  Calendar, 
  RotateCcw, 
  Download, 
  ChevronDown
} from 'lucide-react';

const ActivityLevel = () => {
  const [member, setMember] = useState('Select a Member');
  const [project, setProject] = useState('Select a Project');
  const [dateRange, setDateRange] = useState('27-03-2026 - 27-03-2026');

  const activityData = [
    { 
      id: 1, 
      name: 'Vatsal Prajapati', 
      date: 'Mar, 27 Fri', 
      percentage: 43,
      average: 43
    }
  ];

  const handleReset = () => {
    setMember('Select a Member');
    setProject('Select a Project');
    setDateRange('27-03-2026 - 27-03-2026');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-800 dark:text-white tracking-tight">Activity Level</h1>
        </div>
      </div>

      {/* Filter Bar Card */}
      <div className="card p-4 md:p-5 border border-slate-100 dark:border-zinc-800 shadow-sm bg-white dark:bg-zinc-950">
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:items-center gap-3">
            {/* Member Select */}
            <div className="relative group w-full lg:min-w-[200px]">
              <select 
                value={member}
                onChange={(e) => setMember(e.target.value)}
                className="w-full pl-4 pr-10 py-2.5 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl text-sm font-medium text-slate-600 dark:text-zinc-400 appearance-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all cursor-pointer hover:border-slate-300 dark:hover:border-zinc-700"
              >
                <option>Select a Member</option>
                <option>Vatsal Prajapati</option>
                <option>Jaydeep Solanki</option>
              </select>
              <div className="absolute inset-y-0 right-3.5 flex items-center pointer-events-none text-slate-400">
                <ChevronDown size={16} />
              </div>
            </div>

            {/* Project Select */}
            <div className="relative group w-full lg:min-w-[200px]">
              <select 
                value={project}
                onChange={(e) => setProject(e.target.value)}
                className="w-full pl-4 pr-10 py-2.5 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl text-sm font-medium text-slate-600 dark:text-zinc-400 appearance-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all cursor-pointer hover:border-slate-300 dark:hover:border-zinc-700"
              >
                <option>Select a Project</option>
                <option>Trackify UI</option>
                <option>Admin Portal</option>
              </select>
              <div className="absolute inset-y-0 right-3.5 flex items-center pointer-events-none text-slate-400">
                <ChevronDown size={16} />
              </div>
            </div>

            {/* Date Range Picker */}
            <div className="flex items-center gap-0 border border-slate-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-sm w-full lg:w-auto">
              <div className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-zinc-900 border-r border-slate-200 dark:border-zinc-800 flex-1 lg:min-w-[240px]">
                <Calendar size={18} className="text-slate-400" />
                <span className="text-xs sm:text-sm font-medium text-slate-600 dark:text-zinc-400 truncate">{dateRange}</span>
              </div>
              <button className="px-3 py-2.5 bg-blue-600 hover:bg-blue-700 text-white transition-colors flex items-center justify-center">
                <Calendar size={18} />
              </button>
            </div>

            {/* Reset Button */}
            <button 
              onClick={handleReset}
              className="flex items-center justify-center gap-2 px-5 py-2.5 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl text-sm font-bold text-slate-600 dark:text-zinc-400 hover:bg-slate-50 dark:hover:bg-zinc-800 transition-all active:scale-95 shadow-sm w-full lg:w-auto"
            >
              <RotateCcw size={16} />
              Reset
            </button>
          </div>

          <div className="flex md:justify-end">
            <button className="flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-black shadow-lg shadow-blue-500/20 transition-all active:scale-95 group w-full md:w-auto">
              <Download size={18} className="group-hover:-translate-y-0.5 transition-transform" />
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Activity Table Card */}
      <div className="card overflow-hidden border border-slate-100 dark:border-zinc-800 shadow-sm bg-white dark:bg-zinc-950">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-zinc-900/50 border-b border-slate-100 dark:border-zinc-800">
                <th className="px-4 md:px-8 py-4 text-[10px] md:text-[11px] font-black text-slate-400 uppercase tracking-widest min-w-[120px]">Member</th>
                <th className="px-4 md:px-8 py-4 text-[10px] md:text-[11px] font-black text-slate-400 uppercase tracking-widest">{activityData[0].date}</th>
                <th className="px-4 md:px-8 py-4 text-[10px] md:text-[11px] font-black text-slate-400 uppercase tracking-widest">Average</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 dark:divide-zinc-800/50">
              {activityData.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/80 dark:hover:bg-zinc-900/50 transition-colors group">
                  <td className="px-4 md:px-8 py-5 text-xs md:text-sm font-bold text-slate-700 dark:text-zinc-300">
                    {item.name}
                  </td>
                  <td className="px-4 md:px-8 py-5">
                    <span className="text-xs md:text-sm font-black text-rose-500">
                      {item.percentage}%
                    </span>
                  </td>
                  <td className="px-4 md:px-8 py-5">
                    <div className="flex items-center gap-3 max-w-[240px]">
                      <div className="hidden sm:block flex-1 h-1.5 bg-slate-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-rose-500 rounded-full transition-all duration-1000"
                          style={{ width: `${item.average}%` }}
                        ></div>
                      </div>
                      <span className="text-xs md:text-sm font-black text-slate-700 dark:text-zinc-300">
                        {item.average}%
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Info Footer */}
        <div className="px-8 py-5 bg-slate-50/30 dark:bg-zinc-900/30 border-t border-slate-100 dark:border-zinc-800">
          <p className="text-xs font-bold text-slate-400">Showing 1 to 1 of 1 entries</p>
        </div>
      </div>
    </div>
  );
};

export default ActivityLevel;
