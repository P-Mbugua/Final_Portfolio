import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

// Sample data for social media accounts with activity status and percentage
const socialMediaAccounts = [
  { name: 'Twitter', url: 'https://twitter.com/yourprofile', activity: 90 },
  { name: 'GitHub', url: 'https://github.com/P-Mbugua', activity: 80 },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile', activity: 40 },
  { name: 'Facebook', url: 'https://facebook.com/yourprofile', activity: 70 },
];

const Blog = () => {
  const [interactivityPercentage, setInteractivityPercentage] = useState(null);
  
  // Function to fetch interactivity percentage
  const fetchInteractivity = async () => {
    try {
      const response = await fetch('https://api.yourservice.com/getInteractivity?url=https://yourwebsite.com'); // Replace with your actual API endpoint
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setInteractivityPercentage(data.interactivityPercentage); // Assuming the API returns { interactivityPercentage: number }
    } catch (error) {
      console.error("Error fetching interactivity data:", error);
    }
  };

  // Fetch the interactivity percentage when the component mounts
  useEffect(() => {
    fetchInteractivity();
  }, []);

  const getRecommendation = (activity) => {
    if (activity >= 75) {
      return "Great job! Keep up the excellent engagement.";
    } else if (activity >= 50) {
      return "You're doing well! Consider posting more frequently.";
    } else {
      return "It looks like there's room for improvement. Try to be more active.";
    }
  };

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

      {/* Enhanced Social Media Links */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-green-500 text-center">Connect with Me</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialMediaAccounts.map((account) => (
            <div key={account.name} className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center space-y-2 transition-transform duration-300 hover:scale-105">
              <a
                href={account.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1"
              >
                {account.name === 'Twitter' && <FaTwitter size={36} className="text-yellow-500" />}
                {account.name === 'GitHub' && <FaGithub size={36} className="text-yellow-500" />}
                {account.name === 'LinkedIn' && <FaLinkedin size={36} className="text-yellow-500" />}
                {account.name === 'Facebook' && <FaFacebook size={36} className="text-yellow-500" />}
                <span className="text-lg font-bold">{account.activity}%</span>
              </a>
              <p className={`text-center ${account.activity >= 50 ? 'text-yellow-400' : 'text-gray-500'} text-sm`}>
                {getRecommendation(account.activity)}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
