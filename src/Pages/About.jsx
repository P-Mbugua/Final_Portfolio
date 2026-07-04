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
  { title: "Web Development", description: "Full stack development with React & Node.js.", icon: "🌐" },
  { title: "UI/UX Design", description: "User-friendly interfaces & accessibility focus.", icon: "🎨" },
  { title: "Graphics Design", description: "Logos, branding, and marketing visuals.", icon: "🖼️" },
  { title: "Office Assistant", description: "Admin support, data entry & scheduling.", icon: "💼" },
  { title: "Tech Support", description: "Hardware/software troubleshooting & optimization.", icon: "🛠️" },
  { title: "API Integration", description: "Seamless connectivity between software systems.", icon: "🔗" },
];   

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center px-4 lg:px-16 py-2 lg:py-2">
              {/* ABOUT ME Section */}
              <div className="text-center mb-8">
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
                        <div className="flex-1 text-center lg:text-left">
                          <h2 className="text-1xl lg:text-2xl font-semibold text-white mb-1">
                            Hello, I'm <span className="text-green-500">Peter Mbugua</span>
                          </h2>
                          <p className="sm:text-[16px] lg:text-1xl font-semibold text-yellow-400 font-medium mb-0">
                            Frontend Developer & Web Designer
                          </p>

                          <p className="text-gray-300 text-left text-justify hyphens-auto leading-tight mb-1 max-w-2xl lg:mx-0 lg:text-[16px] sm:text-[12px] [word-spacing:-0.03em]">
                            Based in <strong className="text-white">Nairobi</strong>, I am{" "}
                            <strong className="text-white">Peter</strong>, a Frontend
                            Developer and Web Designer operating at the convergence of{" "}
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
                    <div className="mt-16 max-w-6xl w-full relative">
                      <div className="grid lg:grid-cols-2 gap-8">
                        {/* Experience */}
                        <div className="relative">
                          <h2
                            className="text-2xl font-bold text-green-400 mb-4"
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
                                role: "Fullstack Developer Attachment – Marps Africa Solutions",
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
                                <h3 className="text-lg font-semibold text-yellow-500">
                                  {exp.date}
                                </h3>
                                <h4 className="text-xl font-bold text-green-400">
                                  {exp.role.split(" – ")[0]} –{" "}
                                  <span className="text-yellow-500">
                                    {exp.role.split(" – ")[1]}
                                  </span>
                                </h4>
                                <ul className="list-disc ml-6">
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
                            className="text-2xl font-bold text-green-400 mb-4"
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
                                <h3 className="text-lg font-semibold text-yellow-500">
                                  {edu.date}
                                </h3>
                                <h4 className="text-xl font-bold text-green-400">
                                  {edu.institution.split(" – ")[0]} –{" "}
                                  <span className="text-yellow-500">
                                    {edu.institution.split(" – ")[1]}
                                  </span>
                                </h4>
                                <p className="ml-6">Main areas of study include:</p>
                                <ul className="list-disc ml-6">
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



                      {/* Hobbies and Interests Section */}
                      <div className="mt-1 max-w-6xl w-full">
                        <h2
                          className="text-2xl font-bold text-green-400 mb-4"
                          data-aos="fade-up"
                        >
                          HOBBIES AND INTERESTS
                        </h2>
                        <p className="text-yellow-500" data-aos="fade-up">
                          I enjoy a variety of activities outside of work. Here are some of my
                          hobbies and interests:
                        </p>
                        <ul className="list-disc ml-6 text-gray-300" data-aos="fade-up">
                          <li>Reading books on technology and personal development</li>
                          <li>Playing video games</li>
                          <li>Hiking and exploring nature</li>
                          <li>Participating in hackathons and coding competitions</li>
                          <li>Volunteering in community service projects</li>
                        </ul>
                      </div>




                      {/* Services Marquee Section */}
                      <div className="mt-1 w-full overflow-hidden bg-black py-10">
                        <h2 className="text-2xl font-heading font-bold text-green-400 mb-1 text-center" data-aos="fade-up">
                          MY SERVICES
                        </h2>
                        <p className="text-gray-400 text-center mb-4 text-sm font-sans" data-aos="fade-up">
                          Expertise flowing seamlessly
                        </p>

                        {/* Marquee Container */}
                        <div className="relative flex overflow-x-hidden group">
                          
                          {/* Fade Edges (Left & Right) for smooth entry/exit */}
                          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-black to-transparent z-10"></div>
                          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-black to-transparent z-10"></div>

                          {/* Moving Track */}
                          <div className="animate-marquee flex whitespace-nowrap gap-4 py-2">
                            {/* 
                              We duplicate the array ([...services, ...services]) to create the infinite loop illusion.
                              If you have very few items, you might need to duplicate it 3 times.
                            */}
                            {[...services, ...services, ...services].map((service, index) => (
                              <div
                                key={index}
                                className="flex-shrink-0 w-64 p-4 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-green-500/50 transition-colors duration-300"
                              >
                                {/* Icon */}
                                <div className="text-3xl mb-2">{service.icon}</div>
                                
                                {/* Title - Small & Bold */}
                                <h3 className="text-sm font-heading font-bold text-yellow-400 mb-1 truncate">
                                  {service.title}
                                </h3>
                                
                                {/* Description - Tiny & Readable */}
                                <p className="text-xs text-gray-400 font-sans leading-relaxed line-clamp-3">
                                  {service.description}
                                </p>
                              </div>
                            ))}
                          </div>
                          
                          {/* Duplicate Track for Seamless Loop (Absolute Positioned) */}
                          <div className="animate-marquee flex whitespace-nowrap gap-4 py-2 absolute top-0 left-0" aria-hidden="true">
                            {[...services, ...services, ...services].map((service, index) => (
                              <div
                                key={`dup-${index}`}
                                className="flex-shrink-0 w-64 p-4 bg-zinc-900 rounded-lg border border-zinc-800"
                              >
                                <div className="text-3xl mb-2">{service.icon}</div>
                                <h3 className="text-sm font-heading font-bold text-yellow-400 mb-1 truncate">{service.title}</h3>
                                <p className="text-xs text-gray-400 font-sans leading-relaxed line-clamp-3">{service.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>   

    </div>
  );
}
