import React, { useState } from 'react';
import { 
  Users, 
  Briefcase, 
  Calendar, 
  RotateCcw, 
  Search,
  MousePointer2,
  Keyboard,
  MousePointerClick,
  Activity,
  ChevronLeft,
  ChevronRight,
  Filter,
  Maximize2,
  Clock,
  MoreHorizontal
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Screenshots = () => {
  const [date, setDate] = useState('2026-04-01');

  // Mock data for screenshots
  const screenshots = [
    {
      id: 1,
      user: "Vatsal Prajapati",
      avatar: "https://avatar.vercel.sh/vatsal",
      project: "Other",
      time: "10:00 AM",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
      mouse: 19,
      keyboard: 1,
      scroll: 6,
      activity: 5
    },
    {
      id: 2,
      user: "Vatsal Prajapati",
      avatar: "https://avatar.vercel.sh/vatsal",
      project: "Development",
      time: "10:10 AM",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=800",
      mouse: 38,
      keyboard: 1,
      scroll: 19,
      activity: 12
    },
    {
      id: 3,
      user: "Vatsal Prajapati",
      avatar: "https://avatar.vercel.sh/vatsal",
      project: "Research",
      time: "10:20 AM",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800",
      mouse: 7,
      keyboard: 0,
      scroll: 5,
      activity: 2
    },
    {
      id: 4,
      user: "Vatsal Prajapati",
      avatar: "https://avatar.vercel.sh/vatsal",
      project: "Trackify Dashboard",
      time: "10:30 AM",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      mouse: 46,
      keyboard: 12,
      scroll: 22,
      activity: 16
    },
    {
      id: 5,
      user: "Vatsal Prajapati",
      avatar: "https://avatar.vercel.sh/vatsal",
      project: "Other",
      time: "10:40 AM",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
      mouse: 61,
      keyboard: 124,
      scroll: 5,
      activity: 38
    },
    {
      id: 6,
      user: "Vatsal Prajapati",
      avatar: "https://avatar.vercel.sh/vatsal",
      project: "Fixing Bugs",
      time: "10:50 AM",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
      mouse: 99,
      keyboard: 141,
      scroll: 14,
      activity: 51
    }
  ];

  return (
    <div className="space-y-6 pb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header & Advanced Filters */}
      <Card className="glass border-none shadow-sm overflow-hidden">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-4 flex-1">
              {/* Member Filter */}
              <div className="relative min-w-[220px] flex-1">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <select className="w-full pl-10 pr-4 py-2.5 bg-slate-100/50 dark:bg-zinc-950 border-none rounded-xl text-sm appearance-none focus:ring-2 focus:ring-blue-500/20 outline-none cursor-pointer text-slate-600 dark:text-zinc-300 font-bold uppercase tracking-wider">
                  <option>Select a Member</option>
                  <option>Vatsal Prajapati</option>
                  <option>Jaydeep Sharma</option>
                </select>
              </div>

              {/* Project Filter */}
              <div className="relative min-w-[220px] flex-1">
                <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <select className="w-full pl-10 pr-4 py-2.5 bg-slate-100/50 dark:bg-zinc-950 border-none rounded-xl text-sm appearance-none focus:ring-2 focus:ring-blue-500/20 outline-none cursor-pointer text-slate-600 dark:text-zinc-300 font-bold uppercase tracking-wider">
                  <option>Select a Project</option>
                  <option>Other</option>
                  <option>Development</option>
                  <option>Trackify UI</option>
                </select>
              </div>

              {/* Date Picker */}
              <div className="relative flex-1 min-w-[180px]">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input 
                  type="date" 
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-100/50 dark:bg-zinc-950 border-none rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500/20 text-slate-700 dark:text-zinc-300 font-bold"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="outline" className="h-11 rounded-xl border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 font-black uppercase tracking-widest text-[10px] px-5">
                <RotateCcw size={16} className="mr-2 opacity-50" />
                Reset
              </Button>
              <Button className="h-11 rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25 px-6 font-black uppercase tracking-widest text-[10px]">
                <Filter size={16} className="mr-2" />
                Apply Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {screenshots.map((shot) => (
          <Card key={shot.id} className="glass border-none shadow-sm group hover:shadow-2xl transition-all duration-500 overflow-hidden group">
            {/* Professional Header */}
            <div className="px-5 py-4 border-b border-slate-100 dark:border-zinc-800/50 flex items-center justify-between bg-white/40 dark:bg-zinc-900/40">
              <div className="flex items-center gap-3">
                <Avatar className="w-8 h-8 ring-2 ring-blue-500/10">
                   <AvatarImage src={shot.avatar} />
                   <AvatarFallback className="text-[10px] font-bold">VP</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-[11px] font-black text-slate-800 dark:text-zinc-200 uppercase tracking-tight">{shot.user}</span>
                  <span className="text-[9px] font-bold text-blue-600 uppercase tracking-widest">{shot.project}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 px-2.5 py-1 bg-slate-100 dark:bg-zinc-800 rounded-lg">
                <Clock size={10} className="text-slate-400" />
                <span className="text-[10px] font-black text-slate-600 dark:text-zinc-400">{shot.time}</span>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative aspect-video overflow-hidden cursor-zoom-in group-hover:brightness-110 transition-all duration-700">
               <img 
                 src={shot.image} 
                 alt={`Screenshot at ${shot.time}`} 
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <Button variant="outline" className="rounded-full bg-white/20 border-white/40 text-white backdrop-blur-md font-bold uppercase tracking-widest text-[9px] h-9">
                    <Maximize2 size={14} className="mr-2" />
                    Full Preview
                  </Button>
               </div>
               
               {/* Activity Overlay Badge */}
               <div className="absolute bottom-3 right-3">
                  <Badge className={`font-black text-[9px] uppercase tracking-widest border-2 ${
                    shot.activity > 50 ? 'bg-emerald-500 text-white border-emerald-400' : 
                    shot.activity > 10 ? 'bg-amber-500 text-white border-amber-400' :
                    'bg-rose-500 text-white border-rose-400'
                  } shadow-lg`}>
                    {shot.activity}% Activity
                  </Badge>
               </div>
            </div>

            {/* Data-Rich Footer */}
            <div className="p-5 grid grid-cols-4 gap-2 bg-slate-50/50 dark:bg-zinc-950/20">
               {[
                 { label: 'Mouse', value: shot.mouse, icon: MousePointerClick, color: 'text-blue-500' },
                 { label: 'Keyboard', value: shot.keyboard, icon: Keyboard, color: 'text-indigo-500' },
                 { label: 'Scroll', value: shot.scroll, icon: MousePointer2, color: 'text-purple-500' },
                 { label: 'Activity', value: `${shot.activity}%`, icon: Activity, color: shot.activity > 50 ? 'text-emerald-500' : 'text-amber-500' }
               ].map((item, idx) => (
                 <div key={idx} className="flex flex-col items-center justify-center p-2 rounded-xl bg-white dark:bg-white/5 border border-slate-100 dark:border-zinc-800 shadow-sm transition-all hover:bg-slate-100 dark:hover:bg-zinc-800">
                    <item.icon size={12} className={`${item.color} mb-1 opacity-70`} />
                    <span className="text-[11px] font-black text-slate-800 dark:text-zinc-200">{item.value}</span>
                    <span className="text-[8px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-tighter">{item.label}</span>
                 </div>
               ))}
            </div>
          </Card>
        ))}
      </div>

      {/* Modern Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200 dark:border-zinc-800">
         <span className="text-xs font-bold text-slate-500 dark:text-zinc-500 uppercase tracking-widest">
           Showing <span className="text-slate-900 dark:text-white font-black">1 to 6</span> of 24 screenshots
         </span>
         <div className="flex items-center gap-2">
            <Button variant="outline" className="h-10 w-10 p-0 rounded-xl border-slate-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 text-slate-500 hover:text-blue-500 transition-all">
              <ChevronLeft size={18} />
            </Button>
            <div className="flex items-center gap-1">
               {[1, 2, 3, 4].map((p) => (
                 <Button 
                   key={p}
                   variant={p === 1 ? 'default' : 'ghost'}
                   className={`h-10 w-10 rounded-xl font-bold text-sm ${p === 1 ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'text-slate-400'}`}
                 >
                   {p}
                 </Button>
               ))}
            </div>
            <Button variant="outline" className="h-10 w-10 p-0 rounded-xl border-slate-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 text-slate-500 hover:text-blue-500 transition-all">
              <ChevronRight size={18} />
            </Button>
         </div>
      </div>
    </div>
  );
};

export default Screenshots;
