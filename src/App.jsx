import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';
import './index_copy.css';

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Skills from './Pages/Skills';
import Portfolio from './Pages/Portfolio';
import Biography from './Pages/Biography'; // Import the new Biography component
import Header from './Components/Header';
import Footer from './Components/Footer';
import NameSection from './Components/NameSection';
import ToggleButton from './Components/ToggleButton';
import NavigationMenu from './Components/NavigationMenu';
import MobileHeader from './Components/MobileHeader';
import Loader from './Components/Loader';
import Background from './Components/Background';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [loading, setLoading] = useState(true);

  // Toggle menu visibility
  const handleToggle = () => {
    setIsMenuOpen(prev => !prev);
  };

  // Close the menu
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  // Hide header and close menu when a link is clicked
  const handleLinkClick = () => {
    setHideHeader(true);
    handleCloseMenu();
  };

  // Simulate loading for 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      // Define the breakpoint for small and large devices
      const smallScreenWidth = 1024; // Adjust this value based on your breakpoint

      // Check if the window width crosses the small screen threshold
      if (window.innerWidth <= smallScreenWidth) {
        // Reload the page if on small devices
        window.location.reload();
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {loading && <Loader message="Loading... Peter" />}

        {/* Background Component */}
        <Background />

        {/* Mobile Header (On small screens) */}
        <MobileHeader
          onSearch={() => console.log("Search button clicked")}
          className="fixed top-0 left-0 right-0 z-60"
        />

        {/* Toggle Button for Small Devices */}
        <ToggleButton
          isMenuOpen={isMenuOpen}
          onClick={handleToggle}
          className="fixed top-4 right-4 z-70"
        />

        {/* Navigation Menu (On small screens) */}
        <NavigationMenu
          isMenuOpen={isMenuOpen}
          onClose={handleCloseMenu}
          onLinkClick={handleLinkClick}
          className={`fixed top-0 right-0 h-full w-72 bg-gray-900 text-white shadow-lg transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}
        />

        {/* Fixed Header (On larger screens) */}
        <Header
          className={`fixed left-0 right-0 z-40 bg-white shadow-md ${hideHeader ? 'hidden' : ''} mt-16 lg:mt-0`} // Margin top on small screens
        />

        {/* Main Layout Container */}
        <div className="flex flex-1 pt-16 lg:pt-0">
          {/* Left Section (On larger screens) */}
          <div className="hidden lg:flex lg:w-1/3">
            <NameSection />
          </div>

          {/* Center Section */}
          <div className="flex flex-col flex-grow overflow-auto z-10">
            <main className="flex-grow p-4">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/biography" element={<Biography />} /> {/* New Route */}
              </Routes>
            </main>

            {/* Footer */}
            <Footer />
          </div>

          {/* Right Section (On larger screens) */}
          <div className="hidden lg:flex lg:w-1/6">
            {/* Right Section Content */}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
