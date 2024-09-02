import React from 'react';
import { Link } from 'react-router-dom';
import { FaHandshake, FaAward, FaProjectDiagram } from 'react-icons/fa';
import { GiTrophy } from 'react-icons/gi';

// Replace these URLs with your preferred image URLs
const cartoonImageUrl = 'https://example.com/cartoon-image.png'; // Example URL, replace with your own
const backgroundImageUrl = 'https://example.com/background-image.jpg'; // Example URL, replace with your own

export default function Home() {
  return (
    <div className="bg-gray-100 pt-2 mt-24 sm:mt-16 md:mt-12 lg:mt-8 xl:mt-20 flex flex-col items-center justify-center relative overflow-hidden px-4">

      {/* Upper Section */}
      <div className="relative w-full max-w-7xl bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center p-6">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
            Hello, check this out!
          </h1>
          <Link
            to="/explore"
            className="inline-block px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300 text-lg md:text-xl"
            style={{ textDecoration: 'none' }} // Ensure the link text decoration is removed
          >
            Explore
          </Link>
          <img
            src={cartoonImageUrl}
            alt="Cartoon Character"
            className="absolute bottom-0 right-0 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover"
          />
        </div>

        {/* Stats Section */}
        <div className="relative pt-20 pb-10 bg-white shadow-lg rounded-xl mx-auto mt-12 px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center p-4 bg-gray-100 rounded-lg shadow-md">
              <FaProjectDiagram className="text-4xl text-blue-500 mb-2" />
              <h3 className="text-xl font-semibold mb-1">Completed Projects</h3>
              <p className="text-gray-600">15+</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-gray-100 rounded-lg shadow-md">
              <FaHandshake className="text-4xl text-green-500 mb-2" />
              <h3 className="text-xl font-semibold mb-1">Clients</h3>
              <p className="text-gray-600">20+</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-gray-100 rounded-lg shadow-md">
              <GiTrophy className="text-4xl text-yellow-500 mb-2" />
              <h3 className="text-xl font-semibold mb-1">Awards</h3>
              <p className="text-gray-600">5+</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-gray-100 rounded-lg shadow-md">
              <FaAward className="text-4xl text-purple-500 mb-2" />
              <h3 className="text-xl font-semibold mb-1">Honors</h3>
              <p className="text-gray-600">3+</p>
            </div>
          </div>
        </div>
      </div>

      {/* Expertise Section */}
      <div className="w-full max-w-7xl mt-12 px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8">My Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card Example */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Full Stack Development</h3>
            <p className="text-gray-700">
              Expertise in developing both frontend and backend solutions using modern technologies.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Software Applications</h3>
            <p className="text-gray-700">
              Skilled in creating robust software applications for various platforms.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Website Development</h3>
            <p className="text-gray-700">
              Proficient in designing and developing engaging and responsive websites.
            </p>
          </div>
          {/* Add more cards as needed */}
        </div>
      </div>
    </div>
  );
}
