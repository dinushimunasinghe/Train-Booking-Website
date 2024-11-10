import React from 'react';
import { Search, Train, CreditCard, Check } from 'lucide-react';

const BookingSteps: React.FC = () => {
  const steps = [
    {
      icon: Search,
      title: 'Search',
      description: 'Find your perfect train',
    },
    {
      icon: Train,
      title: 'Select',
      description: 'Choose your preferred seat',
    },
    {
      icon: CreditCard,
      title: 'Pay',
      description: 'Quick & secure payment',
    },
    {
      icon: Check,
      title: 'Confirm',
      description: 'Get your e-ticket',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto mb-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="text-center">
            <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <step.icon className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">{step.title}</h3>
            <p className="text-sm text-gray-500">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingSteps;