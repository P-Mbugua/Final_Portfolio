import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Skills from './Pages/Skills';
import Portfolio from './Pages/Portfolio';
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

// ✅ CORRECT: Only log to Firebase here. 
// The email will be sent ONLY when the tab closes (by the bottom script).
const logPageVisit = async () => {
  try {
    await addDoc(collection(db, 'pageVisits'), {
      page: location.pathname,
      timestamp: new Date(),
    });
    console.log(`📄 Logged ${location.pathname} to Firebase`);
  } catch (error) {
    console.error('Error logging page visit: ', error);
  }
};   

        logPageVisit();
      }
    }
  }, [location.pathname]);  







  




  // const sendEmailNotification = async (page) => {
  //   try {
  //     // 1. Capture Machine Details
  //     const machineDetails = {
  //       userAgent: navigator.userAgent,
  //       platform: navigator.platform,
  //       // FIX: Use Local Kenya Time instead of UTC
  //       timestamp: new Date().toLocaleString('en-KE', { timeZone: 'Africa/Nairobi' }),
  //     };

  //     let locationData = {
  //       city: 'Unknown',
  //       region: 'Unknown',
  //       country: 'Kenya',
  //       latitude: 'N/A',
  //       longitude: 'N/A',
  //       ip: 'Unknown'
  //     };

  //     // 2. Attempt High-Accuracy Geolocation (GPS)
  //     const useGPS = () => {
  //       return new Promise((resolve, reject) => {
  //         navigator.geolocation.getCurrentPosition(
  //           async (position) => {
  //             const { latitude, longitude } = position.coords;
  //             try {
  //               // Reverse Geocode to get "Limuru" text from coordinates
  //               const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
  //               const data = await res.json();
  //               resolve({
  //                 city: data.address.town || data.address.city || data.address.village || 'Limuru Area',
  //                 region: data.address.state || 'Kiambu County',
  //                 country: data.address.country || 'Kenya',
  //                 latitude: latitude.toFixed(4),
  //                 longitude: longitude.toFixed(4)
  //               });
  //             } catch (e) {
  //               // If reverse geocode fails, send coordinates only
  //               resolve({
  //                 city: 'GPS Coordinates',
  //                 region: `Lat: ${latitude.toFixed(2)}, Long: ${longitude.toFixed(2)}`,
  //                 country: 'Kenya',
  //                 latitude: latitude.toFixed(4),
  //                 longitude: longitude.toFixed(4)
  //               });
  //             }
  //           },
  //           (error) => reject(error),
  //           {
  //             enableHighAccuracy: true, // Forces GPS
  //             timeout: 15000,           // Increased to 15 seconds
  //             maximumAge: 0
  //           }
  //         );
  //       });
  //     };

  //     // 3. Fallback to IP API if GPS fails
  //     const useIP = async () => {
  //       try {
  //         const res = await fetch('https://ipapi.co/json/');
  //         const data = await res.json();
  //         if (data.error) throw new Error('IP API Error');
  //         return {
  //           city: data.city || 'Nairobi',
  //           region: data.region || 'Nairobi County',
  //           country: data.country_name || 'Kenya',
  //           latitude: data.latitude || 'N/A',
  //           longitude: data.longitude || 'N/A',
  //           ip: data.ip
  //         };
  //       } catch (e) {
  //         console.error('IP Fallback failed:', e);
  //         return { city: 'Unknown', region: 'Unknown', country: 'Kenya', ip: 'Unknown' };
  //       }
  //     };

  //     // 4. Execute GPS, fallback to IP on error
  //     try {
  //       locationData = await useGPS();
  //       console.log('GPS Location acquired:', locationData.city);
  //     } catch (geoError) {
  //       console.warn('GPS failed (Timeout/Denied), using IP fallback:', geoError.message);
  //       locationData = await useIP();
  //     }

  //     // 5. Prepare Email Params
  //     const emailParams = {
  //       to_email: 'petermbuguangumi@gmail.com',
  //       page_visited: page,
  //       ip_address: locationData.ip || (await fetch('https://api.ipify.org?format=json').then(r => r.json()).then(d => d.ip).catch(() => 'Unknown')),
  //       userAgent: machineDetails.userAgent,
  //       platform: machineDetails.platform,
  //       visitTime: machineDetails.timestamp, // Now shows correct Kenya time
  //       location: `${locationData.city}, ${locationData.region}, ${locationData.country}`,
  //       latitude: locationData.latitude,
  //       longitude: locationData.longitude,
  //     };

  //     // 6. Send Email
  //     await emailjs.send('service_whl0hbs', 'template_rir7r5n', emailParams, 'Jq-7l7xQJz6_eAtCO');
  //     sessionStorage.setItem('emailSent', 'true');
  //     console.log('Email sent successfully!', emailParams.location);

  //   } catch (error) {
  //     console.error('Critical error in sendEmailNotification:', error);
  //   }
  // };   


















