import React, { useState, useEffect } from 'react';
import ParticlesBackground from '../Components/ParticlesBackground'; // Ensure the path is correct

export default function Home() {
  const roles = [
    "A DevOps Engineer",
    "A Full Stack Developer",
    "A Software Engineer",
    "A Web Developer",
    "A Cloud Solutions Architect"
  ];

  const [currentRole, setCurrentRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const typingSpeed = 150; // Typing speed in milliseconds
  const pauseTime = 1500; // Pause time after typing (1.5 seconds)
  const fadeDuration = 3000; // Duration of fade-out effect
  const [fade, setFade] = useState(false); // For fading effect

  useEffect(() => {
    let typingInterval;

    const typeRole = () => {
      const current = roles[roleIndex];

      if (currentRole.length < current.length) {
        setCurrentRole((prev) => prev + current.charAt(prev.length));
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setFade(true); // Start fading out after typing is complete
          setTimeout(() => {
            setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
            setCurrentRole(""); // Clear role for next typing
            setFade(false); // Reset fade for the next role
            startTyping(); // Start typing the next role immediately
          }, fadeDuration); // Wait for fade-out duration
        }, pauseTime); // Wait for 1.5 seconds before moving to next role
      }
    };

    const startTyping = () => {
      typingInterval = setInterval(typeRole, typingSpeed);
    };

    startTyping();

    return () => clearInterval(typingInterval); // Cleanup on unmount
  }, [roleIndex, currentRole]);

  return (
    <div className="relative h-screen bg-black text-white overflow-hidden font-inter">
      {/* Particles Background */}
      <ParticlesBackground className="absolute top-0 left-0 w-full h-full z-0" />

      {/* Content */}
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-between h-full px-4 md:px-10 md:ml-20">
        {/* Right section: Profile image */}
        <div className="order-1 md:order-2 mb-0 flex justify-center md:justify-end w-full md:w-1/2">
          <img
            src="https://p-mbugua.github.io/Official-_Portfolio/peter.png"
            alt="Peter"
            className="w-48 md:w-72 lg:w-80 h-auto object-cover rounded-full border-2 border-yellow-500 md:mr-20 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            onContextMenu={(e) => e.preventDefault()} // Disable right-click menu
          />
        </div>
        {/* Left section: Text content */}
        <div className="flex flex-col justify-center text-left space-y-6 max-w-lg order-2 md:order-1 md:space-y-8 pr-0 md:pr-10">
          <h1 className="text-6rem md:text-6xl font-bold text-yellow-500 mb-0 text-center md:text-left font-poppins -mt-10 md:mt-0">
            HELLO THERE!!
          </h1>

          <h1 className="text-3xl md:text-5xl font-bold mb-2 leading-tight font-poppins">
            I'm <span className="text-yellow-500">Peter Mbugua,</span>
          </h1>
          <h2 className="text-lg md:text-3xl mb-4 font-inter">
            I'm <span className={`font-bold text-green-500 transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}>{currentRole}.</span>
          </h2>
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
            <button className="px-8 py-3 text-lg md:text-xl bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-600 hover:text-white hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
              LET'S DEV
            </button>
            <button className="px-8 py-3 text-lg md:text-xl bg-transparent border-2 border-white text-white rounded-full hover:bg-green-500 hover:text-black transition-all duration-150 ease-in-out transform hover:scale-105">
              MY WORKS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
