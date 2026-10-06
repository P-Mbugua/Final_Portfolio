import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useInView,
  animate,
} from "motion/react";

const FONT_SERIF = "'Fraunces', serif";
const FONT_SANS = "'Inter', sans-serif";
const FONT_MONO = "'JetBrains Mono', monospace";

const skills = [
  { skill: "ReactJS", level: 75, description: "Dynamic, component-based architectures.", details: "Next.js, Server Components, Zustand.", icon: "⚛️" },
  { skill: "HTML & CSS", level: 95, description: "Semantic, accessible, responsive layouts.", details: "Tailwind, SCSS, WCAG 2.1, Grid.", icon: "🎨" },
  { skill: "JavaScript", level: 55, description: "ES6+ logic, async programming, DOM.", details: "Closures, Event Loop, TypeScript.", icon: "📜" },
  { skill: "Python", level: 45, description: "Backend logic, scripting, automation.", details: "Django, FastAPI, Data Scripting.", icon: "🐍" },
  { skill: "Tools", level: 85, description: "Git, Figma, CI/CD, Expo.", details: "GitHub Actions, Design Systems.", icon: "🛠️" },
  { skill: "SQLite3", level: 65, description: "Lightweight relational database management.", details: "Local-first schemas, Mobile persistence.", icon: "🗄️" },
  { skill: "Communication", level: 85, description: "Articulating complex technical concepts.", details: "Stakeholder management, Documentation.", icon: "🗣️" },
  { skill: "Teamwork", level: 90, description: "Agile methodologies, collaborative dev.", details: "Scrum, Code Reviews, Pair Programming.", icon: "🤝" },
  { skill: "Problem-Solving", level: 80, description: "Algorithmic thinking, debugging.", details: "Root cause analysis, Optimization.", icon: "🧩" },
  { skill: "Adaptability", level: 75, description: "Mastering new stacks rapidly.", details: "Cross-framework migration, Learning agility.", icon: "🔄" },
  { skill: "Time Management", level: 85, description: "Prioritizing for efficient delivery.", details: "Eisenhower Matrix, Sprint planning.", icon: "⏳" },
  { skill: "Creativity", level: 80, description: "Innovative UI/UX, design thinking.", details: "Creative coding, User-centric design.", icon: "💡" },
];

const TIERS = [
  { key: "expert", label: "Expert", threshold: 85, rangeLabel: "85–100%", color: "#4ADE80", glow: "74,222,128" },
  { key: "proficient", label: "Proficient", threshold: 65, rangeLabel: "65–84%", color: "#38BDF8", glow: "56,189,248" },
  { key: "developing", label: "Developing", threshold: 0, rangeLabel: "Below 65%", color: "#FB923C", glow: "251,146,60" },
];

const getTier = (level) => TIERS.find((t) => level >= t.threshold) || TIERS[TIERS.length - 1];

const groupedSkills = TIERS.map((tier) => ({
  ...tier,
  items: skills.filter((s) => getTier(s.level).key === tier.key).sort((a, b) => b.level - a.level),
})).filter((g) => g.items.length > 0);

const average = Math.round(skills.reduce((sum, s) => sum + s.level, 0) / skills.length);

// --- Components ---

const CornerBrackets = ({ color }) => (
  <>
    <span className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l opacity-30 group-hover:opacity-100 transition-opacity duration-300" style={{ borderColor: color }} />
    <span className="absolute top-1.5 right-1.5 w-2 h-2 border-t border-r opacity-30 group-hover:opacity-100 transition-opacity duration-300" style={{ borderColor: color }} />
    <span className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b border-l opacity-30 group-hover:opacity-100 transition-opacity duration-300" style={{ borderColor: color }} />
    <span className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r opacity-30 group-hover:opacity-100 transition-opacity duration-300" style={{ borderColor: color }} />
  </>
);

const AnimatedLevel = ({ value, tier }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);
  const widthPct = useTransform(count, (v) => `${v}%`);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, value, { duration: 1.4, ease: "easeOut", delay: 0.15 });
    return controls.stop;
  }, [isInView, value]);

  useEffect(() => {
    const unsub = count.on("change", (v) => setDisplay(Math.round(v)));
    return unsub;
  }, [count]);

  return (
    <div ref={ref} style={{ marginTop: "clamp(0.75rem, 1.5vw, 1.1rem)" }}>
      <div className="flex items-center justify-between mb-1.5">
        <span
          className="uppercase"
          style={{ fontFamily: FONT_MONO, fontSize: "clamp(0.55rem, 0.6vw, 0.62rem)", letterSpacing: "0.18em", color: "rgba(255,255,255,0.35)" }}
        >
          Calibration
        </span>
        <span
          className="tabular-nums font-medium"
          style={{ fontFamily: FONT_MONO, fontSize: "clamp(0.7rem, 0.9vw, 0.8rem)", color: tier.color }}
        >
          {display}%
        </span>
      </div>
      <div className="relative w-full rounded-full bg-white/[0.08]" style={{ height: 2 }}>
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{ width: widthPct, background: tier.color, boxShadow: `0 0 10px rgba(${tier.glow},0.55)` }}
        />
        <motion.div
          className="absolute top-1/2 rounded-full"
          style={{
            left: widthPct,
            width: 5,
            height: 5,
            transform: "translate(-50%, -50%)",
            background: tier.color,
            boxShadow: `0 0 7px rgba(${tier.glow},0.9)`,
          }}
        />
      </div>
    </div>
  );
};

