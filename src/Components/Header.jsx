import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <h1 className="text-xl">My Website</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/skills">Skills</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/biography">Biography</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
