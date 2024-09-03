import React from 'react';

export default function ToggleButton({ isMenuOpen, onClick }) {
  return (
    <button
      aria-label="Toggle Menu"
      className="fixed top-4 right-4 lg:hidden z-50 p-2 bg-gray-800 text-white rounded-md"
      onClick={onClick}
    >
      {isMenuOpen ? 'Close' : 'Menu'}
    </button>
  );
}
