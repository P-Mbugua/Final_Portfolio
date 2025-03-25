import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AboutAndServices() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      delay: 300,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-4 lg:px-16 py-8 lg:py-16">
      {/* ABOUT ME Section */}
      <div className="text-center mb-8">
        <h1 className="lg:text-5xl text-3xl font-bold text-green-400 mt-10 lg:mt-20">
          ABOUT <span className="text-white">ME</span>
        </h1>
        <p className="text-lg text-gray-300 mt-2">– I LOVE CREATING TECH SOLUTIONS – </p>
      </div>

      {/* Personal Info Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl space-y-6 lg:space-y-0">
        <div className="flex justify-center lg:w-1/2">
          <img
            src="https://p-mbugua.github.io/Official-_Portfolio/peter.png"
            alt="Your Image"
            className="w-40 h-auto object-cover border-4 border-green-500 rounded-md lg:w-60 shadow-lg"
            onContextMenu={(e) => e.preventDefault()} 
          />
        </div>
        <div className="lg:w-1/2 text-left">
          <ul className="grid grid-cols-2 gap-4 text-gray-300">
            {[ 
              { label: 'First Name:', value: 'Peter' },
              { label: 'Last Name:', value: 'Mbugua' },
              { label: 'Birthdate:', value: '8 March 2003' },
              { label: 'Nationality:', value: 'Kenyan' },
              { label: 'Experience:', value: '2 years' },
              { label: 'Address:', value: 'Nairobi' },
              { label: 'Freelance:', value: 'Available' },
              { label: 'Languages:', value: 'English, Swahili' },
              {
                label: 'Phone:',
                value: (
                  <a
                    href="tel:+254701571745"
                    className="text-blue-400 hover:underline"
                  >
                    +254 701 571 745
                  </a>
                ),
              },
              {
                label: 'GitHub:',
                value: (
                  <a
                    href="https://github.com/P-Mbugua"
                    className="text-blue-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    P-Mbugua
                  </a>
                ),
              },
            ].map((info, index) => (
              <li key={index} className="flex">
                <strong className="text-green-400 w-32">{info.label}</strong>
                <span className="ml-4 text-white">{info.value}</span>
              </li>
            ))}
          </ul>

          {/* Button Section */}
          <div className="flex flex-col lg:flex-row lg:space-x-4 mt-6 space-y-2 lg:space-y-0">
            <a href="https://flowcv.com/resume/f62ua50tfk" target="_blank" rel="noopener noreferrer" className="w-full lg:w-auto">
              <button className="w-full lg:w-auto px-8 py-3 text-lg lg:text-xl bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-600 hover:text-white hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
                Download CV
              </button>
            </a>
            <a href="https://drive.google.com/file/d/11nOkBfsZlk2Rx4j_WXIcgUZbNhkG9zQZ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-full lg:w-auto">
              <button className="w-full lg:w-auto px-8 py-3 text-lg lg:text-xl bg-transparent border-2 border-white text-white rounded-full hover:bg-green-500 hover:text-black transition-all duration-150 ease-in-out transform hover:scale-105">
                Download my Biography
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Experience & Education Section */}
      <div className="mt-16 max-w-6xl w-full relative">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Experience */}
          <div className="relative">
            <h2 className="text-2xl font-bold text-green-400 mb-4" data-aos="fade-up">EXPERIENCE</h2>
            <ul className="space-y-6 text-gray-300 relative">
              <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 to-green-300"></div>
              {[ 
                {
                  date: 'APRIL 2023 - Present',
                  role: 'Office Executive Assistant – Save A Soul Organization',
                  tasks: ['Data Analyst', 'Day-to-day office duties', 'Lead product implementation', 'Provide feedback to students'],
                },
            
                {
                  date: 'SEPT 2024 - Present',
                  role: 'Fullstack Developer Attachment – Marps Africa Solutions',
                  tasks: ['UX/UI Designer', 'Participate in software projects', 'Frontend Developer', 'Perform code reviews'],
                },
                {
                  date: 'JAN 2023 - APR 2023',
                  role: 'Technical Mentor – Candid Centre',
                  tasks: ['Computer Skills trainer', 'Client/customer support'],
                },
              ].map((exp, index) => (
                <li key={index} className="relative pl-12 group" data-aos="fade-up">
                  <div className="absolute left-1.5 top-0 w-6 h-6 bg-green-400 border-4 border-green-800 rounded-full group-hover:scale-110 transition-transform duration-300 ease-in-out"></div>
                  <h3 className="text-lg font-semibold text-yellow-500">{exp.date}</h3>
                  <h4 className="text-xl font-bold text-green-400">
                    {exp.role.split(' – ')[0]} –{' '}
                    <span className="text-yellow-500">{exp.role.split(' – ')[1]}</span>
                  </h4>
                  <ul className="list-disc ml-6">
                    {exp.tasks.map((task, idx) => (
                      <li key={idx}>{task}</li>
                    ))}
                  </ul>
                </li>
              ))} 
            </ul>
          </div>

          {/* Education */}
          <div className="relative">
            <h2 className="text-2xl font-bold text-green-400 mb-4" data-aos="fade-up">EDUCATION</h2>
            <ul className="space-y-6 text-gray-300 relative">
              <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 to-green-300"></div>
              {[ 
                {
                  date: 'FEB 2024 - SEPT 2024',
                  institution: 'Certification in Full Stack Development – Moringa School',
                  studies: ['Frontend Development', 'Backend Development', 'UI/UX Design'],
                },
                {
                  date: 'MAY 2023 - SEPT 2023',
                  institution: 'Certification in Website Development – Moringa School',
                  studies: ['Computer Repair & Maintenance', 'Programming', 'Software Development'],
                },
                {
                  date: 'SEPT 2022 - DEC 2022',
                  institution: 'Certificate in Graphic Design – Pettans Institute',
                  studies: ['Graphic Solutions', 'Visual arts & media'],
                },
              ].map((edu, index) => (
                <li key={index} className="relative pl-12 group" data-aos="fade-up">
                  <div className="absolute left-1.5 top-0 w-6 h-6 bg-green-400 border-4 border-green-800 rounded-full group-hover:scale-110 transition-transform duration-300 ease-in-out"></div>
                  <h3 className="text-lg font-semibold text-yellow-500">{edu.date}</h3>
                  <h4 className="text-xl font-bold text-green-400">
                    {edu.institution.split(' – ')[0]} –{' '}
                    <span className="text-yellow-500">{edu.institution.split(' – ')[1]}</span>
                  </h4>
                  <p className="ml-6">Main areas of study include:</p>
                  <ul className="list-disc ml-6">
                    {edu.studies.map((study, idx) => (
                      <li key={idx}>{study}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Hobbies and Interests Section */}
      <div className="mt-16 max-w-6xl w-full">
        <h2 className="text-2xl font-bold text-green-400 mb-4" data-aos="fade-up">
          HOBBIES AND INTERESTS
        </h2>
        <p className="text-yellow-500" data-aos="fade-up">
          I enjoy a variety of activities outside of work. Here are some of my hobbies and interests:
        </p>
        <ul className="list-disc ml-6 text-gray-300" data-aos="fade-up">
          <li>Reading books on technology and personal development</li>
          <li>Playing video games</li>
          <li>Hiking and exploring nature</li>
          <li>Participating in hackathons and coding competitions</li>
          <li>Volunteering in community service projects</li>
        </ul>
      </div>

      {/* Services Section */}
      <div className="mt-16 max-w-6xl w-full">
        <h2 className="text-2xl font-bold text-green-400 mb-4 text-center" data-aos="fade-up">
          MY SERVICES
        </h2>
        <p className="text-yellow-500 text-center mb-8" data-aos="fade-up">
          I offer a variety of services to help you achieve your business goals.
        </p>
        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Web Development',
              description: 'Full stack web development using modern technologies like React, Node.js, and MongoDB.',
              icon: '🌐',
            },  
            {
              title: 'UI/UX Design',
              description: 'Designing user-friendly interfaces with a focus on accessibility and great user experiences.',
              icon: '🎨',
            },
            {
              title: 'Graphics Design',
              description: 'Creating stunning visuals, logos, and marketing materials for brands and businesses.',
              icon: '🖼️',
            },
            {
              title: 'Office Assistant',
              description: 'Offering administrative support, data entry, scheduling, and office management services.',
              icon: '💼',
            },
            {
              title: 'Tech Support',
              description: 'Providing tech support for hardware and software issues, troubleshooting, and system optimization.',
              icon: '🛠️',
            },
            {
              title: 'API Integration and Development',
              description: 'Develop and integrate APIs to ensure seamless communication between different software systems and platforms.',
              icon: '🔗',
            },
          ].map((service, index) => (
            <div
              key={index}
              className="p-6 bg-gray-900 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
              data-aos="fade-up"
            >
              <div className="text-4xl mb-4 text-yellow-500">{service.icon}</div>
              <h3 className="text-xl font-bold text-green-400 mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
