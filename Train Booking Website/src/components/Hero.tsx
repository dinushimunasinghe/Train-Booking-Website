import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80"
          alt="Train station"
          className="w-full h-[600px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/50" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white">
        <h1 className="text-5xl font-bold mb-6 max-w-2xl">
          Your Journey Begins with a Single Click
        </h1>
        <p className="text-xl text-gray-200 max-w-xl mb-8">
          Experience seamless train travel booking with real-time availability, 
          instant confirmations, and the best prices guaranteed.
        </p>
        <div className="flex space-x-4">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Book Now
          </button>
          <button className="bg-white/10 backdrop-blur-md text-white px-8 py-3 rounded-lg hover:bg-white/20 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;