import React, { useEffect, useState } from 'react';
import { useUser } from '../auth/UserContext';


export default function Header() {
  const { user, setUser } = useUser();

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    window.location.href = '/login'; // Redirect to login
  };

  return (
    <header className="flex flex-wrap justify-between items-center sm:p-6 md:p-8 lg:py-10">
      {/* Logo */}
      <a href="/" className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Book My Care
      </a>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-6">
        <a className="btn btn-ghost normal-case text-sm md:text-lg lg:text-xl" href="/">
          Home
        </a>
        <a className="btn btn-ghost normal-case text-sm md:text-lg lg:text-xl" href="#">
          Doctor
        </a>
        <a className="btn btn-ghost normal-case text-sm md:text-lg lg:text-xl" href="#">
          Services
        </a>
        <a className="btn btn-ghost normal-case text-sm md:text-lg lg:text-xl" href="#">
          Appointments
        </a>
      </div>

      {/* Mobile Menu (Hamburger Icon) */}
      <div className="md:hidden">
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Action Buttons or User Greeting */}
      <div className="hidden md:flex gap-4">
        {user ? (
          <div className="flex items-center gap-4">
            <p className="text-secondary text-lg">Hi, {user.name}</p>
            <button className="btn btn-outline btn-primary sm:btn-sm md:btn-md lg:btn-lg" onClick={handleLogout}>
              Log Out
            </button>
          </div>
        ) : (
          <>
            <a href="/login" className="btn btn-outline btn-primary sm:btn-sm md:btn-md lg:btn-lg">
              Log In
            </a>
            <a href="/signup" className="btn btn-primary sm:btn-sm md:btn-md lg:btn-lg">
              Sign Up
            </a>
          </>
        )}
      </div>
    </header>
  );
}
