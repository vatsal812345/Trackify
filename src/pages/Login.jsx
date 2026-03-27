import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogIn, Github } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('admin@trackify.com');
  const [password, setPassword] = useState('123');
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple mock login
    login({ id: 1, name: 'Vatsal Prajapati', email, role: 'Admin' });
    navigate(from, { replace: true });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-zinc-950 p-4">
      <div className="max-w-md w-full glass p-8 rounded-2xl shadow-xl flex flex-col items-center">
        <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <span className="text-white text-3xl font-bold italic">T</span>
        </div>
        
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight">Trackify</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-8 font-medium">Employee tracking made simple</p>
        
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div className="space-y-1">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Email address</label>
            <input 
              type="email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all dark:text-white"
              placeholder="name@company.com"
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Password</label>
            <input 
              type="password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all dark:text-white"
              placeholder="••••••••"
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-2 group"
          >
            <span>Sign in to Dashboard</span>
            <LogIn size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
        
        <div className="mt-8 flex items-center gap-4 text-slate-400 dark:text-zinc-600 w-full">
            <div className="h-px flex-1 bg-slate-200 dark:bg-zinc-800"></div>
            <span className="text-xs uppercase font-bold tracking-widest">or</span>
            <div className="h-px flex-1 bg-slate-200 dark:bg-zinc-800"></div>
        </div>
        
        <button className="mt-8 w-full py-3 px-4 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:bg-slate-50 dark:hover:bg-zinc-800 text-slate-700 dark:text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2">
            <Github size={20} />
            <span>Login with Github</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
