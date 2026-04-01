import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter,
  LayoutGrid,
  List,
  ChevronDown,
  Calendar,
  Users,
  MoreHorizontal,
  FolderOpen,
  Clock,
  Briefcase,
  ExternalLink,
  FileText
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const Projects = () => {
  const [activeTab, setActiveTab] = useState('grid');

  const projects = [
    {
      id: 1,
      name: "Trackify UI Redesign",
      client: "Internal",
      status: "Ongoing",
      progress: 75,
      members: [1, 2, 3, 4],
      lastUpdated: "2026-03-29 10:30",
      color: "bg-blue-500"
    },
    {
      id: 2,
      name: "Admin Portal Implementation",
      client: "Spaculus Softwares",
      status: "Ongoing",
      progress: 45,
      members: [5, 6],
      lastUpdated: "2026-04-01 14:15",
      color: "bg-indigo-500"
    },
    {
      id: 3,
      name: "Mobile App Development",
      client: "Astra Tech",
      status: "On Hold",
      progress: 20,
      members: [7, 8, 9],
      lastUpdated: "2026-03-25 09:00",
      color: "bg-amber-500"
    },
    {
      id: 4,
      name: "Cloud Migration Phase 2",
      client: "Global Corp",
      status: "Completed",
      progress: 100,
      members: [1, 5, 10],
      lastUpdated: "2026-03-20 16:45",
      color: "bg-emerald-500"
    },
    {
      id: 5,
      name: "E-commerce Integration",
      client: "Shopify Plus",
      status: "Ongoing",
      progress: 60,
      members: [2, 4],
      lastUpdated: "2026-03-31 11:20",
      color: "bg-rose-500"
    }
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Ongoing': return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'On Hold': return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
      case 'Completed': return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
      default: return 'bg-slate-500/10 text-slate-500 border-slate-500/20';
    }
  };

  return (
    <div className="space-y-6 pb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white mb-1 uppercase">
            Project <span className="text-blue-600">Hub</span>
          </h1>
          <p className="text-slate-500 dark:text-zinc-400 text-sm font-medium flex items-center gap-2">
            <FolderOpen size={14} className="text-blue-500" />
            Manage your project portfolio and track overall progress.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white border-none font-bold uppercase tracking-wider text-[11px] h-10 px-6 shadow-lg shadow-blue-500/30 transition-all hover:scale-105 active:scale-95">
            <Plus size={16} className="mr-2 stroke-3" />
            Create Project
          </Button>
        </div>
      </div>

      {/* Filter Bar */}
      <Card className="glass border-none shadow-sm overflow-hidden">
        <CardContent className="p-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3 flex-1">
              <div className="relative flex-1 min-w-[240px] max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-zinc-500" size={18} />
                <input 
                  type="text" 
                  placeholder="Search projects or clients..." 
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-100/50 dark:bg-white/5 border-none rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 transition-all outline-none text-slate-700 dark:text-zinc-200"
                />
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="outline" className="h-10 rounded-xl border-slate-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 text-xs font-bold uppercase tracking-wider px-4">
                  <Calendar size={14} className="mr-2 opacity-50" />
                  Date Range
                </Button>
                <Button variant="outline" className="h-10 rounded-xl border-slate-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 text-xs font-bold uppercase tracking-wider px-4">
                  Status <ChevronDown size={14} className="ml-2 opacity-50" />
                </Button>
                <Button variant="outline" className="h-10 rounded-xl border-slate-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 text-xs font-bold uppercase tracking-wider px-4">
                  Creator <ChevronDown size={14} className="ml-2 opacity-50" />
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-slate-100 dark:bg-zinc-900 p-1 rounded-xl">
              <button 
                onClick={() => setActiveTab('grid')}
                className={`p-2 rounded-lg transition-all ${activeTab === 'grid' ? 'bg-white dark:bg-zinc-800 shadow-sm text-blue-600' : 'text-slate-500'}`}
              >
                <LayoutGrid size={18} />
              </button>
              <button 
                onClick={() => setActiveTab('list')}
                className={`p-2 rounded-lg transition-all ${activeTab === 'list' ? 'bg-white dark:bg-zinc-800 shadow-sm text-blue-600' : 'text-slate-500'}`}
              >
                <List size={18} />
              </button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Projects Content */}
      {activeTab === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="glass border-none shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer overflow-hidden relative">
              <div className={`absolute top-0 right-0 w-32 h-32 ${project.color} rounded-full -mr-16 -mt-16 blur-3xl opacity-10 group-hover:opacity-20 transition-opacity`}></div>
              
              <CardHeader className="pb-2 relative">
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="outline" className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 border-2 ${getStatusBadge(project.status)}`}>
                    {project.status}
                  </Badge>
                  <button className="text-slate-400 hover:text-blue-500 transition-colors">
                    <ExternalLink size={16} />
                  </button>
                </div>
                <CardTitle className="text-xl font-black text-slate-800 dark:text-white group-hover:text-blue-600 transition-colors uppercase tracking-tight">
                  {project.name}
                </CardTitle>
                <div className="flex items-center gap-2 text-slate-500 dark:text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
                  <Briefcase size={12} />
                  {project.client}
                </div>
              </CardHeader>

              <CardContent className="pt-4 relative">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-black uppercase tracking-wider text-slate-400 dark:text-zinc-500">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-1.5 bg-slate-100 dark:bg-zinc-800/50" indicatorClassName={`bg-gradient-to-r from-blue-500 to-indigo-600 shadow-[0_0_8px_rgba(59,130,246,0.5)]`} />
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-zinc-800/50">
                    <div className="flex -space-x-3">
                      {project.members.map(m => (
                        <Avatar key={m} className="w-8 h-8 border-2 border-white dark:border-zinc-900 shadow-sm">
                          <AvatarImage src={`https://avatar.vercel.sh/${m}`} />
                          <AvatarFallback className="text-[10px] font-bold">U{m}</AvatarFallback>
                        </Avatar>
                      ))}
                      <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-zinc-800 flex items-center justify-center text-[10px] font-bold border-2 border-white dark:border-zinc-900 text-slate-500">
                        +2
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1.5 text-slate-400 dark:text-zinc-600 text-[10px] font-bold uppercase tracking-tighter">
                      <Clock size={12} />
                      {project.lastUpdated}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="glass border-none shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50/50 dark:bg-white/5 text-[10px] text-slate-400 dark:text-zinc-500 font-black uppercase tracking-[0.2em] border-b border-slate-100 dark:border-zinc-800">
                <tr>
                  <th className="px-8 py-5">Project Name</th>
                  <th className="px-8 py-5">Client</th>
                  <th className="px-8 py-5">Status</th>
                  <th className="px-8 py-5">Progress</th>
                  <th className="px-8 py-5">Members</th>
                  <th className="px-8 py-5 text-right">Last Updated</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-zinc-800/50">
                {projects.map((project) => (
                  <tr key={project.id} className="hover:bg-slate-50/50 dark:hover:bg-white/5 transition-all group">
                    <td className="px-8 py-6">
                      <span className="text-sm font-black text-slate-800 dark:text-zinc-200 group-hover:text-blue-600 transition-colors uppercase tracking-wide">
                        {project.name}
                      </span>
                    </td>
                    <td className="px-8 py-6">
                      <span className="text-xs text-slate-500 dark:text-zinc-400 font-bold uppercase tracking-widest">{project.client}</span>
                    </td>
                    <td className="px-8 py-6">
                      <Badge variant="outline" className={`px-2.5 py-1 font-black text-[9px] uppercase tracking-widest border-2 ${getStatusBadge(project.status)}`}>
                        {project.status}
                      </Badge>
                    </td>
                    <td className="px-8 py-6 min-w-[150px]">
                      <div className="flex items-center gap-3">
                        <Progress value={project.progress} className="h-1.5 flex-1 bg-slate-100 dark:bg-zinc-800/50" indicatorClassName="bg-blue-600" />
                        <span className="text-xs font-black text-slate-500 dark:text-zinc-400">{project.progress}%</span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex -space-x-2">
                        {project.members.map(m => (
                          <Avatar key={m} className="w-8 h-8 border-2 border-white dark:border-zinc-900">
                            <AvatarImage src={`https://avatar.vercel.sh/${m}`} />
                          </Avatar>
                        ))}
                      </div>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <span className="text-xs font-black text-slate-400 dark:text-zinc-600 font-mono tracking-tighter">{project.lastUpdated}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}
    </div>
  );
};

export default Projects;
