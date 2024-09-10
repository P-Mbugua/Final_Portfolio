import React from 'react';
import { FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa'; 

export default function Contact() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="max-w-7xl mx-auto p-8 bg-gray-800 shadow-lg rounded-lg border border-gray-700 space-y-12">
        {/* Contact Information Section */}
        <div className="p-8 rounded-lg shadow-md border border-gray-700 mb-12 bg-gray-800">
          <h2 className="text-3xl font-extrabold mb-8 text-center">Contact Information</h2>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Address Information Card */}
            <div className="flex-1 bg-gray-700 p-6 rounded-lg shadow-md border border-gray-600 overflow-hidden">
              <div className="flex flex-col space-y-4">
                <div className="flex">
                  <h4 className="text-lg font-medium w-1/3 flex-shrink-0">Country</h4>
                  <p className="w-2/3 truncate">Kenya</p>
                </div>
                <div className="flex">
                  <h4 className="text-lg font-medium w-1/3 flex-shrink-0">City</h4>
                  <p className="w-2/3 truncate">Nairobi</p>
                </div>
                <div className="flex">
                  <h4 className="text-lg font-medium w-1/3 flex-shrink-0">Company</h4>
                  <p className="w-2/3 truncate">Your Company Name</p>
                </div>
              </div>
            </div>

            {/* Contact Details Card */}
            <div className="flex-1 bg-gray-700 p-6 rounded-lg shadow-md border border-gray-600 overflow-hidden">
              <div className="flex flex-col space-y-4">
                <div className="flex">
                  <h4 className="text-lg font-medium w-1/3 flex-shrink-0">Email</h4>
                  <p className="w-2/3 truncate">pmbugua276@gmail.com</p>
                </div>
                <div className="flex">
                  <h4 className="text-lg font-medium w-1/3 flex-shrink-0">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/peter-mbugua-a6351a262" className="text-indigo-400 hover:underline w-2/3 truncate">
                    linkedin.com/in/peter-mbugua-a6351a262
                  </a>
                </div>
                <div className="flex">
                  <h4 className="text-lg font-medium w-1/3 flex-shrink-0">Phone</h4>
                  <p className="w-2/3 truncate">(254) 701-511-745</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-md border border-gray-700">
          <h2 className="text-2xl font-semibold text-gray-200 mb-6 text-center">Get in Touch</h2>
          <form className="space-y-6 max-w-lg mx-auto">
            <div className="flex items-center border border-gray-600 rounded-lg overflow-hidden">
              <FaUser className="text-gray-400 mx-3" />
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-gray-900 text-white border-0 focus:ring-0 sm:text-sm"
                placeholder="Your Name"
              />
            </div>

            <div className="flex items-center border border-gray-600 rounded-lg overflow-hidden">
              <FaEnvelope className="text-gray-400 mx-3" />
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-gray-900 text-white border-0 focus:ring-0 sm:text-sm"
                placeholder="Your Email"
              />
            </div>

            <div className="flex items-center border border-gray-600 rounded-lg overflow-hidden">
              <FaCommentDots className="text-gray-400 mx-3" />
              <textarea
                id="message"
                name="message"
                rows="6"
                required
                className="w-full px-4 py-3 bg-gray-900 text-white border-0 focus:ring-0 sm:text-sm"
                placeholder="Your Message"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-semibold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
