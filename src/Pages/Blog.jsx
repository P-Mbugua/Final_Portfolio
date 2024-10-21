import React, { useState } from 'react';
import { FaTwitter, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

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
    },
    {
      id: 2,
      date: 'Oct 20, 2024',
      category: 'Web Development',
      title: 'The Future of Web 3.0',
      summary: 'A deep dive into how Web 3.0 and blockchain are reshaping the internet, and what it means for developers.',
      fullContent: 'Web 3.0 introduces decentralized technologies like blockchain. This post discusses how smart contracts, cryptocurrencies, and decentralized apps will reshape the future...',
      image: 'https://example.com/image2.jpg',
    },
    {
      id: 3,
      date: 'Oct 18, 2024',
      category: 'Artificial Intelligence',
      title: 'AI in Software Development',
      summary: 'How AI tools are transforming the way software is built and maintained, from coding assistants to full automation.',
      fullContent: 'Artificial intelligence is rapidly changing the software development process, from AI-driven code suggestions to automated testing and deployment pipelines...',
      image: 'https://example.com/image3.jpg',
    },
    // Additional posts...
    {
      id: 4,
      date: 'Oct 15, 2024',
      category: 'Mobile Development',
      title: 'Building Scalable Mobile Apps',
      summary: 'Best practices and design patterns for creating scalable, high-performance mobile applications for Android and iOS.',
      fullContent: 'Scaling mobile applications requires attention to performance, security, and user experience. This article delves into best practices for ensuring app scalability...',
      image: 'https://example.com/image4.jpg',
    },
    {
      id: 5,
      date: 'Oct 12, 2024',
      category: 'Cloud Computing',
      title: 'Mastering AWS for Beginners',
      summary: 'A comprehensive guide to getting started with Amazon Web Services, including EC2, S3, and serverless computing.',
      fullContent: 'Amazon Web Services provides a robust platform for cloud computing. This post covers the fundamentals of EC2, S3, and Lambda for new users...',
      image: 'https://example.com/image5.jpg',
    },
    {
      id: 6,
      date: 'Oct 10, 2024',
      category: 'Cybersecurity',
      title: 'Cybersecurity Best Practices in 2024',
      summary: 'Discover the top strategies and tools for ensuring the security of your applications and data in today’s digital landscape.',
      fullContent: 'With the rise of cyberattacks, it’s essential to employ top-tier security practices. This article covers firewalls, encryption, multi-factor authentication, and more...',
      image: 'https://example.com/image6.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6 md:px-20 lg:px-40">
      {/* Introduction/Author Bio */}
      <section className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-green-500 font-roboto">PETER MBUGUA</h1>
        <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto font-inter">
          I am a passionate Fullstack Developer specializing in web and mobile app development. 
          I blog to share my journey, challenges, and insights about coding and tech in general.
        </p>
      </section>

      {/* Blog Posts */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-green-500 font-inter">Latest Blog Posts</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="relative">
                <img
                  src={post.image}
                  alt="Post Thumbnail"
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-400 mb-2 font-inter">{post.date} • {post.category}</p>
                <h3 className="text-xl font-semibold mb-2 text-yellow-500 font-roboto">{post.title}</h3>
                <p className="text-sm mb-4 font-inter">
                  {expandedPosts[post.id] ? post.fullContent : post.summary}
                </p>
                <button
                  onClick={() => togglePost(post.id)}
                  className="inline-block bg-yellow-500 text-black py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-yellow-400 font-inter"
                >
                  {expandedPosts[post.id] ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Social Media Handles */}
      <section className="text-center mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-green-500 font-inter">Connect with Me</h2>
        <div className="flex justify-center space-x-4">
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500 text-2xl">
            <FaTwitter />
          </a>
          <a href="https://github.com/P-Mbugua" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500 text-2xl">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500 text-2xl">
            <FaLinkedin />
          </a>
          <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500 text-2xl">
            <FaFacebook />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Blog;
