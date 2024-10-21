import React, { useState } from 'react';

const Blog = () => {
  const [expandedPostId, setExpandedPostId] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: 'Understanding React Hooks',
      date: 'Oct 21, 2024',
      category: 'Developer Policy',
      image: 'https://example.com/image1.jpg',
      shortContent: 'Learn about the intricacies of React Hooks and how they can simplify your functional components.',
      fullContent: 'React Hooks were introduced in version 16.8, allowing functional components to manage state and side effects. This eliminates the need for class components, making your code cleaner and easier to maintain. In this blog, we dive deep into useState, useEffect, and custom hooks to help you master React’s functional approach.',
    },
    {
      id: 2,
      title: 'The Future of Web 3.0',
      date: 'Oct 20, 2024',
      category: 'Web Development',
      image: 'https://example.com/image2.jpg',
      shortContent: 'A deep dive into how Web 3.0 and blockchain are reshaping the internet, and what it means for developers.',
      fullContent: 'Web 3.0 promises to decentralize the internet, putting more control into the hands of users and less with corporations. This is powered by blockchain technology, which provides transparency and security. In this blog post, we explore how Web 3.0 impacts developers, the tools you need to build decentralized apps, and the future of privacy and security on the internet.',
    },
    {
      id: 3,
      title: 'Exploring AI and Machine Learning',
      date: 'Oct 18, 2024',
      category: 'Artificial Intelligence',
      image: 'https://example.com/image3.jpg',
      shortContent: 'An introduction to the exciting world of AI and how developers can get started with machine learning frameworks.',
      fullContent: 'Artificial Intelligence (AI) is revolutionizing industries across the globe. From healthcare to finance, AI and machine learning are helping to automate processes and improve decision-making. In this post, we look at how developers can leverage frameworks like TensorFlow and PyTorch to build machine learning models, and the skills you need to succeed in this field.',
    },
    // Add more posts...
  ];

  const handleExpand = (id) => {
    setExpandedPostId(expandedPostId === id ? null : id);
  };

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

      {/* Blog Posts */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-green-500 font-inter">Latest Blog Posts</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
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
                  {expandedPostId === post.id ? post.fullContent : post.shortContent}
                </p>
                <button
                  onClick={() => handleExpand(post.id)}
                  className="inline-block bg-yellow-500 text-black py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-yellow-400 font-inter"
                >
                  {expandedPostId === post.id ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
