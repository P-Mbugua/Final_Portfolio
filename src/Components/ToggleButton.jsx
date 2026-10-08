import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaSuitcase,
  FaEnvelope,
  FaCog,
  FaGithub,
} from 'react-icons/fa';

const ToggleButton = () => {
  const [showLinks, setShowLinks] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef(null);

  const navItems = [
    { label: 'Home', path: '/home', icon: FaHome },
    { label: 'About', path: '/about', icon: FaUser },
    { label: 'Portfolio', path: '/portfolio', icon: FaSuitcase },
    { label: 'Skills', path: '/skills', icon: FaCog },
    { label: 'Contact', path: '/contact', icon: FaEnvelope },
  ];

  const handleToggle = () => {
    setShowLinks((prev) => !prev);
  };

  const handleLinkClick = (path) => {
    navigate(path);
    setShowLinks(false);
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowLinks(false);
      }
    };

    if (showLinks) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showLinks]);

  // Close with Escape
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setShowLinks(false);
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <div
      ref={menuRef}
      className="fixed left-5 top-16 z-[100]"
    >
      {/* Toggle Button */}
      <button
        onClick={handleToggle}
        aria-label={showLinks ? 'Close navigation' : 'Open navigation'}
        aria-expanded={showLinks}
        className="
          flex h-11 w-11 items-center justify-center
          rounded-full
          border border-gray-200
          bg-white
          text-gray-800
          shadow-md
          transition-all duration-200
          hover:scale-105
          hover:shadow-lg
          active:scale-95
          dark:border-white/10
          dark:bg-[#151515]
          dark:text-white
        "
      >
        {showLinks ? <FaTimes size={16} /> : <FaBars size={16} />}
      </button>

      {/* Navigation Panel */}
      <div
        className={`
          absolute left-0 top-[52px]
          w-[215px]
          overflow-hidden
          rounded-xl
          border border-gray-200
          bg-white
          shadow-xl shadow-black/10
          transition-all duration-250 ease-out
          dark:border-white/10
          dark:bg-[#151515]

          ${
            showLinks
              ? 'visible translate-y-0 scale-100 opacity-100'
              : 'invisible -translate-y-2 scale-95 opacity-0'
          }
        `}
      >
        {/* Small Header */}
        <div className="flex items-center gap-3 border-b border-gray-100 px-4 py-3 dark:border-white/10">
          <div
            className="
              flex h-8 w-8 shrink-0 items-center justify-center
              rounded-lg
              bg-gray-900
              text-[10px]
              font-bold
              text-white
              dark:bg-white
              dark:text-gray-900
            "
          >
            PM
          </div>

          <div className="min-w-0">
            <p className="truncate text-xs font-semibold text-gray-900 dark:text-white">
              Mbugua Peter
            </p>
            <p className="text-[10px] text-gray-500">
              Software Developer
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <button
                key={item.path}
                onClick={() => handleLinkClick(item.path)}
                className={`
                  group relative flex w-full items-center gap-3
                  rounded-lg px-3 py-2.5
                  text-left
                  transition-colors duration-200

                  ${
                    isActive
                      ? `
                        bg-green-50
                        text-green-600
                        dark:bg-green-500/10
                        dark:text-green-400
                      `
                      : `
                        text-gray-600
                        hover:bg-gray-50
                        hover:text-gray-900
                        dark:text-gray-400
                        dark:hover:bg-white/[0.05]
                        dark:hover:text-white
                      `
                  }
                `}
              >
                {/* Active indicator */}
                <span
                  className={`
                    absolute left-0 top-1/2
                    h-5 w-[2px]
                    -translate-y-1/2
                    rounded-r-full
                    bg-green-500
                    transition-opacity
                    ${
                      isActive
                        ? 'opacity-100'
                        : 'opacity-0'
                    }
                  `}
                />

                {/* Icon */}
                <span
                  className={`
                    flex h-7 w-7 shrink-0 items-center justify-center
                    rounded-md
                    transition-colors duration-200

                    ${
                      isActive
                        ? 'bg-green-500 text-white'
                        : `
                          bg-gray-100
                          text-gray-500
                          group-hover:bg-gray-200
                          dark:bg-white/[0.06]
                          dark:text-gray-400
                          dark:group-hover:bg-white/10
                        `
                    }
                  `}
                >
                  <Icon size={13} />
                </span>

                <span className="text-xs font-medium">
                  {item.label}
                </span>

                {isActive && (
                  <span className="ml-auto h-1.5 w-1.5 rounded-full bg-green-500" />
                )}
              </button>
            );
          })}
        </nav>

        {/* GitHub */}
        <div className="border-t border-gray-100 px-2 py-2 dark:border-white/10">
          <a
            href="https://github.com/p-mbugua"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-3
              rounded-lg
              px-3 py-2
              text-gray-500
              transition-colors duration-200
              hover:bg-gray-50
              hover:text-gray-900
              dark:hover:bg-white/[0.05]
              dark:hover:text-white
            "
          >
            <FaGithub size={14} />

            <span className="text-[11px] font-medium">
              Explore GitHub
            </span>

            <span className="ml-auto text-xs">
              ↗
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ToggleButton;