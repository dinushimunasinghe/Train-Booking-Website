import React, { useState } from 'react';
import { Train } from 'lucide-react';
import SearchForm from './components/SearchForm';
import TrainList from './components/TrainList';
import BookingSteps from './components/BookingSteps';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';

function App() {
  const [searchPerformed, setSearchPerformed] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Train className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-semibold text-gray-900">RailConnect</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900">Sign In</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Register
              </button>
            </div>
          </div>
        </div>
      </nav>

      <Hero />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BookingSteps />
        <SearchForm onSearch={() => setSearchPerformed(true)} />
        
        {searchPerformed && <TrainList />}

        {!searchPerformed && (
          <>
            <Features />
            <Testimonials />
          </>
        )}
      </main>

      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Train className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-semibold">RailConnect</span>
              </div>
              <p className="text-gray-400 text-sm">
                Making train travel simple, comfortable, and accessible for everyone.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">
                Support
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Live Chat
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">
                Legal
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 RailConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;