import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

export default function Skills() {
  const skills = [
    { skill: 'ReactJS', level: 75, description: 'A JavaScript library for building user interfaces.' },
    { skill: 'HTML & CSS', level: 95, description: 'Fundamental technologies for web development.' },
    { skill: 'JavaScript', level: 90, description: 'A versatile programming language for web development.' },
    { skill: 'Python', level: 90, description: 'A powerful language for backend development and data analysis.' },
    { skill: 'Git | GitHub | Figma | Sketch', level: 85, description: 'Tools for version control and design.' },
    { skill: 'SQLite3', level: 85, description: 'A lightweight database engine for small-scale applications.' },
    { skill: 'Node.js', level: 70, description: 'JavaScript runtime for building server-side applications.' },
    { skill: 'Express.js', level: 70, description: 'A web application framework for Node.js.' },
    { skill: 'MongoDB', level: 70, description: 'A NoSQL database for flexible data storage.' },
  ];

  const [animatedSkills, setAnimatedSkills] = useState(skills.map(() => 0));

  useEffect(() => {
    AOS.init({
      duration: 3000,
      delay: 300,
      easing: 'ease-in-out',
      once: true,
    });

    const interval = setInterval(() => {
      setAnimatedSkills((prevSkills) =>
        prevSkills.map((level, index) =>
          level < skills[index].level ? level + 1 : level
        )
      );
    }, 100); // Halved the interval duration for slower animation

    return () => {
      clearInterval(interval);
    };
  }, [skills]);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-4 lg:px-16 py-8 lg:py-16">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="lg:text-5xl text-3xl font-bold text-green-400 mt-10 lg:mt-20">
         MY SKILLS
        </h1>
        <h2 className="text-lg text-gray-300 mt-2 font-medium">
          Showcasing my journey and growth in the world of technology
        </h2>
      </div>

      {/* Skills Bars Section */}
      <div className="mt-16 w-full max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col" data-aos="fade-up">
              <h3 className="text-xl font-semibold text-white mb-2">{skill.skill}</h3>
              <p className="text-gray-300 mb-2 flex-grow">{skill.description}</p>
              <div className="bg-gray-600 rounded-full h-4 overflow-hidden">
                <div
                  className={`bg-green-400 h-full transition-all duration-50`}
                  style={{ width: `${animatedSkills[index]}%` }}
                ></div>
              </div>
              <span className="text-gray-300 ml-4 block mt-2">{`${animatedSkills[index]}%`}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
