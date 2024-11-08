import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Skills from './Pages/Skills';
import Portfolio from './Pages/Portfolio';
import Blog from './Pages/Blog';
import ToggleButton from './Components/ToggleButton';
import MobileHeader from './Components/MobileHeader';
import ParticlesBackground from './Components/ParticlesBackground';
import Footer from './Components/Footer';
import Loader from './Components/Loader';

// Import Firebase Firestore and Analytics
import { analytics, db } from './firebase'; 
import { logEvent } from 'firebase/analytics'; 
import { collection, addDoc } from 'firebase/firestore';

// Import EmailJS
import emailjs from 'emailjs-com';

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // Simulate a loading screen for 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); 
    return () => clearTimeout(timer);
  }, []);

  // Track page visit and send email only once on page load (not on re-renders)
  useEffect(() => {
    if (location.pathname === '/home' || location.pathname === '/about' || location.pathname === '/contact' || location.pathname === '/skills' || location.pathname === '/portfolio' || location.pathname === '/blog') {
      // Check if the email was already sent in this session
      if (!sessionStorage.getItem('emailSent')) {
        // Log page view to Firebase Analytics
        logEvent(analytics, 'page_view', { page_path: location.pathname });

        const logPageVisit = async () => {
          try {
            // Log page visit to Firestore with timestamp
            await addDoc(collection(db, 'pageVisits'), {
              page: location.pathname,
              timestamp: new Date(),
            });

            // Send an email after logging the page visit
            sendEmailNotification(location.pathname);
          } catch (error) {
            console.error('Error logging page visit: ', error);
          }
        };

        logPageVisit();
      }
    }
  }, [location.pathname]);  // Run only when the page path changes (not on re-renders)

  // Function to send email notification via EmailJS
  const sendEmailNotification = async (page) => {
    try {
      // Capture the machine details (User Agent, Platform, IP address, and Timestamp)
      const machineDetails = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        timestamp: new Date().toISOString(),
      };

      // Fetch the IP address of the user (using ipify API)
      const ipResponse = await fetch('https://api.ipify.org?format=json');
      const ipData = await ipResponse.json();

      // Include IP and additional details
      const emailParams = {
        to_email: 'your-email@example.com',  // Recipient's email
        page_visited: page,  // The visited page
        ip_address: ipData.ip,  // User's IP address
        userAgent: machineDetails.userAgent,  // User agent
        platform: machineDetails.platform,  // User platform
        visitTime: machineDetails.timestamp,  // Timestamp of visit
      };

      // Send the email
      await emailjs.send('service_whl0hbs', 'template_rir7r5n', emailParams, 'Jq-7l7xQJz6_eAtCO');
      
      // Mark the email as sent in the session
      sessionStorage.setItem('emailSent', 'true');
      console.log('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  // Show loading screen while content is being loaded
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
