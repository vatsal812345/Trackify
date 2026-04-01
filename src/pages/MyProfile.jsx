import React, { useState } from 'react';
import { Camera, Save, RefreshCcw } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const MyProfile = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    firstName: user?.name?.split(' ')[0] || '',
    lastName: user?.name?.split(' ')[1] || '',
    middleName: '',
    email: user?.email || '',
    photo: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Saving profile:', formData);
    // Add save logic here
  };

  const handleReset = () => {
    setFormData({
      firstName: user?.name?.split(' ')[0] || '',
      lastName: user?.name?.split(' ')[1] || '',
      middleName: '',
      email: user?.email || '',
      photo: null
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-slate-200 dark:border-zinc-800 overflow-hidden">
        <form onSubmit={handleSubmit} className="p-4 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {/* First Name */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-zinc-300">
                  First Name<span className="text-red-500 ml-0.5">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="vatsal"
                  className="w-full px-4 py-2.5 bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
                  required
                />
              </div>
                              
              {/* Last Name */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-zinc-300">
                  Last Name<span className="text-red-500 ml-0.5">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="prajapati"
                  className="w-full px-4 py-2.5 bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
                  required
                />
              </div>

              {/* Middle Name */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-zinc-300">
                  Middle Name
                </label>
                <input
                  type="text"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleChange}
                  placeholder="Middle name"
                  className="w-full px-4 py-2.5 bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-zinc-300">
                  Email <span className="text-red-500 ml-0.5">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="vatsal@yopmail.com"
                  className="w-full px-4 py-2.5 bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
                  required
                />
              </div>
            </div>

            <div className="space-y-6 flex flex-col items-center md:items-start">
              {/* Photo Upload */}
              <div className="space-y-2 w-full max-w-[208px]">
                <label className="text-sm font-semibold text-slate-700 dark:text-zinc-300">
                  Photo <span className="text-red-500 ml-0.5">*</span>
                </label>
                <div className="relative group">
                  <div className="w-52 h-52 bg-zinc-100 dark:bg-zinc-800 border-2 border-dashed border-slate-300 dark:border-zinc-700 rounded-lg flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-blue-500 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 transition-all">
                    <Camera className="text-slate-500 dark:text-zinc-400" size={40} />
                    <p className="text-sm font-medium text-slate-600 dark:text-zinc-400">Upload Portrait</p>
                    <input 
                      type="file" 
                      className="absolute inset-0 opacity-0 cursor-pointer" 
                      accept="image/*"
                      onChange={(e) => setFormData(prev => ({ ...prev, photo: e.target.files[0] }))}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 pt-8 border-t border-slate-100 dark:border-zinc-800">
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-6 py-2.5 bg-[#45b27a] hover:bg-[#3ca06b] text-white rounded-lg font-semibold transition-all shadow-sm w-full sm:w-auto"
            >
              <Save size={18} />
              Save
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="flex items-center justify-center gap-2 px-6 py-2.5 bg-[#e95d7e] hover:bg-[#d84a6b] text-white rounded-lg font-semibold transition-all shadow-sm w-full sm:w-auto"
            >
              <RefreshCcw size={18} />
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
