import React, { useEffect, useState } from 'react';
import { db } from '../firebase'; // Import Firebase
import { collection, getDocs, addDoc } from 'firebase/firestore'; // Firestore methods

const MyWork = () => {
  const [projects, setProjects] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    name: '',
    date: new Date().toLocaleDateString(),
    stars: 0,
    message: '',
    photo: null,
  });
  const [isFormVisible, setIsFormVisible] = useState(false); // State to toggle form visibility

  // Sample projects data
  useEffect(() => {
    const projectsData = [
      {
        title: 'HOTEL MANAGEMENT SYSTEM',
        description: 'A project designed to help you manage your time and well-being.',
        imgSrc: 'https://p-mbugua.github.io/peshmarkTwo/Photos/Projects/Hetelogix_System.png',
        link: 'https://stay-manager-mg.netlify.app/',
      },
      {
        title: 'DELIVERY MANAGEMENT SYSTEM',
        description: 'Read stories that inspire and motivate you.',
        imgSrc: 'https://p-mbugua.github.io/peshmarkTwo/Photos/Projects/ParcelPoa.png',
        link: 'https://parcelpoa.netlify.app/',
      },
      {
        title: 'REACHROY DESIGNS HUB',
        description: 'Guides and tips on taking time off to relax and recharge.',
        imgSrc: 'https://p-mbugua.github.io/peshmarkTwo/Photos/Projects/Reach_Roy.png',
        link: 'https://reachroy.netlify.app/',
      },
      {
        title: 'TEACHNEST',
        description: 'Watch curated videos to inspire and educate.',
        imgSrc: 'https://p-mbugua.github.io/peshmarkTwo/Photos/Projects/TechNest_Online_Shop.png',
        link: 'https://e-commerce-shop-ruddy.vercel.app/',
      },
    ];
    setProjects(projectsData);
  }, []);

  // Fetch reviews from Firestore
  const fetchReviews = async () => {
    const reviewsCollection = collection(db, 'reviews');
    const reviewsSnapshot = await getDocs(reviewsCollection);
    const reviewsList = reviewsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setReviews(reviewsList);
  };

  // Add a new review to Firestore
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const reviewData = {
        ...newReview,
        photo: newReview.photo ? URL.createObjectURL(newReview.photo) : null,
      };
      await addDoc(collection(db, 'reviews'), reviewData);
      setNewReview({ name: '', date: new Date().toLocaleDateString(), stars: 0, message: '', photo: null });
      fetchReviews(); // Refresh reviews
      setIsFormVisible(false); // Hide the form after submission
    } catch (error) {
      console.error('Error adding review: ', error);
    }
  };

  useEffect(() => {
    fetchReviews(); // Fetch reviews on component mount
  }, []);

  return (
    <div className="bg-gray-900 py-8 px-6 sm:px-8 md:py-16 md:px-12 lg:py-24 lg:px-32 text-center">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
        MY <span className='text-yellow-500'>WORKS</span>
      </h2>
      <p className="text-green-500 mb-12 text-base sm:text-lg">
        – Here are a few of the projects I have been working on –
      </p>

      {/* Projects Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-white rounded-xl shadow-xl w-full h-80 sm:h-96 overflow-hidden transform transition-all duration-500 group hover:scale-105"
          >
            <div className="h-2/3">
              <img
                src={project.imgSrc}
                alt={`Screenshot of ${project.title}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-white rounded-b-xl p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="font-bold text-green-500 text-lg sm:text-xl mb-1">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4 text-sm sm:text-base">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-2 font-semibold rounded-full transition-colors duration-300 hover:bg-yellow-500"
              >
                Visit Site
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Reviews Section */}
      <div className="mt-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">Reviews</h2>

        {/* Toggle Button */}
        <button 
          onClick={() => setIsFormVisible(true)} // Open the modal
          className="bg-green-500 text-white px-4 py-2 font-semibold rounded-full mb-4"
        >
          Leave a Review
        </button>

        {/* Modal Overlay */}
        {isFormVisible && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 shadow-lg max-w-xs w-full relative">
              <button 
                onClick={() => setIsFormVisible(false)} 
                className="absolute top-2 right-2 text-gray-600"
              >
                &times; {/* Close button */}
              </button>
              <h3 className="text-lg font-bold text-green-500 mb-4">Leave a Review</h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  required
                  className="border rounded-lg p-2 mb-2 w-full"
                />
                <input
                  type="text"
                  value={newReview.date} // Automatically filled date
                  readOnly // Make date input read-only
                  className="border rounded-lg p-2 mb-2 w-full bg-gray-200" // Greyed out background for visual cue
                />
                <div className="flex items-center mb-2">
                  <p className="mr-2">Stars:</p>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      onClick={() => setNewReview({ ...newReview, stars: star })}
                      className={`cursor-pointer text-xl ${newReview.stars >= star ? 'text-yellow-500' : 'text-gray-400'}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <textarea
                  placeholder="Your Review"
                  value={newReview.message}
                  onChange={(e) => setNewReview({ ...newReview, message: e.target.value })}
                  required
                  className="border rounded-lg p-2 mb-2 w-full"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setNewReview({ ...newReview, photo: e.target.files[0] })}
                  className="border rounded-lg mb-2 w-full"
                />
                <button type="submit" className="bg-green-500 text-white px-4 py-2 font-semibold rounded-full">
                  Submit Review
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Render Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg flex flex-col justify-between">
              <div className="flex items-center mb-4">
                {review.photo && (
                  <img
                    src={review.photo}
                    alt={`${review.name}'s profile`}
                    className="w-12 h-12 rounded-full border-2 border-green-500"
                  />
                )}
                <div className="ml-4 flex-1">
                  <h3 className="font-bold text-green-500 text-lg">{review.name}</h3>
                  <p className="text-gray-700 text-sm">{review.message}</p>
                </div>
              </div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`text-xl ${review.stars >= star ? 'text-yellow-500' : 'text-gray-400'}`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-500 text-sm mt-2">{review.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyWork;
