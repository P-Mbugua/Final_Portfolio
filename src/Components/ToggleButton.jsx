import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaSuitcase,
  FaEnvelope,
  FaCog,
  FaArrowRight,
  FaGithub,
} from 'react-icons/fa';

const ToggleButton = () => {
  const [showLinks, setShowLinks] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const sidebarRef = useRef(null);

  const navItems = [
    {
      number: '01',
      label: 'Home',
      description: 'Welcome',
      path: '/home',
      icon: FaHome,
    },
    {
      number: '02',
      label: 'About',
      description: 'My story',
      path: '/about',
      icon: FaUser,
    },
    {
      number: '03',
      label: 'Portfolio',
      description: 'Selected work',
      path: '/portfolio',
      icon: FaSuitcase,
    },
    {
      number: '04',
      label: 'Skills',
      description: 'What I do',
      path: '/skills',
      icon: FaCog,
    },
    {
      number: '05',
      label: 'Contact',
      description: "Let's talk",
      path: '/contact',
      icon: FaEnvelope,
    },
  ];

  const handleToggle = () => {
    setShowLinks((prev) => !prev);
  };

  const handleLinkClick = (path) => {
    navigate(path);
    setShowLinks(false);
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setShowLinks(false);
      }
    };

    if (showLinks) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showLinks]);

  // Close with Escape
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setShowLinks(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Prevent background scrolling when menu is open on mobile
  useEffect(() => {
    if (showLinks) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [showLinks]);

  return (
    <>
      {/* =====================================================
          BACKDROP
      ====================================================== */}
      <div
        onClick={() => setShowLinks(false)}
        className={`
          fixed
          inset-0
          z-[90]
          bg-black/40
          backdrop-blur-[3px]
          transition-all
          duration-500
          ${
            showLinks
              ? 'pointer-events-auto opacity-100'
              : 'pointer-events-none opacity-0'
          }
        `}
      />

      {/* =====================================================
          FLOATING MENU BUTTON
      ====================================================== */}
      <button
        onClick={handleToggle}
        aria-label={
          showLinks
            ? 'Close navigation menu'
            : 'Open navigation menu'
        }
        aria-expanded={showLinks}
        className={`
          fixed
          left-5
          top-5
          z-[110]
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-2xl
          border
          border-black/10
          bg-white
          text-gray-900
          shadow-[0_10px_35px_rgba(0,0,0,0.18)]
          transition-all
          duration-500
          hover:scale-105
          hover:shadow-[0_15px_45px_rgba(0,0,0,0.25)]
          active:scale-90
          ${
            showLinks
              ? 'rotate-90 scale-90 opacity-0 pointer-events-none'
              : 'rotate-0 scale-100 opacity-100'
          }
        `}
      >
        <FaBars size={18} />
      </button>

      {/* =====================================================
          NAVIGATION PANEL
      ====================================================== */}
      <aside
        ref={sidebarRef}
        className={`
          fixed
          left-4
          top-4
          z-[100]
          w-[310px]
          max-w-[calc(100vw-32px)]
          overflow-hidden
          rounded-[28px]
          border
          border-white/10
          bg-[#090909]/90
          shadow-[0_30px_80px_rgba(0,0,0,0.55)]
          backdrop-blur-2xl
          transition-all
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            showLinks
              ? 'translate-y-0 scale-100 opacity-100'
              : '-translate-y-6 scale-95 opacity-0 pointer-events-none'
          }
        `}
      >
        {/* =================================================
            DECORATIVE GLOW
        ================================================== */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-green-500/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-24 -left-20 h-48 w-48 rounded-full bg-emerald-500/5 blur-3xl" />

        {/* =================================================
            HEADER
        ================================================== */}
        <div className="relative px-5 pb-4 pt-5">

          <div className="flex items-center justify-between">

            {/* Brand */}
            <div className="flex items-center gap-3">

              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-green-400
                  to-emerald-600
                  text-sm
                  font-black
                  text-black
                  shadow-lg
                  shadow-green-500/20
                "
              >
                PM
              </div>

              <div>
                <p className="text-sm font-bold tracking-tight text-white">
                  Mbugua Peter
                </p>

                <div className="mt-1 flex items-center gap-1.5">

                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />

                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                  </span>

                  <span className="text-[10px] font-medium text-gray-500">
                    Available for projects
                  </span>

                </div>
              </div>

            </div>

            {/* Close */}
            <button
              onClick={handleToggle}
              aria-label="Close navigation"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-xl
                border
                border-white/10
                bg-white/[0.04]
                text-gray-400
                transition-all
                duration-300
                hover:rotate-90
                hover:border-red-500/20
                hover:bg-red-500/10
                hover:text-red-400
                active:scale-90
              "
            >
              <FaTimes size={14} />
            </button>

          </div>

          {/* Header description */}
          <div className="mt-5">

            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-green-400">
              Navigation
            </p>

            <p className="mt-1 text-xs leading-relaxed text-gray-500">
              Explore my work, skills, experience and journey.
            </p>

          </div>

        </div>

        {/* =================================================
            NAVIGATION
        ================================================== */}
        <nav className="relative px-3 pb-3">

          <div className="space-y-1">

            {navItems.map((item, index) => {

              const Icon = item.icon;

              const isActive =
                location.pathname === item.path;

              return (
                <button
                  key={item.path}
                  onClick={() => handleLinkClick(item.path)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`
                    group
                    relative
                    flex
                    w-full
                    items-center
                    gap-3
                    overflow-hidden
                    rounded-2xl
                    px-3
                    py-3
                    text-left
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? 'bg-white/[0.07]'
                        : 'hover:bg-white/[0.045]'
                    }
                  `}
                  style={{
                    transitionDelay: showLinks
                      ? `${index * 45}ms`
                      : '0ms',
                  }}
                >

                  {/* Active background glow */}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/[0.08] via-transparent to-transparent" />
                  )}

                  {/* Active line */}
                  <span
                    className={`
                      absolute
                      left-0
                      top-1/2
                      h-8
                      w-[3px]
                      -translate-y-1/2
                      rounded-r-full
                      bg-green-400
                      shadow-[0_0_12px_rgba(74,222,128,0.7)]
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? 'scale-y-100 opacity-100'
                          : 'scale-y-0 opacity-0'
                      }
                    `}
                  />

                  {/* Number */}
                  <span
                    className={`
                      w-7
                      text-[9px]
                      font-bold
                      tracking-wider
                      transition-colors
                      ${
                        isActive
                          ? 'text-green-400'
                          : 'text-gray-700 group-hover:text-gray-500'
                      }
                    `}
                  >
                    {item.number}
                  </span>

                  {/* Icon */}
                  <span
                    className={`
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? 'bg-green-400 text-black shadow-lg shadow-green-500/20'
                          : 'bg-white/[0.05] text-gray-500 group-hover:bg-green-400/10 group-hover:text-green-400'
                      }
                    `}
                  >
                    <Icon
                      size={16}
                      className="
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                    />
                  </span>

                  {/* Text */}
                  <span className="min-w-0 flex-1">

                    <span
                      className={`
                        block
                        text-sm
                        font-semibold
                        transition-colors
                        ${
                          isActive
                            ? 'text-white'
                            : 'text-gray-300 group-hover:text-white'
                        }
                      `}
                    >
                      {item.label}
                    </span>

                    <span
                      className={`
                        mt-0.5
                        block
                        text-[10px]
                        transition-colors
                        ${
                          isActive
                            ? 'text-green-400/70'
                            : 'text-gray-600 group-hover:text-gray-500'
                        }
                      `}
                    >
                      {item.description}
                    </span>

                  </span>

                  {/* Arrow */}
                  <span
                    className={`
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? 'translate-x-0 bg-green-400/10 text-green-400 opacity-100'
                          : '-translate-x-2 text-gray-700 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                      }
                    `}
                  >
                    <FaArrowRight size={10} />
                  </span>

                </button>
              );
            })}

          </div>

        </nav>

        {/* =================================================
            FOOTER
        ================================================== */}
        <div className="relative border-t border-white/[0.07] px-4 py-4">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-[9px] uppercase tracking-[0.25em] text-gray-600">
                Let's build
              </p>

              <p className="mt-1 text-xs font-medium text-gray-400">
                Something extraordinary.
              </p>
            </div>

            <a
              href="https://github.com/p-mbugua"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub"
              className="
                group
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-xl
                border
                border-white/10
                bg-white/[0.04]
                text-gray-500
                transition-all
                duration-300
                hover:border-green-500/20
                hover:bg-green-500/10
                hover:text-green-400
              "
            >
              <FaGithub
                size={16}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </a>

          </div>

          {/* Keyboard hint */}
          <div className="mt-4 flex items-center justify-between">

            <span className="text-[9px] text-gray-700">
              Quick navigation
            </span>

            <div className="flex items-center gap-1">

              <kbd
                className="
                  rounded-md
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-1.5
                  py-0.5
                  text-[9px]
                  text-gray-600
                "
              >
                ESC
              </kbd>

              <span className="text-[9px] text-gray-700">
                to close
              </span>

            </div>

          </div>

        </div>

      </aside>
    </>
  );
};

export default ToggleButton;