import React from 'react';
import { 
   Users, 
   Clock, 
   BarChart3, 
   Briefcase,
   TrendingUp,
   UserCheck,
   Calendar,
   ArrowUpRight,
   Activity
} from 'lucide-react';
import ProductivityChart from '../components/Dashboard/ProductivityChart';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
   const stats = [
      { label: "Spaculus's workspace", value: "Vatsal Prajapati", type: 'workspace', icon: Activity, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
      { label: "Today's Hours", value: "08:15", sub: "+5%", icon: Clock, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
      { label: "This Week", value: "42:30", sub: "+12%", icon: BarChart3, color: 'text-blue-500', bg: 'bg-blue-500/10' },
      { label: "Activity Level", value: "85%", sub: "+2%", icon: TrendingUp, color: 'text-amber-500', bg: 'bg-amber-500/10' },
   ];

   return (
      <div className="space-y-8 pb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
         {/* Welcome Section */}
         <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
               <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-1">
                  Good Morning, Vatsal!
               </h1>
               <p className="text-slate-500 dark:text-zinc-400 text-sm font-medium flex items-center gap-2">
                  <Calendar size={14} />
                  Here's what's happening with your projects today.
               </p>
            </div>
            <div className="flex items-center gap-3">
               <Badge variant="outline" className="px-3 py-1 bg-white/50 dark:bg-white/5 backdrop-blur-sm border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 font-bold uppercase tracking-wider text-[10px]">
                  Vite + React 19
               </Badge>
               <Badge className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white border-none font-bold uppercase tracking-wider text-[10px] shadow-lg shadow-blue-500/30">
                  Premium Version
               </Badge>
            </div>
         </div>

         {/* Stats Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
               <Card key={idx} className="glass border-none shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer overflow-hidden relative">
                  <div className={`absolute top-0 right-0 w-32 h-32 ${stat.bg} rounded-full -mr-16 -mt-16 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity`}></div>
                  <CardContent className="p-6 relative">
                     <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color} transition-all duration-500 group-hover:scale-110 group-hover:bg-slate-900 group-hover:dark:bg-white group-hover:text-white group-hover:dark:text-slate-900 shadow-sm`}>
                           <stat.icon size={24} />
                        </div>
                        {stat.sub && (
                           <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100/50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold">
                              <ArrowUpRight size={10} />
                              {stat.sub}
                           </div>
                        )}
                     </div>
                     <div>
                        <p className="text-[10px] font-bold text-slate-500 dark:text-zinc-500 uppercase tracking-widest mb-1">{stat.label}</p>
                        <h3 className="text-2xl font-black text-slate-800 dark:text-white tracking-tight">
                           {stat.value}
                        </h3>
                     </div>
                  </CardContent>
               </Card>
            ))}
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Productivity Chart */}
            <div className="lg:col-span-1">
               <ProductivityChart />
            </div>

            {/* Project Members */}
            <Card className="glass border-none shadow-sm lg:col-span-1 overflow-hidden">
               <CardHeader className="flex flex-row items-center justify-between border-b border-slate-100 dark:border-zinc-800/50 pb-4">
                  <div>
                     <CardTitle className="text-xl font-black tracking-tight uppercase text-[15px] text-slate-600 dark:text-zinc-400">Team Distribution</CardTitle>
                     <CardDescription>Project wise member count</CardDescription>
                  </div>
                  <button className="text-xs font-black text-blue-600 hover:text-blue-700 transition-colors uppercase tracking-widest">View All</button>
               </CardHeader>
               <CardContent className="p-0">
                  <div className="divide-y divide-slate-100 dark:divide-zinc-800/50">
                     {[
                        { name: 'Other', members: [1, 2, 3, 4], extra: 2, color: 'bg-indigo-500' },
                        { name: 'test project5', members: [5], extra: 0, color: 'bg-rose-500' },
                     ].map((project, i) => (
                        <div key={i} className="px-6 py-5 flex items-center justify-between hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors group">
                           <div className="flex items-center gap-3">
                              <div className={`w-2 h-2 rounded-full ${project.color}`}></div>
                              <span className="text-sm font-bold text-slate-700 dark:text-zinc-200 group-hover:text-blue-600 transition-colors uppercase tracking-wide">{project.name}</span>
                           </div>
                           <div className="flex -space-x-3 group-hover:-space-x-2 transition-all duration-300">
                              {project.members.map(m => (
                                 <Avatar key={m} className="w-9 h-9 border-2 border-white dark:border-zinc-900 shadow-sm ring-2 ring-transparent group-hover:ring-blue-500/30 transition-all">
                                    <AvatarImage src={`https://avatar.vercel.sh/${m}`} />
                                    <AvatarFallback className="bg-slate-100 dark:bg-zinc-800 text-[10px] font-bold">U{m}</AvatarFallback>
                                 </Avatar>
                              ))}
                              {project.extra > 0 && (
                                 <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold border-2 border-white dark:border-zinc-900 shadow-sm shadow-blue-500/20">
                                    +{project.extra}
                                 </div>
                              )}
                           </div>
                        </div>
                     ))}
                  </div>
               </CardContent>
            </Card>

            {/* Weekly Activity */}
            <Card className="glass border-none shadow-sm lg:col-span-1 overflow-hidden">
               <CardHeader className="flex flex-row items-center justify-between border-b border-slate-100 dark:border-zinc-800/50 pb-4">
                  <div>
                     <CardTitle className="text-xl font-black tracking-tight uppercase text-[15px] text-slate-600 dark:text-zinc-400">Activity Log</CardTitle>
                     <CardDescription>Current Week Tracking</CardDescription>
                  </div>
                  <Badge variant="secondary" className="font-bold text-[10px] uppercase">Mar 2026</Badge>
               </CardHeader>
               <CardContent className="p-0">
                  <div className="divide-y divide-slate-100 dark:divide-zinc-800/50">
                     {[
                        { date: '25 Wed', start: '09:51 AM', duration: '08:15', percent: 85 },
                        { date: '24 Tue', start: '09:54 AM', duration: '07:45', percent: 78 },
                        { date: '23 Mon', start: '09:57 AM', duration: '08:00', percent: 80 },
                     ].map((row, idx) => (
                        <div key={idx} className="px-6 py-4 hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors">
                           <div className="flex items-center justify-between mb-2">
                              <div>
                                 <span className="text-[11px] font-black text-slate-400 dark:text-zinc-500 uppercase mr-2 tracking-widest">Mar, {row.date}</span>
                                 <span className="text-xs font-mono text-slate-600 dark:text-zinc-300">{row.start}</span>
                              </div>
                              <Badge className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 border-none font-bold text-[10px]">
                                 {row.duration}h
                              </Badge>
                           </div>
                           <Progress value={row.percent} className="h-1.5 bg-slate-100 dark:bg-zinc-800/50" indicatorClassName="bg-gradient-to-r from-blue-500 to-indigo-600" />
                        </div>
                     ))}
                  </div>
               </CardContent>
            </Card>

            {/* Task Deadlines - Full Width */}
            <Card className="glass border-none shadow-sm lg:col-span-3 overflow-hidden">
               <CardHeader className="flex flex-row items-center justify-between border-b border-slate-100 dark:border-zinc-800/50 pb-6 px-8">
                  <div>
                     <CardTitle className="text-2xl font-black tracking-tight text-slate-800 dark:text-white">Upcoming Deadlines</CardTitle>
                     <CardDescription>Tasks requiring immediate attention</CardDescription>
                  </div>
                  <button className="px-5 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold hover:scale-105 transition-transform shadow-lg shadow-black/10 dark:shadow-white/5 uppercase tracking-widest">
                     View All Tasks
                  </button>
               </CardHeader>
               <CardContent className="p-0">
                  <div className="overflow-x-auto">
                     <table className="w-full text-left">
                        <thead className="bg-slate-50/50 dark:bg-white/5 text-[10px] text-slate-400 dark:text-zinc-500 font-black uppercase tracking-[0.2em] border-b border-slate-100 dark:border-zinc-800">
                           <tr>
                              <th className="px-8 py-5">Project & Task</th>
                              <th className="px-8 py-5">Priority</th>
                              <th className="px-8 py-5">Assignee</th>
                              <th className="px-8 py-5 text-right">Due Date</th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-zinc-800/50">
                           {[
                              { project: 'Trackify UI', task: 'Mobile responsive fixes', priority: 'High', assignee: 'Vatsal P.', due: '28 Mar 2026', color: 'bg-red-500' },
                              { project: 'Admin Portal', task: 'API Integration', priority: 'Medium', assignee: 'Jaydeep S.', due: '30 Mar 2026', color: 'bg-amber-500' },
                              { project: 'User App', task: 'Login Flow Redesign', priority: 'Low', assignee: 'Rahul K.', due: '02 Apr 2026', color: 'bg-sky-500' },
                              { project: 'Analytics', task: 'Export to PDF', priority: 'High', assignee: 'Vatsal P.', due: '27 Mar 2026', color: 'bg-red-500' },
                           ].map((item, idx) => (
                              <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-white/5 transition-all group">
                                 <td className="px-8 py-6">
                                    <div className="flex flex-col">
                                       <span className="text-sm font-black text-slate-800 dark:text-zinc-200 group-hover:text-blue-600 transition-colors uppercase tracking-wide mb-1">{item.project}</span>
                                       <span className="text-xs text-slate-500 dark:text-zinc-500 font-medium">{item.task}</span>
                                    </div>
                                 </td>
                                 <td className="px-8 py-6">
                                    <Badge variant="outline" className={`px-2.5 py-1 font-black text-[9px] uppercase tracking-widest border-2 shadow-sm ${
                                       item.priority === 'High' ? 'border-red-500/20 text-red-500 bg-red-500/5' :
                                       item.priority === 'Medium' ? 'border-amber-500/20 text-amber-500 bg-amber-500/5' :
                                       'border-sky-500/20 text-sky-500 bg-sky-500/5'
                                    }`}>
                                       {item.priority}
                                    </Badge>
                                 </td>
                                 <td className="px-8 py-6">
                                    <div className="flex items-center gap-3">
                                       <Avatar className="w-8 h-8 border border-white dark:border-zinc-800 shadow-sm">
                                          <AvatarImage src={`https://avatar.vercel.sh/${item.assignee}`} />
                                          <AvatarFallback className="text-[10px] font-bold">{item.assignee.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                       </Avatar>
                                       <span className="text-xs text-slate-700 dark:text-zinc-300 font-bold">{item.assignee}</span>
                                    </div>
                                 </td>
                                 <td className="px-8 py-6 text-right">
                                    <span className="text-xs font-black text-slate-400 dark:text-zinc-600 font-mono tracking-tighter">{item.due}</span>
                                 </td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
               </CardContent>
            </Card>
         </div>
      </div>
   );
};

export default Dashboard;
