import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Skills() {
  const technicalSkills = [
    { skill: 'ReactJS | React Native', level: 75, description: 'A JavaScript library for building user interfaces.' },
    { skill: 'HTML & CSS', level: 95, description: 'Fundamental technologies for web development.' },
    { skill: 'JavaScript ', level: 55, description: 'A versatile programming language for web development.' },
    { skill: 'Python', level: 50, description: 'A powerful language for backend development and data analysis.' },
    { skill: 'Git | GitHub | Figma | Sketch | Expo Go', level: 85, description: 'Tools for version control and design.' },
    { skill: 'SQLite3', level: 65, description: 'A lightweight database engine for small-scale applications.' },
    { skill: 'Node.js', level: 30, description: 'JavaScript runtime for building server-side applications.' },
    { skill: 'Express.js', level: 20, description: 'A web application framework for Node.js.' },
    { skill: 'MongoDB', level: 40, description: 'A NoSQL database for flexible data storage.' },
  ];

  const softSkills = [
    { skill: 'Communication', level: 85, description: 'Effectively conveying ideas and information.' },
    { skill: 'Teamwork', level: 90, description: 'Collaborating effectively with others.' },
    { skill: 'Problem-Solving', level: 80, description: 'Identifying solutions to complex issues.' },
    { skill: 'Adaptability', level: 75, description: 'Adjusting to new situations and challenges.' },
    { skill: 'Time Management', level: 85, description: 'Managing time efficiently to meet deadlines.' },
    { skill: 'Creativity', level: 80, description: 'Thinking outside the box to generate innovative ideas.' },
  ];

  const [animatedTechnicalSkills, setAnimatedTechnicalSkills] = useState(technicalSkills.map(() => 0));
  const [animatedSoftSkills, setAnimatedSoftSkills] = useState(softSkills.map(() => 0));

  useEffect(() => {
    AOS.init({
      duration: 3000,
      delay: 300,
      easing: 'ease-in-out',
      once: true,
    });

    const technicalInterval = setInterval(() => {
      setAnimatedTechnicalSkills((prevSkills) =>
        prevSkills.map((level, index) =>
          level < technicalSkills[index].level ? level + 1 : level
        )
      );
    }, 100);

    const softInterval = setInterval(() => {
      setAnimatedSoftSkills((prevSkills) =>
        prevSkills.map((level, index) =>
          level < softSkills[index].level ? level + 1 : level
        )
      );
    }, 100);

    return () => {
      clearInterval(technicalInterval);
      clearInterval(softInterval);
    };
  }, [technicalSkills, softSkills]);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-4 lg:px-16 py-8 lg:py-16">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="lg:text-5xl text-3xl font-bold text-green-400 mt-10 lg:mt-20">
         MY SKILLS
        </h1>
        <h2 className="text-lg text-gray-300 mt-2 font-medium">
        – Showcasing my journey and growth in the world of technology –
        </h2>
      </div>

      {/* Technical Skills Section */}
      <div className="mt-16 w-full max-w-6xl">
        <h3 className="text-2xl font-bold text-green-500 mb-4">Technical Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalSkills.map((skill, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col" data-aos="fade-up">
              <h3 className="text-xl font-semibold text-white mb-2">{skill.skill}</h3>
              <p className="text-gray-300 mb-2 flex-grow">{skill.description}</p>
              <div className="bg-gray-600 rounded-full h-4 overflow-hidden">
                <div
                  className={`bg-yellow-500 h-full transition-all duration-50`}
                  style={{ width: `${animatedTechnicalSkills[index]}%` }}
                ></div>
              </div>
              <span className="text-gray-300 ml-4 block mt-2">{`${animatedTechnicalSkills[index]}%`}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills Section*/}
      <div className="mt-16 w-full max-w-6xl">
        <h3 className="text-2xl font-bold text-green-500 mb-4">Soft Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {softSkills.map((skill, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col" data-aos="fade-up">
              <h3 className="text-xl font-semibold text-white mb-2">{skill.skill}</h3>
              <p className="text-gray-300 mb-2 flex-grow">{skill.description}</p>
              <div className="bg-gray-600 rounded-full h-4 overflow-hidden">
                <div
                  className={`bg-yellow-500 h-full transition-all duration-50`}
                  style={{ width: `${animatedSoftSkills[index]}%` }}
                ></div>
              </div>
              <span className="text-gray-300 ml-4 block mt-2">{`${animatedSoftSkills[index]}%`}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
