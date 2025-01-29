import React, { useState } from 'react'

export default function Booking() {
    const [activeTab, setActiveTab] = useState('Location');

    // Tab content based on the active tab
    const renderTabContent = () => {
      switch (activeTab) {
        case 'Location':
          return <p className="text-secondary">Select your location here...</p>;
        case 'Category':
          return <p className="text-secondary">Choose a category...</p>;
        case 'Service':
          return <p className="text-secondary">Pick a service...</p>;
        case 'Time':
          return <p className="text-secondary">Select a time...</p>;
        case 'Client Details':
          return <p className="text-secondary">Fill in your details...</p>;
        default:
          return <p className="text-secondary">Select a tab to begin.</p>;
      }
    };
  
    return (
      <main className="flex items-center justify-center h-custom">
        {/* Booking Widget Container */}
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl w-full relative">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-secondary">Booking Widget</h1>
            <button className="text-secondary hover:text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
  
          {/* Navigation Tabs */}
          <div className="flex justify-between text-secondary text-sm mb-6">
            {['Location', 'Category', 'Service', 'Time', 'Client Details'].map((tab) => (
              <span
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`cursor-pointer pb-1 ${
                  activeTab === tab
                    ? 'border-b-2 border-primary text-primary'
                    : 'border-b-2 border-transparent hover:border-primary hover:text-primary'
                }`}
              >
                {tab}
              </span>
            ))}
          </div>
  
          {/* Dynamic Content */}
          <div className="mt-6">
            {renderTabContent()}
          </div>
        </div>
      </main>
    );
}

