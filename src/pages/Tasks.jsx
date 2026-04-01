import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  MoreVertical, 
  Paperclip, 
  MessageSquare, 
  Filter,
  LayoutGrid,
  List,
  ChevronDown,
  Calendar,
  Flag,
  User,
  MoreHorizontal
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Tasks = () => {
  const [activeTab, setActiveTab] = useState('board');

  const columns = [
    { id: 'backlog', title: 'Backlog', color: 'bg-indigo-500' },
    { id: 'todo', title: 'To Do', color: 'bg-amber-500' },
    { id: 'in_progress', title: 'In Progress', color: 'bg-blue-500' },
    { id: 'done', title: 'Done', color: 'bg-emerald-500' },
  ];

  const tasks = [
    {
      id: 1,
      title: "Design System Update",
      project: "Trackify UI",
      priority: "High",
      assignee: { name: "Vatsal P.", avatar: "https://avatar.vercel.sh/vatsal" },
      attachments: 2,
      comments: 5,
      status: "backlog"
    },
    {
      id: 2,
      title: "Fix Navigation Bug",
      project: "Admin Portal",
      priority: "Medium",
      assignee: { name: "Jaydeep S.", avatar: "https://avatar.vercel.sh/jaydeep" },
      attachments: 0,
      comments: 2,
      status: "backlog"
    },
    {
      id: 3,
      title: "Mobile Dashboard Layout",
      project: "User App",
      priority: "High",
      assignee: { name: "Vatsal P.", avatar: "https://avatar.vercel.sh/vatsal" },
      attachments: 1,
      comments: 0,
      status: "todo"
    },
    {
      id: 4,
      title: "API Authentication Flow",
      project: "Core Service",
      priority: "Critical",
      assignee: { name: "Rahul K.", avatar: "https://avatar.vercel.sh/rahul" },
      attachments: 3,
      comments: 12,
      status: "in_progress"
    },
    {
      id: 5,
      title: "Unit Testing for Auth",
      project: "Core Service",
      priority: "Low",
      assignee: { name: "Rahul K.", avatar: "https://avatar.vercel.sh/rahul" },
      attachments: 1,
      comments: 1,
      status: "done"
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Critical': return 'bg-rose-500/10 text-rose-500 border-rose-500/20';
      case 'High': return 'bg-orange-500/10 text-orange-500 border-orange-500/20';
      case 'Medium': return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
      case 'Low': return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
      default: return 'bg-slate-500/10 text-slate-500 border-slate-500/20';
    }
  };

  return (
    <div className="space-y-6 pb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white mb-1 uppercase">
            Tasks <span className="text-blue-600">Management</span>
          </h1>
          <p className="text-slate-500 dark:text-zinc-400 text-sm font-medium flex items-center gap-2">
            <LayoutGrid size={14} className="text-blue-500" />
            Manage and track your team's progress across all projects.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white border-none font-bold uppercase tracking-wider text-[11px] h-10 px-6 shadow-lg shadow-blue-500/30 transition-all hover:scale-105 active:scale-95">
            <Plus size={16} className="mr-2 stroke-3" />
            New Task
          </Button>
        </div>
      </div>

      {/* Filter Bar */}
      <Card className="glass border-none shadow-sm overflow-hidden">
        <CardContent className="p-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3 flex-1">
              <div className="relative flex-1 min-w-[240px] max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-zinc-500" size={18} />
                <input 
                  type="text" 
                  placeholder="Search tasks, IDs, or members..." 
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-100/50 dark:bg-white/5 border-none rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 transition-all outline-none text-slate-700 dark:text-zinc-200"
                />
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="outline" className="h-10 rounded-xl border-slate-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 text-xs font-bold uppercase tracking-wider px-4">
                  All Projects <ChevronDown size={14} className="ml-2 opacity-50" />
                </Button>
                <Button variant="outline" className="h-10 rounded-xl border-slate-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 text-xs font-bold uppercase tracking-wider px-4">
                  Priority <ChevronDown size={14} className="ml-2 opacity-50" />
                </Button>
                <Button variant="outline" className="h-10 rounded-xl border-slate-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 text-xs font-bold uppercase tracking-wider px-4">
                  Assignee <ChevronDown size={14} className="ml-2 opacity-50" />
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-slate-100 dark:bg-zinc-900 p-1 rounded-xl">
              <button 
                onClick={() => setActiveTab('board')}
                className={`p-2 rounded-lg transition-all ${activeTab === 'board' ? 'bg-white dark:bg-zinc-800 shadow-sm text-blue-600' : 'text-slate-500'}`}
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

      {/* Kanban Board */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[600px]">
        {columns.map((column) => (
          <div key={column.id} className="flex flex-col gap-4">
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${column.color} shadow-sm shadow-${column.color}/20`}></div>
                <h3 className="text-sm font-black text-slate-700 dark:text-zinc-300 uppercase tracking-widest">
                  {column.title} 
                  <span className="ml-2 text-slate-400 dark:text-zinc-500 font-mono">
                    ({tasks.filter(t => t.status === column.id).length})
                  </span>
                </h3>
              </div>
              <button className="text-slate-400 hover:text-slate-600 dark:hover:text-zinc-200 transition-colors">
                <MoreHorizontal size={18} />
              </button>
            </div>

            <div className="flex-1 flex flex-col gap-4 p-2 bg-slate-50/50 dark:bg-white/5 rounded-2xl border-2 border-dashed border-slate-200 dark:border-zinc-800/50">
              {tasks.filter(t => t.status === column.id).map((task) => (
                <Card 
                  key={task.id} 
                  className="glass border-none shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-grab active:cursor-grabbing overflow-hidden relative"
                >
                  <CardContent className="p-5">
                    <div className="flex justify-between items-start mb-3">
                      <Badge variant="outline" className={`text-[9px] font-black uppercase tracking-tighter px-2 py-0.5 border-2 ${getPriorityColor(task.priority)}`}>
                        {task.priority}
                      </Badge>
                      <button className="text-slate-300 hover:text-slate-500 dark:hover:text-zinc-400 opacity-0 group-hover:opacity-100 transition-all">
                        <MoreVertical size={16} />
                      </button>
                    </div>

                    <h4 className="text-sm font-bold text-slate-800 dark:text-zinc-100 mb-1 group-hover:text-blue-600 transition-colors">
                      {task.title}
                    </h4>
                    <p className="text-[10px] font-black text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-4">
                      {task.project}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-zinc-800/50">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center text-slate-400 dark:text-zinc-600 gap-1 text-[10px] font-bold">
                          <Paperclip size={12} />
                          {task.attachments}
                        </div>
                        <div className="flex items-center text-slate-400 dark:text-zinc-600 gap-1 text-[10px] font-bold">
                          <MessageSquare size={12} />
                          {task.comments}
                        </div>
                      </div>
                      
                      <Avatar className="w-7 h-7 border-2 border-white dark:border-zinc-900 shadow-sm ring-2 ring-transparent group-hover:ring-blue-500/30 transition-all">
                        <AvatarImage src={task.assignee.avatar} />
                        <AvatarFallback className="text-[9px] font-bold bg-slate-100 dark:bg-zinc-800">
                          {task.assignee.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {tasks.filter(t => t.status === column.id).length === 0 && (
                <div className="flex-1 flex flex-col items-center justify-center py-10 opacity-40">
                  <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-zinc-800 flex items-center justify-center mb-2">
                    <Flag size={20} className="text-slate-400 dark:text-zinc-600" />
                  </div>
                  <p className="text-xs font-bold text-slate-500 dark:text-zinc-500 uppercase tracking-widest">No Tasks</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
