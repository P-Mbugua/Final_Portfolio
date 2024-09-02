import React, { useState } from 'react';

export default function Portfolio() {
  const [showContactForm, setShowContactForm] = useState(false);

  const openContactForm = () => {
    setShowContactForm(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeContactForm = () => {
    setShowContactForm(false);
    document.body.style.overflow = 'auto'; // Enable scrolling when modal is closed
  };

  return (
    <div className="bg-gray-100 py-12 sm:mt-7">
      {/* Header Section */}
      <header className="bg-white shadow-md">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="bg-gray-900 text-white py-8 rounded-t-lg">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">Project Highlights</h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Explore a selection of projects that highlight my expertise in web development and design as junior Developer. These projects demonstrate my ability to create innovative and user-focused solutions as a junior developer.
            </p>
          </div>
        </div>
      </header>


      {/* Projects Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Hotel Management System",
                description: "A dynamic web application built with React and Node.js, offering real-time data updates and a seamless user interface.",
                link: "https://example.com/project-one",
                imgSrc: "src/assets/hotel.png"
              },
              {
                title: "Simple Transaction Management System.",
                description: "An e-commerce platform featuring custom backend and frontend with advanced authentication and payment integration.",
                link: "https://example.com/project-two",
                imgSrc: "src/assets/hotel.png"
              },
              {
                title: "E-Commerce-Shop.",
                description: "A mobile-friendly application with responsive design and enhanced user accessibility, designed for selling different products but also a very simple application at the same time developed by juniors who are in moringa.",
                link: "https://example.com/project-three",
                imgSrc: "src/assets/hotel.png"
              },
              {
                title: "School Management System.",
                description: "A real-time  application that is to be used by a small school to make their management works much easier espicially o the school fees payments and also tracking.",               link: "https://example.com/project-four",
                imgSrc: "src/assets/hotel.png"
              },
              {
                title: "Pest Management System.",
                description: "A system to be used by farmers like an AI that will be used to be identifying pest and the system provides seamless measusres to be taken by the farmer.",
                link: "https://example.com/project-five",
                imgSrc: "src/assets/hotel.png"
              },
              {
                title: "Reach Roy Hub Designs Cyber.",
                description: "Simple company profile website showcasing companys specifics and also services offered and also pricing.",
                link: "https://example.com/project-six",
                imgSrc: "src/assets/hotel.png"
              }
            ].map((project, index) => (
              <div
                key={index}
                className="relative bg-gray-200 p-6 rounded-lg shadow-lg overflow-hidden group transition-transform transform hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="w-full h-48 md:h-64 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-center text-white p-6">
                    <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                    <p className="text-sm mb-6">{project.description}</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      

      {/* Contact Section */}
      <section className="py-12 md:py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            I’d love to hear from you! Whether you have a question about my work, a potential collaboration, or just want to connect, feel free to reach out using the form below.
          </p>
          <button
            onClick={openContactForm}
            className="inline-flex items-center px-6 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:scale-105"
          >
            Contact Me
          </button>
          {showContactForm && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-xl relative w-full max-w-md mx-4">
                {/* Close Button */}
                <button
                  onClick={closeContactForm}
                  className="absolute top-4 right-4 p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Get in Touch</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Your Email"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      required
                      className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Your Message"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
