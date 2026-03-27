import React from 'react';
import { 
   Users, 
   Clock, 
   BarChart3, 
   Briefcase,
   TrendingUp,
   UserCheck
} from 'lucide-react';
import ProductivityChart from '../components/Dashboard/ProductivityChart';

const Dashboard = () => {
   const stats = [
      { label: "Spaculus's workspace", value: "Vatsal Prajapati", type: 'workspace' },
      { label: "Today", value: "08:15", sub: "+5%", icon: Clock, color: 'text-green-500' },
      { label: "This Week", value: "42:30", sub: "+12%", icon: BarChart3, color: 'text-blue-500' },
      { label: "Activity Today", value: "85%", sub: "+2%", icon: TrendingUp, color: 'text-orange-500' },
   ];

return (
      <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
         {stats.map((stat, idx) => (
            <div key={idx} className="card p-6 flex flex-col justify-between hover:scale-[1.02] transition-transform cursor-pointer group">
               <div>
                  <p className="text-xs font-bold text-slate-500 dark:text-zinc-500 uppercase tracking-wider mb-2">{stat.label}</p>
                  <p className={`text-2xl font-extrabold ${stat.type === 'workspace' ? 'text-slate-800 dark:text-white' : 'text-slate-900 dark:text-slate-100'}`}>
                     {stat.value}
                  </p>
               </div>
               {stat.icon && (
               <div className="mt-4 flex items-center justify-between">
                  <div className={`p-2 rounded-lg bg-slate-100 dark:bg-zinc-800 ${stat.color} group-hover:bg-blue-600 group-hover:text-white transition-colors`}>
                     <stat.icon size={20} />
                  </div>
                  <span className="text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded-full">{stat.sub}</span>
               </div>
               )}
            </div>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Productivity Chart */}
         <div className="lg:col-span-1">
            <ProductivityChart />
         </div>

        {/* Project Wise Member */}
         <div className="card overflow-hidden lg:col-span-1">
            <div className="p-6 border-b border-slate-100 dark:border-zinc-800 flex items-center justify-between">
               <h2 className="text-lg font-bold text-slate-800 dark:text-white">Project wise member</h2>
               <button className="text-sm text-blue-600 font-bold hover:underline">View All</button>
            </div>
            <div className="p-0 overflow-x-auto">
               <table className="w-full text-left">
                  <thead className="bg-slate-50 dark:bg-zinc-900/50 text-xs text-slate-500 dark:text-zinc-400 font-bold uppercase tracking-wider">
                     <tr>
                        <th className="px-6 py-4">Project</th>
                        <th className="px-6 py-4">Members</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-zinc-800">
                     <tr className="hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors">
                        <td className="px-6 py-4 text-sm font-medium text-slate-700 dark:text-zinc-300">Other</td>
                        <td className="px-6 py-4">
                           <div className="flex -space-x-2">
                              {[1,2,3,4].map(i => (
                                 <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-zinc-900 bg-slate-200 dark:bg-zinc-700 flex items-center justify-center text-[10px] font-bold">U{i}</div>
                              ))}
                              <div className="w-8 h-8 rounded-full border-2 border-white dark:border-zinc-900 bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">+2</div>
                           </div>
                        </td>
                     </tr>
                     <tr className="hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors">
                        <td className="px-6 py-4 text-sm font-medium text-slate-700 dark:text-zinc-300">test project5</td>
                        <td className="px-6 py-4">
                           <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-white">
                              <UserCheck size={14} />
                           </div>
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
        
            
          
        {/* Current Week Data */}
         <div className="card overflow-hidden lg:col-span-1">
            <div className="p-6 border-b border-slate-100 dark:border-zinc-800 flex items-center justify-between">
               <h2 className="text-lg font-bold text-slate-800 dark:text-white">Current Week data</h2>
               <span className="text-xs bg-slate-100 dark:bg-zinc-800 px-3 py-1 rounded-full font-bold">Mar 2026</span>
            </div>
            <div className="p-0 overflow-x-auto">
               <table className="w-full text-left">
                  <thead className="bg-slate-50 dark:bg-zinc-900/50 text-xs text-slate-500 dark:text-zinc-400 font-bold uppercase tracking-wider">
                     <tr>
                        <th className="px-6 py-4">Date</th>
                        <th className="px-6 py-4">Start Time</th>
                        <th className="px-6 py-4">Duration</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-zinc-800 text-sm">
                     {[
                        { date: 'Mar, 25 Wed', start: '09:51 AM', duration: '08:15h' },
                        { date: 'Mar, 24 Tue', start: '09:54 AM', duration: '07:45h' },
                        { date: 'Mar, 23 Mon', start: '09:57 AM', duration: '08:00h' },
                     ].map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors">
                           <td className="px-6 py-4 font-medium text-slate-700 dark:text-zinc-300">{row.date}</td>
                           <td className="px-6 py-4 text-slate-500 dark:text-zinc-400 font-mono">{row.start}</td>
                           <td className="px-6 py-4">
                           <span className="px-2.5 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg font-bold text-xs">{row.duration}</span>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>

        {/* Task Deadlines - Full Width */}
         <div className="card overflow-hidden lg:col-span-3">
            <div className="p-6 border-b border-slate-100 dark:border-zinc-800 flex items-center justify-between">
               <h2 className="text-lg font-bold text-slate-800 dark:text-white">Task Deadlines</h2>
               <button className="text-sm text-blue-600 font-bold hover:underline">View All</button>
            </div>
            <div className="p-0 overflow-x-auto">
               <table className="w-full text-left border-collapse">
                  <thead className="bg-slate-50 dark:bg-zinc-900/50 text-xs text-slate-500 dark:text-zinc-400 font-bold uppercase tracking-wider">
                     <tr>
                        <th className="px-6 py-4">Project</th>
                        <th className="px-6 py-4">Task</th>
                        <th className="px-6 py-4">Priority</th>
                        <th className="px-6 py-4">Assignee</th>
                        <th className="px-6 py-4">Due Date</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-zinc-800">
                     {[
                        { project: 'Trackify UI', task: 'Mobile responsive fixes', priority: 'High', assignee: 'Vatsal P.', due: '28 Mar 2026', color: 'red' },
                        { project: 'Admin Portal', task: 'API Integration', priority: 'Medium', assignee: 'Jaydeep S.', due: '30 Mar 2026', color: 'orange' },
                        { project: 'User App', task: 'Login Flow Redesign', priority: 'Low', assignee: 'Rahul K.', due: '02 Apr 2026', color: 'blue' },
                        { project: 'Analytics', task: 'Export to PDF', priority: 'High', assignee: 'Vatsal P.', due: '27 Mar 2026', color: 'red' },
                     ].map((item, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-zinc-900 transition-colors">
                           <td className="px-6 py-4">
                              <span className="text-sm font-bold text-slate-800 dark:text-zinc-200">{item.project}</span>
                           </td>
                           <td className="px-6 py-4">
                              <span className="text-sm text-slate-600 dark:text-zinc-400 font-medium">{item.task}</span>
                           </td>
                           <td className="px-6 py-4">
                              <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                                 item.color === 'red' ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400' :
                                 item.color === 'orange' ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400' :
                                 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                              }`}>
                                 {item.priority}
                              </span>
                           </td>
                           <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                 <div className="w-7 h-7 rounded-full bg-slate-200 dark:bg-zinc-700 flex items-center justify-center text-[10px] font-bold text-slate-600 dark:text-zinc-300 border border-white dark:border-zinc-800 shadow-sm">
                                    {item.assignee.split(' ').map(n => n[0]).join('')}
                                 </div>
                                 <span className="text-sm text-slate-700 dark:text-zinc-300 font-medium">{item.assignee}</span>
                              </div>
                           </td>
                           <td className="px-6 py-4">
                              <span className="text-sm text-slate-500 dark:text-zinc-500 font-mono">{item.due}</span>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>

      </div>
      </div>
);
};

export default Dashboard;
