import React from 'react';

export default function About() {
  const skills = [
    { skill: 'Kotlin', level: 95 },
    { skill: 'Android', level: 90 },
    { skill: 'ReactJS', level: 75 },
    { skill: 'Java', level: 85 },
    { skill: 'HTML & CSS', level: 95 },
    { skill: 'JavaScript', level: 90 },
    { skill: 'Node.js', level: 80 },
    { skill: 'Express.js', level: 75 },
    { skill: 'MongoDB', level: 80 },
    { skill: 'Git & GitHub', level: 85 },
    { skill: 'SQL', level: 85 },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center px-4">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-green-400">ABOUT <span className="text-white">ME</span></h1>
        <p className="text-lg text-gray-400">I LOVE CREATING MOBILE SOLUTIONS</p>
      </div>

      {/* Personal Info Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
        {/* Image Section */}
        <div className="flex justify-center md:w-1/2 mb-6 md:mb-0">
          <img 
            src="src/assets/Photos/PETER.png" 
            alt="Your Image" 
            className="w-72 h-auto object-cover border-4 border-green-500 rounded-md"
          />
        </div>

        {/* Info Section */}
        <div className="md:w-1/2 text-left">
          <ul className="space-y-2 text-gray-300">
            <li><strong className="text-green-400">First Name:</strong> Peter</li>
            <li><strong className="text-green-400">Last Name:</strong> Mbugua</li>
            <li><strong className="text-green-400">Birthdate:</strong> 8 March 2003</li>
            <li><strong className="text-green-400">Nationality:</strong> Kenyan</li>
            <li><strong className="text-green-400">Experience:</strong> 5 years</li>
            <li><strong className="text-green-400">Address:</strong> Nairobi</li>
            <li><strong className="text-green-400">Freelance:</strong> Available</li>
            <li><strong className="text-green-400">Languages:</strong> English, Swahili</li>
            <li><strong className="text-green-400">Phone:</strong> +254 701 571 745</li>
            <li><strong className="text-green-400">Email:</strong> petermbuguangumi@gmail.com</li>
            <li><strong className="text-green-400">GitHub:</strong> <a href="https://github.com/P-Mbugua" className="text-blue-400">github.com/your-github</a></li>
          </ul>

          {/* Button */}
          <div className="mt-6">
            <a 
              href="/path-to-cv.pdf" 
              className="px-6 py-3 bg-green-500 text-black rounded-full font-bold hover:bg-green-600 transition"
              download
            >
              DOWNLOAD MY CV
            </a>
          </div>
        </div>
      </div>

      {/* Experience & Education Section */}
      <div className="mt-16 max-w-6xl w-full">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Experience Section */}
          <div>
            <h2 className="text-2xl font-bold text-green-400 mb-4">EXPERIENCE</h2>
            <ul className="space-y-6 text-gray-300">
              <li>
                <h3 className="text-lg font-semibold">MAY 2022 - Present</h3>
                <h4 className="text-xl font-bold text-green-400">Senior Technical Mentor – <span className="text-blue-400">Moringa School</span></h4>
                <ul className="list-disc ml-6">
                  <li>Train other technical trainers.</li>
                  <li>Facilitate live instruction.</li>
                  <li>Lead and manage implementation of new products.</li>
                  <li>Provide feedback to students.</li>
                  <li>Perform code reviews and approve pull requests.</li>
                </ul>
              </li>
              <li>
                <h3 className="text-lg font-semibold">AUG 2021 - APR 2022</h3>
                <h4 className="text-xl font-bold text-green-400">Technical Mentor – <span className="text-blue-400">Moringa School</span></h4>
                <ul className="list-disc ml-6">
                  <li>Mentor students on their journey to becoming software developers.</li>
                  <li>Participate in software development projects.</li>
                  <li>Facilitate outreach programs.</li>
                </ul>
              </li>
              <li>
                <h3 className="text-lg font-semibold">AUG 2020 - APR 2022</h3>
                <h4 className="text-xl font-bold text-green-400">Freelance Android Engineer – <span className="text-blue-400">Amaris Solutions Group</span></h4>
                <ul className="list-disc ml-6">
                  <li>Document and test new       software applications.</li>
                  <li>Assess new application ideas.</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Divider between Experience and Education */}
          <div className="md:hidden flex justify-center my-4">
            <hr className="border-white w-full" />
          </div>

          {/* Education Section */}
          <div>
            <h2 className="text-2xl font-bold text-green-400 mb-4">EDUCATION</h2>
            <ul className="space-y-6 text-gray-300">
              <li>
                <h3 className="text-lg font-semibold">SEP 2022 - Present</h3>
                <h4 className="text-xl font-bold text-green-400">Postgraduate Diploma, Applied Mathematics – <span className="text-blue-400">JKUAT</span></h4>
                <p className="ml-6">Main areas of study include:</p>
                <ul className="list-disc ml-6">
                  <li>Linear Algebra</li>
                  <li>Quantum Mechanics</li>
                  <li>Scientific Computing</li>
                </ul>
              </li>
              <li>
                <h3 className="text-lg font-semibold">JAN 2022 - MAY 2022</h3>
                <h4 className="text-xl font-bold text-green-400">Instructional Pedagogy – <span className="text-blue-400">Flatiron School</span></h4>
                <ul className="list-disc ml-6">
                  <li>Psychology of Learning</li>
                  <li>Training Methodologies</li>
                </ul>
              </li>
              <li>
                <h3 className="text-lg font-semibold">JAN 2022 - APR 2022</h3>
                <h4 className="text-xl font-bold text-green-400">Software Engineering with Ruby – <span className="text-blue-400">Flatiron School</span></h4>
                <ul className="list-disc ml-6">
                  <li>Frontend development with ReactJS</li>
                  <li>Backend development with Ruby</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-16 max-w-6xl w-full">
        <h2 className="text-2xl font-bold text-green-400 mb-6 text-center">SKILLS</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="p-4 rounded-md text-center">
              <h3 className="text-lg font-semibold">{skill.skill}</h3>
              <div className="relative pt-2">
                <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-700">
                  <div
                    style={{ width: `${skill.level}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                  ></div>
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-2">{skill.level}%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
