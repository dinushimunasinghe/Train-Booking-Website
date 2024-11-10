import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      content: "The easiest way to book train tickets. I love the real-time updates feature!",
      author: "Sarah Johnson",
      role: "Frequent Traveler",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120"
    },
    {
      content: "RailConnect has transformed how I plan my business trips. Highly recommended!",
      author: "Michael Chen",
      role: "Business Executive",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120&h=120"
    },
    {
      content: "The reward points system is fantastic. I've saved so much on my regular travels.",
      author: "Emma Thompson",
      role: "Student",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=120&h=120"
    }
  ];

  return (
    <div className="py-16 bg-white rounded-2xl shadow-sm">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Don't just take our word for it - hear from some of our satisfied customers
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="relative">
            <div className="absolute -top-3 -left-3 text-6xl text-blue-200">"</div>
            <div className="bg-gray-50 rounded-xl p-6 relative">
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;