import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MobileHeader = () => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle Scroll Detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      
      if (currentScrollY < 10) {
        setScrollDirection('up');
        return;
      }

      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { to: "/home", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/skills", label: "Skills" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`
        fixed z-50 w-[92%] left-[4%] 
        bg-gray-800/90 backdrop-blur-md text-gray-900
        shadow-xl rounded-3xl border border-zinc-700/50
        transition-all duration-100 ease-in-out
        px-1 py-1
        ${scrollDirection === 'down' ? '-translate-y-24 opacity-0' : 'translate-y-0 opacity-100'}
        ${scrollDirection === 'up' ? 'top-4' : 'top-[-100px]'}
      `}
    >
      {/* Navigation Container */}
      <nav className="w-full flex justify-between items-center">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            to={link.to}
            className="group relative flex flex-col items-center justify-center p-2"
            aria-label={link.label}
          >
            <span className="text-sm font-small text-white group-hover:text-yellow-500 transition-colors duration-200 whitespace-nowrap">
              {link.label}
            </span>
       
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default MobileHeader;   