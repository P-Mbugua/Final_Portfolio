import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6">
      {/* Introduction/Author Bio */}
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-4">Peter Mbugua</h1>
        <p className="text-lg">
          I am a passionate Fullstack Developer specializing in web and mobile app development. I love working with modern tools like React, Tailwind CSS, and exploring new technologies like Kotlin. I blog to share my journey, challenges, and insights about coding and tech in general.
        </p>
      </section>

      {/* Blog Posts */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Latest Blog Posts</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sample Blog Post */}
          <div className="bg-gray-100 p-4 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-2">Understanding React Hooks</h3>
            <p className="mb-4">
              A deep dive into the powerful hooks provided by React, how they can simplify your state management, and practical examples of useState and useEffect.
            </p>
            <Link to="/post/react-hooks" className="text-blue-600 hover:underline">Read More</Link>
          </div>

          {/* Additional Blog Posts */}
          <div className="bg-gray-100 p-4 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-2">Building Responsive UIs with Tailwind CSS</h3>
            <p className="mb-4">
              Learn how to build beautiful, responsive designs with Tailwind CSS. A step-by-step guide to using utility-first classes to streamline your CSS.
            </p>
            <Link to="/post/tailwind-css" className="text-blue-600 hover:underline">Read More</Link>
          </div>
          {/* Add more blog post cards as necessary */}
        </div>
      </section>

      {/* Categories/Tags */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Categories</h2>
        <ul className="flex flex-wrap gap-4">
          <li><Link to="/category/tutorials" className="text-blue-600 hover:underline">Tutorials</Link></li>
          <li><Link to="/category/projects" className="text-blue-600 hover:underline">Projects</Link></li>
          <li><Link to="/category/career" className="text-blue-600 hover:underline">Career</Link></li>
          <li><Link to="/category/design" className="text-blue-600 hover:underline">Design</Link></li>
        </ul>
      </section>

      {/* Call-to-Action (CTA) */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Want to Collaborate?</h2>
        <p className="mb-4">
          I’m always open to working on new projects and collaborations. Leave a comment or <Link to="/contact" className="text-blue-600 hover:underline">get in touch</Link> for any inquiries.
        </p>
      </section>
    </div>
  );
};

export default Blog;
