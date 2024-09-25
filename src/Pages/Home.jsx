import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThreeScene from '../Components/ThreeScene';

export default function Home() {
  const roles = [
    "A Full Stack Developer",
    "A Graphics Designer",
    "An Executive Assistant",
    "A Cloud Solutions Architect"
  ];

  const [currentRole, setCurrentRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const typingSpeed = 150;
  const pauseTime = 1500;
  const fadeDuration = 3000;
  const [fade, setFade] = useState(false);

  useEffect(() => {
    let typingInterval;

    const typeRole = () => {
      const current = roles[roleIndex];

      if (currentRole.length < current.length) {
        setCurrentRole((prev) => prev + current.charAt(prev.length));
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setFade(true);
          setTimeout(() => {
            setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
            setCurrentRole("");
            setFade(false);
            startTyping();
          }, fadeDuration);
        }, pauseTime);
      }
    };

    const startTyping = () => {
      typingInterval = setInterval(typeRole, typingSpeed);
    };

    startTyping();

    return () => clearInterval(typingInterval);
  }, [roleIndex, currentRole]);

  return (
    <div className="relative h-screen bg-black text-white overflow-hidden font-inter">
      <ThreeScene className="absolute top-0 left-0 w-full h-full z-0" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-4 md:px-10 md:ml-20">
        <div className="order-1 md:order-2 mb-0 flex justify-center md:justify-end w-full md:w-1/2">
          <img
            src="src/assets/Photos/PETER.png"
            alt="Peter"
            className="w-48 md:w-72 lg:w-80 h-auto object-cover rounded-full border-2 border-yellow-500 transition-transform duration-300 ease-in-out hover:scale-105"
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>

        <div className="flex flex-col lg:mb-0 mb-24 justify-center text-left md:ml-20 space-y-6 max-w-lg order-2 md:order-1 md:space-y-8 pr-0 md:pr-10">
        <h1 className="text-4xl sm:text-5xl md:text-5xl font-extrabold text-yellow-500 mb-0 text-center md:text-left">
  HELLO THERE!!
</h1>


          <h1 className="text-3xl md:text-5xl font-bold mb-2 leading-tight">
            I'm <span className="text-yellow-500">Peter Mbugua,</span>
          </h1>
          <h2 className="text-lg md:text-3xl mb-4">
            I'm <span className={`font-bold text-green-500 transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}>{currentRole}.</span>
          </h2>

          <div className="flex flex-col lg:flex-row lg:space-x-4 mt-6 space-y-2 lg:space-y-0">
            <Link to="/contactform" className="w-full lg:w-auto">
              <button className="w-full lg:w-auto px-8 py-3 text-lg lg:text-xl bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-600 hover:text-white hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
                WORK WITH ME
              </button>
            </Link>

            <a href="/portfolio" target="_blank" rel="noopener noreferrer" className="w-full lg:w-auto">
              <button className="w-full lg:w-auto px-8 py-3 text-lg lg:text-xl bg-transparent border-2 border-white text-white rounded-full hover:bg-green-500 hover:text-black transition-all duration-150 ease-in-out transform hover:scale-105">
                MY WORKS
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
