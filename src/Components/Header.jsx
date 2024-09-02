import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaDownload } from 'react-icons/fa';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; // Import styles
// import './scrollbar-hidden.css'; // Import custom CSS for hiding scrollbars

export default function ProfileContent({ className }) {
  return (
    <div className={`bg-gray-900 text-white w-full sm:w-80 p-6 fixed top-0 left-0 h-screen ${className} shadow-2xl flex flex-col`}>
      {/* Sticky Profile Section */}
      <div className="flex-1 overflow-y-auto scrollbar-hidden bg-gray-900">
        {/* Profile Picture and Header */}
        <div className="flex flex-col items-center mb-6 relative">
          {/* Profile Picture */}
          <div className="w-20 h-20 relative mb-4">
            <img 
              src="src/assets/Photos/PETER.png" 
              alt="Profile" 
              className="w-full h-full rounded-full border-4 border-gradient bg-gradient-to-br from-blue-400 to-teal-400 shadow-xl object-cover"
            />
          </div>
          {/* Profile Info */}
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-1 text-gray-100">Peter Mbugua</h1>
            <p className="text-lg text-gray-300">Junior FullStack Developer</p>
          </div>
        </div>

        {/* Content Cards */}
        <div className="flex flex-col gap-6">
          {/* Residence, City, and Age */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <p className="text-xl font-semibold mb-2 text-gray-200">Location & Details:</p>
            <p className="text-sm text-gray-400">Residence: Kenya</p>
            <p className="text-sm text-gray-400">City: Nairobi</p>
            <p className="text-sm text-gray-400">Age: 21</p>
          </div>

          {/* Languages Section */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <p className="text-xl font-semibold mb-2 text-gray-200">Languages:</p>
            <div className="flex flex-wrap gap-6 justify-center">
              <div className="w-24 h-24">
                <CircularProgressbar
                  value={90} // Adjust percentage value according to proficiency
                  text="Swahili"
                  styles={buildStyles({
                    pathColor: '#4caf50',
                    textColor: '#e0e0e0',
                    trailColor: '#444'
                  })}
                />
              </div>
              <div className="w-24 h-24">
                <CircularProgressbar
                  value={80} // Adjust percentage value according to proficiency
                  text="English"
                  styles={buildStyles({
                    pathColor: '#2196f3',
                    textColor: '#e0e0e0',
                    trailColor: '#444'
                  })}
                />
              </div>
            </div>
          </div>

          {/* Expertise and Competence */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <p className="text-xl font-semibold mb-2 text-gray-200">Expertise & Competence:</p>
            <div className="flex flex-col gap-3">
              {/* React */}
              <div className="flex items-center">
                <span className="text-sm text-gray-300 w-24">React</span>
                <div className="flex-1 bg-gray-600 rounded-full h-2 relative">
                  <div className="bg-blue-500 h-full rounded-full" style={{ width: '80%' }}></div>
                  <span className="absolute right-0 text-xs text-gray-300 pr-2">80%</span>
                </div>
              </div>
              {/* Node.js */}
              <div className="flex items-center">
                <span className="text-sm text-gray-300 w-24">Node.js</span>
                <div className="flex-1 bg-gray-600 rounded-full h-2 relative">
                  <div className="bg-green-500 h-full rounded-full" style={{ width: '70%' }}></div>
                  <span className="absolute right-0 text-xs text-gray-300 pr-2">70%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tools Section */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <p className="text-xl font-semibold mb-2 text-gray-200">Tools:</p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors">
                <FaHtml5 className="text-orange-400 text-xl" />
                <span className="text-sm text-gray-300">HTML5</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors">
                <FaCss3Alt className="text-blue-400 text-xl" />
                <span className="text-sm text-gray-300">CSS3</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors">
                <FaReact className="text-blue-300 text-xl" />
                <span className="text-sm text-gray-300">React</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors">
                <FaNodeJs className="text-green-400 text-xl" />
                <span className="text-sm text-gray-300">Node.js</span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <p className="text-xl font-semibold mb-2 text-gray-200">Contact Me:</p>
            <p className="text-sm text-gray-400 mb-1">
              <a href="mailto:pmbugua276@gmail.com" className="hover:text-gray-300 transition-colors">pmbugua276@gmail.com</a>
            </p>
            <p className="text-sm text-gray-400">
              <a href="tel:+1234567890" className="hover:text-gray-300 transition-colors">+254701571745</a>
            </p>
          </div>

          {/* Resume Download Link with Icon */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-6 flex items-center space-x-2">
            <a 
              href="src/assets/Files/Peter.pdf"  target="_blank" rel="noopener noreferrer" // Replace with your actual CV link
              className="text-blue-500 hover:text-blue-600 transition-colors flex items-center space-x-2"
              download
            >
              <FaDownload className="text-xl" />
              <span className="text-sm">Download Resume</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Sectn */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg mt-auto">
        <div className="flex justify-center space-x-4 text-sm">
          <a href="https://www.linkedin.com/in/peter-mbugua-a6351a262" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
            LinkedIn
          </a>
          <a href="https://github.com/P-Mbugua" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