const initializeSessionTracker = () => {
  // --- Hard guard: this function must never run more than once per page load,
  // no matter how many times something calls it (remounts, HMR, duplicate script tags, etc.)
  if (window.__sessionTrackerInitialized) {
    console.log('⚠️ Session tracker already initialized, skipping.');
    return;
  }
  window.__sessionTrackerInitialized = true;

  const EMAIL_SERVICE_ID = 'service_whl0hbs';
  const EMAIL_TEMPLATE_ID = 'template_rir7r5n';
  const EMAIL_USER_ID = 'Jq-7l7xQJz6_eAtCO';
  const RECIPIENT_EMAIL = 'petermbuguangumi@gmail.com';

  if (!sessionStorage.getItem('sessionStart')) {
    sessionStorage.setItem('sessionStart', new Date().toISOString());
    sessionStorage.setItem('visitedPages', JSON.stringify([]));
    sessionStorage.setItem('totalTimeSpent', '0');
    sessionStorage.setItem('lastPageLoad', Date.now().toString());
    sessionStorage.setItem('emailSent', 'false');
    console.log('🟢 New Session Started');
  }

  // Fetch location ONCE, early, and cache it in sessionStorage.
  // Doing this at exit-time (inside beforeunload) is what made the final
  // email unreliable — the network call routinely gets killed mid-flight.
  const getLocationData = async () => {
    const cached = sessionStorage.getItem('locationData');
    if (cached) return JSON.parse(cached);

    try {
      const res = await fetch('https://ipapi.co/json/');
      const data = await res.json();
      const location = {
        city: data.city || 'Unknown',
        region: data.region || 'Unknown',
        country: data.country_name || 'Kenya',
        latitude: data.latitude || 'N/A',
        longitude: data.longitude || 'N/A',
        ip: data.ip || 'Unknown',
      };
      sessionStorage.setItem('locationData', JSON.stringify(location));
      return location;
    } catch {
      const fallback = { city: 'Unknown', region: 'Unknown', country: 'Kenya', latitude: 'N/A', longitude: 'N/A', ip: 'Unknown' };
      sessionStorage.setItem('locationData', JSON.stringify(fallback));
      return fallback;
    }
  };

  // Kick this off immediately at session start so it's ready well before exit.
  getLocationData();

  const buildEmailParams = async () => {
    const visitedPages = JSON.parse(sessionStorage.getItem('visitedPages') || '[]');
    const totalTime = sessionStorage.getItem('totalTimeSpent') || '0';
    const sessionStart = sessionStorage.getItem('sessionStart');
    const locationData = await getLocationData(); // cached — resolves instantly if already fetched

    const now = Date.now();
    const lastLoad = parseInt(sessionStorage.getItem('lastPageLoad'), 10) || now;
    const finalDuration = Math.floor((now - lastLoad) / 1000);
    if (visitedPages.length > 0) visitedPages[visitedPages.length - 1].duration = finalDuration;

    const pagesSummary = visitedPages.length > 0
      ? visitedPages.map(p => `${p.page} (${p.duration}s)`).join(', ')
      : `${window.location.pathname} (Single View)`;
    const totalDurationFormatted = `${Math.floor(parseInt(totalTime, 10) / 60)}m ${parseInt(totalTime, 10) % 60}s`;

    return {
      to_email: RECIPIENT_EMAIL,
      session_start: sessionStart ? new Date(sessionStart).toLocaleString('en-KE', { timeZone: 'Africa/Nairobi' }) : '',
      total_time_spent: totalDurationFormatted,
      pages_visited: pagesSummary,
      total_pages: visitedPages.length || 1,
      location: `${locationData.city}, ${locationData.region}, ${locationData.country}`,
      ip_address: locationData.ip,
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      visitTime: new Date().toLocaleString('en-KE', { timeZone: 'Africa/Nairobi' }),
      latitude: locationData.latitude,
      longitude: locationData.longitude,
    };
  };

  const sendEmailNotification = async () => {
    // Single source of truth for "have we sent this session's email".
    // sessionStorage persists across full-page navigations in the same tab,
    // so this stays true even if you click through several pages.
    if (sessionStorage.getItem('emailSent') === 'true') return;
    sessionStorage.setItem('emailSent', 'true');
    console.log('📧 Attempting to send final email...');

    try {
      if (typeof emailjs === 'undefined') {
        console.error('❌ EmailJS SDK not loaded. Add the script tag before this code');
        return;
      }
      const emailParams = await buildEmailParams();
      await emailjs.send(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, emailParams, EMAIL_USER_ID);
      console.log('✅ Final session email sent!');
    } catch (error) {
      console.error('❌ Send error:', error);
    }
  };

  const logPageVisit = () => {
    const now = Date.now();
    const lastLoad = parseInt(sessionStorage.getItem('lastPageLoad'), 10) || now;
    const duration = Math.floor((now - lastLoad) / 1000);

    const visitedPages = JSON.parse(sessionStorage.getItem('visitedPages') || '[]');
    if (visitedPages.length > 0) visitedPages[visitedPages.length - 1].duration = duration;
    visitedPages.push({ page: window.location.pathname, duration: 0, timestamp: new Date().toLocaleString('en-KE', { timeZone: 'Africa/Nairobi' }) });
    sessionStorage.setItem('visitedPages', JSON.stringify(visitedPages));
    sessionStorage.setItem('lastPageLoad', now.toString());
    console.log(`📄 Page: ${window.location.pathname}`);
  };

  logPageVisit();

  // NOTE: 'popstate' only fires on browser back/forward — it will NOT fire
  // when a user clicks an in-app link in a client-side router (React Router, etc).
  // If your site uses client-side routing, call logPageVisit() from your router's
  // navigation/location-change handler instead. Example (React Router v6):
  //
  //   const location = useLocation();
  //   useEffect(() => { logPageVisitRef.current?.(); }, [location.pathname]);
  //
  window.addEventListener('popstate', logPageVisit);

  const timeInterval = setInterval(() => {
    const currentTotal = parseInt(sessionStorage.getItem('totalTimeSpent') || '0', 10);
    sessionStorage.setItem('totalTimeSpent', (currentTotal + 1).toString());
  }, 1000);

  // Send when the user switches tab / becomes inactive for 3s.
  let exitTimer;
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      clearTimeout(exitTimer);
      exitTimer = setTimeout(sendEmailNotification, 3000);
    } else {
      clearTimeout(exitTimer);
    }
  });

  // 'pagehide' is the reliable signal for "the user is actually leaving" —
  // unlike 'beforeunload', it fires consistently on mobile, isn't blocked by
  // the back/forward cache, and is the modern recommended replacement.
  window.addEventListener('pagehide', () => {
    sendEmailNotification();
  });

  // Cleanup, in case something ever needs to tear this down manually
  // (e.g. hot-module-reload during development).
  window.__sessionTrackerCleanup = () => {
    clearInterval(timeInterval);
    clearTimeout(exitTimer);
    window.removeEventListener('popstate', logPageVisit);
    window.__sessionTrackerInitialized = false;
  };
};

