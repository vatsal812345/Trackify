import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import MyProfile from './pages/MyProfile';
import TrackedHours from './pages/TrackedHours';

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
              <Route path="*" element={<Placeholder title="Reports Page" />} />
            </Route>
            <Route path="tasks" element={<Placeholder title="Tasks Page" />} />
            <Route path="projects" element={<Placeholder title="Projects Page" />} />
            <Route path="attendance" element={<Placeholder title="Attendance Page" />} />
            <Route path="time-requests" element={<Placeholder title="Time Requests" />} />
            <Route path="company" element={<Placeholder title="My Company" />} />
            <Route path="settings" element={<Placeholder title="Settings" />} />
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
