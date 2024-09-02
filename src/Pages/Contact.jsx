import React from 'react';

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto p-8 mt-20 bg-gray-50 shadow-lg rounded-lg border border-gray-200 space-y-12">
      {/* Title and Subtitle */}
      <div className="text-center bg-indigo-50 p-6 rounded-lg shadow-sm border border-indigo-200 mb-12">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
          Get in Touch with Me
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          I’d love to hear from you! Whether you have questions, feedback, or just want to chat, I’m here to help.
        </p>
        <p className="text-sm text-gray-500 italic">
          I’m committed to responding promptly and thoughtfully. Your message is valuable to me.
        </p>
      </div>

      {/* Main Content: Form and Map */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Drop Me a Message</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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

        {/* Location and Map */}
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Find Me Here</h2>
          <p className="text-gray-600 mb-4">
            I’m based in the heart of downtown Kiambu. Feel free to visit or get in touch via the form. The area is bustling with vibrant spots, making it easy to find something interesting nearby.
          </p>
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.972422366533!2d36.82194631545007!3d-1.2920653263993303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f176b5c1d324d%3A0xa679f59c5e9316f0!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2s!4v1628710409342!5m2!1sen!2s"
              width="100%"
              height="400" // Adjust height as needed for visibility
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map of My Current Location"
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  );
}
