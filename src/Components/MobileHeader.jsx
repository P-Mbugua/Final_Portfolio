import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faHome, faUser, faEnvelope, faSuitcase, faCog } from '@fortawesome/free-solid-svg-icons';

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close menu after clicking a link
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false); // Close menu when clicked outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white text-gray-900 p-4 flex justify-between items-center shadow-lg sticky top-0 z-50">
      {/* Logo Section */}
      <Link to="/home" className="text-yellow-500 font-bold text-xl">
          <img 
            src="https://photos.google.com/photo/AF1QipP8FIGp1A0VH0CtLh7ytsdK9nEOyd-JZBNiSoM8" 
            alt="" 
            style={{ width: '40px', height: 'auto' }} 
          />
        </Link>

      
      {/* Toggle Button */}
      <button
        onClick={toggleMenu}
        className="text-yellow-500 transition-transform transform hover:scale-110 duration-200"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div ref={menuRef} className="absolute top-full left-0 w-full bg-green-500 text-white z-10 rounded-b-lg shadow-lg p-4 transition-transform duration-300">
          <nav className="flex flex-col space-y-2">
            {/* Home Link */}
            <Link
              to="/home"
              className="flex items-center p-3 hover:bg-yellow-500 rounded-lg transition duration-200 transform hover:scale-105"
              onClick={handleLinkClick}
            >
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Home
            </Link>

            {/* About Link */}
            <Link
              to="/about"
              className="flex items-center p-3 hover:bg-yellow-500 rounded-lg transition duration-200 transform hover:scale-105"
              onClick={handleLinkClick}
            >
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              About
            </Link>

            {/* Portfolio Link */}
            <Link
              to="/portfolio"
              className="flex items-center p-3 hover:bg-yellow-500 rounded-lg transition duration-200 transform hover:scale-105"
              onClick={handleLinkClick}
            >
              <FontAwesomeIcon icon={faSuitcase} className="mr-2" />
              Portfolio
            </Link>

            {/* Contact Link */}
            <Link
              to="/contact"
              className="flex items-center p-3 hover:bg-yellow-500 rounded-lg transition duration-200 transform hover:scale-105"
              onClick={handleLinkClick}
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Contact
            </Link>

            {/* Skills Link */}
            <Link
              to="/skills"
              className="flex items-center p-3 hover:bg-yellow-500 rounded-lg transition duration-200 transform hover:scale-105"
              onClick={handleLinkClick}
            >
              <FontAwesomeIcon icon={faCog} className="mr-2" />
              Skills
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default MobileHeader;
