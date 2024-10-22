// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Skills from './Pages/Skills';
import Portfolio from './Pages/Portfolio';
import Biography from './Pages/Biography';
import Blog from './Pages/Blog';
import ToggleButton from './Components/ToggleButton';
import MobileHeader from './Components/MobileHeader';
import ParticlesBackground from './Components/ParticlesBackground';
import Footer from './Components/Footer';
import ContactForm from './Components/ContactForm';
import Loader from './Components/Loader';

import { analytics, db } from './firebase'; 
import { logEvent } from 'firebase/analytics'; 
import { collection, addDoc } from 'firebase/firestore';

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading screen for 3 seconds
    const timer = setTimeout(() => setLoading(false), 3000); 
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Log page views to Firebase Analytics
    logEvent(analytics, 'page_view', { page_path: location.pathname });

    // Log page visit to Firestore
    const logPageVisit = async () => {
      try {
        await addDoc(collection(db, 'pageVisits'), {
          page: location.pathname,
          timestamp: new Date(),
        });
      } catch (error) {
        console.error('Error logging page visit: ', error);
      }
    };

    logPageVisit();
  }, [location]);

  if (loading) {
    return <Loader />; 
  }

  return (
    <div className="relative min-h-screen">
      {location.pathname === '/home' && <ParticlesBackground />}
      <div className="hidden md:block">
        <ToggleButton />
      </div>
      <div className="md:hidden sticky top-0 z-50">
        <MobileHeader />
      </div>

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path='/home' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/biography" element={<Biography />} />
        <Route path="/contactform" element={<ContactForm />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      {location.pathname !== '/home' && <Footer />}
    </div>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
