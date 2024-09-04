import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUser, FaEnvelope, FaCogs, FaTimes } from 'react-icons/fa';

export default function NavigationMenu({ isMenuOpen, onClose, onLinkClick }) {
  return (
    <div>
      {/* Sidebar Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 w-64 h-full bg-gray-900 text-white transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} shadow-lg z-50`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b border-gray-700">
            {/* Close Button */}
            <button
              aria-label="Close menu"
              className="text-2xl text-gray-400 hover:text-gray-200 focus:outline-none"
              onClick={onClose}
            >
              <FaTimes />
            </button>
          </div>
          <nav className="flex flex-col flex-grow p-4">
            <NavLink
              to="/"
              className={({ isActive }) => 
                `flex items-center text-lg py-3 px-4 rounded-lg transition-colors duration-150 ease-in-out ${isActive ? 'bg-gray-800 text-white' : 'hover:bg-gray-800 text-gray-300'} focus:outline-none border-b border-gray-700 last:border-b-0`
              }
              onClick={() => {
                onLinkClick();
                onClose();
              }}
            >
              <FaHome className="mr-3 text-xl" />
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => 
                `flex items-center text-lg py-3 px-4 rounded-lg transition-colors duration-150 ease-in-out ${isActive ? 'bg-gray-800 text-white' : 'hover:bg-gray-800 text-gray-300'} focus:outline-none border-b border-gray-700 last:border-b-0`
              }
              onClick={() => {
                onLinkClick();
                onClose();
              }}
            >
              <FaUser className="mr-3 text-xl" />
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => 
                `flex items-center text-lg py-3 px-4 rounded-lg transition-colors duration-150 ease-in-out ${isActive ? 'bg-gray-800 text-white' : 'hover:bg-gray-800 text-gray-300'} focus:outline-none border-b border-gray-700 last:border-b-0`
              }
              onClick={() => {
                onLinkClick();
                onClose();
              }}
            >
              <FaEnvelope className="mr-3 text-xl" />
              Contact
            </NavLink>
            <NavLink
              to="/skills"
              className={({ isActive }) => 
                `flex items-center text-lg py-3 px-4 rounded-lg transition-colors duration-150 ease-in-out ${isActive ? 'bg-gray-800 text-white' : 'hover:bg-gray-800 text-gray-300'} focus:outline-none last:border-b-0`
              }
              onClick={() => {
                onLinkClick();
                onClose();
              }}
            >
              <FaCogs className="mr-3 text-xl" />
              Skills
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
}
