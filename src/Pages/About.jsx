import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutAndServices() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      delay: 300,
      easing: "ease-in-out",
      once: true,
    });
  }, []);


                  const services = [
                  {
                    title: "Frontend Development & UI Engineering",
                    description: "Specializing in crafting pixel-perfect, high-performance user interfaces that dazzle and engage. I leverage modern React ecosystems and advanced CSS techniques to build responsive, interactive, and accessible web applications. My focus is on transforming complex designs into smooth, animated, and visually stunning digital experiences that not only function flawlessly but also leave a lasting impression on your users.",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                        <path d="M12 22v-5" className="opacity-50"/>
                        <path d="M12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" className="opacity-50"/>
                      </svg>
                    )
                  },
                  {
                    title: "UI/UX Design & Interactive Prototyping",
                    description: "Bridging the gap between user needs and business goals through intuitive, research-backed design. I create comprehensive wireframes, high-fidelity mockups, and interactive prototypes that validate concepts before development begins. My design process prioritizes usability, accessibility, and emotional connection, ensuring every interaction feels natural and every visual element serves a strategic purpose.",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M14.31 8l5.74 9.94"/>
                        <path d="M9.69 8h11.48"/>
                        <path d="M7.38 12l5.74-9.94"/>
                        <path d="M9.69 16L3.95 6.06"/>
                        <path d="M14.31 16H2.83"/>
                        <path d="M16.62 12l-5.74 9.94"/>
                      </svg>
                    )
                  },
                  {
                    title: "Advanced Technical Support & Optimization",
                    description: "Delivering expert troubleshooting and performance optimization for your digital infrastructure. I go beyond basic fixes to provide diagnostic analysis, security hardening, and system tuning that prevents future issues. Whether it's resolving complex software conflicts, optimizing network configurations, or ensuring hardware reliability, my support ensures your technology stack remains a robust asset rather than a liability.",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                        <path d="M12 12l-2 2"/>
                        <path d="M10 14l-1 1"/>
                      </svg>
                    )
                  },
                  {
                    title: "Executive Office Support & Operations",
                    description: "Providing high-level administrative solutions to streamline your business workflow and maximize productivity. From complex calendar management and precise data handling to professional document preparation and communication coordination, I ensure your operations run seamlessly. My approach combines discretion with efficiency, allowing you to focus on strategic growth while I manage the critical logistical details.",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                        <line x1="8" y1="13" x2="16" y2="13"/>
                        <line x1="8" y1="17" x2="14" y2="17"/>
                      </svg>
                    )
                  }
                ];     



                const processSteps = [
                {
                  step: "01",
                  title: "Discovery & Deep Dive",
                  subtitle: "Requirement Analysis",
                  description: "I don't just take orders; I solve problems. We start with deep-dive sessions to uncover your core business goals, target audience, and technical constraints. This phase is about building a rock-solid foundation so we never have to guess later.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="11" y1="11" x2="8" y2="11"></line></svg>
                  )
                },
                {
                  step: "02",
                  title: "Strategy & UI Architecture",
                  subtitle: "Wireframing & Prototyping",
                  description: "Turning abstract ideas into tangible visual structures. I create low-fidelity wireframes to map user flows, then evolve them into high-fidelity, interactive prototypes. This ensures the look, feel, and accessibility are perfect before a single line of code is written.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
                  )
                },
                {
                  step: "03",
                  title: "Frontend Alchemy",
                  subtitle: "React & Tailwind Development",
                  description: "This is where the magic happens. I craft pixel-perfect, responsive interfaces using modern React patterns and Tailwind CSS. I focus on clean architecture, buttery-smooth animations, and performance optimization to ensure your site feels as incredible as it looks.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                  )
                },
                {
                  step: "04",
                  title: "Refinement & QA",
                  subtitle: "Testing & Optimization",
                  description: "Perfection is in the details. I rigorously test across devices, browsers, and screen sizes. I optimize load speeds, fix bugs, and refine micro-interactions based on feedback, ensuring the final product is robust, accessible, and user-friendly.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  )
                },
                {
                  step: "05",
                  title: "Launch & Evolution",
                  subtitle: "Deployment & Support",
                  description: "The final beat. I handle secure deployment, domain configuration, and analytics setup. But I don't just disappear; I provide ongoing support to ensure your platform scales with your success and stays secure against emerging threats.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                  )
                }
              ];   





                
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center px-4 lg:px-16 py-2 lg:py-2">
                    
                    \{/* ABOUT ME Section */}
                    <div className="text-center sm:mb-10 mb-0">
                      <h1 className="lg:text-4xl text-1xl font-extrabold text-green-400 mt-10 lg:mt-20">
                        ABOUT <span className="text-white">ME</span>
                      </h1>
                      <p className="lg:text-[18px] font-medium text-[12px] text-gray-300 mt-2">
                        – I LOVE CREATING TECH SOLUTIONS –{" "}
                      </p>
                    </div>



                    {/* Personal Info Section */}
                    <div className="bg-black flex flex-col items-center justify-center px-4 lg:px-16 py-8 lg:py-1">
                      {/* FIX: Changed 'items-start' to 'items-center lg:items-start' */}
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 sm:gap-6 lg:gap-14 w-full max-w-6xl">  
                        {/* 1. Image with Green Glow */}
                        <div className="relative group flex-shrink-0">
                          {/* Green Glow Only */}
                          <div className="absolute -inset-0.5 bg-green-500 rounded-lg blur opacity-15 group-hover:opacity-20 transition duration-200 group-hover:duration-200"></div>
                          <img
                            src="https://p-mbugua.github.io/Official-_Portfolio/6.png"
                            alt="Peter Mbugua"
                            className="relative w-80 h-80 object-cover rounded-lg border-1 border-gray-800 cursor-pointer shadow-2xl group-hover:scale-[1.02] transition-transform duration-300"
                            onContextMenu={(e) => e.preventDefault()}
                          />
                        </div>

                        {/* 2. Narrative Bio */}
                        <div className="flex-1 text-center lg:text-left font-sans">
                          <h2 className="text-1xl lg:text-2xl font-semibold text-white mb-1 font-['Montserrat']">
                            Hello, I'm <span className="text-green-500">Peter Mbugua</span>
                          </h2>   
                          <p className="sm:text-[16px] lg:text-1xl font-semibold text-yellow-400 font-medium mb-0">
                            Frontend Developer & Web Designer
                          </p>

                          <p className="text-gray-300 text-left text-justify hyphens-auto leading-tight mb-1 max-w-2xl lg:mx-0 lg:text-[16px] sm:text-[12px] [word-spacing:-0.03em]">
                            Based in <strong className="text-white">Nairobi</strong>, I am{" "}
                            <strong className="text-white">a Frontend
                            Developer and Web Designer operating at the convergence of</strong>, {" "}
                            <span className="text-green-500">pixel-perfect engineering</span>{" "}
                            and <span className="text-green-500">financial precision</span>.
                            With <strong className="text-white">2 years of experience</strong>{" "}
                            crafting responsive, high-performance interfaces, I offer a
                            distinct advantage: a professional foundation in{" "}
                            <strong className="text-white">accounting</strong>. This unique
                            duality allows me to translate complex fiscal requirements into
                            intuitive financial dashboards and business tools that are not
                            only visually stunning but logically rigorous. I partner with
                            startups to transform intricate data into elegant, user-centric
                            digital realities that drive trust and engagement.
                          </p>

                          {/* 3. "Live Stats" Row (Smaller) */}
                          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2 mb-3 cursor-pointer">
                            {/* Stat Item 1 */}
                            <div className="p-1 bg-gray-900 rounded-lg border border-gray-800 hover:border-green-500 transition duration-300 flex flex-col items-center justify-center">
                              <p className="text-gray-500 text-[10px] uppercase tracking-wider text-center">
                                Experience
                              </p>
                              <p className="text-[12px] font-bold text-white">2+ Years</p>
                            </div>

                            {/* Stat Item 2 */}
                            <div className="p-1 bg-gray-900 rounded-lg border border-gray-800 hover:border-gray-400 transition duration-300 flex flex-col items-center justify-center">
                              <p className="text-gray-500 text-[10px] uppercase tracking-wider text-center">
                                Projects
                              </p>
                              <p className="text-[12px] font-bold text-white">6+</p>
                            </div>

                            {/* Stat Item 3 */}
                            <div className="p-1 bg-gray-900 rounded-lg border border-gray-800 hover:border-green-500 transition duration-300 flex flex-col items-center justify-center">
                              <p className="text-gray-500 text-[10px] uppercase tracking-wider text-center">
                                Location
                              </p>
                              <p className="text-[12px] font-bold text-white">Kenya</p>
                            </div>

                            {/* Stat Item 4 */}
                            <div className="p-1 bg-gray-900 rounded-lg border border-gray-800 hover:border-green-500 transition duration-300 flex flex-col items-center justify-center">
                              <p className="text-gray-500 text-[10px] uppercase tracking-wider text-center">
                                Status
                              </p>
                              <p className="text-[12px] font-bold text-green-500">Open</p>
                            </div>
                          </div>

                          {/* 4. Button Section */}
                          <div className="grid grid-cols-2 md:grid-cols-2 gap-2 justify-center lg:justify-start">
                            {/* Primary Button: Download CV (Small) */}
                            <a
                              href="https://flowcv.com/resume/f62ua50tfk"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group relative px-3 py-2 bg-yellow-500 text-black text-sm font-small rounded-full overflow-hidden shadow-lg hover:shadow-yellow-500/10 transition-all duration-300 transform hover:-translate-y-0.5 hover:bg-yellow-400"
                            >
                              <span className="relative z-10 text-[12px] flex items-center justify-center gap-1.5">
                                Download CV
                                <svg
                                  className="w-4 h-4 group-hover:translate-y-1 transition-transform"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                  ></path>
                                </svg>
                              </span>
                            </a>

                            {/* Secondary Button: Biography (Small) */}
                            <a
                              href="https://drive.google.com/file/d/11nOkBfsZlk2Rx4j_WXIcgUZbNhkG9zQZ/view?usp=sharing"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group px-3 py-2 bg-gray-900 border border-gray-700 text-white text-sm font-small rounded-full hover:bg-gray-800 hover:border-green-500 hover:text-green-500 transition-all duration-300 transform hover:-translate-y-1"
                            >
                              <span className="text-[12px] flex items-center justify-center gap-1.5">
                                View Biography
                                <svg
                                  className="w-4 h-4 group-hover:rotate-12 transition-transform"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                  ></path>
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                  ></path>
                                </svg>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>




                    {/* Experience & Education Section */}
                    <div className="sm:mt-10 max-w-6xl w-full relative">
                      <div className="grid lg:grid-cols-2 gap-8">
                        {/* Experience */}
                        <div className="relative">
                          <h2
                            className="text-[18px] font-bold text-green-400 mb-4"
                            data-aos="fade-up"
                          >
                            EXPERIENCE
                          </h2>
                          <ul className="space-y-6 text-gray-300 relative">
                            <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 to-green-300"></div>
                            {[
                              {
                                date: "APRIL 2023 - Present",
                                role: "Office Executive Assistant – Save A Soul Organization",
                                tasks: [
                                  "Reports and document preparations",
                                  "Office administration",
                                  "Managerial Support",
                                  "Communication & Co-ordiation",
                                  "Accounts Assistance",
                                ],
                              },

                              {
                                date: "SEPT 2024 - Present",
                                role: "Frontend Developer – Marps Africa Solutions",
                                tasks: [
                                  "UX/UI Designer",
                                  "Participate in software projects",
                                  "Frontend Developer",
                                  "Perform code reviews",
                                ],
                              },
                              {
                                date: "JAN 2023 - APR 2023",
                                role: "Technical Mentor – Candid Centre",
                                tasks: ["Computer Skills trainer", "Client/customer support"],
                              },
                            ].map((exp, index) => (
                              <li
                                key={index}
                                className="relative pl-12 group"
                                data-aos="fade-up"
                              >
                                <div className="absolute left-1.5 top-0 w-6 h-6 bg-green-400 border-4 border-green-800 rounded-full group-hover:scale-110 transition-transform duration-300 ease-in-out"></div>
                                <h3 className="text-[16px] font-semibold text-yellow-500">
                                  {exp.date}
                                </h3>
                                <h4 className="text-[14px] font-bold text-green-400">
                                  {exp.role.split(" – ")[0]} –{" "}
                                  <span className="text-yellow-500">
                                    {exp.role.split(" – ")[1]}
                                  </span>
                                </h4>
                                <ul className="list-disc text-[14px] ml-6">
                                  {exp.tasks.map((task, idx) => (
                                    <li key={idx}>{task}</li>
                                  ))}
                                </ul>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Education */}
                        <div className="relative">
                          <h2
                            className="text-[18px] font-bold text-green-400 mb-4"
                            data-aos="fade-up"
                          >
                            EDUCATION
                          </h2>
                          <ul className="space-y-6 text-gray-300 relative">
                            <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 to-green-300"></div>
                            {[
                              {
                                date: "FEB 2024 - SEPT 2024",
                                institution:
                                  "Certification in Full Stack Development – Moringa School",
                                studies: [
                                  "Frontend Development",
                                  "Backend Development",
                                  "UI/UX Design",
                                  "Problem solving",
                                  "Project implementation",
                                ],
                              },
                              {
                                date: "MAY 2023 - SEPT 2023",
                                institution:
                                  "Certification in Website Development – Moringa School",
                                studies: [
                                  "Introduction in to programming",
                                  "Web Design Fundamentals",
                                  "Website Hosting",
                                ],
                              },
                              {
                                date: "SEPT 2022 - DEC 2022",
                                institution:
                                  "Certificate in Graphic Design – Pettans Institute",
                                studies: [
                                  "Design Principles",
                                  "Digital Tools ",
                                  "Branding | Visual Communication",
                                ],
                              },
                            ].map((edu, index) => (
                              <li
                                key={index}
                                className="relative pl-12 group"
                                data-aos="fade-up"
                              >
                                <div className="absolute left-1.5 top-0 w-6 h-6 bg-green-400 border-4 border-green-800 rounded-full group-hover:scale-110 transition-transform duration-300 ease-in-out"></div>
                                <h3 className="text-[16px] font-semibold text-yellow-500">
                                  {edu.date}
                                </h3>
                                <h4 className="text-[14px] font-bold text-green-400">
                                  {edu.institution.split(" – ")[0]} –{" "}
                                  <span className="text-yellow-500">
                                    {edu.institution.split(" – ")[1]}
                                  </span>
                                </h4>
                                {/* <p className="ml-6">Main areas of study include:</p> */}
                                <ul className="list-disc text-[14px]  ml-6">
                                  {edu.studies.map((study, idx) => (
                                    <li key={idx}>{study}</li>
                                  ))}
                                </ul>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>




                            {/* ================= START: SERVICES MARQUEE SECTION ================= */}
                            <div className="w-full bg-black mt-10 mb-16 relative">
                              
                              <div className="relative z-10 max-w-7xl mx-auto px-4">
                                
                                {/* Header Section */}
                                <div className="text-center mb-4">
                                  <h2 className="text-[18px] md:text-[20px] font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500 mb-1 tracking-tight">
                                    MY SERVICES
                                  </h2>
                                  <p className="text-yellow-500 text-sm md:text-base font-sans max-w-2xl mx-auto font-light">
                                    Expertise designed to drive your success
                                  </p>
                                </div>

                                {/* Static Grid Layout */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                  {services.map((service, index) => (
                                    <div
                                      key={index}
                                      className="group/card relative flex flex-col p-6 bg-zinc-900/40 backdrop-blur-md rounded-xl border border-zinc-800 hover:border-green-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_-5px_rgba(34,197,94,0.15)]"
                                    >
                                      {/* Subtle Hover Glow */}
                                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                                      
                                      <div className="relative z-10 flex flex-col h-full">
                                        {/* Icon */}
                                        <div className="text-[18px] mb-2 text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.3)]">
                                          {service.icon}
                                        </div>
                                        
                                        {/* Title */}
                                        <h3 className="text-[14px] font-heading font-bold text-gray-100 mb-3">
                                          {service.title}
                                        </h3>
                                        
                                        {/* Description */}
                                        <p className="text-[14px] text-gray-400 font-sans leading-relaxed flex-grow text-gray-300 text-left text-justify hyphens-auto leading-tight mb-1 max-w-2xl lg:mx-0  [word-spacing:-0.03em]">
                                          {service.description}
                                        </p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>   






                              {/* ================= START: HOW I WORK SECTION ================= */}
                              <div className="w-full bg-black mb-20 relative overflow-hidden">
                                {/* Dynamic Background Gradients */}
                                <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-600/10 rounded-full blur-[128px] animate-pulse" />
                                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-900/10 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />

                                <div className="relative z-10 max-w-6xl mx-auto px-4">
                                  
                                  {/* Header with Glow */}
                                  <div className="text-center mb-2">
                                    <h2 className="text-[18px] md:text-[20px] font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-500 to-emerald-600 mb-2 tracking-tight">
                                      THE PROCESS
                                    </h2>
                                    <p className="text-yellow-500 text-[14px] md:text-[16px] font-sans text-center font-light leading-normal">
                                      From chaotic concept to polished reality. A transparent, collaborative journey to build digital products that <span className="text-white font-normal">shine</span>.
                                    </p>
                                  </div>

                                  {/* Timeline Container */}
                                  <div className="relative">
                                    {/* Central Glowing Line */}
                                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-green-500/50 to-transparent shadow-[0_0_15px_rgba(34,197,94,0.5)]" />

                                    <div className="space-y-16">
                                      {processSteps.map((item, index) => (
                                        <div 
                                          key={index}
                                          className="relative flex flex-col md:flex-row items-center gap-8 group"
                                        >
                                          
                                          {/* Content Side 1 (Left on Desktop) */}
                                          <div className={`flex-1 w-full ${index % 2 === 0 ? 'md:text-right order-2 md:order-1' : 'hidden md:block order-1'}`}>
                                            <div className="group/card relative p-8 bg-zinc-900/40 backdrop-blur-xl rounded-2xl border border-zinc-800 hover:border-green-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_-10px_rgba(34,197,94,0.2)] overflow-hidden">
                                              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                                              
                                              <div className="relative z-10">
                                                <div className="text-xs font-mono text-green-500 mb-2 uppercase tracking-widest opacity-80">{item.subtitle}</div>
                                                <h3 className="text-[14px] font-heading font-bold text-white mb-4 group-hover/card:text-green-400 transition-colors">
                                                  {item.title}
                                                </h3>
                                                <p className="text-gray-400 text-sm leading-relaxed">
                                                  {item.description}
                                                </p>
                                              </div>
                                            </div>
                                          </div>

                                          {/* Central Node (Icon) */}
                                          <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-black border-2 border-green-500 rounded-full flex items-center justify-center z-20 shadow-[0_0_25px_rgba(34,197,94,0.4)] group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(34,197,94,0.6)] transition-all duration-500 order-1 md:order-2">
                                            <div className="absolute inset-0 rounded-full bg-green-500/20 animate-ping" />
                                            <div className="text-green-400 transform group-hover:scale-110 transition-transform duration-300">
                                              {item.icon}
                                            </div>
                                          </div>

                                          {/* Content Side 2 (Right on Desktop) */}
                                          <div className={`flex-1 w-full ${index % 2 === 0 ? 'hidden md:block order-3' : 'order-2 md:order-3'}`}>
                                            <div className="group/card relative p-8 bg-zinc-900/40 backdrop-blur-xl rounded-2xl border border-zinc-800 hover:border-green-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_-10px_rgba(34,197,94,0.2)] overflow-hidden">
                                              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                                              
                                              <div className="relative z-10">
                                                <div className="md:hidden text-xs font-mono text-green-500 mb-2 uppercase tracking-widest opacity-80">{item.subtitle}</div>
                                                <div className="md:hidden text-4xl font-heading font-bold text-green-900/20 absolute -top-4 -right-4 select-none">{item.step}</div>
                                                
                                                <div className="hidden md:block text-xs font-mono text-gray-500 mb-2 uppercase tracking-widest">Phase {index + 1}</div>
                                                <h3 className="text-[14px] font-heading font-bold text-white mb-4 group-hover/card:text-green-400 transition-colors">
                                                  {item.title}
                                                </h3>
                                                <p className="text-gray-400 text-sm leading-relaxed">
                                                  {item.description}
                                                </p>
                                              </div>
                                            </div>
                                          </div>

                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                                
                                <style>{`
                                  @keyframes pulse-glow {
                                    0%, 100% { opacity: 0.5; transform: scale(1); }
                                    50% { opacity: 0.8; transform: scale(1.05); }
                                  }
                                `}</style>
                              </div>
                              {/* ================= END: HOW I WORK SECTION ================= */}


    </div>
  );
}
