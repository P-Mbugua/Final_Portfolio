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
    {
      id: 4,
      date: 'Jun 18, 2024',
      category: 'M-Pesa Payment Integration',
      title: 'Integrating M-Pesa STK Push for Seamless Payments',
      summary: 'A comprehensive guide on implementing M-Pesa STK Push in your applications for efficient mobile payments.',
      fullContent: `
        In this post, we will explore how to integrate M-Pesa STK Push into your application to enable seamless mobile payments. 
        This integration is essential for businesses operating in Kenya, as M-Pesa is one of the most widely used payment platforms.
    
        **Step 1: Set Up M-Pesa API Credentials**
        First, you need to register as a developer on the Safaricom Developer Portal. Create a new app and obtain your API credentials, including your Consumer Key and Consumer Secret.
    
        **Step 2: Configure Your Environment**
        Ensure you have a backend setup (Node.js, PHP, etc.) to handle API requests securely. You will also need to set up a server that can handle HTTPS requests.
    
        **Step 3: Create the STK Push Request**
        Construct the STK Push request using the required parameters such as business shortcode, lipa na M-Pesa online shortcode, transaction amount, and phone number of the customer.
    
        **Step 4: Handle the Response**
        After sending the STK Push request, handle the response from M-Pesa to confirm if the transaction was successful. You will need to check the response code and update your application accordingly.
    
        **Step 5: Testing**
        Make sure to test your integration in the sandbox environment provided by Safaricom before going live. This will help you identify any issues without affecting real transactions.
    
        By following these steps, you can successfully integrate M-Pesa STK Push into your application, providing a user-friendly payment option for your customers.
      `,
      image: 'https://imgs.search.brave.com/wfgijv9bcTwpFjf7SyjRVnsLF_rL9waHAr5NlaClINY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/OC8xMi8wOS8xNy9p/bmR1c3RyeS0yNjMz/ODc4XzY0MC5qcGc', // Consider using a relevant image related to M-Pesa
      tags: ['M-Pesa', 'Payment Integration', 'Mobile Payments'],
    },
    
  ];

  const popularPosts = posts.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white p-6 md:px-20 lg:px-40 font-sans">
     
     

      {/* Featured Post Section */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-green-500">Featured Post</h2>
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl hover:shadow-xl transition-transform duration-300 ">
          <img src={posts[0].image} alt="Featured Post Thumbnail" className="w-full h-56 object-cover" />
          <div className="p-8">
            <p className="text-sm text-gray-400 mb-2">{posts[0].date} • {posts[0].category}</p>
            <h3 className="text-xl md:text-2xl font-semibold text-yellow-500">{posts[0].title}</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">{posts[0].summary}</p>
            <button
              onClick={() => togglePost(posts[0].id)}
              className="bg-yellow-500 text-black py-2 px-6 rounded-full shadow-lg transition-all duration-300 hover:bg-yellow-400 "
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
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-green-500">Latest Blog Posts</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl hover:shadow-xl transition-transform duration-300 ">
              <img src={post.image} alt="Post Thumbnail" className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-sm text-gray-400 mb-2">{post.date} • {post.category}</p>
                <h3 className="text-lg md:text-xl font-semibold text-yellow-500">{post.title}</h3>
                <p className="text-gray-300 mb-4">{post.summary}</p>
                <button
                  onClick={() => togglePost(post.id)}
                  className="bg-yellow-500 text-black py-2 px-4 rounded-full shadow-lg transition-all duration-300 hover:bg-yellow-400 "
                >
                  {expandedPosts[post.id] ? 'Read Less' : 'Read More'}
                </button>
                {expandedPosts[post.id] && (
                  <div className="mt-4 text-gray-300">{post.fullContent}</div>
                )}
                <div className="mt-4">
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
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-green-500">Popular Posts</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularPosts.map((post) => (
            <div key={post.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl hover:shadow-xl transition-transform duration-300 ">
              <img src={post.image} alt="Popular Post Thumbnail" className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-sm text-gray-400 mb-2">{post.date} • {post.category}</p>
                <h3 className="text-lg md:text-xl font-semibold text-yellow-500">{post.title}</h3>
                <p className="text-gray-300 mb-4">{post.summary}</p>
                <button
                  onClick={() => togglePost(post.id)}
                  className="bg-yellow-500 text-black py-2 px-4 rounded-full shadow-lg transition-all duration-300 hover:bg-yellow-400 "
                >
                  {expandedPosts[post.id] ? 'Read Less' : 'Read More'}
                </button>
                {expandedPosts[post.id] && (
                  <div className="mt-4 text-gray-300">{post.fullContent}</div>
                )}
                <div className="mt-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full mr-2">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      
    </div>
  );
};

export default Blog;
