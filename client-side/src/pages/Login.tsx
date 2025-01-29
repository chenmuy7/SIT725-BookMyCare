import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../auth/UserContext';

export default function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const { setUser } = useUser();
  const navigate = useNavigate();

  const users = {
    doctors: [
      { email: 'john.doe@example.com', password: 'password123', name: 'Dr. John Doe', role: 'doctor' },
    ],
    clients: [
      { email: 'jane.doe@example.com', password: 'password456', name: 'Jane Doe', role: 'user' },
    ],
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const user =
      users.doctors.find((u) => u.email === credentials.email && u.password === credentials.password) ||
      users.clients.find((u) => u.email === credentials.email && u.password === credentials.password);

    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user); // Update the context
      navigate(user.role === 'doctor' ? '/dashboard/doctor' : '/dashboard/user');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <main className="flex items-center justify-center h-custom">
      <div className="shadow-lg rounded-lg p-8 max-w-lg w-full border border-accent">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-primary py-5">Login to Your Account</h1>
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form className="flex flex-col gap-5" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="block text-secondary">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={credentials.email}
              onChange={handleInputChange}
              className="input input-bordered w-full rounded-full border-secondary text-secondary placeholder-secondary"
              placeholder="yourname@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-secondary">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
              className="input input-bordered w-full rounded-full border-secondary text-secondary placeholder-secondary"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-full mt-5 rounded-full text-lg">
            Log In
          </button>
        </form>
      </div>
    </main>
  );
}