const SkillModal = ({ skill, onClose }) => {
  if (!skill) return null;
  const tier = getTier(skill.level);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.96, opacity: 0, y: 8 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.96, opacity: 0, y: 8 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full rounded-3xl overflow-hidden border border-white/10"
        style={{ background: "#0B0F0D", maxWidth: "min(420px, 92vw)" }}
      >
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: tier.color }} />

        <div style={{ padding: "clamp(1.5rem, 3vw, 2.25rem)" }}>
          <div className="flex justify-between items-start mb-5">
            <div className="flex items-center gap-3.5">
              <span style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)" }}>{skill.icon}</span>
              <div>
                <h3
                  className="text-white tracking-tight leading-tight"
                  style={{ fontFamily: FONT_SERIF, fontWeight: 500, fontSize: "clamp(1.15rem, 2vw, 1.5rem)" }}
                >
                  {skill.skill}
                </h3>
                <span
                  className="inline-block mt-1.5 uppercase rounded-full border"
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: "0.6rem",
                    letterSpacing: "0.15em",
                    padding: "2px 8px",
                    color: tier.color,
                    borderColor: `${tier.color}55`,
                  }}
                >
                  {tier.label} · {skill.level}%
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white/35 hover:text-white transition-colors leading-none"
              style={{ fontSize: "1.1rem" }}
            >
              ✕
            </button>
          </div>

          <p
            className="text-white/55 leading-relaxed mb-5"
            style={{ fontFamily: FONT_SANS, fontWeight: 300, fontSize: "clamp(0.85rem, 1.1vw, 0.95rem)" }}
          >
            {skill.description}
          </p>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03]" style={{ padding: "1.1rem 1.25rem" }}>
            <h4
              className="uppercase text-white/35 mb-1.5"
              style={{ fontFamily: FONT_MONO, fontSize: "0.6rem", letterSpacing: "0.18em" }}
            >
              Technical Depth
            </h4>
            <p className="text-white/65" style={{ fontFamily: FONT_MONO, fontSize: "0.8rem" }}>
              {skill.details}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const SkillCard = ({ skill, tier, index, onClick }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty("--x", `${e.clientX - rect.left}px`);
    cardRef.current.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.985 }}
      onClick={() => onClick(skill)}
      className="group relative rounded-2xl cursor-pointer overflow-hidden border border-white/10"
      style={{
        padding: "clamp(0.85rem, 1.6vw, 1.25rem)",
        background:
          "radial-gradient(420px circle at var(--x,50%) var(--y,50%), rgba(255,255,255,0.05), transparent 45%), #0B0F0D",
      }}
    >
      <CornerBrackets color={tier.color} />

      <div className="flex items-center gap-2.5 mb-2">
        <span style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)" }}>{skill.icon}</span>
        <h3
          className="text-white tracking-tight leading-tight"
          style={{ fontFamily: FONT_SANS, fontWeight: 500, fontSize: "clamp(0.8rem, 1vw, 0.92rem)" }}
        >
          {skill.skill}
        </h3>
      </div>

      <p
        className="text-white/40 leading-relaxed line-clamp-2"
        style={{ fontFamily: FONT_SANS, fontWeight: 300, fontSize: "clamp(0.72rem, 0.85vw, 0.8rem)" }}
      >
        {skill.description}
      </p>

      <AnimatedLevel value={skill.level} tier={tier} />
    </motion.div>
  );
};

