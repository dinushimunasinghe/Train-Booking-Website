import React from 'react';
import { Clock, CreditCard, Wifi, Coffee, Users } from 'lucide-react';

const TrainList: React.FC = () => {
  const trains = [
    {
      id: 1,
      name: 'Express 101',
      departure: '08:00',
      arrival: '11:30',
      duration: '3h 30m',
      price: 89.99,
      seatsAvailable: 42,
      amenities: ['wifi', 'cafe', 'power'],
      image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 2,
      name: 'Rapid 204',
      departure: '10:15',
      arrival: '13:45',
      duration: '3h 30m',
      price: 75.50,
      seatsAvailable: 28,
      amenities: ['wifi', 'power'],
      image: 'https://images.unsplash.com/photo-1517505246386-a94751a0c490?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 3,
      name: 'Express 303',
      departure: '12:30',
      arrival: '16:00',
      duration: '3h 30m',
      price: 95.00,
      seatsAvailable: 15,
      amenities: ['wifi', 'cafe', 'power'],
      image: 'https://images.unsplash.com/photo-1532105956626-9569c03602f6?auto=format&fit=crop&q=80&w=400'
    },
  ];

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case 'wifi':
        return <Wifi className="h-4 w-4" />;
      case 'cafe':
        return <Coffee className="h-4 w-4" />;
      case 'power':
        return <Users className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {trains.map((train) => (
        <div
          key={train.id}
          className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="md:col-span-2">
              <img
                src={train.image}
                alt={train.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="md:col-span-3 p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{train.name}</h3>
                  <div className="flex items-center text-gray-500 mt-1">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{train.duration}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">${train.price}</div>
                  <div className="text-sm text-gray-500">{train.seatsAvailable} seats left</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-lg font-medium text-gray-900">{train.departure}</div>
                  <div className="text-sm text-gray-500">Departure</div>
                </div>
                <div>
                  <div className="text-lg font-medium text-gray-900">{train.arrival}</div>
                  <div className="text-sm text-gray-500">Arrival</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex space-x-3">
                  {train.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="bg-gray-100 p-2 rounded-lg text-gray-600"
                      title={amenity.charAt(0).toUpperCase() + amenity.slice(1)}
                    >
                      {getAmenityIcon(amenity)}
                    </div>
                  ))}
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                  <CreditCard className="h-4 w-4" />
                  <span>Book Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrainList;