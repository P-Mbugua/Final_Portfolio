import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ThreeScene from "../Components/ThreeScene";
import profile from "../assets/Photos/mbugua.png";

export default function Home() {
  const roles = [
    "Junior Frontend Developer",
    "React Enthusiast",
    "UI Craftsman",
  ];
  const [currentRole, setCurrentRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const typingSpeed = 100;
  const pauseTime = 2000;
  const fadeDuration = 400;

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    let interval;
    const typeRole = () => {
      const target = roles[roleIndex];
      if (currentRole.length < target.length) {
        setCurrentRole((prev) => prev + target.charAt(prev.length));
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setFade(true);
          setTimeout(() => {
            setRoleIndex((i) => (i + 1) % roles.length);
            setCurrentRole("");
            setFade(false);
          }, fadeDuration);
        }, pauseTime);
      }
    };
    interval = setInterval(typeRole, typingSpeed);
    return () => clearInterval(interval);
  }, [roleIndex, currentRole]);

  return (
    <div className="relative h-screen overflow-hidden overscroll-none bg-black text-white font-inter">
      {/* 3D Background */}
      <ThreeScene className="absolute inset-0 w-full h-full z-0" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-br from-black/60 via-transparent to-black/40" />

      {/* Dot grid texture */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />



      

      {/* ===== MOBILE ===== */}
      <div
        className={`md:hidden relative z-10 flex flex-col items-center justify-center h-full px-5 space-y-4 transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        {/* Eyebrow */}
        <p className="text-yellow-500 font-['Bebas_Neue',sans-serif] tracking-[0.3em] text-xs uppercase">
          Hello There!!
        </p>

        {/* Name */}
        <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-center">
          <span className="text-gray-300">I'm</span> <span>Mbugua Peter</span>
        </h1>

        <div
          className={`relative flex-shrink-0 transition-all duration-1000 delay-300 ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          {/* Outer glow */}
          <div className="absolute inset-0 rounded-full bg-yellow-500/15 blur-[60px] scale-125" />
          {/* Rotating ring */}
          <div className="absolute -inset-1.5 rounded-full border border-dashed border-yellow-500/20 animate-[spin_20s_linear_infinite]" />
          {/* Photo */}
          <img
            src={profile}
            alt="Mbugua Peter"
            className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] object-cover rounded-full border-2 border-yellow-500/40 shadow-[0_0_60px_rgba(234,179,8,0.2)]"
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>

        {/* Role */}
        <p className="text-sm sm:text-base text-gray-300 h-6 flex items-center gap-1">
          A{" "}
          <span
            className={`font-semibold text-green-400 transition-opacity duration-300 ${fade ? "opacity-0" : "opacity-100"}`}
          >
            {currentRole}
          </span>
          <span className="ml-0.5 animate-pulse text-green-400 font-light">
            |
          </span>
        </p>

        {/* Tagline */}
        <p className="text-gray-400 text-xs sm:text-sm max-w-xs leading-relaxed text-center">
          Building clean, responsive web experiences.
        </p>

        

        {/* Divider */}
        <div className="w-12 h-px bg-gradient-to-r from-yellow-500 to-transparent  " />


        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/5 backdrop-blur-sm text-green-400 text-[11px] font-medium tracking-wide">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
          </span>
          Open to opportunities
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-1">
          <Link to="/contact">
            <button className="group w-full sm:w-auto px-7 py-3 text-xs sm:text-sm font-bold bg-yellow-500 text-black rounded-full hover:bg-yellow-400 hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98]">
              <span className="flex items-center justify-center gap-2">
                GET IN TOUCH
                <svg
                  className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </button>
          </Link>
          <Link to="/portfolio">
            <button className="w-full sm:w-auto px-7 py-3 text-xs sm:text-sm font-bold border border-gray-700 text-gray-300 rounded-full hover:border-yellow-500/60 hover:text-yellow-400 hover:shadow-[0_0_16px_rgba(234,179,8,0.15)] transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98]">
              MY WORKS
            </button>
          </Link>
        </div>
      </div>







      {/* ===== DESKTOP ===== */}
      <div className="hidden md:grid md:grid-cols-2 items-center justify-items-center min-h-screen px-16 lg:px-24 gap-20 relative z-10">
        {/* Left: Text */}
        <div
          className={`flex flex-col items-start text-left space-y-4 max-w-xl transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >

          {/* Eyebrow */}
          <p className="text-yellow-500 font-['Bebas_Neue',sans-serif] tracking-[0.35em] text-2xl uppercase">
            Hello There!!
          </p>

          {/* Name */}
          <h1 className="text-5xl lg:text-5xl font-extrabold leading-[1.05] tracking-tight">
              <span className="text-gray-300">I'm</span>    Mbugua <span className="text-yellow-500">Peter</span>
          </h1>

          {/* Role */}
          <p className="text-2xl text-gray-300 h-8 flex items-center gap-1">
            A  {" "}
            <span
              className={`font-semibold text-green-400 transition-opacity duration-300 ${fade ? "opacity-0" : "opacity-100"}`}
            >
              {currentRole}
            </span>
            <span className="ml-0.5 animate-pulse text-green-400 font-light">
              |
            </span>
          </p>

          {/* Tagline */}
          <p className="text-gray-400 text-base max-w-md leading-relaxed">
            Building clean, responsive web.
          </p>

          {/* Divider */}
          <div className="w-16 h-px bg-gradient-to-r from-yellow-500 to-transparent" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/5 backdrop-blur-sm text-green-400 text-sm font-medium tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Open to opportunities
          </div>

          {/* Buttons */}
          <div className="flex flex-row items-center gap-4 mt-2">
            <Link to="/contact">
              <button className="group px-8 py-3.5 text-sm font-bold bg-yellow-500 text-black rounded-full hover:bg-yellow-400 hover:text-white transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98]">
                <span className="flex items-center gap-2">
                  GET IN TOUCH
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </button>
            </Link>
            <Link to="/portfolio">
              <button className="px-8 py-3.5 text-sm font-bold border border-gray-700 text-gray-300 rounded-full hover:border-yellow-500/60 hover:text-yellow-400  transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98]">
                MY WORKS
              </button>
            </Link>
          </div>
        </div>

        {/* Right: Photo */}
        <div
          className={`relative flex-shrink-0 transition-all duration-1000 delay-300 ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
         
          {/* Rotating ring */}
          <div className="absolute -inset-1.5 rounded-full border border-dashed border-yellow-500/20 animate-[spin_20s_linear_infinite]" />
          {/* Photo */}
          <img
            src={profile}
            alt="Mbugua Peter"
            className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] object-cover rounded-full border-2 border-yellow-500/40 shadow-[0_0_60px_rgba(234,179,8,0.2)]"
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>
      </div>
    </div>
  );
}
