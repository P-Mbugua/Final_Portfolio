import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode, faCloud, faLightbulb, faBrush, faRobot,
  faBook, faGamepad, faCameraRetro, faPlane, faUtensils
} from '@fortawesome/free-solid-svg-icons';

export default function Skills() {
  const skills = [
    { name: 'JavaScript', level: '85%', description: 'Proficient in writing clean, efficient JavaScript code for web applications.' },
    { name: 'React.js', level: '90%', description: 'Expert in building dynamic user interfaces with React and managing state effectively.' },
    { name: 'TypeScript', level: '80%', description: 'Skilled in using TypeScript for enhanced code quality and maintainability.' },
    { name: 'Node.js', level: '75%', description: 'Experience in developing server-side applications using Node.js and Express.' },
    { name: 'CSS/HTML', level: '95%', description: 'Strong foundation in web design principles with a focus on responsive design.' },
    { name: 'Cloud Computing', level: '70%', description: 'Knowledgeable in deploying applications and managing resources in the cloud.' },
    { name: 'DevOps', level: '65%', description: 'Familiar with CI/CD pipelines and tools to streamline development processes.' },
    { name: 'GitHub', level: '80%', description: 'Proficient in using Git and GitHub for version control and collaboration.' },
    { name: 'Figma (Graphics Design using AI)', level: '75%', description: 'Able to create stunning designs using Figma and AI tools for efficiency.' },
  ];

  const interests = [
    { name: 'Web Development', icon: faCode },
    { name: 'Cloud Computing', icon: faCloud },
    { name: 'Open Source Contributions', icon: faLightbulb },
    { name: 'UI/UX Design', icon: faBrush },
    { name: 'Machine Learning', icon: faRobot },
  ];

  const hobbies = [
    { name: 'Reading Tech Blogs', icon: faBook },
    { name: 'Playing Video Games', icon: faGamepad },
    { name: 'Photography', icon: faCameraRetro },
    { name: 'Traveling', icon: faPlane },
    { name: 'Cooking', icon: faUtensils },
  ];

  const midIndex = Math.ceil(skills.length / 2);
  const leftSkills = skills.slice(0, midIndex);
  const rightSkills = skills.slice(midIndex);

  return (
    <div className="bg-gray-900 text-white py-16 px-4">
      <div className="container mx-auto max-w-screen-lg">
        <h2 className="text-4xl font-bold text-center text-yellow-500 mb-8 font-lora">
        MY <span  className=" text-green-500 "> SKILLS</span> 
        </h2>
        <p className="text-center text-lg mb-12 font-roboto">
          I have a diverse set of skills in web development, design, and cloud computing. Here's a snapshot of my expertise:
        </p>

        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div className="space-y-8">
            {leftSkills.map(skill => (
              <div key={skill.name} className="flex items-center justify-between bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
                <div className="flex flex-col">
                  <span className="text-xl font-semibold font-lora">{skill.name}</span>
                  <span className="text-gray-400 text-sm font-roboto">{skill.description}</span>
                </div>
                <div className="relative w-1/2">
                  <div className="bg-gray-600 h-4 rounded">
                    <div className="bg-yellow-500 h-full rounded" style={{ width: skill.level }}></div>
                  </div>
                  <span className="absolute right-0 top-1 -mt-6 text-sm font-semibold">
                    {skill.level}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            {rightSkills.map(skill => (
              <div key={skill.name} className="flex items-center justify-between bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
                <div className="flex flex-col">
                  <span className="text-xl font-semibold font-lora">{skill.name}</span>
                  <span className="text-gray-400 text-sm font-roboto">{skill.description}</span>
                </div>
                <div className="relative w-1/2">
                  <div className="bg-gray-600 h-4 rounded">
                    <div className="bg-yellow-500 h-full rounded" style={{ width: skill.level }}></div>
                  </div>
                  <span className="absolute right-0 top-1 -mt-6 text-sm font-semibold">
                    {skill.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-yellow-500 mb-4 font-lora">Interests</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {interests.map(interest => (
              <div key={interest.name} className="flex items-center bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
                <FontAwesomeIcon icon={interest.icon} className="text-yellow-500 mr-3 text-2xl" />
                <span className="text-gray-300 font-roboto">{interest.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-bold text-yellow-500 mb-4 font-lora">Hobbies</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {hobbies.map(hobby => (
              <div key={hobby.name} className="flex items-center bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
                <FontAwesomeIcon icon={hobby.icon} className="text-yellow-500 mr-3 text-2xl" />
                <span className="text-gray-300 font-roboto">{hobby.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
