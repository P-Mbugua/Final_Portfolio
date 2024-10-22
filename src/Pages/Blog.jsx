import React, { useState } from 'react';
import { FaTwitter, FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from 'react-icons/fa';

const Blog = () => {
  const [expandedPosts, setExpandedPosts] = useState({});

  const togglePost = (id) => {
    setExpandedPosts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const posts = [
    {
      id: 1,
      date: 'Oct 21, 2024',
      category: 'Developer Policy',
      title: 'Understanding React Hooks',
      summary: 'Learn about the intricacies of React Hooks and how they can simplify your functional components.',
      fullContent: 'React Hooks allow you to use state and lifecycle features in functional components. This post explains the most common hooks like useState, useEffect, and custom hooks...',
      image: 'https://imgs.search.brave.com/PRHzT8vKc7jERMZXptqfrkXcw8iQzWtIxPYtQbPrXUY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9h/aS1udWNsZWFyLWVu/ZXJneS1iYWNrZ3Jv/dW5kLWZ1dHVyZS1p/bm5vdmF0aW9uLWRp/c3J1cHRpdmUtdGVj/aG5vbG9neV81Mzg3/Ni0xMjk3ODMuanBn/P3NlbXQ9YWlzX2h5/YnJpZA',
      tags: ['React', 'Hooks', 'JavaScript'],
    },
    {
      id: 2,
      date: 'Oct 20, 2024',
      category: 'Web Development',
      title: 'The Future of Web 3.0',
      summary: 'A deep dive into how Web 3.0 and blockchain are reshaping the internet, and what it means for developers.',
      fullContent: 'Web 3.0 introduces decentralized technologies like blockchain. This post discusses how smart contracts, cryptocurrencies, and decentralized apps will reshape the future...',
      image: 'https://imgs.search.brave.com/3L5SNfMsPMSucEcntea1KK6ZkyXgcSQhIfnoRUdmU0c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE0/OTUzMDk5My9waG90/by9kaWdpdGFsLWh1/bWFuLWhlYWQtY29u/Y2VwdC1mb3ItYWkt/bWV0YXZlcnNlLWFu/ZC1mYWNpYWwtcmVj/b2duaXRpb24tdGVj/aG5vbG9neS53ZWJw/P2E9MSZiPTEmcz02/MTJ4NjEyJnc9MCZr/PTIwJmM9bnlQNGMt/czVjU1p5MW52MUsw/eG4xeW5DLVh1YzFz/WTRZMjlaUXFjcnp0/QT0',
      tags: ['Blockchain', 'Web3', 'Decentralization'],
    },
    {
      id: 3,
      date: 'Oct 18, 2024',
      category: 'Artificial Intelligence',
      title: 'AI in Software Development',
      summary: 'How AI tools are transforming the way software is built and maintained, from coding assistants to full automation.',
      fullContent: 'Artificial intelligence is rapidly changing the software development process, from AI-driven code suggestions to automated testing and deployment pipelines...',
      image: 'https://imgs.search.brave.com/wfgijv9bcTwpFjf7SyjRVnsLF_rL9waHAr5NlaClINY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/OC8xMi8wOS8xNy9p/bmR1c3RyeS0yNjMz/ODc4XzY0MC5qcGc',
      tags: ['AI', 'Development', 'Automation'],
    },
    // Additional posts...
  ];

  const popularPosts = posts.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white p-6 md:px-20 lg:px-40 font-sans">
      {/* Introduction */}
      <section className="text-center my-12">
        <h2 className="text-5xl font-bold text-green-500">Welcome to My Blog</h2>
        <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto leading-relaxed">
          Join me on my journey as a Fullstack Developer, diving deep into the ever-evolving landscape of technology. Together, we’ll explore the latest trends in web development, mobile applications, artificial intelligence, and groundbreaking innovations shaping our digital future.
        </p>
      </section>

      {/* Categories Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-green-500">Explore Categories</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {['Web Development', 'AI', 'Mobile Development', 'Cloud Computing', 'Cybersecurity'].map((category) => (
            <span key={category} className="bg-gray-700 text-gray-300 px-6 py-3 rounded-lg shadow-lg transition-all duration-300 hover:bg-gray-600 hover:scale-105">
              {category}
            </span>
          ))}
        </div>
      </section>

      {/* Featured Post Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-green-500">Featured Post</h2>
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl hover:shadow-xl transition-transform duration-300 hover:scale-105">
          <img src={posts[0].image} alt="Featured Post Thumbnail" className="w-full h-56 object-cover" />
          <div className="p-8">
            <p className="text-sm text-gray-400 mb-2">{posts[0].date} • {posts[0].category}</p>
            <h3 className="text-2xl font-semibold text-yellow-500">{posts[0].title}</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">{posts[0].summary}</p>
            <button
              onClick={() => togglePost(posts[0].id)}
              className="bg-yellow-500 text-black py-2 px-6 rounded-full shadow-lg transition-all duration-300 hover:bg-yellow-400 hover:scale-105"
            >
              {expandedPosts[posts[0].id] ? 'Read Less' : 'Read More'}
            </button>
            {expandedPosts[posts[0].id] && (
              <div className="mt-4 text-gray-300 leading-relaxed">{posts[0].fullContent}</div>
            )}
            <div className="mt-6">
              {posts[0].tags.map((tag) => (
                <span key={tag} className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full mr-2">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-green-500">Latest Blog Posts</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl hover:shadow-xl transition-transform duration-300 hover:scale-105">
              <img src={post.image} alt="Post Thumbnail" className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-sm text-gray-400 mb-2">{post.date} • {post.category}</p>
                <h3 className="text-xl font-semibold text-yellow-500">{post.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{post.summary}</p>
                <button
                  onClick={() => togglePost(post.id)}
                  className="bg-yellow-500 text-black py-2 px-6 rounded-full shadow-lg transition-all duration-300 hover:bg-yellow-400 hover:scale-105"
                >
                  {expandedPosts[post.id] ? 'Read Less' : 'Read More'}
                </button>
                {expandedPosts[post.id] && (
                  <div className="mt-4 text-gray-300 leading-relaxed">{post.fullContent}</div>
                )}
                <div className="mt-6">
                  {post.tags.map((tag) => (
                    <span key={tag} className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full mr-2">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Posts Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-green-500">Popular Posts</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {popularPosts.map((post) => (
            <div key={post.id} className="bg-gray-800 rounded-lg shadow-2xl hover:shadow-xl transition-transform duration-300 hover:scale-105">
              <img src={post.image} alt="Post Thumbnail" className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-sm text-gray-400 mb-2">{post.date} • {post.category}</p>
                <h3 className="text-xl font-semibold text-yellow-500">{post.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{post.summary}</p>
                <button
                  onClick={() => togglePost(post.id)}
                  className="bg-yellow-500 text-black py-2 px-6 rounded-full shadow-lg transition-all duration-300 hover:bg-yellow-400 hover:scale-105"
                >
                  {expandedPosts[post.id] ? 'Read Less' : 'Read More'}
                </button>
                {expandedPosts[post.id] && (
                  <div className="mt-4 text-gray-300 leading-relaxed">{post.fullContent}</div>
                )}
                <div className="mt-6">
                  {post.tags.map((tag) => (
                    <span key={tag} className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full mr-2">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="text-center py-8 border-t border-gray-600">
        <p className="text-gray-400">Follow me on social media:</p>
        <div className="flex justify-center gap-4 my-4">
          <a href="https://twitter.com" className="text-white hover:text-green-500 transition-all duration-300">
            <FaTwitter size={24} />
          </a>
          <a href="https://github.com" className="text-white hover:text-green-500 transition-all duration-300">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com" className="text-white hover:text-green-500 transition-all duration-300">
            <FaLinkedin size={24} />
          </a>
          <a href="https://facebook.com" className="text-white hover:text-green-500 transition-all duration-300">
            <FaFacebook size={24} />
          </a>
          <a href="mailto:youremail@example.com" className="text-white hover:text-green-500 transition-all duration-300">
            <FaEnvelope size={24} />
          </a>
        </div>
        <p className="text-gray-400 text-sm mt-4">&copy; 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Blog;
