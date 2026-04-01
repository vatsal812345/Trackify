import React from 'react';
import { 
  ShieldCheck, 
  Plus, 
  Search, 
  Lock, 
  Settings, 
  MoreHorizontal,
  ChevronRight,
  Shield,
  Eye,
  Edit,
  Trash2
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const RolesPermissions = () => {
  const roles = [
    {
      id: 1,
      name: "Super Admin",
      description: "Full access to all modules and settings.",
      users: 1,
      type: "System",
      color: "bg-blue-500"
    },
    {
      id: 2,
      name: "Project Manager",
      description: "Can manage projects, tasks, and team members.",
      users: 5,
      type: "Custom",
      color: "bg-indigo-500"
    },
    {
      id: 3,
      name: "Team Lead",
      description: "Can assign tasks and monitor progress.",
      users: 12,
      type: "Custom",
      color: "bg-emerald-500"
    },
    {
      id: 4,
      name: "Developer",
      description: "Can manage their own tasks and time logs.",
      users: 45,
      type: "Custom",
      color: "bg-amber-500"
    }
  ];

  return (
    <div className="space-y-6 pb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white mb-1 uppercase">
            Roles & <span className="text-blue-600">Permissions</span>
          </h1>
          <p className="text-slate-500 dark:text-zinc-400 text-sm font-medium flex items-center gap-2">
            <ShieldCheck size={14} className="text-blue-500" />
            Define access levels and security policies for your team.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white border-none font-bold uppercase tracking-wider text-[11px] h-10 px-6 shadow-lg shadow-blue-500/30 transition-all hover:scale-105 active:scale-95">
            <Plus size={16} className="mr-2 stroke-3" />
            Create Role
          </Button>
        </div>
      </div>

      {/* Roles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roles.map((role) => (
          <Card key={role.id} className="glass border-none shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer overflow-hidden relative">
            <div className={`absolute top-0 right-0 w-32 h-32 ${role.color} rounded-full -mr-16 -mt-16 blur-3xl opacity-10 group-hover:opacity-20 transition-opacity`}></div>
            
            <CardHeader className="pb-2">
               <div className="flex justify-between items-start mb-4">
                <Badge variant="outline" className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 border-2 bg-slate-100/50 dark:bg-white/5 border-slate-200 dark:border-zinc-800 text-slate-500 dark:text-zinc-400">
                  {role.type}
                </Badge>
                <div className="flex items-center gap-1.5 text-slate-400 group-hover:text-blue-500 transition-colors">
                   <Lock size={14} />
                   <span className="text-[10px] font-bold uppercase tracking-tighter">Secure</span>
                </div>
              </div>
              <CardTitle className="text-xl font-black text-slate-800 dark:text-white group-hover:text-blue-600 transition-colors uppercase tracking-tight flex items-center gap-2">
                <Shield size={20} className="text-blue-500" />
                {role.name}
              </CardTitle>
            </CardHeader>

            <CardContent className="pt-2">
              <p className="text-sm text-slate-500 dark:text-zinc-500 font-medium mb-6">
                {role.description}
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-zinc-800/50">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-slate-400 dark:text-zinc-600 uppercase tracking-widest mb-1">Assigned Users</span>
                  <span className="text-lg font-black text-slate-800 dark:text-zinc-200">{role.users}</span>
                </div>

                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all">
                  <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl text-slate-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all">
                    <Eye size={18} />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl text-slate-400 hover:text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-500/10 transition-all">
                    <Edit size={18} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Create New Role Card */}
        <Card className="border-2 border-dashed border-slate-200 dark:border-zinc-800 bg-white/20 dark:bg-white/2 shadow-none flex flex-col items-center justify-center p-6 md:p-8 hover:bg-white/40 dark:hover:bg-white/5 transition-all group cursor-pointer">
           <div className="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
              <Plus size={32} className="stroke-3" />
           </div>
           <h3 className="text-sm font-black text-slate-700 dark:text-zinc-300 uppercase tracking-widest mb-1">Create New Role</h3>
           <p className="text-[11px] text-slate-500 dark:text-zinc-500 font-medium text-center">Add a custom role for your team members</p>
        </Card>
      </div>
    </div>
  );
};

export default RolesPermissions;
