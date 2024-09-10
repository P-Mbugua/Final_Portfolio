import React from 'react';

export default function Portfolio() {
  return (
    <div className="bg-gray-900 min-h-screen py-12">

        <div className="container mx-auto px-6 text-center">
              <h1 className="text-4xl font-extrabold text-white mb-4">My Portfolio</h1>
              <p className="text-lg text-gray-300">
                Explore a curated selection of projects showcasing my expertise in software development.
              </p>
        </div>
     

      <section className="bg-white-900 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Hotel Management System",
                description: "A web application with real-time updates built using React and Node.js.",
                link: "https://example.com/project-one",
                imgSrc: "src/assets/Photos/Project.png"
              },
              {
                title: "Transaction Management System",
                description: "An e-commerce platform featuring custom backend and frontend with secure payment integration.",
                link: "https://example.com/project-two",
                imgSrc: "src/assets/Photos/Project.png"
              },
              {
                title: "E-Commerce Shop",
                description: "A mobile-friendly application for product sales, designed with a focus on user experience.",
                link: "https://example.com/project-three",
                imgSrc: "src/assets/Photos/Project.png"
              },
              {
                title: "School Management System",
                description: "An application for managing school operations, including fee tracking and administration.",
                link: "https://example.com/project-four",
                imgSrc: "src/assets/Photos/Project.png"
              },
              {
                title: "Pest Management System",
                description: "An AI-driven system for pest identification and management in agriculture.",
                link: "https://example.com/project-five",
                imgSrc: "src/assets/Photos/Project.png"
              },
              {
                title: "Company Profile Website",
                description: "A professional website for company profile and service presentation.",
                link: "https://example.com/project-six",
                imgSrc: "src/assets/Photos/Project.png"
              }
            ].map((project, index) => (
              <div
                key={index}
                className="relative bg-white-700 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl group"
              >
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-200 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 text-base font-medium text-gray-900 bg-white rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-300"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
