import React, { useState } from 'react';
import { 
  Users, 
  Calendar, 
  Search, 
  Filter, 
  Download, 
  Eye, 
  X,
  CheckCircle2,
  XCircle,
  Clock,
  ChevronDown,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

const Attendance = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [dateRange, setDateRange] = useState('Today');
  const [showModal, setShowModal] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const attendanceData = [
    { 
      id: 1, name: 'Vatsal Prajapati', role: 'UI/UX Designer', date: '2026-03-27', checkIn: '09:05 AM', checkOut: '06:15 PM', status: 'Present', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vatsal',
      details: [
        { startTime: '09:05 AM', endTime: '01:15 PM', duration: '04:10:00' },
        { startTime: '02:00 PM', endTime: '06:15 PM', duration: '04:15:00' }
      ],
      totalDuration: '08:25:00'
    },
    { 
      id: 2, name: 'Jaydeep Solanki', role: 'Frontend Developer', date: '2026-03-27', checkIn: '09:15 AM', checkOut: '--:--', status: 'Present', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jaydeep',
      details: [
        { startTime: '09:15 AM', endTime: '11:00 AM', duration: '01:45:00' }
      ],
      totalDuration: '01:45:00'
    },
    { id: 3, name: 'Rahul Kumar', role: 'Backend Developer', date: '2026-03-27', checkIn: '--:--', checkOut: '--:--', status: 'Absent', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul', details: [], totalDuration: '00:00:00' },
    { 
      id: 4, name: 'Sneha Patel', role: 'Product Manager', date: '2026-03-27', checkIn: '10:30 AM', checkOut: '07:00 PM', status: 'Late', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha',
      details: [
        { startTime: '10:30 AM', endTime: '02:00 PM', duration: '03:30:00' },
        { startTime: '02:45 PM', endTime: '07:00 PM', duration: '04:15:00' }
      ],
      totalDuration: '07:45:00'
    },
    { id: 5, name: 'Amit Shah', role: 'QA Engineer', date: '2026-03-26', checkIn: '09:00 AM', checkOut: '06:00 PM', status: 'Present', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amit', details: [{ startTime: '09:00 AM', endTime: '06:00 PM', duration: '09:00:00' }], totalDuration: '09:00:00' },
    { id: 6, name: 'Priya Rai', role: 'DevOps Engineer', date: '2026-03-26', checkIn: '09:10 AM', checkOut: '06:30 PM', status: 'Present', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya', details: [{ startTime: '09:10 AM', endTime: '06:30 PM', duration: '09:20:00' }], totalDuration: '09:20:00' },
    { id: 7, name: 'Karan Mehra', role: 'HR Manager', date: '2026-03-26', checkIn: '--:--', checkOut: '--:--', status: 'Absent', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Karan', details: [], totalDuration: '00:00:00' },
  ];

  const handleOpenModal = (record) => {
    setSelectedRecord(record);
    setShowModal(true);
  };

  const summaryStats = [
    { label: 'Total Present', value: '42', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50 dark:bg-emerald-900/20', trend: '+5%', trendUp: true },
    { label: 'Total Absent', value: '04', icon: XCircle, color: 'text-rose-600', bg: 'bg-rose-50 dark:bg-rose-900/20', trend: '-2%', trendUp: false },
    { label: 'Total Late', value: '08', icon: Clock, color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-900/20', trend: '+1%', trendUp: true },
  ];

  const getStatusStyles = (status) => {
    switch (status) {
      case 'Present':
        return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400';
      case 'Absent':
        return 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400';
      case 'Late':
        return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400';
      default:
        return 'bg-slate-100 text-slate-700 dark:bg-zinc-800 dark:text-zinc-400';
    }
  };

  const filteredData = attendanceData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 relative">
      {/* Attendance Detail Modal */}
      {showModal && selectedRecord && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white dark:bg-zinc-950 w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 border border-slate-100 dark:border-zinc-800">
            {/* Modal Header */}
            <div className="px-8 py-6 border-b border-slate-100 dark:border-zinc-800 flex items-center justify-between bg-slate-50/50 dark:bg-zinc-900/50">
              <h2 className="text-xl font-black text-slate-800 dark:text-white">Attendance</h2>
              <button 
                onClick={() => setShowModal(false)}
                className="w-10 h-10 bg-rose-500 hover:bg-rose-600 text-white rounded-xl flex items-center justify-center transition-all active:scale-95 shadow-lg shadow-rose-500/20"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-8">
              <div className="border border-slate-100 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50/50 dark:bg-zinc-900/50 border-b border-slate-100 dark:border-zinc-800">
                      <th className="px-6 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest text-center">Start Time</th>
                      <th className="px-6 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest text-center">End Time</th>
                      <th className="px-6 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest text-center">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50 dark:divide-zinc-800/50">
                    {selectedRecord.details.length > 0 ? (
                      selectedRecord.details.map((detail, i) => (
                        <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-zinc-900/30 transition-colors">
                          <td className="px-6 py-5 text-sm font-bold text-slate-700 dark:text-zinc-300 text-center">{detail.startTime}</td>
                          <td className="px-6 py-5 text-sm font-bold text-slate-700 dark:text-zinc-300 text-center">{detail.endTime}</td>
                          <td className="px-6 py-5 text-sm font-black text-slate-800 dark:text-white text-center tracking-tight">{detail.duration}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="3" className="px-6 py-10 text-center text-slate-400 font-bold italic">No activity recorded for this date.</td>
                      </tr>
                    )}
                  </tbody>
                  {selectedRecord.details.length > 0 && (
                    <tfoot>
                      <tr className="bg-slate-50/30 dark:bg-zinc-900/20 border-t border-slate-100 dark:border-zinc-800">
                        <td colSpan="2" className="px-6 py-5 text-sm font-black text-slate-500 dark:text-zinc-400 text-right uppercase tracking-wider">Total Duration:</td>
                        <td className="px-6 py-5 text-sm font-black text-blue-600 dark:text-blue-400 text-center tracking-tight">{selectedRecord.totalDuration}</td>
                      </tr>
                    </tfoot>
                  )}
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-800 dark:text-white tracking-tight">Attendance Tracking</h1>
          <p className="text-slate-500 dark:text-zinc-500 font-medium">Keep track of employee attendance and punctuality</p>
        </div>
        <button className="flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold shadow-lg shadow-blue-500/20 transition-all active:scale-95 group">
          <Download size={18} className="group-hover:-translate-y-0.5 transition-transform" />
          Export Report
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {summaryStats.map((stat, idx) => (
          <div key={idx} className="card p-6 group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none border border-slate-100 dark:border-zinc-800 backdrop-blur-sm">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-14 h-14 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center transition-transform group-hover:scale-110 duration-500`}>
                <stat.icon size={28} />
              </div>
              <div className={`flex items-center gap-1 text-xs font-black ${stat.trendUp ? 'text-emerald-600' : 'text-rose-600'} bg-white dark:bg-zinc-900 px-2 py-1 rounded-lg border border-slate-100 dark:border-zinc-800 shadow-sm`}>
                {stat.trendUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {stat.trend}
              </div>
            </div>
            
            <div className="space-y-1">
              <p className="text-sm font-bold text-slate-500 dark:text-zinc-500 uppercase tracking-widest">{stat.label}</p>
              <h3 className="text-3xl font-black text-slate-800 dark:text-white leading-tight">{stat.value} Employees</h3>
            </div>

            {/* Decorative Gradient Overlay */}
            <div className={`absolute -right-6 -bottom-6 w-24 h-24 ${stat.bg} opacity-20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700`}></div>
          </div>
        ))}
      </div>

      {/* Filters & Table */}
      <div className="card overflow-hidden border border-slate-100 dark:border-zinc-800 shadow-sm">
        {/* Table Controls */}
        <div className="p-4 md:p-6 border-b border-slate-100 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/30">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row flex-1 items-center gap-3 w-full">
              <div className="relative flex-1 w-full lg:max-w-sm group">
                <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
                  <Search size={18} />
                </div>
                <input 
                  type="text"
                  placeholder="Search employee or role..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-xl text-sm focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400"
                />
              </div>

              <div className="relative w-full sm:w-auto">
                <select 
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full pl-4 pr-10 py-2.5 bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-xl text-sm font-bold text-slate-700 dark:text-zinc-300 appearance-none focus:ring-4 focus:ring-blue-500/10 outline-none cursor-pointer hover:border-slate-300 dark:hover:border-zinc-700 transition-all sm:min-w-[140px]"
                >
                  <option value="All">All Status</option>
                  <option value="Present">Present</option>
                  <option value="Absent">Absent</option>
                  <option value="Late">Late</option>
                </select>
                <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              </div>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-xl text-[10px] sm:text-sm font-bold text-slate-600 dark:text-zinc-400 w-full lg:w-auto justify-center">
              <Calendar size={16} className="text-blue-500" />
              <span>{dateRange} (Mar 27, 2026)</span>
            </div>
          </div>
        </div>

        {/* Table Content - Desktop */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-zinc-900/50 border-b border-slate-100 dark:border-zinc-800">
                <th className="px-6 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest">Employee</th>
                <th className="px-6 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest">Date</th>
                <th className="px-6 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest">Check-In</th>
                <th className="px-6 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest">Check-Out</th>
                <th className="px-6 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest text-center">Status</th>
                <th className="px-6 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 dark:divide-zinc-800/50">
              {filteredData.length > 0 ? (
                filteredData.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/80 dark:hover:bg-zinc-900/50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img src={item.avatar} alt={item.name} className="w-10 h-10 rounded-full border-2 border-slate-100 dark:border-zinc-800 bg-slate-100 group-hover:scale-105 transition-transform" />
                        <div>
                          <p className="text-sm font-black text-slate-800 dark:text-white group-hover:text-blue-600 transition-colors">{item.name}</p>
                          <p className="text-[11px] font-bold text-slate-400 dark:text-zinc-500">{item.role}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-slate-600 dark:text-zinc-400">{item.date}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5 text-sm font-black text-slate-700 dark:text-zinc-300">
                        <ArrowUpRight size={14} className="text-emerald-500" />
                        {item.checkIn}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5 text-sm font-black text-slate-700 dark:text-zinc-300">
                        {item.checkOut !== '--:--' && <ArrowDownRight size={14} className="text-rose-500" />}
                        {item.checkOut}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm ${getStatusStyles(item.status)}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button 
                        onClick={() => handleOpenModal(item)}
                        className="p-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all shadow-lg shadow-blue-500/20 active:scale-95 group"
                      >
                        <Eye size={18} className="group-hover:scale-110 transition-transform" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : null}
            </tbody>
          </table>
        </div>

        {/* Card View - Mobile/Tablet */}
        <div className="lg:hidden divide-y divide-slate-100 dark:divide-zinc-800/50">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <div key={item.id} className="p-4 space-y-4 hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={item.avatar} alt={item.name} className="w-10 h-10 rounded-full border-2 border-slate-100 dark:border-zinc-800 bg-slate-100" />
                    <div>
                      <p className="text-sm font-black text-slate-800 dark:text-white">{item.name}</p>
                      <p className="text-[10px] font-bold text-slate-400 dark:text-zinc-500 uppercase">{item.role}</p>
                    </div>
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider ${getStatusStyles(item.status)}`}>
                    {item.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 py-3 px-4 bg-slate-50/50 dark:bg-zinc-900/50 rounded-2xl">
                  <div className="space-y-1">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Check-In</p>
                    <div className="flex items-center gap-1.5 text-xs font-black text-slate-700 dark:text-zinc-300">
                      <ArrowUpRight size={12} className="text-emerald-500" />
                      {item.checkIn}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Check-Out</p>
                    <div className="flex items-center gap-1.5 text-xs font-black text-slate-700 dark:text-zinc-300">
                      {item.checkOut !== '--:--' && <ArrowDownRight size={12} className="text-rose-500" />}
                      {item.checkOut}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-[10px] font-bold text-slate-400">{item.date}</span>
                  <button 
                    onClick={() => handleOpenModal(item)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl text-[10px] font-black uppercase tracking-wider"
                  >
                    <Eye size={14} />
                    Details
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="px-6 py-12 text-center text-slate-400 dark:text-zinc-500 font-bold italic">
              No results found matching your search or filters.
            </div>
          )}
        </div>
        
        {/* Pagination Shadow */}
        <div className="p-4 bg-slate-50/30 dark:bg-zinc-900/30 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between">
          <p className="text-xs font-bold text-slate-400">Showing {filteredData.length} of {attendanceData.length} records</p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 text-xs font-bold text-slate-400 hover:text-slate-600 dark:hover:text-zinc-200 disabled:opacity-50" disabled>Previous</button>
            <button className="w-8 h-8 rounded-lg bg-blue-600 text-white text-xs font-black shadow-lg shadow-blue-500/20">1</button>
            <button className="w-8 h-8 rounded-lg hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-600 dark:text-zinc-400 text-xs font-bold transition-all text-center flex items-center justify-center">2</button>
            <button className="px-3 py-1.5 text-xs font-bold text-slate-600 dark:text-zinc-400 hover:text-blue-600 transition-all">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
