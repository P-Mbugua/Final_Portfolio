import React from 'react';

export default function Skills() {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-gray-900 rounded-lg shadow-lg ">
      <div className="flex flex-col md:flex-row">
        {/* Left Side: Education */}
        <div className="flex-1 md:pr-8">
          <section className="mb-12">
            <h3 className="text-3xl font-semibold text-gray-100 mb-6">Education</h3>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl mb-5">
              <h4 className="text-2xl font-semibold text-white mb-2">Certificate in Software Engineering</h4>
              <p className="text-gray-400">Moringa School, Nairobi, Kenya</p>
              <p className="text-gray-500 text-sm">Graduate: November 2024</p>
              <a href="#" className="text-blue-400 hover:text-blue-300 mt-2 block">View More Details</a>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
              <h4 className="text-2xl font-semibold text-white mb-2">Certificate in Website Development</h4>
              <p className="text-gray-400">Moringa School, Nairobi, Kenya</p>
              <p className="text-gray-500 text-sm">Graduated: September 2023</p>
              <a href="#" className="text-blue-400 hover:text-blue-300 mt-2 block">View More Details</a>
            </div>
          </section>
        </div>

        {/* Vertical Separator */}
        <div className="hidden md:block w-px bg-blue-500 mx-8"></div>

        {/* Right Side: Experience */}
        <div className="flex-1 md:pl-8">
          <section className="mb-12">
            <h3 className="text-3xl font-semibold text-gray-100 mb-6">Experience</h3>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl mb-8">
              <h4 className="text-2xl font-semibold text-white mb-2">Software Engineer at Tech Company</h4>
              <p className="text-gray-400">Jan 2024 - Present</p>
              <p className="text-gray-300 mt-2">Worked on developing scalable web applications using React and Node.js. Implemented RESTful APIs and collaborated in an Agile environment.</p>
              <a href="#" className="text-blue-400 hover:text-blue-300 mt-2 block">View More Details</a>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
              <h4 className="text-2xl font-semibold text-white mb-2">Intern at Startup Inc.</h4>
              <p className="text-gray-400">Jun 2023 - Dec 2023</p>
              <p className="text-gray-300 mt-2">Assisted in building features for a customer-facing application and gained experience in full-stack development.</p>
              <a href="#" className="text-blue-400 hover:text-blue-300 mt-2 block">View More Details</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
