import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function ToggleButton({ isMenuOpen, onClick }) {
  return (
    <button
      className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-gray-800 text-white rounded-full shadow-md"
      onClick={onClick}
    >
      {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
    </button>
  );
}
