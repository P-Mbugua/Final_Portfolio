import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaUser, FaSuitcase, FaEnvelope, FaCog } from 'react-icons/fa';

const ToggleButton = () => {
  const [showLinks, setShowLinks] = useState(false);
  const navigate = useNavigate();
  const sidebarRef = useRef(null);

  const handleToggle = () => {
    setShowLinks((prev) => !prev);
  };

  const handleLinkClick = (path) => {
    navigate(path);
    setShowLinks(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setShowLinks(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`absolute top-10 left-0 h-auto w-40 bg-gray-900 bg-opacity-75 rounded-lg p-7 transition-transform ${
          showLinks ? 'translate-x-0' : '-translate-x-full'
        } duration-300 z-40 shadow-lg`}
        style={{ visibility: showLinks ? 'visible' : 'hidden' }}
      >
        <button 
          onClick={handleToggle} 
          className="flex items-center bg-gray-800 text-white p-2 rounded-full mb-4 "
        >
          <FaTimes size={20} />
        </button>
        <nav className="flex flex-col items-start">
          <button 
            onClick={() => handleLinkClick('/home')} 
            className="text-white hover:text-green-400 flex items-center mb-2 w-full py-2 border-b border-green-500"
          >
            <FaHome size={24} className="mr-2 text-white hover:text-green-500" />
            Home
          </button>
          <button 
            onClick={() => handleLinkClick('/about')} 
            className="text-white hover:text-green-400 flex items-center mb-2 w-full py-2 border-b border-green-500"
          >
            <FaUser size={24} className="mr-2 text-white hover:text-green-500" />
            About
          </button>
          <button 
            onClick={() => handleLinkClick('/portfolio')} 
            className="text-white hover:text-green-400 flex items-center mb-2 w-full py-2 border-b border-green-500"
          >
            <FaSuitcase size={24} className="mr-2 text-white hover:text-green-500" />
            Portfolio
          </button>
          <button 
            onClick={() => handleLinkClick('/contact')} 
            className="text-white hover:text-green-400 flex items-center mb-2 w-full py-2 border-b border-green-500"
          >
            <FaEnvelope size={24} className="mr-2 text-white hover:text-green-500" />
            Contact
          </button>
          <button 
            onClick={() => handleLinkClick('/skills')} 
            className="text-white hover:text-green-400 flex items-center mb-2 w-full py-2 border-b border-green-500"
          >
            <FaCog size={24} className="mr-2 text-white hover:text-green-500" />
            Skills
          </button>
        </nav>
      </div>

      {/* Toggle Button */}
      {!showLinks && (
        <button 
          onClick={handleToggle} 
          className="fixed top-14 left-4 flex items-center bg-white text-black p-3 rounded-full shadow-lg transition-transform transform hover:scale-110 active:scale-95 z-50"
          style={{ animation: 'pulse 1.5s infinite' }} // Add animation
        >
          <FaBars size={20} />
        </button>
      )}
      
      {/* Keyframes for pulsing effect */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default ToggleButton;
