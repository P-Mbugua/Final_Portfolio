import React from 'react';

export default function Footer() {
  return (
    <div className="bg-gray-800 text-white py-2 text-center">
      <p className="text-xs">
        &copy; {new Date().getFullYear()} Peter Mbugua. All rights reserved.
      </p>
      <div className="mt-1 text-xs">
        <p>Building innovative software solutions.</p>
      </div>
      <div className="mt-2">
        <a href="https://twitter.com/pmbugua276" className="text-green-500 mx-1" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        |
        <a href="https://github.com/P-Mbugua" className="text-green-500 mx-1" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        |
        <a href="https://www.linkedin.com/in/peter-mbugua-a6351a262" className="text-green-500 mx-1" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>

    </div>
  );
}
