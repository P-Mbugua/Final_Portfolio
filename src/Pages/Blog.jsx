import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Blog = () => {

  return (
    <div className="min-h-screen bg-black text-white p-6 md:px-20 lg:px-40">
      {/* Introduction/Author Bio */}
      <section className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-green-500 font-roboto">PETER MBUGUA</h1>
        <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto font-inter">
          I am a passionate Fullstack Developer specializing in web and mobile app development. 
          I blog to share my journey, challenges, and insights about coding and tech 
          in general.
        </p>
      </section>

      {/* Blog Posts (Static) */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-green-500 font-inter">Latest Blog Posts</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Post 1 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="relative">
              <img
                src="https://example.com/image1.jpg" 
                alt="Post Thumbnail"
                className="w-full h-40 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-400 mb-2 font-inter">Oct 21, 2024 • Developer Policy</p>
              <h3 className="text-xl font-semibold mb-2 text-yellow-500 font-roboto">Understanding React Hooks</h3>
              <p className="text-sm mb-4 font-inter">
                Learn about the intricacies of React Hooks and how they can simplify your functional components.
              </p>
              <Link to={`/post/1`} className="inline-block bg-yellow-500 text-black py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-yellow-400 font-inter">
                Read More
              </Link>
            </div>
          </div>

          {/* Post 2 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="relative">
              <img
                src="https://example.com/image2.jpg" 
                alt="Post Thumbnail"
                className="w-full h-40 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-400 mb-2 font-inter">Oct 20, 2024 • Web Development</p>
              <h3 className="text-xl font-semibold mb-2 text-yellow-500 font-roboto">The Future of Web 3.0</h3>
              <p className="text-sm mb-4 font-inter">
                A deep dive into how Web 3.0 and blockchain are reshaping the internet, and what it means for developers.
              </p>
              <Link to={`/post/2`} className="inline-block bg-yellow-500 text-black py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-yellow-400 font-inter">
                Read More
              </Link>
            </div>
          </div>

          {/* Post 3 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="relative">
              <img
                src="https://example.com/image3.jpg" 
                alt="Post Thumbnail"
                className="w-full h-40 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-400 mb-2 font-inter">Oct 18, 2024 • Artificial Intelligence</p>
              <h3 className="text-xl font-semibold mb-2 text-yellow-500 font-roboto">AI in Software Development</h3>
              <p className="text-sm mb-4 font-inter">
                How AI tools are transforming the way software is built and maintained, from coding assistants to full automation.
              </p>
              <Link to={`/post/3`} className="inline-block bg-yellow-500 text-black py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-yellow-400 font-inter">
                Read More
              </Link>
            </div>
          </div>

          {/* Post 4 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="relative">
              <img
                src="https://example.com/image4.jpg" 
                alt="Post Thumbnail"
                className="w-full h-40 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-400 mb-2 font-inter">Oct 15, 2024 • Mobile Development</p>
              <h3 className="text-xl font-semibold mb-2 text-yellow-500 font-roboto">Building Scalable Mobile Apps</h3>
              <p className="text-sm mb-4 font-inter">
                Best practices and design patterns for creating scalable, high-performance mobile applications for Android and iOS.
              </p>
              <Link to={`/post/4`} className="inline-block bg-yellow-500 text-black py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-yellow-400 font-inter">
                Read More
              </Link>
            </div>
          </div>

          {/* Post 5 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="relative">
              <img
                src="https://example.com/image5.jpg" 
                alt="Post Thumbnail"
                className="w-full h-40 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-400 mb-2 font-inter">Oct 12, 2024 • Cloud Computing</p>
              <h3 className="text-xl font-semibold mb-2 text-yellow-500 font-roboto">Mastering AWS for Beginners</h3>
              <p className="text-sm mb-4 font-inter">
                A comprehensive guide to getting started with Amazon Web Services, including EC2, S3, and serverless computing.
              </p>
              <Link to={`/post/5`} className="inline-block bg-yellow-500 text-black py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-yellow-400 font-inter">
                Read More
              </Link>
            </div>
          </div>

          {/* Post 6 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="relative">
              <img
                src="https://example.com/image6.jpg" 
                alt="Post Thumbnail"
                className="w-full h-40 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-400 mb-2 font-inter">Oct 10, 2024 • Cybersecurity</p>
              <h3 className="text-xl font-semibold mb-2 text-yellow-500 font-roboto">Cybersecurity Best Practices in 2024</h3>
              <p className="text-sm mb-4 font-inter">
                Discover the top strategies and tools for ensuring the security of your applications and data in today's digital landscape.
              </p>
              <Link to={`/post/6`} className="inline-block bg-yellow-500 text-black py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-yellow-400 font-inter">
                Read More
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Blog;
