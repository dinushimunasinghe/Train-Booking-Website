import React from 'react';
import { Shield, Clock, Smartphone, Gift } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure Booking',
      description: 'Your payments and personal information are always protected',
    },
    {
      icon: Clock,
      title: 'Real-time Updates',
      description: 'Get instant notifications about your journey status',
    },
    {
      icon: Smartphone,
      title: 'Mobile Tickets',
      description: 'No paper needed - your ticket is always on your phone',
    },
    {
      icon: Gift,
      title: 'Reward Points',
      description: 'Earn points with every booking and get exclusive offers',
    },
  ];

  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose RailConnect</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We provide the best train booking experience with features designed for your convenience
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <feature.icon className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;