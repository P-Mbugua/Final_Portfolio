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
      image: 'https://example.com/image1.jpg',
      tags: ['React', 'Hooks', 'JavaScript'],
    },
    {
      id: 2,
      date: 'Oct 20, 2024',
      category: 'Web Development',
      title: 'The Future of Web 3.0',
      summary: 'A deep dive into how Web 3.0 and blockchain are reshaping the internet, and what it means for developers.',
      fullContent: 'Web 3.0 introduces decentralized technologies like blockchain. This post discusses how smart contracts, cryptocurrencies, and decentralized apps will reshape the future...',
      image: 'https://example.com/image2.jpg',
      tags: ['Blockchain', 'Web3', 'Decentralization'],
    },
    {
      id: 3,
      date: 'Oct 18, 2024',
      category: 'Artificial Intelligence',
      title: 'AI in Software Development',
      summary: 'How AI tools are transforming the way software is built and maintained, from coding assistants to full automation.',
      fullContent: 'Artificial intelligence is rapidly changing the software development process, from AI-driven code suggestions to automated testing and deployment pipelines...',
      image: 'https://example.com/image3.jpg',
      tags: ['AI', 'Development', 'Automation'],
    },
    {
      id: 4,
      date: 'Oct 15, 2024',
      category: 'Mobile Development',
      title: 'Building Scalable Mobile Apps',
      summary: 'Best practices and design patterns for creating scalable, high-performance mobile applications for Android and iOS.',
      fullContent: 'Scaling mobile applications requires attention to performance, security, and user experience. This article delves into best practices for ensuring app scalability...',
      image: 'https://example.com/image4.jpg',
      tags: ['Mobile', 'iOS', 'Android'],
    },
    {
      id: 5,
      date: 'Oct 12, 2024',
      category: 'Cloud Computing',
      title: 'Mastering AWS for Beginners',
      summary: 'A comprehensive guide to getting started with Amazon Web Services, including EC2, S3, and serverless computing.',
      fullContent: 'Amazon Web Services provides a robust platform for cloud computing. This post covers the fundamentals of EC2, S3, and Lambda for new users...',
      image: 'https://example.com/image5.jpg',
      tags: ['AWS', 'Cloud', 'Serverless'],
    },
    {
      id: 6,
      date: 'Oct 10, 2024',
      category: 'Cybersecurity',
      title: 'Cybersecurity Best Practices in 2024',
      summary: 'Discover the top strategies and tools for ensuring the security of your applications and data in today’s digital landscape.',
      fullContent: 'With the rise of cyberattacks, it’s essential to employ top-tier security practices. This article covers firewalls, encryption, multi-factor authentication, and more...',
      image: 'https://example.com/image6.jpg',
      tags: ['Cybersecurity', 'Data Protection', 'Security'],
    },
  ];

  // Simulated popular posts (could be based on views or likes)
  const popularPosts = posts.slice(0, 3); // For simplicity, using first three posts

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 md:px-20 lg:px-40 font-sans">
      {/* Introduction */}
      <section className="text-center my-12">
        <h2 className="text-4xl font-bold text-green-500">Welcome to My Blog</h2>
        <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
          Join me on my journey as a Fullstack Developer, diving deep into the ever-evolving landscape of technology. Together, we’ll explore the latest trends in web development, mobile applications, artificial intelligence, and groundbreaking innovations shaping our digital future.
        </p>
      </section>

      {/* Categories Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-green-500">Explore Categories</h2>
        <div className="flex flex-wrap space-x-4">
          {['Web Development', 'AI', 'Mobile Development', 'Cloud Computing', 'Cybersecurity'].map((category) => (
            <span key={category} className="bg-gray-700 text-gray-300 px-4 py-2 rounded-lg transition-transform duration-300 hover:bg-gray-600">
              {category}
            </span>
          ))}
        </div>
      </section>

      {/* Featured Post Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-green-500">Featured Post</h2>
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg mb-6 transition-transform duration-300 hover:scale-105">
          <img src={posts[0].image} alt="Featured Post Thumbnail" className="w-full h-40 object-cover" />
          <div className="p-6">
            <p className="text-sm text-gray-400 mb-2">{posts[0].date} • {posts[0].category}</p>
            <h3 className="text-xl font-semibold text-yellow-500">{posts[0].title}</h3>
            <p className="text-gray-300 mb-4">{posts[0].summary}</p>
            <button
              onClick={() => togglePost(posts[0].id)}
              className="bg-yellow-500 text-black py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-yellow-400"
            >
              {expandedPosts[posts[0].id] ? 'Read Less' : 'Read More'}
            </button>
            {expandedPosts[posts[0].id] && (
              <div className="mt-4 text-gray-300">{posts[0].fullContent}</div>
            )}
            <div className="mt-4">
              {posts[0].tags.map((tag) => (
                <span key={tag} className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded mr-1">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-green-500">Latest Blog Posts</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="relative">
                <img src={post.image} alt="Post Thumbnail" className="w-full h-40 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-400 mb-2">{post.date} • {post.category}</p>
                <h3 className="text-xl font-semibold text-yellow-500">{post.title}</h3>
                <p className="text-gray-300 mb-4">{expandedPosts[post.id] ? post.fullContent : post.summary}</p>
                <button
                  onClick={() => togglePost(post.id)}
                  className="bg-yellow-500 text-black py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-yellow-400"
                >
                  {expandedPosts[post.id] ? 'Read Less' : 'Read More'}
                </button>
                <div className="mt-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded mr-1">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Posts Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-green-500">Popular Posts</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularPosts.map((post) => (
            <div key={post.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <img src={post.image} alt="Popular Post Thumbnail" className="w-full h-40 object-cover" />
              <div className="p-6">
                <p className="text-sm text-gray-400 mb-2">{post.date} • {post.category}</p>
                <h3 className="text-xl font-semibold text-yellow-500">{post.title}</h3>
                <p className="text-gray-300 mb-4">{post.summary}</p>
                <a href={`#post${post.id}`} className="text-yellow-500 underline">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact & Social Media */}
      <section id="contact" className="text-center mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-green-500">Connect with Me</h2>
        <p className="text-gray-400 mb-8">Feel free to reach out or follow me on social media.</p>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://twitter.com/@pmbugua276" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500 text-2xl">
            <FaTwitter />
          </a>
          <a href="https://github.com/P-Mbugua" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500 text-2xl">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/mbuguapeter" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500 text-2xl">
            <FaLinkedin />
          </a>
          <a href="https://facebook.com/profile.php?id=100079701713758" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500 text-2xl">
            <FaFacebook />
          </a>
          <a href="mailto:petermbuguangumi@gmail.com" className="text-white hover:text-yellow-500 text-2xl">
            <FaEnvelope />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Blog;
