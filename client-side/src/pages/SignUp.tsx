import React, { useState } from 'react'

export default function SignUp() {
  const [isDoctorForm, setIsDoctorForm] = useState(true);

  return (
    <main className="flex items-center justify-center h-custom">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full border border-accent">
        {/* Logo */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-primary py-5">Sign Up an Account</h1>
        </div>

        {/* Divider */}
        <div className="flex items-center my-5">
          <div className="border-t border-secondary w-full"></div>
          <p className="text-secondary mx-4">AS</p>
          <div className="border-t border-secondary w-full"></div>
        </div>

        {/* Tab for Selecting Role */}
        <div className="flex justify-center gap-5 my-5">
          <button
            onClick={() => setIsDoctorForm(true)}
            className={`${
              isDoctorForm ? 'btn btn-primary' : 'btn btn-accent'
            } px-6 py-2 rounded-full border-2 hover:bg-lightgreyblue`}
          >
            Doctor
          </button>
          <button
            onClick={() => setIsDoctorForm(false)}
            className={`${
              !isDoctorForm ? 'btn btn-primary' : 'btn btn-accent'
            } px-6 py-2 rounded-full border-2 hover:bg-lightgreyblue`}
          >
            Client
          </button>
        </div>

        {/* Sign Up Form */}
        {isDoctorForm ? (
          <form className="flex flex-col gap-5">
            <div>
              <label htmlFor="doctorName" className="block text-secondary">
                Full Name
              </label>
              <input
                type="text"
                id="doctorName"
                className="input input-bordered w-full rounded-full border-secondary text-secondary placeholder-secondary"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="doctorEmail" className="block text-secondary">
                Email
              </label>
              <input
                type="email"
                id="doctorEmail"
                className="input input-bordered w-full rounded-full border-secondary text-secondary placeholder-secondary"
                placeholder="doctor@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="doctorSpecialty" className="block text-secondary">
                Specialty
              </label>
              <select
                id="doctorSpecialty"
                className="select select-bordered w-full rounded-full border-secondary text-secondary placeholder-secondary"
                required
              >
                <option value="" disabled selected>
                  Select your specialty
                </option>
                <option value="cardiology">Cardiology</option>
                <option value="neurology">Neurology</option>
                <option value="dermatology">Dermatology</option>
                <option value="orthopedics">Orthopedics</option>
                <option value="pediatrics">Pediatrics</option>
                <option value="general">General Medicine</option>
              </select>
            </div>
            <div>
              <label htmlFor="doctorPassword" className="block text-secondary">
                Password
              </label>
              <input
                type="password"
                id="doctorPassword"
                className="input input-bordered w-full rounded-full border-secondary text-secondary placeholder-secondary"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full mt-5 rounded-full"
            >
              Sign Up as Doctor
            </button>
          </form>
        ) : (
          <form className="flex flex-col gap-5">
            <div>
              <label htmlFor="clientName" className="block text-secondary">
                Full Name
              </label>
              <input
                type="text"
                id="clientName"
                className="input input-bordered w-full rounded-full border-secondary text-secondary placeholder-secondary"
                placeholder="Jane Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="clientEmail" className="block text-secondary">
                Email
              </label>
              <input
                type="email"
                id="clientEmail"
                className="input input-bordered w-full rounded-full border-secondary text-secondary placeholder-secondary"
                placeholder="client@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="clientDOB" className="block text-secondary">
                Date of Birth
              </label>
              <input
                type="date"
                id="clientDOB"
                className="input input-bordered w-full rounded-full border-secondary text-secondary placeholder-secondary"
                required
              />
            </div>
            <div>
              <label htmlFor="clientPassword" className="block text-secondary">
                Password
              </label>
              <input
                type="password"
                id="clientPassword"
                className="input input-bordered w-full rounded-full border-secondary text-secondary placeholder-secondary"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full mt-5 rounded-full"
            >
              Sign Up as Client
            </button>
          </form>
        )}

        {/* Log In Link */}
        <div className="text-center mt-6">
          <p className="text-secondary">
            Already have an account?{' '}
            <a href="/login" className="text-primary font-semibold hover:underline">
              Log In
            </a>
          </p>
        </div>
      </div>
    </main>
  );
};


