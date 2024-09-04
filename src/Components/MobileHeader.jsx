import React from 'react';
import { Link } from 'react-router-dom';

export default function MobileHeader() {
  return (
    <header className="lg:hidden fixed top-0 left-0 w-full bg-gray-900 bg-opacity-80 text-white flex justify-between items-center p-4 shadow-md z-50">
      <div className="flex items-center">
        <Link to="/" className="ml-4 text-lg font-bold flex items-center">
          <span className="sr-only">Home</span>
          {/* Replace the span with an actual logo image or icon */}
          <img src="/path/to/logo.png" alt="Logo" className="w-8 h-8" />
        </Link>
      </div>
    </header>
  );
}
