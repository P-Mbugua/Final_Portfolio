import React from 'react';

const MyWork = () => {
  const projects = [
    {
      title: 'GET TIME FOR YOURSELF',
      description: 'A project designed to help you manage your time and well-being.',
      imgSrc: 'src/assets/Photos/Test.png',
      link: 'https://example.com/time-for-yourself', // Replace with actual website
    },
    {
      title: 'INSPIRED STORIES',
      description: 'Read stories that inspire and motivate you.',
      imgSrc: 'src/assets/Photos/Test.png',
      link: 'https://example.com/inspired-stories', // Replace with actual website
    },
    {
      title: 'TIME FOR REST',
      description: 'Guides and tips on taking time off to relax and recharge.',
      imgSrc: 'src/assets/Photos/Test.png',
      link: 'https://example.com/time-for-rest', // Replace with actual website
    },
    {
      title: 'INSPIRED VIDEOS',
      description: 'Watch curated videos to inspire and educate.',
      imgSrc: 'src/assets/Photos/Test.png',
      link: 'https://example.com/inspired-videos', // Replace with actual website
    },
  ];

  return (
    <div className="bg-gray-900 py-8 px-6 sm:px-8 md:py-16 md:px-12 lg:py-24 lg:px-32 text-center">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6"> MY  <span className='text-yellow-500'> WORKS </span></h2>
      <p className="text-green-500 mb-12 text-base sm:text-lg">
        – Here are a few of the projects I have been working on –
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-white rounded-xl shadow-xl w-full h-80 sm:h-96 overflow-hidden transform transition-all duration-500 group hover:scale-105"
          >
            {/* Top part with photo */}
            <div className="h-2/3">
              <img
                src={project.imgSrc}
                alt={`Screenshot of ${project.title}`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom part with info */}
            <div className="absolute inset-x-0 bottom-0 bg-white rounded-b-xl p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="font-bold text-green-500 text-lg sm:text-xl mb-1">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4 text-sm sm:text-base">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-2 font-semibold rounded-full transition-colors duration-300 hover:bg-yellow-500"
              >
                Visit Site
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
