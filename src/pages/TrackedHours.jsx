import React, { useState } from 'react';
import { 
  Users, 
  Briefcase, 
  Calendar, 
  RotateCcw, 
  Download, 
  Clock, 
  Activity, 
  AlertCircle,
  ChevronDown,
  Search
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

const TrackedHours = () => {
  const [dateRange, setDateRange] = useState('26-03-2026 - 26-03-2026');
  const [isRangeOpen, setIsRangeOpen] = useState(false);

  const stats = [
    { label: 'Total Tracked', value: '08:45:12', icon: Clock, color: 'text-blue-600', bg: 'bg-blue-100 dark:bg-blue-900/30', progress: 85, goal: '10h' },
    { label: 'Active Time', value: '07:12:00', icon: Activity, color: 'text-green-600', bg: 'bg-green-100 dark:bg-green-900/30', progress: 72, goal: '90%' },
    { label: 'Idle Time', value: '01:33:12', icon: AlertCircle, color: 'text-orange-600', bg: 'bg-orange-100 dark:bg-orange-900/30', progress: 15, goal: '< 1h' },
  ];

  const chartData = [
    { name: '09 AM', hours: 0.8 },
    { name: '10 AM', hours: 0.95 },
    { name: '11 AM', hours: 1.0 },
    { name: '12 PM', hours: 0.85 },
    { name: '01 PM', hours: 0.2 },
    { name: '02 PM', hours: 0.9 },
    { name: '03 PM', hours: 1.0 },
    { name: '04 PM', hours: 0.75 },
    { name: '05 PM', hours: 0.9 },
  ];

  const members = ['Vatsal Prajapati', 'Jaydeep Solanki', 'Rahul Kumar'];
  const projects = ['Trackify UI', 'Admin Portal', 'Mobile App'];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Header & Filters */}
      <div className="card p-4 lg:p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            {/* Member Select */}
            <div className="relative min-w-[200px]">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-slate-400">
                <Users size={16} />
              </div>
              <select className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-lg text-sm appearance-none focus:ring-2 focus:ring-blue-500/20 outline-none cursor-pointer">
                <option>Select a Member</option>
                {members.map(m => <option key={m}>{m}</option>)}
              </select>
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-400">
                <ChevronDown size={14} />
              </div>
            </div>

            {/* Project Select */}
            <div className="relative min-w-[200px]">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-slate-400">
                <Briefcase size={16} />
              </div>
              <select className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-lg text-sm appearance-none focus:ring-2 focus:ring-blue-500/20 outline-none cursor-pointer">
                <option>Select a Project</option>
                {projects.map(p => <option key={p}>{p}</option>)}
              </select>
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-400">
                <ChevronDown size={14} />
              </div>
            </div>

            {/* Date Range */}
            <div className="relative">
              <button 
                onClick={() => setIsRangeOpen(!isRangeOpen)}
                className="flex items-center gap-3 px-4 py-2 bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-lg text-sm hover:bg-slate-100 dark:hover:bg-zinc-900 transition-colors min-w-[250px] justify-between"
              >
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-slate-400" />
                  <span className="text-slate-700 dark:text-zinc-300">{dateRange}</span>
                </div>
                <div className="bg-blue-600 text-white p-1 rounded">
                   <Calendar size={12} />
                </div>
              </button>

              {isRangeOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setIsRangeOpen(false)}></div>
                  <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl shadow-xl py-1 z-20 animate-in zoom-in-95 duration-200">
                    {['Today', 'Yesterday', 'Last 7 Days', 'Last 30 Days', 'Custom Range'].map(opt => (
                      <button 
                        key={opt}
                        onClick={() => { setDateRange(opt); setIsRangeOpen(false); }}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-zinc-800 transition-colors ${dateRange === opt ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-bold' : 'text-slate-600 dark:text-zinc-400'}`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <button className="p-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all border border-slate-200 dark:border-zinc-800">
              <RotateCcw size={18} />
            </button>
          </div>

          <button className="flex items-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-bold shadow-lg shadow-blue-500/20 transition-all active:scale-95">
            <Download size={16} />
            Export
          </button>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="card p-6 group hover:shadow-md transition-all duration-300 overflow-hidden relative">
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-12 h-12 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center transition-transform group-hover:scale-110 duration-500`}>
                <stat.icon size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 dark:text-zinc-500 uppercase tracking-wider">{stat.label}</p>
                <p className="text-2xl font-black text-slate-800 dark:text-white mt-0.5">{stat.value}</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[10px] font-bold">
                <span className="text-slate-400">Progress to goal ({stat.goal})</span>
                <span className={stat.color}>{stat.progress}%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-1000 ${
                    stat.color.replace('text', 'bg')
                  }`}
                  style={{ width: `${stat.progress}%` }}
                ></div>
              </div>
            </div>

            {/* Subtle Decorative Background Element */}
            <div className={`absolute -right-4 -bottom-4 w-24 h-24 ${stat.bg} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}></div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Activity Chart */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">Activity Overview</h3>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-600"></span>
              <span className="text-xs font-bold text-slate-500 dark:text-zinc-500">Tracked Hours</span>
            </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 600}} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 600}}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                  itemStyle={{ color: '#2563eb', fontWeight: 700 }}
                />
                <Area 
                  type="monotone" 
                  dataKey="hours" 
                  stroke="#2563eb" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorHours)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Detailed Logs */}
        <div className="card overflow-hidden">
          <div className="p-6 border-b border-slate-100 dark:border-zinc-800 flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">Recent Sessions</h3>
            <button className="text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors">See full history</button>
          </div>
          <div className="divide-y divide-slate-50 dark:divide-zinc-800/50">
            {[
              { project: 'Trackify UI', task: 'Layout Optimization', duration: '02:30h', time: '09:00 AM - 11:30 AM', date: 'Today' },
              { project: 'Admin Portal', task: 'Bug Fixing', duration: '01:45h', time: '11:45 AM - 01:30 PM', date: 'Today' },
              { project: 'Trackify UI', task: 'Component Design', duration: '03:15h', time: '02:00 PM - 05:15 PM', date: 'Today' },
              { project: 'Unknown', task: 'Maintenance', duration: '00:45h', time: '05:30 PM - 06:15 PM', date: 'Today' },
            ].map((session, i) => (
              <div key={i} className="p-5 hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors group cursor-pointer">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-extrabold text-slate-800 dark:text-zinc-200 group-hover:text-blue-600 transition-colors">{session.project}</span>
                    <span className="text-[10px] bg-slate-100 dark:bg-zinc-800 px-2 py-0.5 rounded text-slate-500 dark:text-zinc-500 font-bold">{session.task}</span>
                  </div>
                  <span className="text-xs font-black text-slate-800 dark:text-white">{session.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 dark:text-zinc-600 font-medium">{session.time}</span>
                  <span className="text-[10px] text-slate-400 dark:text-zinc-500 uppercase tracking-widest font-bold">{session.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackedHours;
