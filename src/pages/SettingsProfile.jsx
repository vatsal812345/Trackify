import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Camera, 
  Briefcase, 
  Globe, 
  Twitter, 
  Github, 
  Linkedin,
  Save,
  CheckCircle2
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const SettingsProfile = () => {
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => setIsSaving(false), 2000);
  };

  return (
    <div className="space-y-8 pb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white mb-1 uppercase">
            Profile <span className="text-blue-600">Settings</span>
          </h1>
          <p className="text-slate-500 dark:text-zinc-400 text-sm font-medium flex items-center gap-2">
            <User size={14} className="text-blue-500" />
            Manage your personal information and public profile.
          </p>
        </div>
        <Button 
          onClick={handleSave}
          className="bg-blue-600 hover:bg-blue-700 text-white border-none font-bold uppercase tracking-wider text-[11px] h-10 px-6 shadow-lg shadow-blue-500/30 transition-all hover:scale-105 active:scale-95"
        >
          {isSaving ? <CheckCircle2 size={16} className="mr-2 animate-bounce" /> : <Save size={16} className="mr-2 stroke-3" />}
          {isSaving ? 'Changes Saved' : 'Save Changes'}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Avatar & Quick Info */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="glass border-none shadow-sm overflow-hidden text-center p-6 md:p-8">
            <div className="relative inline-block mb-6">
              <Avatar className="w-24 h-24 md:w-32 md:h-32 border-4 border-white dark:border-zinc-800 shadow-xl ring-4 ring-blue-500/10">
                <AvatarImage src="https://avatar.vercel.sh/vatsal" />
                <AvatarFallback className="text-2xl md:text-3xl font-black bg-slate-100 dark:bg-zinc-900">VP</AvatarFallback>
              </Avatar>
              <button className="absolute bottom-1 right-1 p-2 md:p-2.5 bg-blue-600 text-white rounded-xl md:rounded-2xl shadow-lg shadow-blue-500/40 hover:scale-110 active:scale-95 transition-all">
                <Camera size={16} />
              </button>
            </div>
            <h3 className="text-xl md:text-2xl font-black text-slate-800 dark:text-white mb-1 uppercase tracking-tight">Vatsal Prajapati</h3>
            <p className="text-[10px] md:text-xs font-bold text-blue-600 uppercase tracking-widest mb-6">Super Admin</p>
            
            <div className="flex justify-center gap-3">
              <Button variant="ghost" size="icon" className="h-9 w-9 md:h-10 md:w-10 rounded-xl bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-400 hover:text-blue-400 transition-all">
                <Twitter size={16} />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 md:h-10 md:w-10 rounded-xl bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-400 hover:text-slate-100 transition-all">
                <Github size={16} />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 md:h-10 md:w-10 rounded-xl bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-400 hover:text-blue-600 transition-all">
                <Linkedin size={16} />
              </Button>
            </div>
          </Card>

          <Card className="glass border-none shadow-sm overflow-hidden p-6 space-y-4">
             <h4 className="text-[10px] font-black text-slate-400 dark:text-zinc-500 uppercase tracking-[0.2em] mb-2">Account Statistics</h4>
             <div className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-zinc-800/50">
               <span className="text-xs font-bold text-slate-600 dark:text-zinc-400">Total Hours</span>
               <span className="text-xs font-black text-slate-900 dark:text-white font-mono">1,240h</span>
             </div>
             <div className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-zinc-800/50">
               <span className="text-xs font-bold text-slate-600 dark:text-zinc-400">Projects Done</span>
               <span className="text-xs font-black text-slate-900 dark:text-white font-mono">12</span>
             </div>
             <div className="flex items-center justify-between py-2">
               <span className="text-xs font-bold text-slate-600 dark:text-zinc-400">Activity Score</span>
               <span className="text-xs font-black text-emerald-500 font-mono">98%</span>
             </div>
          </Card>
        </div>

        {/* Right Column: Detailed Forms */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="glass border-none shadow-sm overflow-hidden">
            <CardHeader className="border-b border-slate-100 dark:border-zinc-800/50 px-4 md:px-8 py-6">
              <CardTitle className="text-lg md:text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight">Personal Information</CardTitle>
              <CardDescription className="text-[10px] md:text-xs font-medium">Update your name, email, and basic contact details.</CardDescription>
            </CardHeader>
            <CardContent className="p-4 md:p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 dark:text-zinc-500 uppercase tracking-widest pl-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-zinc-600" size={16} />
                    <input 
                      type="text" 
                      defaultValue="Vatsal Prajapati"
                      className="w-full pl-10 pr-4 py-3 bg-slate-100/50 dark:bg-white/5 border-none rounded-2xl text-sm focus:ring-2 focus:ring-blue-500/20 transition-all outline-none text-slate-700 dark:text-zinc-200"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 dark:text-zinc-500 uppercase tracking-widest pl-1">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-zinc-600" size={16} />
                    <input 
                      type="email" 
                      defaultValue="vatsal@yopmail.com"
                      className="w-full pl-10 pr-4 py-3 bg-slate-100/50 dark:bg-white/5 border-none rounded-2xl text-sm focus:ring-2 focus:ring-blue-500/20 transition-all outline-none text-slate-700 dark:text-zinc-200"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 dark:text-zinc-500 uppercase tracking-widest pl-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-zinc-600" size={16} />
                    <input 
                      type="tel" 
                      defaultValue="+91 98765 43210"
                      className="w-full pl-10 pr-4 py-3 bg-slate-100/50 dark:bg-white/5 border-none rounded-2xl text-sm focus:ring-2 focus:ring-blue-500/20 transition-all outline-none text-slate-700 dark:text-zinc-200"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 dark:text-zinc-500 uppercase tracking-widest pl-1">Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-zinc-600" size={16} />
                    <input 
                      type="text" 
                      defaultValue="Surat, India"
                      className="w-full pl-10 pr-4 py-3 bg-slate-100/50 dark:bg-white/5 border-none rounded-2xl text-sm focus:ring-2 focus:ring-blue-500/20 transition-all outline-none text-slate-700 dark:text-zinc-200"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-none shadow-sm overflow-hidden">
            <CardHeader className="border-b border-slate-100 dark:border-zinc-800/50 px-4 md:px-8 py-6">
              <CardTitle className="text-lg md:text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight">Professional Profile</CardTitle>
              <CardDescription className="text-[10px] md:text-xs font-medium">Information about your role and expertise.</CardDescription>
            </CardHeader>
            <CardContent className="p-4 md:p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 dark:text-zinc-500 uppercase tracking-widest pl-1">Current Role</label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-zinc-600" size={16} />
                    <input 
                      type="text" 
                      defaultValue="Super Admin / Founder"
                      disabled
                      className="w-full pl-10 pr-4 py-3 bg-slate-200/50 dark:bg-white/2 border-none rounded-2xl text-sm opacity-60 text-slate-700 dark:text-zinc-200 italic"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 dark:text-zinc-500 uppercase tracking-widest pl-1">Organization</label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-zinc-600" size={16} />
                    <input 
                      type="text" 
                      defaultValue="Trackify Inc."
                      className="w-full pl-10 pr-4 py-3 bg-slate-100/50 dark:bg-white/5 border-none rounded-2xl text-sm focus:ring-2 focus:ring-blue-500/20 transition-all outline-none text-slate-700 dark:text-zinc-200"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 dark:text-zinc-500 uppercase tracking-widest pl-1">Short Bio</label>
                <textarea 
                  rows="3"
                  defaultValue="Passionate developer and entrepreneur building tools for productivity and team management."
                  className="w-full px-4 py-3 bg-slate-100/50 dark:bg-white/5 border-none rounded-2xl text-sm focus:ring-2 focus:ring-blue-500/20 transition-all outline-none text-slate-700 dark:text-zinc-200 resize-none"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SettingsProfile;
