import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Skills() {
  const technicalSkills = [
    { skill: 'ReactJS ', level: 75, description: 'A JavaScript library for building user interfaces.' },
    { skill: 'HTML & CSS', level: 95, description: 'Fundamental technologies for web development.' },
    { skill: 'JavaScript ', level: 55, description: 'A versatile programming language for web development.' },
    { skill: 'Python', level: 45, description: 'A powerful language for backend development and data analysis.' },
    { skill: 'Git | GitHub | Figma | Sketch | Expo Go', level: 85, description: 'Tools for version control and design.' },
    { skill: 'SQLite3', level: 65, description: 'A lightweight database engine for small-scale applications.' },
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
        <h1 className="lg:text-5xl text-3xl font-bold text-green-400 mt-10 lg:mt-10">
         MY SKILLS
        </h1>
        <h2 className="text-lg text-gray-300 mt-2 font-medium">
        – Showcasing my journey and growth in the world of technology –
        </h2>
      </div>

      {/* Technical Skills Section */}
      <div className="mt-6 w-full max-w-6xl">
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







{/* ================= START: HOW I WORK SECTION ================= */}
<div className="w-full bg-black py-20 relative overflow-hidden">
  {/* Subtle Background Accent */}
  <div className="absolute top-0 right-0 w-1/3 h-full bg-green-900/5 blur-[100px] pointer-events-none" />

  <div className="relative z-10 max-w-5xl mx-auto px-4">
    
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 mb-4">
        MY PROCESS
      </h2>
      <p className="text-gray-400 text-sm md:text-base font-sans max-w-2xl mx-auto font-light">
        From initial concept to final pixel-perfect deployment. A structured approach to building digital products that perform.
      </p>
    </div>

    {/* Timeline Container */}
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500/50 via-green-500/20 to-transparent" />

      {/* Steps */}
      <div className="space-y-12">
        
        {/* Step 1: Discovery */}
        <div className="relative flex flex-col md:flex-row items-center gap-8 group">
          <div className="flex-1 w-full md:text-right order-2 md:order-1">
            <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-green-400 transition-colors">01. Discovery & Research</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              I start by understanding the <span className="text-gray-200">core problem</span> and your business goals. Through stakeholder interviews and market analysis, I gather requirements to ensure the foundation is solid before writing a single line of code.
            </p>
          </div>
          
          {/* Icon Node */}
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-black border-2 border-green-500 rounded-full flex items-center justify-center z-10 shadow-[0_0_15px_rgba(34,197,94,0.5)] group-hover:scale-125 transition-transform duration-300 order-1 md:order-2">
            <div className="w-2 h-2 bg-green-400 rounded-full" />
          </div>

          <div className="flex-1 w-full order-3 md:order-3 hidden md:block">
            <div className="text-gray-500 text-xs font-mono uppercase tracking-widest">Requirement Analysis</div>
          </div>
        </div>

        {/* Step 2: Strategy & UI Design */}
        <div className="relative flex flex-col md:flex-row items-center gap-8 group">
          <div className="flex-1 w-full hidden md:block order-1">
            <div className="text-gray-500 text-xs font-mono uppercase tracking-widest text-right">Wireframing & Prototyping</div>
          </div>

          {/* Icon Node */}
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-black border-2 border-green-500 rounded-full flex items-center justify-center z-10 shadow-[0_0_15px_rgba(34,197,94,0.5)] group-hover:scale-125 transition-transform duration-300 order-2">
            <div className="w-2 h-2 bg-green-400 rounded-full" />
          </div>

          <div className="flex-1 w-full order-3">
            <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-green-400 transition-colors">02. Strategy & UI Design</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              I translate insights into <span className="text-gray-200">visual structures</span>. Creating low-fidelity wireframes to map user flows, then evolving them into high-fidelity, interactive prototypes that define the look, feel, and accessibility standards.
            </p>
          </div>
        </div>

        {/* Step 3: Development (Your Strong Suit) */}
        <div className="relative flex flex-col md:flex-row items-center gap-8 group">
          <div className="flex-1 w-full md:text-right order-2 md:order-1">
            <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-green-400 transition-colors">03. Frontend Development</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              This is where the magic happens. I build <span className="text-gray-200">responsive, pixel-perfect interfaces</span> using React and modern CSS. I focus on clean architecture, smooth animations, and performance optimization to ensure the site feels as good as it looks.
            </p>
          </div>

          {/* Icon Node - Highlighted */}
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 bg-green-900/20 border-2 border-green-400 rounded-full flex items-center justify-center z-10 shadow-[0_0_20px_rgba(34,197,94,0.6)] group-hover:scale-125 transition-transform duration-300 order-1 md:order-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
          </div>

          <div className="flex-1 w-full order-3 md:order-3 hidden md:block">
            <div className="text-gray-500 text-xs font-mono uppercase tracking-widest">React & Tailwind</div>
          </div>
        </div>

        {/* Step 4: Testing & Refinement */}
        <div className="relative flex flex-col md:flex-row items-center gap-8 group">
          <div className="flex-1 w-full hidden md:block order-1">
            <div className="text-gray-500 text-xs font-mono uppercase tracking-widest text-right">QA & Optimization</div>
          </div>

          {/* Icon Node */}
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-black border-2 border-green-500 rounded-full flex items-center justify-center z-10 shadow-[0_0_15px_rgba(34,197,94,0.5)] group-hover:scale-125 transition-transform duration-300 order-2">
            <div className="w-2 h-2 bg-green-400 rounded-full" />
          </div>

          <div className="flex-1 w-full order-3">
            <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-green-400 transition-colors">04. Testing & Refinement</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Rigorous testing across devices and browsers ensures <span className="text-gray-200">flawless performance</span>. I optimize load speeds, fix bugs, and refine interactions based on feedback, ensuring the final product is robust and user-friendly.
            </p>
          </div>
        </div>

        {/* Step 5: Deployment & Support */}
        <div className="relative flex flex-col md:flex-row items-center gap-8 group">
          <div className="flex-1 w-full md:text-right order-2 md:order-1">
            <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-green-400 transition-colors">05. Deployment & Launch</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              The final beat. I handle secure deployment to production servers, configure domains, and set up analytics. Post-launch, I provide support to ensure scalability and assist with any future iterations or content updates.
            </p>
          </div>

          {/* Icon Node */}
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-black border-2 border-green-500 rounded-full flex items-center justify-center z-10 shadow-[0_0_15px_rgba(34,197,94,0.5)] group-hover:scale-125 transition-transform duration-300 order-1 md:order-2">
            <div className="w-2 h-2 bg-green-400 rounded-full" />
          </div>

          <div className="flex-1 w-full order-3 md:order-3 hidden md:block">
            <div className="text-gray-500 text-xs font-mono uppercase tracking-widest">Go Live</div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
{/* ================= END: HOW I WORK SECTION ================= */}   








    </div>
  );
}