// IMPORTANT: Make sure EmailJS loads first
window.addEventListener('load', () => {
  if (typeof emailjs !== 'undefined') {
    emailjs.init('Jq-7l7xQJz6_eAtCO'); // init it
    initializeSessionTracker();
  } else {
    console.error('Load EmailJS script first: <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>');
  }
});







































  // const sendEmailNotification = async (page) => {
  //   try {
  //     // 1. Retrieve Accumulated Session Data from sessionStorage
  //     const visitedPages = JSON.parse(sessionStorage.getItem('visitedPages') || '[]');
  //     const totalTime = sessionStorage.getItem('totalTimeSpent') || '0';
  //     const sessionStart = sessionStorage.getItem('sessionStart');

  //     // If no pages recorded, abort (optional: you might want to send anyway)
  //     if (visitedPages.length === 0 && !page) return;

  //     // 2. Capture Machine Details
  //     const machineDetails = {
  //       userAgent: navigator.userAgent,
  //       platform: navigator.platform,
  //       // FIX: Use Local Kenya Time
  //       timestamp: new Date().toLocaleString('en-KE', { timeZone: 'Africa/Nairobi' }),
  //     };

  //     let locationData = {
  //       city: 'Unknown',
  //       region: 'Unknown',
  //       country: 'Kenya',
  //       latitude: 'N/A',
  //       longitude: 'N/A',
  //       ip: 'Unknown'
  //     };

  //     // 3. Attempt High-Accuracy Geolocation (GPS)
  //     const useGPS = () => {
  //       return new Promise((resolve, reject) => {
  //         navigator.geolocation.getCurrentPosition(
  //           async (position) => {
  //             const { latitude, longitude } = position.coords;
  //             try {
  //               const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
  //               const data = await res.json();
  //               resolve({
  //                 city: data.address.town || data.address.city || data.address.village || 'Limuru Area',
  //                 region: data.address.state || 'Kiambu County',
  //                 country: data.address.country || 'Kenya',
  //                 latitude: latitude.toFixed(4),
  //                 longitude: longitude.toFixed(4)
  //               });
  //             } catch (e) {
  //               resolve({
  //                 city: 'GPS Coordinates',
  //                 region: `Lat: ${latitude.toFixed(2)}, Long: ${longitude.toFixed(2)}`,
  //                 country: 'Kenya',
  //                 latitude: latitude.toFixed(4),
  //                 longitude: longitude.toFixed(4)
  //               });
  //             }
  //           },
  //           (error) => reject(error),
  //           {
  //             enableHighAccuracy: true,
  //             timeout: 15000,
  //             maximumAge: 0
  //           }
  //         );
  //       });
  //     };

  //     // 4. Fallback to IP API if GPS fails
  //     const useIP = async () => {
  //       try {
  //         const res = await fetch('https://ipapi.co/json/');
  //         const data = await res.json();
  //         if (data.error) throw new Error('IP API Error');
  //         return {
  //           city: data.city || 'Nairobi',
  //           region: data.region || 'Nairobi County',
  //           country: data.country_name || 'Kenya',
  //           latitude: data.latitude || 'N/A',
  //           longitude: data.longitude || 'N/A',
  //           ip: data.ip
  //         };
  //       } catch (e) {
  //         console.error('IP Fallback failed:', e);
  //         return { city: 'Unknown', region: 'Unknown', country: 'Kenya', ip: 'Unknown' };
  //       }
  //     };

  //     // 5. Execute GPS, fallback to IP
  //     try {
  //       locationData = await useGPS();
  //       console.log('GPS Location acquired:', locationData.city);
  //     } catch (geoError) {
  //       console.warn('GPS failed, using IP fallback:', geoError.message);
  //       locationData = await useIP();
  //     }

  //     // 6. Format Pages List for Email: "/home (15s), /about (30s)"
  //     // If triggered by a single page (legacy), just show that. Otherwise show full list.
  //     const pagesSummary = visitedPages.length > 0 
  //       ? visitedPages.map(p => `${p.page} (${p.duration > 0 ? p.duration + 's' : '0s'})`).join(', ')
  //       : `${page} (Single View)`;

  //     const totalDurationFormatted = `${Math.floor(totalTime / 60)}m ${totalTime % 60}s`;

  //     // 7. Prepare Email Params (Updated for Summary)
  //     const emailParams = {
  //       to_email: 'petermbuguangumi@gmail.com',
  //       // Use session start time if available, otherwise current time
  //       session_start: sessionStart ? new Date(sessionStart).toLocaleString('en-KE', { timeZone: 'Africa/Nairobi' }) : machineDetails.timestamp,
  //       total_time_spent: totalDurationFormatted,
  //       pages_visited: pagesSummary,
  //       total_pages: visitedPages.length > 0 ? visitedPages.length : 1,
  //       location: `${locationData.city}, ${locationData.region}, ${locationData.country}`,
  //       ip_address: locationData.ip || (await fetch('https://api.ipify.org?format=json').then(r => r.json()).then(d => d.ip).catch(() => 'Unknown')),
  //       userAgent: machineDetails.userAgent,
  //       platform: machineDetails.platform,
  //       visitTime: machineDetails.timestamp,
  //       latitude: locationData.latitude,
  //       longitude: locationData.longitude,
  //     };

  //     // 8. Send Email
  //     await emailjs.send('service_whl0hbs', 'template_rir7r5n', emailParams, 'Jq-7l7xQJz6_eAtCO');
      
  //     // Optional: Clear session storage after successful send to prevent duplicates on refresh
  //     // sessionStorage.clear(); 
      
  //     console.log('✅ Session summary email sent!', emailParams);

  //   } catch (error) {
  //     console.error('Critical error in sendEmailNotification:', error);
  //   }
  // };   





















  

