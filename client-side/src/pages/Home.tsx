import React from 'react';

export default function Home() {
  return (
    <div
      className="bg-background bg-cover bg-center relative h-custom
                 before:content-[''] before:absolute before:inset-0
                 before:block before:bg-gradient-to-r before:from-white
                 before:from-30% before:to-blue before:to-70%
                 before:opacity-80 before:z-[-5]"
    >
      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-6xl md:text-8xl font-bold leading-tight text-gray-800">
          Book Your Doctor Appointment with Ease
        </h1>
        <p className="text-lg md:text-2xl mt-6 text-gray-700 max-w-3xl">
          Book My Care is an appointment management system designed to help you find the perfect time
          for your health check.
        </p>
        <div className="flex gap-6 mt-8">
          <a href="/booking" className="btn btn-primary sm:btn-sm md:btn-md lg:btn-lg">
            Book Now
          </a>
          <a  className="btn btn-outline btn-primary sm:btn-sm md:btn-md lg:btn-lg">
            Explore Services
          </a>
        </div>
      </main>
    </div>
  );
}
