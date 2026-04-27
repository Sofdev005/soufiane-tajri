"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Game Engines",
    color: "#f59e0b",
    icon: "🎮",
    skills: [
      { name: "Unity", level: 95 },
      { name: "Unreal Engine", level: 80 },
      { name: "Godot", level: 75 },
      { name: "GameMaker", level: 70 },
    ],
  },
  {
    title: "Programming",
    color: "#06d6a0",
    icon: "💻",
    skills: [
      { name: "C#", level: 95 },
      { name: "C++", level: 80 },
      { name: "JavaScript", level: 85 },
      { name: "Python", level: 75 },
    ],
  },
  {
    title: "Art & Design",
    color: "#ef476f",
    icon: "🎨",
    skills: [
      { name: "Pixel Art", level: 90 },
      { name: "3D Modeling", level: 70 },
      { name: "UI/UX Design", level: 85 },
      { name: "Animation", level: 80 },
    ],
  },
  {
    title: "Other Tools",
    color: "#818cf8",
    icon: "🛠️",
    skills: [
      { name: "Blender", level: 75 },
      { name: "Photoshop", level: 85 },
      { name: "Aseprite", level: 90 },
      { name: "FMOD / Wwise", level: 70 },
    ],
  },
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm text-[#e8e6e3] font-medium">{name}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.5 }}
          className="text-xs font-mono"
          style={{ color }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-3 bg-[#0d0d1a] rounded-full overflow-hidden border border-[#2a2a4a]/50">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          className="h-full rounded-full relative overflow-hidden"
          style={{ backgroundColor: color }}
        >
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, delay: delay + 1 }}
            style={{
              background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)`,
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2a2a4a] to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#818cf8]/3 rounded-full blur-[150px]" />
      </div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-[family-name:var(--font-caveat)] text-[#f59e0b] text-xl sm:text-2xl">
            ✏️ What I know
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2 mb-4">
            My <span className="hand-underline">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-[#f59e0b] mx-auto rounded-full" />
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.15 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative p-6 bg-[#1e1e36]/50 border border-[#2a2a4a]/50 rounded-2xl hover:border-opacity-100 transition-all duration-300 overflow-hidden"
              style={{
                // @ts-expect-error CSS custom property
                "--hover-color": category.color,
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${category.color}10, transparent 70%)`,
                }}
              />

              <div className="relative z-10">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <motion.span
                    className="text-2xl"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: catIndex * 0.3 }}
                  >
                    {category.icon}
                  </motion.span>
                  <h3
                    className="text-xl font-bold"
                    style={{ color: category.color }}
                  >
                    {category.title}
                  </h3>
                  {/* Doodle line */}
                  <svg className="flex-1 h-2 ml-2" viewBox="0 0 200 8" fill="none">
                    <path
                      d="M0 4 Q25 0 50 4 T100 4 T150 4 T200 4"
                      stroke={category.color}
                      strokeWidth="1.5"
                      fill="none"
                      opacity="0.3"
                      strokeDasharray="4 4"
                      className="animate-dash"
                    />
                  </svg>
                </div>

                {/* Skill bars */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={category.color}
                      delay={catIndex * 0.15 + skillIndex * 0.1}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hand-drawn decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="flex justify-center mt-12 gap-6"
        >
          {/* Floating code bracket doodle */}
          <motion.div
            animate={{ y: [0, -5, 0], rotate: [0, 3, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-[#f59e0b]/20"
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M12 8 L4 20 L12 32" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path d="M28 8 L36 20 L28 32" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" fill="none" />
              <line x1="22" y1="5" x2="18" y2="35" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </motion.div>

          <motion.div
            animate={{ y: [0, -7, 0], rotate: [0, -3, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="text-[#06d6a0]/20"
          >
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <path d="M18 4 L22 14 L33 14 L24 21 L27 32 L18 25 L9 32 L12 21 L3 14 L14 14 Z" stroke="#06d6a0" strokeWidth="1.5" fill="none" />
            </svg>
          </motion.div>

          <motion.div
            animate={{ y: [0, -4, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 2 }}
            className="text-[#ef476f]/20"
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="12" stroke="#ef476f" strokeWidth="1.5" fill="none" />
              <circle cx="16" cy="16" r="6" stroke="#ef476f" strokeWidth="1.5" fill="none" />
              <circle cx="16" cy="16" r="1.5" fill="#ef476f" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