//   const sendEmailNotification = async (page) => {
//   try {
//     const machineDetails = {
//       userAgent: navigator.userAgent,
//       platform: navigator.platform,
//       timestamp: new Date().toISOString(),
//     };

//     // REPLACE IPSTACK WITH IPAPI.CO (Supports HTTPS on Free Tier)
//     // No API key required for basic usage (1000 req/day)
//     const ipResponse = await fetch('https://ipapi.co/json/'); 
//     const ipData = await ipResponse.json();

//     // Check for errors explicitly
//     if (ipData.error || !ipData.city) {
//       console.warn('Location data unavailable:', ipData);
//       // Fallback values if API fails
//       ipData.city = 'Unknown';
//       ipData.region = 'Unknown';
//       ipData.country_name = 'Unknown';
//     }

//     const detailedLocation = `${ipData.city || 'Unknown'}, ${ipData.region || 'Unknown'}, ${ipData.country_name || 'Unknown'}`;

//     const emailParams = {
//       to_email: 'petermbuguangumi@gmail.com',
//       page_visited: page,
//       ip_address: ipData.ip,
//       userAgent: machineDetails.userAgent,
//       platform: machineDetails.platform,
//       visitTime: machineDetails.timestamp,
//       location: detailedLocation,
//       // Optional: Add latitude/longitude if available
//       latitude: ipData.latitude || 'N/A',
//       longitude: ipData.longitude || 'N/A',
//     };

