import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFey9M3UNzqKEk5190WydMz-ttMoiW6jU",
  authDomain: "portfolio1-eddb9.firebaseapp.com",
  projectId: "portfolio1-eddb9",
  storageBucket: "portfolio1-eddb9.appspot.com",
  messagingSenderId: "579034394595",
  appId: "1:579034394595:web:90009f223432be6fb7fad6",
  measurementId: "G-YK4YDN5E1Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const socialMediaAccounts = [
  { name: 'Twitter', url: 'https://twitter.com/yourprofile', activity: 90 },
  { name: 'GitHub', url: 'https://github.com/P-Mbugua', activity: 80 },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile', activity: 40 },
  { name: 'Facebook', url: 'https://facebook.com/yourprofile', activity: 70 },
];

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
          {/* Example blog posts */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="relative">
              <img
                src="https://example.com/image.jpg" 
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

          {/* Repeat for additional posts */}
        </div>
      </section>
    </div>
  );
};

export default Blog;
