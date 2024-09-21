import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Skills from './Pages/Skills';
import Portfolio from './Pages/Portfolio';
import Biography from './Pages/Biography';
import ToggleButton from './Components/ToggleButton';
import ParticlesBackground from './Components/ParticlesBackground';
import Footer from './Components/Footer'; // Import Footer

function App() {
  const location = useLocation(); // Get current location

  return (
    <div className="relative min-h-screen">
      {location.pathname === '/home' && <ParticlesBackground />} {/* Only render on Home */}
      <ToggleButton /> {/* Add the Toggle Button here */}

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/biography" element={<Biography />} /> {/* New Route */}
      </Routes>

      {/* Render the footer only if the path is not '/home' */}
      {location.pathname !== '/home' && <Footer />}
    </div>
  );
}

// Wrap the App component in Router
export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
