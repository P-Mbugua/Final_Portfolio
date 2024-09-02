import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-2 w-full">
      <div className="container mx-auto text-center px-4">
        <p className="mb-1 text-sm">&copy; 2024 Developer P. All rights reserved.</p>
        <p className="flex justify-center gap-4 flex-wrap text-sm">
          <a href="https://twitter.com/example" className="text-gray-400 hover:text-gray-300" target="_blank" rel="noopener noreferrer">Twitter</a> 
          <span>|</span>
          <a href="https://github.com/example" className="text-gray-400 hover:text-gray-300" target="_blank" rel="noopener noreferrer">GitHub</a> 
          <span>|</span>
          <a href="https://linkedin.com/in/example" className="text-gray-400 hover:text-gray-300" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span>|</span>
          <a href="https://whatsapp.com/in/example" className="text-gray-400 hover:text-gray-300" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </p>
      </div>
    </footer>
  );
}
