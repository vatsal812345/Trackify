import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';
import Projects from './pages/Projects';
import MyProfile from './pages/MyProfile';
import SettingsProfile from './pages/SettingsProfile';
import ChangePassword from './pages/ChangePassword';
import EmailTemplates from './pages/EmailTemplates';
import Employees from './pages/Employees';
import RolesPermissions from './pages/RolesPermissions';
import TrackedHours from './pages/TrackedHours';

import Attendance from './pages/Attendance';
import ActivityLevel from './pages/ActivityLevel';
import Timeline from './pages/Timeline';
import Screenshots from './pages/Screenshots';

// Placeholder components for routes
const Placeholder = ({ title }) => (
  <div className="card p-8 flex flex-col items-center justify-center min-h-[400px]">
    <h2 className="text-3xl font-extrabold text-slate-800 dark:text-white mb-4">{title}</h2>
    <p className="text-slate-500 dark:text-zinc-500 font-medium">This page is under construction.</p>
  </div>
);

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
            <Route index element={<Dashboard />} />
            <Route path="reports">
              <Route path="tracked-hours" element={<TrackedHours />} />
              <Route path="attendance" element={<Attendance />} />
              <Route path="activity-level" element={<ActivityLevel />} />
              <Route path="timeline" element={<Timeline />} />
              <Route path="screenshots" element={<Screenshots />} />
              <Route path="*" element={<Placeholder title="Reports Page" />} />
            </Route>
            <Route path="tasks" element={<Tasks />} />
            <Route path="projects" element={<Projects />} />
            <Route path="attendance" element={<Attendance />} />
            <Route path="time-requests" element={<Placeholder title="Time Requests" />} />
            <Route path="company">
              <Route path="employees" element={<Employees />} />
              <Route path="roles" element={<RolesPermissions />} />
              <Route index element={<Navigate to="employees" replace />} />
            </Route>
            <Route path="settings">
              <Route path="profile" element={<SettingsProfile />} />
              <Route path="password" element={<ChangePassword />} />
              <Route path="email-templates" element={<EmailTemplates />} />
              <Route index element={<Navigate to="profile" replace />} />
            </Route>
            <Route path="my-profile" element={<MyProfile />} />
          </Route>

          {/* 404 Redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
