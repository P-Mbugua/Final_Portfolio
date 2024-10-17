import React from 'react';

const MyWork = () => {
  const projects = [
    {
      title: 'HOTEL MANAGEMENT SYSTEM',
      description: 'A project designed to help you manage your time and well-being.',
      imgSrc: 'https://p-mbugua.github.io/peshmarkTwo/Photos/Projects/Hetelogix_System.png',
      link: 'https://stay-manager-mg.netlify.app/',
    },
    {
      title: 'DELIVERY MANAGEMENT SYSTEM',
      description: 'Read stories that inspire and motivate you.',
      imgSrc: 'https://p-mbugua.github.io/peshmarkTwo/Photos/Projects/ParcelPoa.png',
      link: 'https://parcelpoa.netlify.app/',
    },
    {
      title: 'REACHROY DESIGNS HUB',
      description: 'Guides and tips on taking time off to relax and recharge.',
      imgSrc: 'https://p-mbugua.github.io/peshmarkTwo/Photos/Projects/Reach_Roy.png',
      link: 'https://reachroy.netlify.app/',
    },
    {
      title: 'TEACHNEST',
      description: 'Watch curated videos to inspire and educate.',
      imgSrc: 'https://p-mbugua.github.io/peshmarkTwo/Photos/Projects/TechNest_Online_Shop.png',
      link: 'https://e-commerce-shop-ruddy.vercel.app/',
    },
  ];

  // Sample reviews data
  const reviews = [
    {
      name: 'Alice Smith',
      date: 'October 10, 2024',
      stars: 5,
      message: 'This platform has significantly improved my productivity!',
      imgSrc: 'https://via.placeholder.com/50',
    },
    {
      name: 'Bob Johnson',
      date: 'October 12, 2024',
      stars: 4,
      message: 'Great user experience, but could use some more features.',
      imgSrc: 'https://via.placeholder.com/50',
    },
    {
      name: 'Charlie Brown',
      date: 'October 15, 2024',
      stars: 5,
      message: 'Absolutely love it! Highly recommend to others.',
      imgSrc: 'https://via.placeholder.com/50',
    },
  ];

  return (
    <div className="bg-gray-900 py-8 px-6 sm:px-8 md:py-16 md:px-12 lg:py-24 lg:px-32 text-center">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6"> MY <span className='text-yellow-500'> WORKS </span></h2>
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

      {/* Reviews Section */}
      <div className="mt-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">Reviews</h2>
        <div className="space-y-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-lg flex items-start">
              <img src={review.imgSrc} alt={`${review.name}'s profile`} className="w-12 h-12 rounded-full mr-4" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-green-500">{review.name}</h3>
                  <span className="text-yellow-500">{'★'.repeat(review.stars)}</span>
                </div>
                <p className="text-gray-700 text-sm">{review.date}</p>
                <p className="mt-2 text-gray-800">{review.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyWork;
