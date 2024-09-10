import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function ToggleButton({ isMenuOpen, onClick }) {
  return (
    <button
      aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
      className="fixed top-3 right-3 lg:hidden z-50 p-2 bg-gray-800 text-white rounded-md"
      onClick={onClick}
    >
      {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
    </button>
  );
}