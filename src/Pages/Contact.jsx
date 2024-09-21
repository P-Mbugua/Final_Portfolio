import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faUser, faComment, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGithub, faFacebook, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  return (
    <div className="bg-gray-900 text-white py-16 px-4 font-inter">
      <div className="container mx-auto max-w-screen-lg">
        {/* Header Section */}
        <h1 className="text-4xl font-bold text-center text-yellow-500 font-poppins">
          GET <span className="text-green-500">IN TOUCH</span>
        </h1>
        <p className="text-center text-lg md:text-xl mt-4 font-inter">
          I'M ALWAYS OPEN TO DISCUSSING{" "}
          <span className="font-bold text-green-500">
            DEVELOPER RELATIONS / TRAINER / SOFTWARE DEV WORK OR PARTNERSHIPS
          </span>
        </p>

        {/* Contact Information Section */}
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {/* Contact Details */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faPhone} className="text-green-500 text-xl" />
              <div>
                <p className="text-xl font-semibold font-poppins">Phone</p>
                <p className="text-yellow-500">+254 701 571 745</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faEnvelope} className="text-green-500 text-xl" />
              <div>
                <p className="text-xl font-semibold font-poppins">Email</p>
                <p className="text-yellow-500">petermbugua276@gmail.com</p>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faTwitter} className="text-green-500 text-xl" />
              <div>
                <p className="text-xl font-semibold font-poppins">Twitter</p>
                <p className="text-yellow-500">@mbugua276_</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faGithub} className="text-green-500 text-xl" />
              <div>
                <p className="text-xl font-semibold font-poppins">Github</p>
                <p className="text-yellow-500">@P-Mbugua</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faFacebook} className="text-green-500 text-xl" />
              <div>
                <p className="text-xl font-semibold font-poppins">Facebook</p>
                <p className="text-yellow-500">facebook.com/mbugua peter</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faWhatsapp} className="text-green-500 text-xl" />
              <div>
                <p className="text-xl font-semibold font-poppins">WhatsApp</p>
                <p className="text-yellow-500">+254 701 571 745</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faLinkedin} className="text-green-500 text-xl" />
              <div>
                <p className="text-xl font-semibold font-poppins">LinkedIn</p>
                <p className="text-yellow-500">linkedin.com/in/p-mbugua</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <p className="text-sm md:text-base font-inter">
              If you have any suggestion, project, or even want to say Hello, please fill out the form below, and I will reply shortly.
            </p>
            <form className="space-y-4">
              {/* Name Input with Icon */}
              <div className="relative">
                <FontAwesomeIcon icon={faUser} className="absolute left-3 top-4 text-gray-400" />
                <input
                  type="text"
                  className="pl-10 p-4 bg-gray-800 rounded-md placeholder-gray-400 w-full focus:outline-none focus:ring-2 focus:ring-green-500 border border-gray-700 transition duration-300 shadow-sm hover:shadow-md"
                  placeholder="YOUR NAME"
                />
              </div>

              {/* Email Input with Icon */}
              <div className="relative">
                <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-4 text-gray-400" />
                <input
                  type="email"
                  className="pl-10 p-4 bg-gray-800 rounded-md placeholder-gray-400 w-full focus:outline-none focus:ring-2 focus:ring-yellow-500 border border-gray-700 transition duration-300 shadow-sm hover:shadow-md"
                  placeholder="YOUR EMAIL"
                />
              </div>

              {/* Message Textarea with Icon */}
              <div className="relative">
                <FontAwesomeIcon icon={faComment} className="absolute left-3 top-4 text-gray-400" />
                <textarea
                  className="pl-10 p-4 bg-gray-800 rounded-md w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 border border-gray-700 transition duration-300 shadow-sm hover:shadow-md"
                  rows="5"
                  placeholder="YOUR MESSAGE"
                ></textarea>
              </div>

              {/* Send Button with Icon */}
              <button className="w-full bg-green-500 text-black py-3 font-bold rounded-md hover:bg-green-600 transition flex justify-center items-center space-x-2 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <FontAwesomeIcon icon={faPaperPlane} className="text-xl" />
                <span>SEND MESSAGE</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
