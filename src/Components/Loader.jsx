import React, { useEffect, useState } from 'react';
import './Loader.css'; // Import the CSS for styling the loader

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the duration as needed

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    loading ? (
      <div className="loader-container">
        <div className="name">
        <div className="name-part text-yellow-500">Peter</div>
          <div className="line"></div>
          <div className="name-part text-green-500">Mbugua</div>
        </div>
      </div>
    ) : null // Hide the loader when loading is false
  );
}
