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
import Header from './Components/Header';
import Footer from './Components/Footer';
import NameSection from './Components/NameSection';
import ToggleButton from './Components/ToggleButton'; 
import NavigationMenu from './Components/NavigationMenu';
import MobileHeader from './Components/MobileHeader'; 
import Loader from './Components/Loader';
import Background from './Components/Background'; // Import the Background component

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [loading, setLoading] = useState(true); 

  const handleToggle = () => {
    setIsMenuOpen(prev => !prev);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLinkClick = () => {
    setHideHeader(true);
    handleCloseMenu();
  };

  const handleSearch = () => {
    console.log("Search button clicked");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {loading && <Loader message="Loading... Peter" />} 

        {/* Background Component */}
        <Background />

        {/* Mobile Header */}
        <MobileHeader onSearch={handleSearch} />

        {/* Toggle Button for Small Devices */}
        <ToggleButton
          isMenuOpen={isMenuOpen}
          onClick={handleToggle}
        />

        {/* Navigation Menu */}
        <NavigationMenu
          isMenuOpen={isMenuOpen}
          onClose={handleCloseMenu}
          onLinkClick={handleLinkClick}
        />

        {/* Fixed Header */}
        <Header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md" />

        {/* Main Layout Container */}
        <div className="flex flex-1 pt-16 lg:pt-0.5">
          {/* Left Section */}
          <div className="hidden lg:flex lg:w-1/3 ">
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
                <Route path='/portfolio' element={<Portfolio />} />
              </Routes>
            </main>

            <Footer />
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex lg:w-1/6 ">
            {/* Right Section Content */}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
