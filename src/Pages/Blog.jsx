import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, onSnapshot } from "firebase/firestore"; 
import { getAnalytics } from "firebase/analytics";
import React, { useState, useEffect } from 'react';
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
const db = getFirestore(app);
const analytics = getAnalytics(app);

const socialMediaAccounts = [
  { name: 'Twitter', url: 'https://twitter.com/yourprofile', activity: 90 },
  { name: 'GitHub', url: 'https://github.com/P-Mbugua', activity: 80 },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile', activity: 40 },
  { name: 'Facebook', url: 'https://facebook.com/yourprofile', activity: 70 },
];

const Blog = () => {
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [subscribers, setSubscribers] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);
  const [notificationStatus, setNotificationStatus] = useState('');

  // Load subscribers from Firestore
  useEffect(() => {
    const loadSubscribers = async () => {
      const querySnapshot = await getDocs(collection(db, "subscriptions"));
      const emails = querySnapshot.docs.map(doc => doc.data().email);
      setSubscribers(emails);
    };

    loadSubscribers();
  }, []);

  // Fetch blog posts from Firestore
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "blogPosts"), (snapshot) => {
      const posts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBlogPosts(posts);
    });

    return () => unsubscribe(); 
  }, []);

  // Function to handle subscription
  const handleSubscribe = async (e) => {
    e.preventDefault();
    
    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setSubscriptionStatus('Please enter a valid email address.');
      return;
    }

    try {
      // Add the email to the Firestore collection
      await addDoc(collection(db, "subscriptions"), {
        email: email,
        timestamp: new Date(),
      });
      setSubscriptionStatus('Subscription successful! Thank you for subscribing.');
      setEmail(''); 
    } catch (error) {
      console.error("Error subscribing:", error);
      setSubscriptionStatus('Subscription failed. Please try again.');
    }
  };

  // Function to handle adding a new blog post
  const handleAddPost = async (e) => {
    e.preventDefault();

    if (!title || !content || !image) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      // Add the blog post to the Firestore collection
      await addDoc(collection(db, "blogPosts"), {
        title: title,
        content: content,
        image: image,
        date: new Date(),
      });
      setTitle('');
      setContent('');
      setImage('');
      setNotificationStatus('Blog post added successfully! Sending notifications to subscribers...');

      // Notify all subscribers
      await notifySubscribers(title);
    } catch (error) {
      console.error("Error adding post:", error);
      alert('Failed to add blog post. Please try again.');
    }
  };

  // Function to send notifications to all subscribers
  const notifySubscribers = async (postTitle) => {
    // Replace this with your actual email-sending logic
    for (const subscriber of subscribers) {
      console.log(`Sending email to ${subscriber} about the new post: ${postTitle}`);
      // Implement your email sending logic here
    }
    setNotificationStatus('Notifications sent to subscribers successfully!');
  };

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
                <p className="text-sm text-gray-400 mb-2 font-inter">{new Date(post.date).toLocaleDateString()} • Developer Policy</p>
                <h3 className="text-xl font-semibold mb-2 text-yellow-500 font-roboto">{post.title}</h3>
                <p className="text-sm mb-4 font-inter">
                  {post.content.length > 100 ? `${post.content.substring(0, 100)}...` : post.content}
                </p>
                <Link to={`/post/${post.id}`} className="inline-block bg-yellow-500 text-black py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-yellow-400 font-inter">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Subscription Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-green-500 text-center font-inter">Subscribe to My Blog</h2>
        <form onSubmit={handleSubscribe} className="flex flex-col items-center space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full max-w-md p-2 bg-gray-800 text-white border border-gray-500 rounded-lg"
            required
          />
          <button
            type="submit"
            className="bg-yellow-500 text-black py-2 px-6 rounded-lg transition-colors duration-300 hover:bg-yellow-400"
          >
            Subscribe
          </button>
          {subscriptionStatus && <p className="text-sm mt-2 font-inter">{subscriptionStatus}</p>}
        </form>
      </section>

      {/* Add Blog Post Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-green-500 text-center font-inter">Add a New Blog Post</h2>
        <form onSubmit={handleAddPost} className="flex flex-col items-center space-y-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Post Title"
            className="w-full max-w-md p-2 bg-gray-800 text-white border border-gray-500 rounded-lg"
            required
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Post Content"
            className="w-full max-w-md p-2 bg-gray-800 text-white border border-gray-500 rounded-lg h-40"
            required
          />
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Image URL"
            className="w-full max-w-md p-2 bg-gray-800 text-white border border-gray-500 rounded-lg"
            required
          />
          <button
            type="submit"
            className="bg-yellow-500 text-black py-2 px-6 rounded-lg transition-colors duration-300 hover:bg-yellow-400"
          >
            Add Post
          </button>
          {notificationStatus && <p className="text-sm mt-2 font-inter">{notificationStatus}</p>}
        </form>
      </section>
    </div>
  );
};

export default Blog;
