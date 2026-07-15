import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const MyWork = () => {
  const [projects, setProjects] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    name: "",
    date: new Date().toLocaleDateString(),
    stars: 0,
    message: "",
    photo: null,
  });
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Enhanced Projects Data with Full Tech Stack & Metrics
  useEffect(() => {
    const projectsData = [
      {
        id: 1,
        title: "HOTEL MANAGEMENT SYSTEM",
        subtitle: "Enterprise Hospitality Platform",
        description:
          "Full-stack hotel & restaurant management solution featuring AI-driven dynamic pricing, real-time analytics, contactless check-in/out, multi-property dashboard, and integrated POS. Streamlines operations across 15+ modules including housekeeping, room service, billing, and guest feedback.",
        imgSrc:
          "https://p-mbugua.github.io/peshmarkTwo/Photos/Projects/Hetelogix_System.png",
        role: "Full-Stack Development",
        status: "Production Ready",
        link: "https://stay-manager-mg.netlify.app/",
        repoLink: "https://github.com/p-mbugua/hotel-management", // Optional
        techStack: [
          "React 19",
          "TypeScript",
          "Tailwind CSS",
          "Node.js",
          "Express.js",
          "PostgreSQL",
          "Prisma",
          "Redis",
          "Socket.io",
          "JWT",
          "Stripe API",
          "Chart.js",
        ],
        features: [
          "AI Dynamic Pricing Engine",
          "Real-Time Occupancy Analytics",
          "Contactless Check-In/Out",
          "Multi-Property Dashboard",
          "Integrated POS & Billing",
          "Automated PDF Reports",
        ],
        metrics: {
          performance: "98/100",
          uptime: "99.9%",
          users: "500+",
          properties: "12",
        },
        year: "2026",
      },
      {
        id: 2,
        title: "HOTEL MANAGEMENT SYSTEM",
        subtitle: "Enterprise Hospitality Platform",
        description:
          "Full-stack hotel & restaurant management solution featuring AI-driven dynamic pricing, real-time analytics, contactless check-in/out, multi-property dashboard, and integrated POS. Streamlines operations across 15+ modules including housekeeping, room service, billing, and guest feedback.",
        imgSrc:
          "https://p-mbugua.github.io/peshmarkTwo/Photos/Projects/Hetelogix_System.png",
        role: "Full-Stack Development",
        status: "Production Ready",
        link: "https://stay-manager-mg.netlify.app/",
        repoLink: "https://github.com/p-mbugua/hotel-management", // Optional
        techStack: [
          "React 19",
          "TypeScript",
          "Tailwind CSS",
          "Node.js",
          "Express.js",
          "PostgreSQL",
          "Prisma",
          "Redis",
          "Socket.io",
          "JWT",
          "Stripe API",
          "Chart.js",
        ],
        features: [
          "AI Dynamic Pricing Engine",
          "Real-Time Occupancy Analytics",
          "Contactless Check-In/Out",
          "Multi-Property Dashboard",
          "Integrated POS & Billing",
          "Automated PDF Reports",
        ],
        metrics: {
          performance: "98/100",
          uptime: "99.9%",
          users: "500+",
          properties: "12",
        },
        year: "2026",
      },
      {
        id: 3,
        title: "HOTEL MANAGEMENT SYSTEM",
        subtitle: "Enterprise Hospitality Platform",
        description:
          "Full-stack hotel & restaurant management solution featuring AI-driven dynamic pricing, real-time analytics, contactless check-in/out, multi-property dashboard, and integrated POS. Streamlines operations across 15+ modules including housekeeping, room service, billing, and guest feedback.",
        imgSrc:
          "https://p-mbugua.github.io/peshmarkTwo/Photos/Projects/Hetelogix_System.png",
        role: "Full-Stack Development",
        status: "Production Ready",
        link: "https://stay-manager-mg.netlify.app/",
        repoLink: "https://github.com/p-mbugua/hotel-management", // Optional
        techStack: [
          "React 19",
          "TypeScript",
          "Tailwind CSS",
          "Node.js",
          "Express.js",
          "PostgreSQL",
          "Prisma",
          "Redis",
          "Socket.io",
          "JWT",
          "Stripe API",
          "Chart.js",
        ],
        features: [
          "AI Dynamic Pricing Engine",
          "Real-Time Occupancy Analytics",
          "Contactless Check-In/Out",
          "Multi-Property Dashboard",
          "Integrated POS & Billing",
          "Automated PDF Reports",
        ],
        metrics: {
          performance: "98/100",
          uptime: "99.9%",
          users: "500+",
          properties: "12",
        },
        year: "2026",
      },
      {
        id: 4,
        title: "HOTEL MANAGEMENT SYSTEM",
        subtitle: "Enterprise Hospitality Platform",
        description:
          "Full-stack hotel & restaurant management solution featuring AI-driven dynamic pricing, real-time analytics, contactless check-in/out, multi-property dashboard, and integrated POS. Streamlines operations across 15+ modules including housekeeping, room service, billing, and guest feedback.",
        imgSrc:
          "https://p-mbugua.github.io/peshmarkTwo/Photos/Projects/Hetelogix_System.png",
        role: "Full-Stack Development",
        status: "Production Ready",
        link: "https://stay-manager-mg.netlify.app/",
        repoLink: "https://github.com/p-mbugua/hotel-management", // Optional
        techStack: [
          "React 19",
          "TypeScript",
          "Tailwind CSS",
          "Node.js",
          "Express.js",
          "PostgreSQL",
          "Prisma",
          "Redis",
          "Socket.io",
          "JWT",
          "Stripe API",
          "Chart.js",
        ],
        features: [
          "AI Dynamic Pricing Engine",
          "Real-Time Occupancy Analytics",
          "Contactless Check-In/Out",
          "Multi-Property Dashboard",
          "Integrated POS & Billing",
          "Automated PDF Reports",
        ],
        metrics: {
          performance: "98/100",
          uptime: "99.9%",
          users: "500+",
          properties: "12",
        },
        year: "2026",
      },
      {
        id: 5,
        title: "HOTEL MANAGEMENT SYSTEM",
        subtitle: "Enterprise Hospitality Platform",
        description:
          "Full-stack hotel & restaurant management solution featuring AI-driven dynamic pricing, real-time analytics, contactless check-in/out, multi-property dashboard, and integrated POS. Streamlines operations across 15+ modules including housekeeping, room service, billing, and guest feedback.",
        imgSrc:
          "https://p-mbugua.github.io/peshmarkTwo/Photos/Projects/Hetelogix_System.png",
        role: "Full-Stack Development",
        status: "Production Ready",
        link: "https://stay-manager-mg.netlify.app/",
        repoLink: "https://github.com/p-mbugua/hotel-management", // Optional
        techStack: [
          "React 19",
          "TypeScript",
          "Tailwind CSS",
          "Node.js",
          "Express.js",
          "PostgreSQL",
          "Prisma",
          "Redis",
          "Socket.io",
          "JWT",
          "Stripe API",
          "Chart.js",
        ],
        features: [
          "AI Dynamic Pricing Engine",
          "Real-Time Occupancy Analytics",
          "Contactless Check-In/Out",
          "Multi-Property Dashboard",
          "Integrated POS & Billing",
          "Automated PDF Reports",
        ],
        metrics: {
          performance: "98/100",
          uptime: "99.9%",
          users: "500+",
          properties: "12",
        },
        year: "2026",
      },
      {
        id: 6,
        title: "HOTEL MANAGEMENT SYSTEM",
        subtitle: "Enterprise Hospitality Platform",
        description:
          "Full-stack hotel & restaurant management solution featuring AI-driven dynamic pricing, real-time analytics, contactless check-in/out, multi-property dashboard, and integrated POS. Streamlines operations across 15+ modules including housekeeping, room service, billing, and guest feedback.",
        imgSrc:
          "https://p-mbugua.github.io/peshmarkTwo/Photos/Projects/Hetelogix_System.png",
        role: "Full-Stack Development",
        status: "Production Ready",
        link: "https://stay-manager-mg.netlify.app/",
        repoLink: "https://github.com/p-mbugua/hotel-management", // Optional
        techStack: [
          "React 19",
          "TypeScript",
          "Tailwind CSS",
          "Node.js",
          "Express.js",
          "PostgreSQL",
          "Prisma",
          "Redis",
          "Socket.io",
          "JWT",
          "Stripe API",
          "Chart.js",
        ],
        features: [
          "AI Dynamic Pricing Engine",
          "Real-Time Occupancy Analytics",
          "Contactless Check-In/Out",
          "Multi-Property Dashboard",
          "Integrated POS & Billing",
          "Automated PDF Reports",
        ],
        metrics: {
          performance: "98/100",
          uptime: "99.9%",
          users: "500+",
          properties: "12",
        },
        year: "2026",
      },
    ];
    setProjects(projectsData);
  }, []);

  // Fetch reviews from Firestore
  const fetchReviews = async () => {
    const reviewsCollection = collection(db, "reviews");
    const reviewsSnapshot = await getDocs(reviewsCollection);
    const reviewsList = reviewsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setReviews(reviewsList);
  };