//     await emailjs.send('service_whl0hbs', 'template_rir7r5n', emailParams, 'Jq-7l7xQJz6_eAtCO');
//     sessionStorage.setItem('emailSent', 'true');
//     console.log('Email sent successfully with location:', detailedLocation);
//   } catch (error) {
//     console.error('Error sending email or fetching location:', error);
//   }
// };   







  // Function to send email notification via EmailJS
  // const sendEmailNotification = async (page) => {
  //   try {
  //     // Capture the machine details (User Agent, Platform, Timestamp)
  //     const machineDetails = {
  //       userAgent: navigator.userAgent,
  //       platform: navigator.platform,
  //       timestamp: new Date().toISOString(),
  //     };

  //     // Fetch the IP address and detailed location using ipstack API
  //     const ipResponse = await fetch('https://api.ipstack.com/check?access_key=YOUR_IPSTACK_API_KEY');
  //     const ipData = await ipResponse.json();

  //     // Extract detailed location information from ipstack
  //     const locationDetails = {
  //       country: ipData.country_name,      // Country (e.g., Kenya)
  //       region: ipData.region_name,        // Region (e.g., Nairobi County)
  //       city: ipData.city,                 // City (e.g., Nairobi)
  //       zip: ipData.zip,                   // Zip code, if available
  //       latitude: ipData.latitude,         // Latitude
  //       longitude: ipData.longitude,       // Longitude
  //     };

  //     // If available, you can get more specific location info
  //     // (Note: ipstack's free API may not give detailed sub-county data, so you'd need a more advanced plan or another API for that)
  //     const detailedLocation = `${locationDetails.city}, ${locationDetails.region}, ${locationDetails.country}`;

  //     // Prepare email params with location data
  //     const emailParams = {
  //       to_email: 'petermbuguangumi@gmail.com',  // Recipient's email
  //       page_visited: page,  // The visited page
  //       ip_address: ipData.ip,  // User's IP address
  //       userAgent: machineDetails.userAgent,  // User agent
  //       platform: machineDetails.platform,  // User platform
  //       visitTime: machineDetails.timestamp,  // Timestamp of visit
  //       location: detailedLocation,  // Detailed location
  //     };

  //     // Send the email
  //     await emailjs.send('service_whl0hbs', 'template_rir7r5n', emailParams, 'Jq-7l7xQJz6_eAtCO');
      
  //     // Mark the email as sent in the session
  //     sessionStorage.setItem('emailSent', 'true');
  //     console.log('Email sent successfully!');
  //   } catch (error) {
  //     console.error('Error sending email:', error);
  //   }
  // };

  // Show loading screen while content is being loaded
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="relative min-h-screen flex flex-col">
      {location.pathname === '/home' && <ParticlesBackground />}
      
      <div className="hidden md:block">
        <ToggleButton />
      </div>
      <div className="md:hidden sticky top-0 z-50">
        <MobileHeader />
      </div>

      {/* Wrapped Routes in main to handle spacing */}
      <main className="flex-grow w-full ">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path='/home' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </main>

      {
        <div className="fixed bottom-0 left-0 w-full z-50 pointer-events-auto">
          <Footer />
        </div>
      }
      
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