const AverageGauge = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);
  const background = useTransform(
    count,
    (v) => `conic-gradient(#4ADE80 ${v * 3.6}deg, rgba(255,255,255,0.08) 0deg)`
  );

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, value, { duration: 1.8, ease: "easeOut", delay: 0.3 });
    return controls.stop;
  }, [isInView, value]);

  useEffect(() => {
    const unsub = count.on("change", (v) => setDisplay(Math.round(v)));
    return unsub;
  }, [count]);

  return (
    <div ref={ref} className="relative shrink-0" style={{ width: "clamp(4.5rem, 7vw, 6rem)", height: "clamp(4.5rem, 7vw, 6rem)" }}>
      <motion.div className="absolute inset-0 rounded-full" style={{ background }} />
      <div
        className="absolute rounded-full flex flex-col items-center justify-center border border-white/10"
        style={{ inset: 5, background: "#07090a" }}
      >
        <span className="tabular-nums text-white font-medium" style={{ fontFamily: FONT_MONO, fontSize: "clamp(1.1rem, 1.6vw, 1.4rem)" }}>
          {display}
        </span>
        <span className="uppercase text-white/35" style={{ fontFamily: FONT_MONO, fontSize: "0.55rem", letterSpacing: "0.15em" }}>
          avg
        </span>
      </div>
    </div>
  );
};

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div
      ref={containerRef}
      className="min-h-screen text-white relative overflow-hidden"
      style={{
        fontFamily: FONT_SANS,
        background: "#07090a",
        backgroundImage: "radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)",
        backgroundSize: "26px 26px",
        padding: "clamp(1.25rem, 5vw, 4rem) clamp(1rem, 6vw, 5rem)",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap');
        * { box-sizing: border-box; }
      `}</style>

      {/* Scroll progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 origin-left z-50"
        style={{ scaleX, height: 2, background: "linear-gradient(90deg, #4ADE80, #38BDF8)" }}
      />

      <div className="relative z-10 mx-auto" style={{ maxWidth: "min(1500px, 96vw)" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-6"
          style={{ marginBottom: "clamp(2.5rem, 6vw, 4.5rem)" }}
        >
          <div>
            <span
              className="uppercase text-emerald-400/80"
              style={{ fontFamily: FONT_MONO, fontSize: "clamp(0.6rem, 0.8vw, 0.68rem)", letterSpacing: "0.32em" }}
            >
              Capability Diagnostic
            </span>
            <h1
              className="tracking-tight text-white"
              style={{
                fontFamily: FONT_SERIF,
                fontWeight: 500,
                fontSize: "clamp(1.9rem, 4vw, 3.1rem)",
                marginTop: "0.6rem",
                marginBottom: "0.85rem",
                lineHeight: 1.05,
              }}
            >
              Calibrated Skillset
            </h1>
            <p
              className="text-white/45 leading-relaxed"
              style={{ fontFamily: FONT_SANS, fontWeight: 300, fontSize: "clamp(0.78rem, 1vw, 0.92rem)", maxWidth: "34rem" }}
            >
              Every reading below is measured, not guessed — grouped by proficiency tier
              so strengths and growth areas are equally visible.
            </p>

            <div className="flex flex-wrap gap-x-5 gap-y-2" style={{ marginTop: "1.25rem" }}>
              {TIERS.map((t) => (
                <div key={t.key} className="flex items-center gap-1.5">
                  <span className="rounded-full" style={{ width: 6, height: 6, background: t.color, boxShadow: `0 0 6px ${t.color}` }} />
                  <span style={{ fontFamily: FONT_MONO, fontSize: "0.68rem", color: "rgba(255,255,255,0.5)" }}>
                    {t.label} <span style={{ color: "rgba(255,255,255,0.25)" }}>· {t.rangeLabel}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <AverageGauge value={average} />
        </motion.div>

        {/* Tier sections */}
        {groupedSkills.map((group) => (
          <div key={group.key} style={{ marginBottom: "clamp(2.25rem, 5vw, 3.5rem)" }}>
            <div className="flex items-center gap-2.5" style={{ marginBottom: "1.1rem" }}>
              <span className="rounded-full" style={{ width: 6, height: 6, background: group.color, boxShadow: `0 0 8px ${group.color}` }} />
              <h2
                className="uppercase text-white/65"
                style={{ fontFamily: FONT_MONO, fontSize: "clamp(0.68rem, 0.85vw, 0.76rem)", letterSpacing: "0.22em" }}
              >
                {group.label}
              </h2>
              <span style={{ fontFamily: FONT_MONO, fontSize: "0.68rem", color: "rgba(255,255,255,0.28)" }}>
                {group.rangeLabel} · {group.items.length} skill{group.items.length > 1 ? "s" : ""}
              </span>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
              style={{ gap: "clamp(0.75rem, 1.2vw, 1.1rem)" }}
            >
              {group.items.map((skill, i) => (
                <SkillCard key={skill.skill} skill={skill} tier={group} index={i} onClick={setSelectedSkill} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedSkill && <SkillModal skill={selectedSkill} onClose={() => setSelectedSkill(null)} />}
      </AnimatePresence>
    </div>
  );
}