import React, { useState, useEffect } from 'react';
// import './Home.css'; // Import the CSS file for the custom animation

export default function Home() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(0);
  const [photo, setPhoto] = useState(null);
  const [isFormVisible, setFormVisible] = useState(false);
  const [reviews, setReviews] = useState([]);

  // Load reviews from localStorage when the component mounts
  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    setReviews(storedReviews);
  }, []);

  // Save reviews to localStorage whenever reviews change
  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      name,
      message,
      rating,
      photo: photo ? URL.createObjectURL(photo) : 'https://via.placeholder.com/50',
    };
    setReviews([newReview, ...reviews]);

    // Clear the form
    setName('');
    setMessage('');
    setRating(0);
    setPhoto(null);
    setFormVisible(false); // Hide the form after submission
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Greetings Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-gray-800">Hello, My name is Peter</h1>
          <p className="mt-2 text-gray-600">Welcome to my website! I’m excited to share my work and expertise with you. Feel free to explore the sections below to learn more about my skills and see what others have to say about working with me.</p>
          
          <div className="mt-4 text-center">
            <div className="text-gray-700 text-lg flex items-center justify-center space-x-2">
              <span>I am a</span>
              <div className="roles-container ml-2">
                <div className="role text-blue-600">Software Engineer</div>
                <div className="role text-green-600">Graphics Designer</div>
              </div>
            </div>
          </div>

          <button className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Explore More
          </button>
        </section>
        
        {/* My Expertise Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">My Expertise</h2>
          <p className="mt-2 text-gray-600">I specialize in creating high-quality web applications with a focus on user experience and performance. My skills include:</p>
          <div className="mt-4 flex flex-wrap gap-4">
            <div className="p-4 bg-gray-100 rounded-lg shadow-sm flex-1 min-w-[250px]">
              <h3 className="text-lg font-semibold text-gray-800">Frontend Development</h3>
              <p className="text-gray-600">Expertise in React, Vue.js, and modern frontend technologies.</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg shadow-sm flex-1 min-w-[250px]">
              <h3 className="text-lg font-semibold text-gray-800">Backend Development</h3>
              <p className="text-gray-600">Experience with Node.js, Express, and building scalable server-side applications.</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg shadow-sm flex-1 min-w-[250px]">
              <h3 className="text-lg font-semibold text-gray-800">UI/UX Design</h3>
              <p className="text-gray-600">Focused on creating intuitive and engaging user experiences.</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg shadow-sm flex-1 min-w-[250px]">
              <h3 className="text-lg font-semibold text-gray-800">Performance Optimization</h3>
              <p className="text-gray-600">Skilled in improving application speed and efficiency.</p>
            </div>
          </div>
        </section>

        {/* Client Reviews Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">Client Reviews</h2>
          <div className="mt-4 flex flex-wrap gap-4">
            {reviews.map((review, index) => (
              <div key={index} className="flex items-start p-4 bg-gray-100 rounded-lg shadow-sm flex-1 min-w-[250px]">
                <img src={review.photo} alt={`Client ${index + 1}`} className="w-12 h-12 rounded-full mr-4"/>
                <div>
                  <div className="flex items-center mb-1">
                    <span className="text-yellow-500">
                      {Array.from({ length: 5 }, (_, i) => (
                        <span key={i} className={i < review.rating ? 'text-yellow-500' : 'text-gray-300'}>&#9733;</span>
                      ))}
                    </span>
                    <span className="ml-2 font-semibold text-gray-800">{review.name}</span>
                  </div>
                  <p className="text-gray-600">"{review.message}"</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Show/Hide Review Form Button */}
          <button
            onClick={() => setFormVisible(!isFormVisible)}
            className="mt-6 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            {isFormVisible ? 'Hide Review Form' : 'Add Your Review'}
          </button>

          {/* Review Form */}
          {isFormVisible && (
            <form onSubmit={handleSubmit} className="mt-4 bg-gray-100 p-6 rounded-lg shadow-sm">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold">Message</label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                    rows="4"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="rating" className="block text-gray-700 font-semibold">Rating</label>
                  <div className="flex items-center space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <label key={star}>
                        <input
                          type="radio"
                          name="rating"
                          value={star}
                          checked={rating === star}
                          onChange={() => setRating(star)}
                          className="hidden"
                        />
                        <span
                          className={`text-2xl cursor-pointer ${rating >= star ? 'text-yellow-500' : 'text-gray-300'}`}
                          role="img"
                          aria-label={`${star} star`}
                        >
                          &#9733;
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label htmlFor="photo" className="block text-gray-700 font-semibold">Upload Your Photo</label>
                  <input
                    type="file"
                    id="photo"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                    accept="image/*"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Submit Review
                </button>
              </div>
            </form>
          )}
        </section>
        
      </div>
    </div>
  );
}
