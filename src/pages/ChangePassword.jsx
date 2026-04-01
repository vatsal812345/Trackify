import React, { useState } from 'react';
import { 
  KeyRound, 
  ShieldCheck, 
  Eye, 
  EyeOff, 
  ShieldAlert,
  ArrowRight,
  Lock,
  CheckCircle2
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ChangePassword = () => {
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleUpdate = () => {
    setIsUpdating(true);
    setTimeout(() => setIsUpdating(false), 2000);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8 pb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Section */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-blue-600/10 text-blue-600 mb-4 ring-1 ring-blue-500/20">
          <KeyRound size={32} className="stroke-3" />
        </div>
        <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white uppercase transition-all">
          Security <span className="text-blue-600">Upgrade</span>
        </h1>
        <p className="text-slate-500 dark:text-zinc-400 text-sm font-medium">
          Ensure your account remains secure by updating your password regularly.
        </p>
      </div>

      <Card className="glass border-none shadow-xl overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
        
        <CardHeader className="px-8 pt-10 pb-6 text-center">
          <CardTitle className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight">Security Credentials</CardTitle>
          <CardDescription className="text-xs font-medium">Passwords must be at least 8 characters long and include special symbols.</CardDescription>
        </CardHeader>

        <CardContent className="px-8 pb-10 space-y-6">
          <div className="space-y-4">
            {/* Old Password */}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 dark:text-zinc-500 uppercase tracking-[0.2em] pl-1">Current Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={18} />
                <input 
                  type={showOld ? "text" : "password"} 
                  placeholder="Enter current password"
                  className="w-full pl-12 pr-12 py-4 bg-slate-100/50 dark:bg-white/5 border-none rounded-2xl text-sm focus:ring-2 focus:ring-blue-500/20 transition-all outline-none text-slate-700 dark:text-zinc-200 font-medium"
                />
                <button 
                  onClick={() => setShowOld(!showOld)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-500 transition-colors"
                >
                  {showOld ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* New Password */}
            <div className="space-y-2 pt-2">
              <label className="text-[10px] font-black text-slate-400 dark:text-zinc-500 uppercase tracking-[0.2em] pl-1">New Password</label>
              <div className="relative group">
                <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={18} />
                <input 
                  type={showNew ? "text" : "password"} 
                  placeholder="Enter new password"
                  className="w-full pl-12 pr-12 py-4 bg-slate-100/50 dark:bg-white/5 border-none rounded-2xl text-sm focus:ring-2 focus:ring-blue-500/20 transition-all outline-none text-slate-700 dark:text-zinc-200 font-medium"
                />
                <button 
                  onClick={() => setShowNew(!showNew)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-500 transition-colors"
                >
                  {showNew ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-2 pt-2">
              <label className="text-[10px] font-black text-slate-400 dark:text-zinc-500 uppercase tracking-[0.2em] pl-1">Confirm New Password</label>
              <div className="relative group">
                <ShieldAlert className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={18} />
                <input 
                  type={showConfirm ? "text" : "password"} 
                  placeholder="Confirm your new password"
                  className="w-full pl-12 pr-12 py-4 bg-slate-100/50 dark:bg-white/5 border-none rounded-2xl text-sm focus:ring-2 focus:ring-blue-500/20 transition-all outline-none text-slate-700 dark:text-zinc-200 font-medium"
                />
                <button 
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-500 transition-colors"
                >
                  {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
          </div>

          <div className="pt-4 flex flex-col items-center">
            <Button 
              onClick={handleUpdate}
              disabled={isUpdating}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white border-none font-bold uppercase tracking-[0.15em] text-[12px] h-14 rounded-2xl shadow-xl shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-70 group"
            >
              {isUpdating ? (
                <>
                  <CheckCircle2 size={18} className="mr-3 animate-bounce" />
                  Updating...
                </>
              ) : (
                <>
                  Update Password
                  <ArrowRight size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
            <p className="mt-4 text-[10px] text-slate-400 dark:text-zinc-500 font-bold uppercase tracking-widest flex items-center gap-2">
              <ShieldCheck size={12} className="text-emerald-500" />
              Secure End-to-End Encryption Enabled
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChangePassword;
