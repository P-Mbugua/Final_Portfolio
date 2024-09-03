import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faBriefcase, faCode } from '@fortawesome/free-solid-svg-icons';

export default function NameSection({ className = '' }) {
  const [navOpen, setNavOpen] = useState(false);
  const navRef = useRef(null);

  // Function to handle clicks outside the navigation panel
  const handleClickOutside = (event) => {
    if (navOpen && navRef.current && !navRef.current.contains(event.target)) {
      setNavOpen(false);
    }
  };

  useEffect(() => {
    // Attach the event listener to detect clicks outside the navigation panel
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navOpen]);

  const handleLinkClick = () => {
    setNavOpen(false);
  };

  const handleToggleClick = () => {
    setNavOpen(prev => !prev);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Toggle Button */}
      <button
        onClick={handleToggleClick}
        className="fixed top-4 right-4 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 z-30"
        aria-label={navOpen ? 'Close Navigation' : 'Open Navigation'}
      >
        {navOpen ? (
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        ) : (
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        )}
      </button>

      {/* Sliding Navigation Panel */}
      <div
        ref={navRef}
        className={`fixed top-0 right-0 h-full w-72 bg-gray-900 text-white shadow-lg transform transition-transform duration-300 ${navOpen ? 'translate-x-0' : 'translate-x-full'} z-20`}
      >
        <div className="flex justify-between items-center p-4">
          {/* Close Button inside Navigation Panel */}
          <button
            onClick={() => setNavOpen(false)}
            className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            aria-label="Close Navigation"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <nav className="flex flex-col p-8 space-y-6">
          <Link
            to="/"
            className="flex items-center space-x-4 text-base font-medium hover:text-blue-400 transition duration-200 border-b border-gray-600 py-4"
            onClick={handleLinkClick}
          >
            <FontAwesomeIcon icon={faHome} className="w-5 h-5 text-gray-300 hover:text-blue-400 transition-colors duration-300" />
            <span>Home</span>
          </Link>
          <Link
            to="/about"
            className="flex items-center space-x-4 text-base font-medium hover:text-blue-400 transition duration-200 border-b border-gray-600 py-4"
            onClick={handleLinkClick}
          >
            <FontAwesomeIcon icon={faUser} className="w-5 h-5 text-gray-300 hover:text-blue-400 transition-colors duration-300" />
            <span>About</span>
          </Link>
          <Link
            to="/contact"
            className="flex items-center space-x-4 text-base font-medium hover:text-blue-400 transition duration-200 border-b border-gray-600 py-4"
            onClick={handleLinkClick}
          >
            <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 text-gray-300 hover:text-blue-400 transition-colors duration-300" />
            <span>Contact</span>
          </Link>
          <Link
            to="/skills"
            className="flex items-center space-x-4 text-base font-medium hover:text-blue-400 transition duration-200 border-b border-gray-600 py-4"
            onClick={handleLinkClick}
          >
            <FontAwesomeIcon icon={faCode} className="w-5 h-5 text-gray-300 hover:text-blue-400 transition-colors duration-300" />
            <span>Skills</span>
          </Link>
          <Link
            to="/portfolio"
            className="flex items-center space-x-4 text-base font-medium hover:text-blue-400 transition duration-200 py-4"
            onClick={handleLinkClick}
          >
            <FontAwesomeIcon icon={faBriefcase} className="w-5 h-5 text-gray-300 hover:text-blue-400 transition-colors duration-300" />
            <span>Projects</span>
          </Link>
        </nav>
      </div>

      {/* Text when Navigation is closed */}
      {!navOpen && (
        <div className="fixed top-0 right-0 h-full w-24 bg-gray-800 text-white flex items-center justify-center z-10">
          <p className="text-white font-bold transform -rotate-90 origin-bottom whitespace-nowrap">
            NAVIGATION BAR
          </p>
        </div>
      )}
    </div>
  );
}
