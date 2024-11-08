import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore'; 
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

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
  const [isFormVisible, setIsFormVisible] = useState(false); 
  const [isLoading, setIsLoading] = useState(false); 

  // Sample projects data
  useEffect(() => {
    const projectsData = [
      {
        title: 'HOTEL MANAGEMENT SYSTEM',
        description: 'A project designed to help a group of hotels and also restaurants manage their daily tasks from the clients, workers, rooms and also their hotels.',
        imgSrc: 'https://p-mbugua.github.io/peshmarkTwo/Photos/Projects/Hetelogix_System.png',
        role: 'Client Based',
        link: 'https://stay-manager-mg.netlify.app/',
      },
      {
        title: 'DELIVERY MANAGEMENT SYSTEM',
        description: 'A system designed to resolve a cohesion and daily challeges of a company dealing with deliveries to their clients.',
        imgSrc: 'https://p-mbugua.github.io/peshmarkTwo/Photos/Projects/ParcelPoa.png',
        role: 'Client Based',
        link: 'https://parcelpoa.netlify.app/',
      },
      {
        title: 'REACHROY DESIGNS HUB',
        description: 'A system designed to assist a Printing company to market themselves and at the same time manage their daily tasks, it also built on basis of where clients can communicate to the company direct or even make orders',
        imgSrc: 'https://p-mbugua.github.io/peshmarkTwo/Photos/Projects/Reach_Roy.png',
        role: 'Client Based',
        link: 'https://reachroy.netlify.app/',
      },
      {
        title: 'TEACHNEST',
        description: 'A small ecommerce website used to sell product.',
        imgSrc: 'https://p-mbugua.github.io/peshmarkTwo/Photos/Projects/TechNest_Online_Shop.png',
        role: 'Personal Brand',
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newReview.stars === 0) {
      toast.error('Please select a number of stars before submitting your review.'); 
      return; 
    }

    setIsLoading(true); 

    try {
      const reviewData = {
        ...newReview,
        photo: newReview.photo ? URL.createObjectURL(newReview.photo) : null,
      };
      await addDoc(collection(db, 'reviews'), reviewData);
      toast.success('Review submitted successfully!'); 
      setNewReview({ name: '', date: new Date().toLocaleDateString(), stars: 0, message: '', photo: null });
      fetchReviews(); 
      setIsFormVisible(false); 
    } catch (error) {
      console.error('Error adding review: ', error);
      toast.error('Error submitting review. Please try again.'); 
    } finally {
      setIsLoading(false); 
    }
  };

  useEffect(() => {
    fetchReviews(); 
  }, []);

  return (
    <div className="bg-gray-900 py-8 px-6 sm:px-8 md:py-16 md:px-12 lg:py-24 lg:px-32 text-center">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 font-montserrat">
        MY <span className='text-yellow-500'>WORKS</span>
      </h2>
      <p className="text-green-500 mb-12 text-base sm:text-lg font-roboto">
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
              <h3 className="font-bold text-green-500 text-lg sm:text-xl mb-1 font-montserrat">
                {project.title}
              </h3>

             
              <p className="text-gray-700 mb-4 text-sm sm:text-base font-roboto">
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


              <h4 className="bg-gray-900 text-white px-4 py-2 font-semi-bold mt-10 rounded-full transition-colors duration-300 hover:bg-gray-400 hover:text-gray-900 ">
                {project.role}
              </h4>

              
            </div>
          </div>
        ))}
      </div>

    
      <div className="mt-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 font-montserrat">Reviews ({reviews.length})</h2>

        {/* Button Container for Leave a Review */}
        <div className="flex justify-end mb-4">
          <button 
            onClick={() => setIsFormVisible(true)} 
            className="bg-green-500 text-white px-4 py-2 font-semibold rounded-full"
          >
            Leave a Review
          </button>
        </div>

        {/* Modal Overlay */}
        {isFormVisible && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 shadow-lg max-w-xs w-full relative">
              <button 
                onClick={() => setIsFormVisible(false)} 
                className="absolute top-2 right-2 text-gray-600"
              >
                &times; 
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
                  value={newReview.date} 
                  readOnly 
                  className="border rounded-lg p-2 mb-2 w-full bg-gray-200" 
                />
                <div className="flex items-center mb-2">
                  <p className="mr-2 font-roboto">Stars:</p>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      onClick={() => setNewReview({ ...newReview, stars: star })}
                      className={`cursor-pointer text-2xl ${newReview.stars >= star ? 'text-yellow-500' : 'text-gray-400'}`}
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
                  className="border rounded-lg p-2 w-full h-24 resize-none"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setNewReview({ ...newReview, photo: e.target.files[0] })}
                  className="mb-2 w-full"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`bg-green-500 text-white px-4 py-2 font-semibold rounded-full transition ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isLoading ? 'Submitting...' : 'Submit Review'}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Display Reviews */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
              <div className="flex justify-center mb-4">
                {review.photo ? (
                  <img src={review.photo} alt="Review" className="h-24 w-24 object-cover rounded-full" />
                ) : (
                  <div className="h-24 w-24 flex items-center justify-center bg-gray-200 rounded-full">
                    <span className="text-4xl font-bold text-gray-600">{review.name.charAt(0).toUpperCase()}</span>
                  </div>
                )}
              </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-1">{review.name}</h4> 

              {/* Stars and Date Layout */}
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className={`text-lg ${review.stars >= star ? 'text-yellow-500' : 'text-gray-400'}`}>
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-sm text-black">{review.date}</p>
              </div>

              <p className="text-green-500">{review.message}</p>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default MyWork;