const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });
};














 const handleSubmit = async (e) => {
  e.preventDefault();

  if (newReview.stars === 0) {
    toast.error("Please select a number of stars before submitting your review.");
    return;
  }

  setIsLoading(true);

  try {
    let photo = null;

    if (newReview.photo) {
      photo = await convertToBase64(newReview.photo);
    }

    const reviewData = {
      ...newReview,
      photo,
    };

    await addDoc(collection(db, "reviews"), reviewData);

    toast.success("Review submitted successfully!");

    setNewReview({
      name: "",
      date: new Date().toLocaleDateString(),
      stars: 0,
      message: "",
      photo: null,
    });

    fetchReviews();
    setIsFormVisible(false);
  } catch (error) {
    console.error(error);
    toast.error("Error submitting review.");
  } finally {
    setIsLoading(false);
  }
};

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div className="bg-gray-900 py-8 px-6 sm:px-8 md:py-16 md:px-12 lg:py-24 lg:px-32 text-center">
      <h2 className="text-[14px] sm:text-[18px] mt-6 font-extrabold text-white mb-2 font-montserrat">
        MY <span className="text-yellow-500">WORKS</span>
      </h2>
      <p className="text-green-500 mb-4 text-[12px] sm:text-[14px] font-roboto">
        – Here are a few of the projects I have been working on –
      </p>

      <section id="projects" className="py-1 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl  px-0 sm:px-1 lg:px-8">
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col h-full "
              >
                {/* Image Section (Compact Height) */}
                <div className="relative h-30 overflow-hidden">
                  <img
                    src={project.imgSrc}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Status Badge (14px) */}
                  <span className="absolute top-2 left-2 bg-green-500 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                    {project.status}
                  </span>
                  {/* Role Badge (14px) */}
                  <span className="absolute top-2 right-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm text-gray-900 dark:text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm border border-gray-200 dark:border-gray-700">
                    {project.role}
                  </span>
                </div>

                {/* Content Section */}
                <div className="p-1 flex flex-col flex-grow">
                  {/* Title & Subtitle (14px) */}
                  <div className="mb-1">
                    <h3 className="font-bold text-yellow-500  text-[14px] mb-1 font-montserrat line-clamp-1 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-green-600  dark:text-green-400 text-[10px] font-semibold uppercase tracking-wide">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description (14px) */}
                  <p className="text-gray-600 dark:text-gray-300 text-justify mb-4 text-[12px] leading-snug font-roboto ">
                    {project.description}
                  </p>

                  {/* Tech Stack (14px) */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-[10px] px-1 py-1 rounded-md font-medium border border-gray-100 dark:border-gray-500"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button (14px) */}
                  <div className="mt-auto">
                    {/* Flex Container for Buttons */}
                    <div className="flex flex-row sm:flex-row gap-3 w-full">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center flex-1 bg-gradient-to-r from-yellow-500 to-green-500 hover:from-yellow-600 hover:to-green-600 text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-1"
                      >
                        View Project
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>

                      {/* Secondary: Source Code - Refined Gray/Black */}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center flex-1 bg-white border-2 border-gray-300 hover:border-gray-900 hover:bg-gray-50 text-gray-800 font-medium text-sm px-4 py-2.5 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-1 hover:cursor-pointer"
                      >
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>




              {/* Reviews Section */}
              <div className="mt-10">
                <h3 className="text-[14px] sm:text-[16px] font-bold text-yellow-500 mb-1 font-poppins">
                  REVIEWS ({reviews.length})
                </h3>
                <h4 className="text-green-500 mb-3">
                  {" "}
                  – Here is what people say about my work –
                </h4>

                <div className="w-full overflow-hidden relative py-1 sm:py-6 bg-gray-800 rounded-full shadow-lg border border-gray-700 mb-5">
                  <div
                    className="flex gap-4 w-max animate-marquee-left-to-right hover:[animation-play-state:paused] sm:hover:[animation-play-state:paused]"
                    style={{
                      // Slower on mobile (50s) to allow reading extra lines, relaxed on desktop (80s)
                      animation: "marquee-left-to-right 50s linear infinite",
                    }}
                  >
                    {/* Duplicate List for Seamless Loop */}
                    {[...reviews, ...reviews].map((review, idx) => (
                      <div
                        key={`${review.id}-${idx}`}
                        // Updated: Increased height to h-24 (96px) to fit 2 lines of text comfortably
                        // Updated: Changed items-center to items-start for better multi-line alignment
                        className="flex items-start gap-3 bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-green-200 transition-all duration-300 rounded-full pl-2 pr-5 py-3 h-24 flex-shrink-0 min-w-[260px] sm:min-w-[320px] w-[85vw] sm:w-[320px] group cursor-default snap-start"
                      >
                        {/* Left: Avatar */}
                        <div className="relative flex-shrink-0 mt-0.5">
                          {review.photo ? (
                            <img
                              src={review.photo}
                              alt={review.name}
                              className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm group-hover:scale-105 transition-transform duration-300"
                            />
                          ) : (
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-600 font-bold text-lg border-2 border-white shadow-sm group-hover:scale-105 transition-transform duration-300">
                              {review.name.charAt(0).toUpperCase()}
                            </div>
                          )}
                          {/* Verified Badge */}
                          <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full shadow-sm"></div>
                        </div>

                        {/* Right: Content */}
                        <div className="flex flex-col justify-center min-w-0 flex-1">
                          <div className="flex items-baseline justify-between mb-0.5">
                            <h4 className="text-[13px] font-bold text-gray-900 truncate pr-2 tracking-tight">
                              {review.name}
                            </h4>
                            <span className="text-[10px] font-medium text-gray-400 whitespace-nowrap">
                              {review.date}
                            </span>
                          </div>

                          <div className="flex items-center gap-1 mb-1.5">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <svg
                                key={star}
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                viewBox="0 0 24 24"
                                fill={review.stars >= star ? "#FBBF24" : "#F3F4F6"}
                                stroke={review.stars >= star ? "#FBBF24" : "#F3F4F6"}
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                              </svg>
                            ))}
                          </div>

                          {/* RESOLVED: Replaced 'truncate' with 'line-clamp-2' */}
                          {/* This shows 2 lines of text before adding an ellipsis (...) */}
                          <p className="text-[11px] text-black leading-snug line-clamp-2 font-medium opacity-90 group-hover:opacity-100 transition-opacity">
                            "{review.message}"
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <style jsx>{`
                    @keyframes marquee-left-to-right {
                      0% {
                        transform: translateX(-50%);
                      }
                      100% {
                        transform: translateX(0);
                      }
                    }

                    /* Mobile: Allow manual swipe if needed */
                    @media (max-width: 640px) {
                      .animate-marquee-left-to-right {
                        overflow-x: auto;
                        scroll-snap-type: x mandatory;
                        -webkit-overflow-scrolling: touch;
                        /* Hide scrollbar for cleaner look */
                        scrollbar-width: none;
                        -ms-overflow-style: none;
                      }
                      .animate-marquee-left-to-right::-webkit-scrollbar {
                        display: none;
                      }
                    }

                    @media (prefers-reduced-motion: reduce) {
                      .animate-marquee-left-to-right {
                        animation: none;
                        overflow-x: auto;
                        scroll-behavior: smooth;
                      }
                    }
                  `}</style>
                </div>
              </div>   







      {/* Reviews Section  */}
      <div>     
        {/* Button Container for Leave a Review */}
        <div className="flex justify-end sm:mb-1 mb-8">
          <button
            onClick={() => setIsFormVisible(true)}
            className="text-[14px] group relative px-4 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-green-400 font-semibold shadow-sm transition-all duration-300 hover:bg-green-500 hover:text-white hover:border-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
          >
            <span className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:rotate-12"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              Leave a Review
            </span>
          </button>
        </div>

        {/* Modal Overlay */}
        {isFormVisible && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
          >
            {/* Backdrop with sophisticated blur and fade */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-500 ease-out"
              onClick={() => setIsFormVisible(false)}
            />

            {/* Modal Card with Physics-based Entry */}
            <div className="relative w-full max-w-[400px] bg-gray-900 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 ease-out scale-100 opacity-100 ring-1 ring-white/10 mb-10">
              {/* Header: Clean & Minimal */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-900">
                <h3 className="text-base font-bold text-white tracking-tight">
                  Share Experience
                </h3>
                <button
                  onClick={() => setIsFormVisible(false)}
                  className="group p-2 rounded-full hover:bg-gray-200/50 transition-colors duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-400 group-hover:text-gray-700 transition-colors"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                {/* Name Input with Real-time Validation Style */}
                <div className="group">
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5 ml-1">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Alex Morgan"
                    value={newReview.name}
                    onChange={(e) =>
                      setNewReview({ ...newReview, name: e.target.value })
                    }
                    required
                    className="w-full text-sm bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-2.5 focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10 transition-all duration-300 outline-none placeholder:text-gray-400"
                  />
                </div>

                {/* Date & Star Rating Row */}
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5 ml-1">
                      Date
                    </label>
                    <div className="w-full text-sm bg-gray-100 border border-transparent text-gray-500 rounded-xl px-4 py-2.5 cursor-not-allowed font-medium">
                      {newReview.date}
                    </div>
                  </div>
                  <div className="flex-1">
                    <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1 ml-1">
                      Rating
                    </label>
                    <div className="flex items-center gap-1 h-[42px]">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() =>
                            setNewReview({ ...newReview, stars: star })
                          }
                          className="relative focus:outline-none transform transition-transform duration-200 hover:scale-110 active:scale-90"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill={newReview.stars >= star ? "#F59E0B" : "none"}
                            stroke={
                              newReview.stars >= star ? "#F59E0B" : "#E5E7EB"
                            }
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="drop-shadow-sm"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                          </svg>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Review Textarea with Character Count Logic  */}
                <div className="group">
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5 ml-1">
                    Review
                  </label>
                  <textarea
                    placeholder="What stood out to you?"
                    value={newReview.message}
                    onChange={(e) =>
                      setNewReview({ ...newReview, message: e.target.value })
                    }
                    required
                    rows={3}
                    className="w-full text-sm bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-2.5 focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10 transition-all duration-300 outline-none placeholder:text-gray-400 resize-none leading-relaxed"
                  />
                </div>

                {/* Advanced File Upload: Transforms on Selection */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1 ml-1">
                    Media
                  </label>
                  {!newReview.photo ? (
                    <label className="flex items-center justify-center w-full h-12 border-2 border-dashed border-gray-200 rounded-xl cursor-pointer hover:border-emerald-400 hover:bg-emerald-50/30 transition-all duration-300 group">
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-gray-400 group-hover:text-emerald-500 transition-colors"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          ></path>
                        </svg>
                        <span className="text-xs font-medium text-gray-500 group-hover:text-emerald-600">
                          Add Photo
                        </span>
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          setNewReview({
                            ...newReview,
                            photo: e.target.files[0],
                          })
                        }
                        className="hidden"
                      />
                    </label>
                  ) : (
                    <div className="relative flex items-center gap-3 p-2 bg-green-500 border border-green-500 rounded-xl animate-in fade-in slide-in-from-top-2 duration-300">
                      <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm text-emerald-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            x="3"
                            y="3"
                            width="18"
                            height="18"
                            rx="2"
                            ry="2"
                          ></rect>
                          <circle cx="8.5" cy="8.5" r="1.5"></circle>
                          <polyline points="21 15 16 10 5 21"></polyline>
                        </svg>
                      </div>
                      <span className="text-xs font-medium text-emerald-800 truncate flex-1">
                        {newReview.photo.name}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          setNewReview({ ...newReview, photo: null })
                        }
                        className="p-1 hover:bg-emerald-200 rounded-full transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-emerald-600"
                        >
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                    </div>
                  )}
                </div>

                {/* Submit Button with Morphing Loading State */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`relative w-full py-3 rounded-xl text-sm font-bold text-white shadow-lg shadow-egeen-600 overflow-hidden transition-all duration-300 transform active:scale-[0.98] ${
                    isLoading
                      ? "bg-gray-800 cursor-wait"
                      : "bg-green-600 hover:shadow-emerald-500/40 hover:from-emerald-400 hover:to-teal-500"
                  }`}
                >
                  <div
                    className={`flex items-center justify-center gap-2 transition-all duration-300 ${isLoading ? "opacity-100" : "opacity-100"}`}
                  >
                    {isLoading ? (
                      <>
                        <svg
                          className="animate-spin h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        <span>Publishing...</span>
                      </>
                    ) : (
                      <span className="flex items-center gap-2">
                        Submit Review
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-80"
                        >
                          <line x1="22" y1="2" x2="11" y2="13"></line>
                          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                      </span>
                    )}
                  </div>
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default MyWork;
