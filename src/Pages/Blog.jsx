import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="min-h-screen bg-black text-white p-6 md:px-20 lg:px-40">
      {/* Introduction/Author Bio */}
      <section className="mb-12 text-center">
        <h1 className="text-3xl font-bold mb-4 text-yellow-500">Peter Mbugua</h1>
        <p className="text-lg max-w-3xl mx-auto">
          I am a passionate Fullstack Developer specializing in web and mobile app development. 
          I love working with modern tools like React, Tailwind CSS, and exploring new technologies 
          like Kotlin. I blog to share my journey, challenges, and insights about coding and tech 
          in general.
        </p>
      </section>

      {/* Blog Posts */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-green-500">Latest Blog Posts</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Blog Post 1 */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              src="https://via.placeholder.com/400x200" // Replace with actual image
              alt="Post Thumbnail"
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <p className="text-sm text-gray-400 mb-2">October 17, 2024 • Developer Policy</p>
              <h3 className="text-xl font-semibold mb-2 text-yellow-500">Understanding React Hooks</h3>
              <p className="text-sm mb-4">
                A deep dive into React hooks and how they simplify state management...
              </p>
              <Link to="/post/react-hooks" className="text-green-500 hover:underline">
                Read More
              </Link>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              src="https://via.placeholder.com/400x200" // Replace with actual image
              alt="Post Thumbnail"
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <p className="text-sm text-gray-400 mb-2">October 15, 2024 • Developer Policy</p>
              <h3 className="text-xl font-semibold mb-2 text-yellow-500">Building Responsive UIs with Tailwind CSS</h3>
              <p className="text-sm mb-4">
                Learn how to build beautiful, responsive designs with Tailwind CSS...
              </p>
              <Link to="/post/tailwind-css" className="text-green-500 hover:underline">
                Read More
              </Link>
            </div>
          </div>

          {/* Add more blog posts as necessary */}
        </div>
      </section>

      {/* Categories/Tags */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-green-500">Categories</h2>
        <ul className="flex flex-wrap gap-4">
          <li><Link to="/category/tutorials" className="text-yellow-500 hover:underline">Tutorials</Link></li>
          <li><Link to="/category/projects" className="text-yellow-500 hover:underline">Projects</Link></li>
          <li><Link to="/category/career" className="text-yellow-500 hover:underline">Career</Link></li>
          <li><Link to="/category/design" className="text-yellow-500 hover:underline">Design</Link></li>
        </ul>
      </section>

      {/* Call-to-Action (CTA) */}
      <section className="mb-12 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-green-500">Want to Collaborate?</h2>
        <p className="mb-4 max-w-3xl mx-auto">
          I’m always open to working on new projects and collaborations. Leave a comment or <Link to="/contact" className="text-yellow-500 hover:underline">get in touch</Link> for any inquiries.
        </p>
      </section>
    </div>
  );
};

export default Blog;
