import React from 'react';
import { 
  Mail, 
  Plus, 
  Search, 
  FileText,
  Edit,
  Trash2,
  Copy,
  Eye,
  Settings2,
  Bell,
  UserPlus,
  Key
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const EmailTemplates = () => {
  const templates = [
    {
      id: 1,
      name: "Welcome Email",
      subject: "Welcome to Trackify, {{name}}!",
      type: "System",
      lastUpdated: "2026-03-20",
      icon: UserPlus,
      color: "bg-blue-500"
    },
    {
      id: 2,
      name: "Password Reset",
      subject: "Reset your Trackify Password",
      type: "Security",
      lastUpdated: "2026-03-15",
      icon: Key,
      color: "bg-amber-500"
    },
    {
      id: 3,
      name: "Daily Digest",
      subject: "Your Daily Productivity Report",
      type: "Engagement",
      lastUpdated: "2026-03-28",
      icon: Bell,
      color: "bg-emerald-500"
    },
    {
      id: 4,
      name: "Task Assignment",
      subject: "New task assigned: {{task_name}}",
      type: "System",
      lastUpdated: "2026-04-01",
      icon: FileText,
      color: "bg-indigo-500"
    }
  ];

  return (
    <div className="space-y-8 pb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white mb-1 uppercase">
            Email <span className="text-blue-600">Templates</span>
          </h1>
          <p className="text-slate-500 dark:text-zinc-400 text-sm font-medium flex items-center gap-2">
            <Mail size={14} className="text-blue-500" />
            Customize the automated emails sent by the system.
          </p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white border-none font-bold uppercase tracking-wider text-[11px] h-10 px-6 shadow-lg shadow-blue-500/30 transition-all hover:scale-105 active:scale-95">
          <Plus size={16} className="mr-2 stroke-3" />
          Create Template
        </Button>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {templates.map((template) => (
          <Card key={template.id} className="glass border-none shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden relative">
            <div className={`absolute top-0 right-0 w-32 h-32 ${template.color} rounded-full -mr-16 -mt-16 blur-3xl opacity-5 group-hover:opacity-10 transition-opacity`}></div>
            
            <CardHeader className="pb-4 flex flex-row items-start justify-between space-y-0">
               <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl ${template.color}/10 flex items-center justify-center text-current border border-${template.color.split('-')[1]}-500/10`}>
                     <template.icon className={`text-${template.color.split('-')[1]}-500`} size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight group-hover:text-blue-600 transition-colors">
                      {template.name}
                    </CardTitle>
                    <Badge variant="outline" className="text-[9px] font-black uppercase tracking-widest px-2 py-0 border-2 mt-1 bg-white/50 dark:bg-zinc-900/50">
                      {template.type}
                    </Badge>
                  </div>
               </div>
               <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg text-slate-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/10">
                    <Edit size={16} />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-zinc-800">
                    <Copy size={16} />
                  </Button>
               </div>
            </CardHeader>

            <CardContent className="pt-0 space-y-4">
              <div className="p-4 bg-slate-50/80 dark:bg-white/5 rounded-2xl space-y-3">
                 <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-black text-slate-400 dark:text-zinc-500 uppercase tracking-widest">Subject Line</span>
                    <span className="text-xs font-bold text-slate-700 dark:text-zinc-300 truncate italic">"{template.subject}"</span>
                 </div>
                 <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-zinc-800/50">
                    <span className="text-[9px] font-black text-slate-400 dark:text-zinc-500 uppercase tracking-widest flex items-center gap-1">
                       <Settings2 size={10} />
                       Dynamic Content Supported
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 dark:text-zinc-600 uppercase tracking-tighter">
                       Updated {template.lastUpdated}
                    </span>
                 </div>
              </div>
              
              <div className="flex items-center justify-between">
                 <Button variant="ghost" className="text-[10px] font-black uppercase tracking-[0.15em] text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-500/10 h-8 px-4 rounded-xl">
                    <Eye size={14} className="mr-2" />
                    Preview Template
                 </Button>
                 <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg text-slate-300 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10">
                    <Trash2 size={16} />
                 </Button>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Custom Card for Creating New */}
        <div className="border-2 border-dashed border-slate-200 dark:border-zinc-800 bg-white/10 dark:bg-white/1 rounded-3xl p-8 flex flex-col items-center justify-center space-y-4 hover:bg-white/30 dark:hover:bg-white/5 transition-all group cursor-pointer">
           <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
              <Plus size={28} className="stroke-3" />
           </div>
           <div className="text-center">
              <h3 className="text-sm font-black text-slate-700 dark:text-zinc-300 uppercase tracking-widest mb-1">Create Custom</h3>
              <p className="text-[11px] text-slate-400 dark:text-zinc-500 font-medium">Add a new email notification type</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default EmailTemplates;
