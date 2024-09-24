import React, { useState } from 'react';

export default function ContactForm() {
  const [file, setFile] = useState(null);
  const [projectType, setProjectType] = useState('');
  const [otherProjectType, setOtherProjectType] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with file:", file);
    console.log("Selected project type:", projectType);
    console.log("Other project type description:", otherProjectType);
    // Add your form submission logic here
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center bg-black px-4">
      {/* Title and Subtitle */}
      <header className="py-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-yellow-500 leading-tight">
          Let's <span className="text-green-500">Collaborate</span>
        </h1>
        <p className="text-center text-lg mt-4 text-gray-300 max-w-xl mx-auto">
          Fill in the details below, and we can start working together on something amazing.
        </p>
      </header>


      {/* Form */}
      <main className="flex-grow flex justify-center items-center mb-10">
        <div className="bg-gray-900 p-8 rounded-lg shadow-2xl w-full max-w-lg">
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-2 p-3 w-full border border-gray-600 rounded-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:border-green-500 focus:outline-none focus:ring focus:ring-green-500/20 transition-all font-roboto"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-400">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-2 p-3 w-full border border-gray-600 rounded-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:border-green-500 focus:outline-none focus:ring focus:ring-green-500/20 transition-all font-roboto"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="project" className="block text-sm font-semibold text-gray-400">
                Project Type
              </label>
              <select
                id="projectType"
                name="projectType"
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="mt-2 p-3 w-full border border-gray-600 rounded-md bg-gray-800 text-gray-300 focus:border-green-500 focus:outline-none focus:ring focus:ring-green-500/20 transition-all font-roboto"
                required
              >
                <option value="">Select a project type</option>
                <option value="web-development">Web Development</option>
                <option value="mobile-development">Mobile Development</option>
                <option value="graphic-design">Graphic Design</option>
                <option value="seo">SEO Services</option>
                <option value="other">Other</option>
              </select>
            </div>
            {projectType === 'other' && (
              <div>
                <label htmlFor="otherProjectType" className="block text-sm font-semibold text-gray-400">
                  Please explain
                </label>
                <input
                  type="text"
                  id="otherProjectType"
                  name="otherProjectType"
                  value={otherProjectType}
                  onChange={(e) => setOtherProjectType(e.target.value)}
                  className="mt-2 p-3 w-full border border-gray-600 rounded-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:border-green-500 focus:outline-none focus:ring focus:ring-green-500/20 transition-all font-roboto"
                  placeholder="Explain your project type"
                />
              </div>
            )}
            <div>
              <label htmlFor="project" className="block text-sm font-semibold text-gray-400">
                Project Details
              </label>
              <textarea
                id="project"
                name="project"
                rows="4"
                required
                className="mt-2 p-3 w-full border border-gray-600 rounded-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:border-green-500 focus:outline-none focus:ring focus:ring-green-500/20 transition-all font-roboto"
                placeholder="Describe your project here..."
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="mt-2 p-3 w-full border border-gray-600 rounded-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:border-green-500 focus:outline-none focus:ring focus:ring-green-500/20 transition-all font-roboto"
                placeholder="Your Message"
              />
            </div>
            <div>
              <label htmlFor="file" className="block text-sm font-semibold text-gray-400">
                Attach a Document (optional)
              </label>
              <input
                type="file"
                id="file"
                name="file"
                onChange={handleFileChange}
                className="mt-2 p-3 w-full border border-gray-600 rounded-md bg-gray-800 text-gray-300 focus:border-green-500 focus:outline-none focus:ring focus:ring-green-500/20 transition-all font-roboto"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-500/40 transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
