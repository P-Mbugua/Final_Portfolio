// import React, { useState, useRef, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faTimes, faHome, faUser, faEnvelope, faSuitcase, faCog } from '@fortawesome/free-solid-svg-icons';
// import { faBlog } from '@fortawesome/free-solid-svg-icons';

// const MobileHeader = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const menuRef = useRef(null);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleLinkClick = () => {
//     setIsOpen(false);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setIsOpen(false); 
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <header className="bg-zinc-900 text-gray-300 p-4 flex justify-between items-center shadow-lg fixed top-4 left-4 right-4 z-50 rounded-xl">
//       {/* Logo Section */}
//       <Link to="/home" className="text-yellow-500 font-bold text-xl">
//         <img 
//           src="https://p-mbugua.github.io/peshmarkTwo/Photos/Logo-removebg-preview.png" 
//           alt="" 
//           style={{ width: '40px', height: 'auto' }} 
//         />
//       </Link>

//       {/* Toggle Button */}
//       <button
//         onClick={toggleMenu}
//         className="text-yellow-500 transition-transform transform hover:scale-110 duration-200"
//         aria-label={isOpen ? 'Close menu' : 'Open menu'}
//       >
//         <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
//       </button>

//       {/* Dropdown Menu */}
//       {isOpen && (
//         <div ref={menuRef} className="absolute top-full left-0 w-full bg-green-500 text-white z-10 rounded-b-lg shadow-lg p-4 transition-transform duration-300">
//           <nav className="flex flex-col space-y-2">
//             <Link
//               to="/home"
//               className="flex items-center p-3 hover:bg-yellow-500 hover:text-black rounded-lg transition duration-200 transform hover:scale-105"
//               onClick={handleLinkClick}
//             >
//               <FontAwesomeIcon icon={faHome} className="mr-2" />
//               Home
//             </Link>

//             <Link
//               to="/about"
//               className="flex items-center p-3 hover:bg-yellow-500 hover:text-black rounded-lg transition duration-200 transform hover:scale-105"
//               onClick={handleLinkClick}
//             >
//               <FontAwesomeIcon icon={faUser} className="mr-2" />
//               About
//             </Link>

//             <Link
//               to="/portfolio"
//               className="flex items-center p-3 hover:bg-yellow-500 hover:text-black rounded-lg transition duration-200 transform hover:scale-105"
//               onClick={handleLinkClick}
//             >
//               <FontAwesomeIcon icon={faSuitcase} className="mr-2" />
//               Portfolio
//             </Link>

//             <Link
//               to="/skills"
//               className="flex items-center p-3 hover:bg-yellow-500 hover:text-black rounded-lg transition duration-200 transform hover:scale-105"
//               onClick={handleLinkClick}
//             >
//               <FontAwesomeIcon icon={faCog} className="mr-2" />
//               Skills
//             </Link>

//             <Link
//               to="/blog"
//               className="flex items-center p-3 hover:bg-yellow-500 hover:text-black rounded-lg transition duration-200 transform hover:scale-105"
//               onClick={handleLinkClick}
//             >
//               <FontAwesomeIcon icon={faBlog} className="mr-2" />
//               Blog
//             </Link>

//             <Link
//               to="/contact"
//               className="flex items-center p-3 hover:bg-yellow-500 hover:text-black rounded-lg transition duration-200 transform hover:scale-105"
//               onClick={handleLinkClick}
//             >
//               <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
//               Contact
//             </Link>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// export default MobileHeader;




import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBars, 
  faTimes, 
  faHome, 
  faUser, 
  faEnvelope, 
  faSuitcase, 
  faCog, 
  faBlog 
} from '@fortawesome/free-solid-svg-icons';

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);
  const menuRef = useRef(null);

  // Handle Scroll Detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      
      // Prevent hiding when overscrolling at top
      if (currentScrollY < 10) {
        setScrollDirection('up');
        return;
      }

      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
        setIsOpen(false); // Close menu on scroll down
      } else {
        setScrollDirection('up');
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { to: "/home", icon: faHome, label: "Home" },
    { to: "/about", icon: faUser, label: "About" },
    { to: "/portfolio", icon: faSuitcase, label: "Portfolio" },
    { to: "/skills", icon: faCog, label: "Skills" },
    { to: "/blog", icon: faBlog, label: "Blog" },
    { to: "/contact", icon: faEnvelope, label: "Contact" },
  ];

  return (
    <header
      className={`
        fixed z-50 w-[92%] left-[4%] 
        bg-gray-800 backdrop-blur-md text-gray-200
        flex justify-between items-center 
        shadow-xl rounded-2xl
        transition-all duration-300 ease-in-out
        h-16 px-4
        font-sans tracking-tight
        ${scrollDirection === 'down' ? '-translate-y-24 opacity-0' : 'translate-y-0 opacity-100'}
        ${scrollDirection === 'up' ? 'top-4' : 'top-[-100px]'}
      `}
    >
      {/* Logo Section */}
      <Link 
        to="/home" 
        className="flex items-center gap-2 text-yellow-500 font-bold text-lg hover:opacity-80 transition-opacity"
        onClick={() => setIsOpen(false)}
      >
        <img 
          src="https://p-mbugua.github.io/peshmarkTwo/Photos/Logo-removebg-preview.png" 
          alt="Logo" 
          className="w-8 h-8 object-contain" 
        />
        <span className="hidden xs:inline">Peshmark</span>
      </Link>

      {/* Toggle Button */}
      <button
        onClick={toggleMenu}
        className="text-yellow-500 p-2 rounded-lg hover:bg-zinc-800 transition-colors focus:outline-none"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
      </button>

      {/* Dropdown Menu */}
      <div 
        ref={menuRef}
        className={`
          absolute top-full left-0 w-full 
          bg-zinc-800/95 backdrop-blur-xl 
          rounded-2xl shadow-2xl border border-zinc-700/50
          overflow-hidden transition-all duration-300 ease-in-out origin-top
          ${isOpen ? 'opacity-100 scale-100 mt-3 py-4' : 'opacity-0 scale-95 h-0 mt-0 py-0 pointer-events-none'}
        `}
      >
        <nav className="flex flex-col px-2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="flex items-center px-4 py-3.5 my-1 
                text-gray-300 font-medium rounded-xl
                hover:bg-yellow-500 hover:text-black 
                hover:shadow-md hover:scale-[1.02]
                active:scale-95
                transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              <FontAwesomeIcon icon={link.icon} className="w-5 h-5 mr-3 text-yellow-500 group-hover:text-black" />
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default MobileHeader;   