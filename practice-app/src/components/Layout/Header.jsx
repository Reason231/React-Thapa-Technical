import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <nav className="bg-gray-900/80 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          


          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {['home', 'movie', 'contact', 'about'].map((section) => (
              <NavLink to={`/${section}`}
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-3 py-2 rounded-md text-lg font-medium transition-all duration-300 ${
                  activeSection === section
                    ? 'text-white bg-gradient-to-r from-purple-700 to-indigo-700'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </NavLink>
            ))}
          </div>

        </div>
      </div>
    </nav>
  );
};
