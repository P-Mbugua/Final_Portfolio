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
    <div>
      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-16 left-0 h-auto w-40 bg-gray-900 bg-opacity-75 rounded-lg p-7 transition-transform ${
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
            className="text-white font-bold flex items-center mb-2 w-full py-2 border-b border-green-500 hover:text-green-400"
          >
            <FaHome size={24} className="mr-2" />
            <span>Home</span>
          </button>
          <button 
            onClick={() => handleLinkClick('/about')} 
            className="text-white font-bold flex items-center mb-2 w-full py-2 border-b border-green-500 hover:text-green-400"
          >
            <FaUser size={24} className="mr-2" />
            <span>About</span>
          </button>
          <button 
            onClick={() => handleLinkClick('/portfolio')} 
            className="text-white font-bold flex items-center mb-2 w-full py-2 border-b border-green-500 hover:text-green-400"
          >
            <FaSuitcase size={24} className="mr-2" />
            <span>Portfolio</span>
          </button>

          <button 
            onClick={() => handleLinkClick('/skills')} 
            className="text-white font-bold flex items-center mb-2 w-full py-2 border-b border-green-500 hover:text-green-400"
          >
            <FaCog size={24} className="mr-2" />
            <span>Skills</span>
          </button>

          <button 
            onClick={() => handleLinkClick('/contact')} 
            className="text-white font-bold flex items-center mb-2 w-full py-2 border-b border-green-500 hover:text-green-400"
          >
            <FaEnvelope size={24} className="mr-2" />
            <span>Contact</span>
          </button>
       
        </nav>
      </div>

      {/* Toggle Button */}
      {!showLinks && (
        <button 
          onClick={handleToggle} 
          className="fixed top-16 left-4 flex items-center bg-white text-black p-3 rounded-full shadow-lg transition-transform transform hover:scale-110 active:scale-95 z-50"
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
        .hover\:text-green-400:hover {
          color: #38a169; /* Tailwind green-500 color */
        }
      `}</style>
    </div>
  );
};

export default ToggleButton;
