import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

// Import components
import { UserProvider } from './auth/UserContext';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Booking from './pages/Booking';
import DoctorDashboard from './pages/DoctorDashboard';
import UserDashboard from './pages/UserDashboard';

// Layout wrapper for consistent Header
const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <main className="min-h-[calc(100vh-200px)]">{children}</main>
  </>
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/login" element={<Layout><Login /></Layout>} />
          <Route path="/signup" element={<Layout><SignUp /></Layout>} />
          <Route path="/booking" element={<Layout><Booking /></Layout>} />

          {/* Protected routes */}
          <Route path="/dashboard/doctor" element={<Layout><DoctorDashboard /></Layout>} />
          <Route path="/dashboard/user" element={<Layout><UserDashboard /></Layout>} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);
