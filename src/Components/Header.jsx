import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaDownload, FaLinkedin, FaGithub } from 'react-icons/fa';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; // Import styles

export default function ProfileContent({ className }) {
  return (
    <div className={`bg-gray-900 text-white w-full sm:w-80 p-4 fixed rounded-lg h-screen mb-20 ${className} shadow-lg flex flex-col mt-2 ml-2`}>

      {/* Sticky Profile Section */}
      <div className="flex-1 overflow-y-auto scrollbar-hidden">
        <div className="sticky top-0 z-10 bg-gray-900">
          {/* Profile Picture and Header */}
          <div className="flex flex-col items-center mb-4">
            {/* Profile Picture */}
            <div className="w-24 h-24 relative mb-1">
              <img 
                src="https://p-mbugua.github.io/Official-_Portfolio/peter.png" 
                alt="Profile" 
                className="w-full h-full rounded-full border-4 border-gradient bg-gradient-to-br from-blue-400 to-teal-400 shadow-xl object-cover"
              />
            </div>

            {/* Profile Info */}
            <div className="text-center">
              <h1 className="text-2xl font-extrabold text-white ">Peter Mbugua</h1>
              <p className="text-lg text-gray-300 ">Junior FullStack Developer</p>
              <p className="text-lg text-gray-300">Contributor</p>
            </div>
          </div>
        </div>

        {/* Content Cards */}
        <div className="flex flex-col gap-6">
          {/* Residence, City, and Age */}
          <div className="p-4 rounded-lg shadow-md border-t-2 border-b-2 border-white">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between text-sm font-medium">
                <span className="text-white">Residence:</span>
                <span className="text-gray-400">Kenya</span>
              </div>
              <div className="flex justify-between text-sm font-medium">
                <span className="text-white">City:</span>
                <span className="text-gray-400">Nairobi</span>
              </div>
              <div className="flex justify-between text-sm font-medium">
                <span className="text-white">Age:</span>
                <span className="text-gray-400">21</span>
              </div>
            </div>
          </div>

          {/* Languages Section */}
          <div className="p-4 rounded-lg shadow-md border-t-2 border-b-2 border-white">
            <p className="text-xl font-semibold mb-4 text-gray-200">Languages:</p>
            <div className="flex flex-wrap gap-6 justify-center">
              <div className="flex flex-col items-center w-20 h-20">
                <CircularProgressbar
                  value={90} // Adjust percentage value according to proficiency
                  text={`${90}%`} // Display percentage
                  styles={buildStyles({
                    pathColor: '#4caf50',
                    textColor: '#e0e0e0',
                    trailColor: '#444'
                  })}
                />
                <p className="text-center text-gray-300 mt-2">Swahili</p>
              </div>
              <div className="flex flex-col items-center w-20 h-20">
                <CircularProgressbar
                  value={80} // Adjust percentage value according to proficiency
                  text={`${80}%`} // Display percentage
                  styles={buildStyles({
                    pathColor: '#2196f3',
                    textColor: '#e0e0e0',
                    trailColor: '#444'
                  })}
                />
                <p className="text-center text-gray-300 mt-2">English</p>
              </div>
            </div>
          </div>

          {/* Expertise and Competence */}
          <div className="p-4 rounded-lg shadow-md border-t-2 border-b-2 border-white">
            <p className="text-xl font-semibold mb-4 text-gray-200">Expertise & Competence:</p>
            <div className="flex flex-col gap-4">
              {/* React */}
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-300 mb-2">React Developer</span>
                <div className="bg-gray-600 rounded-full h-2 relative">
                  <div className="bg-blue-500 h-full rounded-full" style={{ width: '80%' }}></div>
                  <span className="absolute right-0 text-xs text-gray-300 pr-2">80%</span>
                </div>
              </div>

              {/* Backend Developer */}
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-300 mb-2">Backend Developer</span>
                <div className="bg-gray-600 rounded-full h-2 relative">
                  <div className="bg-blue-500 h-full rounded-full" style={{ width: '80%' }}></div>
                  <span className="absolute right-0 text-xs text-gray-300 pr-2">80%</span>
                </div>
              </div>

              {/* UX/UI Designer */}
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-300 mb-2">UI/UX Designer</span>
                <div className="bg-gray-600 rounded-full h-2 relative">
                  <div className="bg-green-500 h-full rounded-full" style={{ width: '70%' }}></div>
                  <span className="absolute right-0 text-xs text-gray-300 pr-2">70%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tools Section */}
          <div className="p-4 rounded-lg shadow-md border-t-2 border-b-2 border-white">
            <p className="text-xl font-semibold mb-4 text-gray-200">Tools:</p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors">
                <FaHtml5 className="text-orange-400 text-2xl" />
                <span className="text-sm text-gray-300">HTML5</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors">
                <FaCss3Alt className="text-blue-400 text-2xl" />
                <span className="text-sm text-gray-300">CSS3</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors">
                <FaReact className="text-blue-300 text-2xl" />
                <span className="text-sm text-gray-300">React</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors">
                <FaReact className="text-blue-300 text-2xl" />
                <span className="text-sm text-gray-300">JavaScript</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors">
                <FaNodeJs className="text-green-400 text-2xl" />
                <span className="text-sm text-gray-300">Python</span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="p-4 rounded-lg shadow-md border-t-2 border-b-2 border-white">
            <p className="text-xl font-semibold mb-4 text-gray-200">Contact Me:</p>
            <p className="text-sm text-gray-400 mb-1">
              <a href="mailto:pmbugua276@gmail.com" className="hover:text-gray-300 transition-colors">pmbugua276@gmail.com</a>
            </p>
            <p className="text-sm text-gray-400">
              <a href="tel:+254701571745" className="hover:text-gray-300 transition-colors">+254701571745</a>
            </p>
          </div>

          {/* Resume Download Link with Icon */}
          <div className="p-4 rounded-lg shadow-md border-t-2 border-b-2 border-white mb-6 flex items-center space-x-2">
            <a 
              href="https://flowcv.com/resume/f62ua50tfk" target="_blank" rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors flex items-center space-x-2"
              download
            >
              <span className="text-xl">Download Resume</span>
              <FaDownload className="text-xl text-gray-500 hover:text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-md mt-auto">
        <div className="flex justify-center space-x-4 text-sm">
          <a 
            href="https://www.linkedin.com/in/peter-mbugua-a6351a262" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a 
            href="https://github.com/p-mbugua" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaGithub className="text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
}
