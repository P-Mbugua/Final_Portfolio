import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'; // Search icon from react-icons

export default function MobileHeader({ onSearch }) {
  return (
    <header className="lg:hidden fixed top-0 left-0 w-full bg-gray-900 text-white flex justify-between items-center p-4 shadow-md z-50">
      <div className="flex items-center">
        <Link to="/" className="ml-4 text-lg font-bold">
          <span className="sr-only">Home</span>
          {/* You can replace the span with an actual logo image or icon */}
          <img src="/path/to/logo.png" alt="Logo" className="w-8 h-8" />
        </Link>
      </div>
      <button
        aria-label="Search"
        className="text-2xl focus:outline-none"
        onClick={onSearch}
      >
        <FaSearch />
      </button>
    </header>
  );
}
