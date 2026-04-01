import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter,
  MoreVertical,
  Mail,
  User,
  Calendar,
  ChevronDown,
  MoreHorizontal,
  MailQuestion,
  UserCheck,
  UserMinus,
  Download,
  Trash2,
  Edit,
  Eye
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Employees = () => {
  const employees = [
    {
      id: 1,
      name: "Vatsal Prajapati",
      email: "vatsal@yopmail.com",
      role: "Super Admin",
      status: "Active",
      createdAt: "2026-04-01 09:57",
      avatar: "https://avatar.vercel.sh/vatsal"
    },
    {
      id: 2,
      name: "Jaydeep Sharma",
      email: "jaydeep@yopmail.com",
      role: "Project Manager",
      status: "Active",
      createdAt: "2026-03-15 11:20",
      avatar: "https://avatar.vercel.sh/jaydeep"
    },
    {
      id: 3,
      name: "Rahul Kumar",
      email: "rahul@yopmail.com",
      role: "Developer",
      status: "Active",
      createdAt: "2026-02-28 14:45",
      avatar: "https://avatar.vercel.sh/rahul"
    },
    {
      id: 4,
      name: "Sneha Patel",
      email: "sneha@yopmail.com",
      role: "Designer",
      status: "Inactive",
      createdAt: "2026-01-10 10:30",
      avatar: "https://avatar.vercel.sh/sneha"
    }
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Active': return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
      case 'Inactive': return 'bg-rose-500/10 text-rose-500 border-rose-500/20';
      default: return 'bg-slate-500/10 text-slate-500 border-slate-500/20';
    }
  };

  return (
    <div className="space-y-6 pb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white mb-1 uppercase">
            Team <span className="text-blue-600">Directory</span>
          </h1>
          <p className="text-slate-500 dark:text-zinc-400 text-sm font-medium flex items-center gap-2">
            <UserCheck size={14} className="text-blue-500" />
            Manage your organization's members and their access levels.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="h-10 rounded-xl border-slate-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 text-xs font-bold uppercase tracking-wider px-4">
            <Download size={16} className="mr-2" />
            Export
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white border-none font-bold uppercase tracking-wider text-[11px] h-10 px-6 shadow-lg shadow-blue-500/30 transition-all hover:scale-105 active:scale-95">
            <Plus size={16} className="mr-2 stroke-3" />
            Add Member
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
                  placeholder="Search members, email, or role..." 
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-100/50 dark:bg-white/5 border-none rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 transition-all outline-none text-slate-700 dark:text-zinc-200"
                />
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="outline" className="h-10 rounded-xl border-slate-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 text-xs font-bold uppercase tracking-wider px-4">
                  <Calendar size={14} className="mr-2 opacity-50" />
                  Date Joined
                </Button>
                <Button variant="outline" className="h-10 rounded-xl border-slate-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 text-xs font-bold uppercase tracking-wider px-4">
                  Status <ChevronDown size={14} className="ml-2 opacity-50" />
                </Button>
                <Button variant="outline" className="h-10 rounded-xl border-slate-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 text-xs font-bold uppercase tracking-wider px-4">
                  Role <ChevronDown size={14} className="ml-2 opacity-50" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Employee List */}
      <Card className="glass border-none shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50/50 dark:bg-white/5 text-[10px] text-slate-400 dark:text-zinc-500 font-black uppercase tracking-[0.2em] border-b border-slate-100 dark:border-zinc-800">
              <tr>
                <th className="px-8 py-5">Member</th>
                <th className="px-8 py-5">Role</th>
                <th className="px-8 py-5">Status</th>
                <th className="px-8 py-5">Joined At</th>
                <th className="px-8 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-zinc-800/50">
              {employees.map((employee) => (
                <tr key={employee.id} className="hover:bg-slate-50/50 dark:hover:bg-white/5 transition-all group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-10 h-10 border-2 border-white dark:border-zinc-900 shadow-sm ring-2 ring-transparent group-hover:ring-blue-500/30 transition-all">
                        <AvatarImage src={employee.avatar} />
                        <AvatarFallback className="text-[10px] font-bold bg-slate-100 dark:bg-zinc-800">
                          {employee.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-sm font-black text-slate-800 dark:text-zinc-200 group-hover:text-blue-600 transition-colors uppercase tracking-wide mb-0.5">
                          {employee.name}
                        </span>
                        <span className="text-[11px] font-medium text-slate-500 dark:text-zinc-500 flex items-center gap-1">
                          <Mail size={10} />
                          {employee.email}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-xs font-bold text-slate-600 dark:text-zinc-400 uppercase tracking-widest">{employee.role}</span>
                  </td>
                  <td className="px-8 py-6">
                    <Badge variant="outline" className={`px-2.5 py-1 font-black text-[9px] uppercase tracking-widest border-2 ${getStatusBadge(employee.status)}`}>
                      {employee.status}
                    </Badge>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-xs font-black text-slate-400 dark:text-zinc-600 font-mono tracking-tighter flex items-center gap-2">
                       <Calendar size={12} />
                       {employee.createdAt}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-all">
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg text-slate-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/10">
                        <Eye size={16} />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg text-slate-400 hover:text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-500/10">
                        <Edit size={16} />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10">
                        <Trash2 size={16} />
                      </Button>
                    </div>
                    <div className="group-hover:hidden">
                       <MoreHorizontal size={18} className="text-slate-300 ml-auto" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Employees;
