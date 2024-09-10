import React from 'react';
import { Link } from 'react-router-dom';

export default function MobileHeader() {
  return (
    <header className="lg:hidden fixed top-0 left-0 rounded-lg w-full bg-gray-600  bg-opacity-80 text-white flex justify-between items-center p-4 shadow-md z-50">
      <div className="flex items-center">
        <Link to="/" className="ml-4 text-lg font-bold flex items-center">
          <span className="sr-only">Home</span>
          <img src="src/assets/Photos/Logo.jpg" alt="Logo" className="w-8 h-8 rounded-md" />
        </Link>
      </div>
    </header>
  );
}
