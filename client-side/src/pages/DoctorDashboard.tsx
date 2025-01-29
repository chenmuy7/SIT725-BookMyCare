import React, { useState } from 'react'

export default function DoctorDashboard() {
    const [activeTab, setActiveTab] = useState('Bookings');

    // Dynamic content based on active tab
    const renderContent = () => {
      switch (activeTab) {
        case 'Bookings':
          return (
            <div>
              <h2 className="text-xl font-semibold text-secondary mb-4">Client Bookings</h2>
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Client Name</th>
                    <th>Date</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: 1, clientName: 'Jane Doe', date: '2025-02-01', time: '10:00 AM' },
                    { id: 2, clientName: 'Mark Johnson', date: '2025-02-02', time: '02:00 PM' },
                    { id: 3, clientName: 'Alice Brown', date: '2025-02-03', time: '09:30 AM' },
                  ].map((booking) => (
                    <tr key={booking.id}>
                      <td>{booking.id}</td>
                      <td>{booking.clientName}</td>
                      <td>{booking.date}</td>
                      <td>{booking.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        case 'Schedule':
          return (
            <div>
              <h2 className="text-xl font-semibold text-secondary mb-4">Update Schedule</h2>
              <form className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <input
                    type="text"
                    className="input input-bordered w-full rounded-full"
                    placeholder="Day (e.g., Monday)"
                    required
                  />
                  <input
                    type="time"
                    className="input input-bordered w-full rounded-full"
                    required
                  />
                  <input
                    type="time"
                    className="input input-bordered w-full rounded-full"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary rounded-full">
                  Update Schedule
                </button>
              </form>
            </div>
          );
        case 'Settings':
          return (
            <div>
              <h2 className="text-xl font-semibold text-secondary mb-4">Edit Personal Data</h2>
              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  className="input input-bordered w-full rounded-full"
                  placeholder="Full Name"
                  required
                />
                <input
                  type="email"
                  className="input input-bordered w-full rounded-full"
                  placeholder="Email"
                  required
                />
                <input
                  type="text"
                  className="input input-bordered w-full rounded-full"
                  placeholder="Specialty"
                  required
                />
                <button type="submit" className="btn btn-primary rounded-full">
                  Save Changes
                </button>
              </form>
            </div>
          );
        default:
          return <p>Select a task from the sidebar.</p>;
      }
    };
  
    return (
      <div className="min-h-screen flex">
        {/* Sidebar */}
        <aside className="w-64 bg-neutral text-white flex flex-col p-4">
          <h1 className="text-2xl font-bold mb-6">Doctor Dashboard</h1>
          <nav className="flex flex-col gap-4">
            <button
              onClick={() => setActiveTab('Bookings')}
              className={`btn ${activeTab === 'Bookings' ? 'btn-primary' : 'btn-ghost'}`}
            >
              Bookings
            </button>
            <button
              onClick={() => setActiveTab('Schedule')}
              className={`btn ${activeTab === 'Schedule' ? 'btn-primary' : 'btn-ghost'}`}
            >
              Schedule
            </button>
            <button
              onClick={() => setActiveTab('Settings')}
              className={`btn ${activeTab === 'Settings' ? 'btn-primary' : 'btn-ghost'}`}
            >
              Settings
            </button>
          </nav>
        </aside>
  
        {/* Main Content */}
        <main className="flex-grow p-6 bg-accent">
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    );
}
