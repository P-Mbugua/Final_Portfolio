import React, { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from "motion/react";

const skills = [
  {
    skill: "ReactJS",
    level: 75,
    description: "Dynamic, component-based architectures.",
    details: "Next.js, Server Components, Zustand.",
    color: "from-cyan-400 to-blue-500",
    icon: "⚛️",
  },
  {
    skill: "HTML & CSS",
    level: 95,
    description: "Semantic, accessible, responsive layouts.",
    details: "Tailwind, SCSS, WCAG 2.1, Grid.",
    color: "from-orange-400 to-pink-500",
    icon: "🎨",
  },
  {
    skill: "JavaScript",
    level: 55,
    description: "ES6+ logic, async programming, DOM.",
    details: "Closures, Event Loop, TypeScript.",
    color: "from-yellow-300 to-yellow-500",
    icon: "📜",
  },
  {
    skill: "Python",
    level: 45,
    description: "Backend logic, scripting, automation.",
    details: "Django, FastAPI, Data Scripting.",
    color: "from-blue-400 to-indigo-500",
    icon: "🐍",
  },
  {
    skill: "Tools",
    level: 85,
    description: "Git, Figma, CI/CD, Expo.",
    details: "GitHub Actions, Design Systems.",
    color: "from-purple-400 to-pink-500",
    icon: "🛠️",
  },
  {
    skill: "SQLite3",
    level: 65,
    description: "Lightweight relational database management.",
    details: "Local-first schemas, Mobile persistence.",
    color: "from-emerald-400 to-cyan-500",
    icon: "🗄️",
  },
  {
    skill: "Communication",
    level: 85,
    description: "Articulating complex technical concepts.",
    details: "Stakeholder management, Documentation.",
    color: "from-rose-400 to-red-500",
    icon: "🗣️",
  },
  {
    skill: "Teamwork",
    level: 90,
    description: "Agile methodologies, collaborative dev.",
    details: "Scrum, Code Reviews, Pair Programming.",
    color: "from-indigo-400 to-purple-500",
    icon: "🤝",
  },
  {
    skill: "Problem-Solving",
    level: 80,
    description: "Algorithmic thinking, debugging.",
    details: "Root cause analysis, Optimization.",
    color: "from-teal-400 to-emerald-500",
    icon: "🧩",
  },
  {
    skill: "Adaptability",
    level: 75,
    description: "Mastering new stacks rapidly.",
    details: "Cross-framework migration, Learning agility.",
    color: "from-amber-400 to-orange-500",
    icon: "🔄",
  },
  {
    skill: "Time Management",
    level: 85,
    description: "Prioritizing for efficient delivery.",
    details: "Eisenhower Matrix, Sprint planning.",
    color: "from-blue-400 to-cyan-500",
    icon: "⏳",
  },
  {
    skill: "Creativity",
    level: 80,
    description: "Innovative UI/UX, design thinking.",
    details: "Creative coding, User-centric design.",
    color: "from-fuchsia-400 to-pink-500",
    icon: "💡",
  },
];

// --- Components ---

const SkillModal = ({ skill, onClose }) => {
  if (!skill) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 10 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md bg-gray-900/90 border border-white/10 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl"
      >
        {/* Top Glow */}
        <div
          className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${skill.color}`}
        />

        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-4">
              <span className="text-5xl filter drop-shadow-lg">
                {skill.icon}
              </span>
              <div>
                <h3 className="text-[3xl] font-bold text-white tracking-tight">
                  {skill.skill}
                </h3>
                <span className="text-sm font-mono text-gray-400 uppercase tracking-widest">
                  Proficiency: {skill.level}%
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-white transition-colors text-2xl leading-none"
            >
              ✕
            </button>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
            {skill.description}
          </p>

          <div className="bg-white/5 rounded-2xl p-5 border border-white/5">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              Technical Depth
            </h4>
            <p className="text-gray-300 font-mono text-sm">{skill.details}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const SkillCard = ({ skill, index, onClick, mousePos }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.04,
        type: "spring",
        stiffness: 80,
        damping: 15,
      }}
      whileHover={{ y: -1, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(skill)}
      className="group relative bg-gray-900/40 backdrop-blur-sm border border-white/5 p-4 rounded-3xl overflow-hidden cursor-pointer flex flex-col justify-between h-full"
      style={{
        // Subtle spotlight effect following mouse
        background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.04), transparent 40%)`,
      }}
    >
      {/* Inner Glow on Hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}
      />

      <div className="relative z-10">
        <div className="text-4xl mb-2 transform group-hover:scale-110 transition-transform duration-500 ease-out">
          {skill.icon}
        </div>
        <h3 className="text-[16px] font-bold text-white mb-2 tracking-tight">
          {skill.skill}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed font-light line-clamp-2">
          {skill.description}
        </p>
      </div>

      <div className="relative z-10 mt-2">
        <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
            Level
          </span>
          <span className="text-sm font-bold text-white font-mono">
            {skill.level}%
          </span>
        </div>
        <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            className={`h-full bg-gradient-to-r ${skill.color} shadow-[0_0_10px_rgba(255,255,255,0.2)]`}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Scroll Progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Mouse Move Handler for Spotlight
  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="bg-black min-h-screen text-white px-6 py-12 lg:px-12 overflow-hidden relative font-sans selection:bg-white/20"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Minimalist Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <h1 className="text-[18px] lg:text-[18px] font-bold text-green-500 mb-1 tracking-tighter">
            EXPERTISE
          </h1>
          <p className="text-yellow-500 text-[10px] lg:text-[14px]  font-light leading-normal">
            A fusion of technical precision and creative problem-solving.
          </p>
        </motion.div>

        {/* Unified Grid - No Filters, Just Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.skill}
              skill={skill}
              index={index}
              onClick={setSelectedSkill}
              mousePos={mousePos}
            />
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <SkillModal
            skill={selectedSkill}
            onClose={() => setSelectedSkill(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
