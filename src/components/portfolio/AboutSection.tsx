"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2a2a4a] to-transparent" />
        <div className="absolute -right-20 top-1/2 w-40 h-40 bg-[#06d6a0]/5 rounded-full blur-[80px]" />
        <div className="absolute -left-20 bottom-1/4 w-60 h-60 bg-[#f59e0b]/3 rounded-full blur-[100px]" />
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
            ✏️ Who am I?
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2 mb-4">
            About <span className="hand-underline">Me</span>
          </h2>
          <div className="w-20 h-1 bg-[#f59e0b] mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Avatar / Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Glowing background circle */}
              <div className="absolute inset-0 m-auto w-64 h-64 sm:w-72 sm:h-72 bg-[#f59e0b]/10 rounded-full blur-3xl animate-pulse-glow" />

              {/* Avatar frame with hand-drawn border */}
              <motion.div
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative w-64 h-64 sm:w-72 sm:h-72 hand-border-circle p-1 border-[#f59e0b]/40"
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-[#1e1e36] flex items-center justify-center">
                  {/* Game developer illustration */}
                  <svg
                    viewBox="0 0 300 300"
                    fill="none"
                    className="w-full h-full"
                  >
                    {/* Monitor */}
                    <rect x="60" y="80" width="180" height="120" rx="10" stroke="#f59e0b" strokeWidth="2.5" fill="#161628" />
                    <rect x="70" y="90" width="160" height="100" rx="4" stroke="#2a2a4a" strokeWidth="1" fill="#0d0d1a" />

                    {/* Code on screen */}
                    <rect x="82" y="105" width="40" height="4" rx="2" fill="#f59e0b" opacity="0.6" />
                    <rect x="82" y="115" width="80" height="4" rx="2" fill="#06d6a0" opacity="0.4" />
                    <rect x="92" y="125" width="60" height="4" rx="2" fill="#818cf8" opacity="0.4" />
                    <rect x="92" y="135" width="50" height="4" rx="2" fill="#ef476f" opacity="0.4" />
                    <rect x="82" y="145" width="70" height="4" rx="2" fill="#f59e0b" opacity="0.4" />
                    <rect x="92" y="155" width="45" height="4" rx="2" fill="#06d6a0" opacity="0.3" />
                    <rect x="92" y="165" width="90" height="4" rx="2" fill="#818cf8" opacity="0.3" />

                    {/* Monitor stand */}
                    <rect x="130" y="200" width="40" height="15" rx="2" stroke="#f59e0b" strokeWidth="2" fill="#161628" />
                    <rect x="110" y="215" width="80" height="8" rx="4" stroke="#f59e0b" strokeWidth="2" fill="#161628" />

                    {/* Keyboard */}
                    <rect x="90" y="235" width="120" height="30" rx="6" stroke="#2a2a4a" strokeWidth="2" fill="#1e1e36" />
                    {[0, 1, 2, 3].map((row) =>
                      [0, 1, 2, 3, 4, 5, 6].map((col) => (
                        <rect
                          key={`${row}-${col}`}
                          x={100 + col * 14}
                          y={241 + row * 6}
                          width={10}
                          height={4}
                          rx={1}
                          fill="#2a2a4a"
                          opacity={0.6}
                        />
                      ))
                    )}

                    {/* Coffee mug */}
                    <rect x="220" y="240" width="25" height="25" rx="4" stroke="#f59e0b" strokeWidth="2" fill="#161628" />
                    <path d="M245 248 Q255 248 255 255 Q255 262 245 262" stroke="#f59e0b" strokeWidth="2" fill="none" />
                    {/* Steam */}
                    <motion.g animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 2, repeat: Infinity }}>
                      <path d="M228 238 Q230 230 228 224" stroke="#8888aa" strokeWidth="1" fill="none" opacity="0.5" />
                      <path d="M236 236 Q238 228 236 222" stroke="#8888aa" strokeWidth="1" fill="none" opacity="0.3" />
                    </motion.g>

                    {/* Gamepad next to keyboard */}
                    <g transform="translate(55, 235)">
                      <rect width="30" height="18" rx="6" stroke="#06d6a0" strokeWidth="1.5" fill="#161628" />
                      <circle cx="10" cy="10" r="2.5" stroke="#06d6a0" strokeWidth="1" fill="none" />
                    </g>

                    {/* Sparkles */}
                    <motion.circle cx="50" cy="90" r="2" fill="#f59e0b" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity }} />
                    <motion.circle cx="255" cy="75" r="2" fill="#06d6a0" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
                    <motion.circle cx="250" cy="270" r="1.5" fill="#ef476f" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} />
                  </svg>
                </div>
              </motion.div>

              {/* Floating decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 text-3xl"
                animate={{ y: [0, -10, 0], rotate: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M16 2 L19 12 L30 12 L21 19 L24 30 L16 23 L8 30 L11 19 L2 12 L13 12Z" stroke="#f59e0b" strokeWidth="1.5" fill="#f59e0b" fillOpacity="0.2" />
                </svg>
              </motion.div>

              <motion.div
                className="absolute -bottom-2 -left-6 text-2xl"
                animate={{ y: [0, 8, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              >
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="10" stroke="#06d6a0" strokeWidth="1.5" fill="#06d6a0" fillOpacity="0.1" />
                  <path d="M10 14 L13 17 L19 11" stroke="#06d6a0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg sm:text-xl text-[#8888aa] leading-relaxed">
              I&apos;m a passionate <span className="text-[#f59e0b] font-semibold">game designer and developer</span> with
              over 5 years of experience creating interactive experiences that captivate players.
            </p>

            <p className="text-lg sm:text-xl text-[#8888aa] leading-relaxed">
              From conceptualizing game mechanics to implementing pixel-perfect UI, I thrive at the intersection
              of <span className="text-[#06d6a0] font-semibold">creative storytelling</span> and
              <span className="text-[#818cf8] font-semibold"> technical execution</span>.
            </p>

            {/* Stats cards */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { number: "5+", label: "Years Exp", color: "#f59e0b" },
                { number: "20+", label: "Games Shipped", color: "#06d6a0" },
                { number: "50K+", label: "Players", color: "#ef476f" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  className="text-center p-4 bg-[#1e1e36]/50 border border-[#2a2a4a]/50 rounded-2xl hover:border-[#f59e0b]/20 transition-colors duration-300"
                >
                  <div className="text-2xl sm:text-3xl font-bold" style={{ color: stat.color }}>
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-[#8888aa] mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Fun fact note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1 }}
              className="relative mt-6 p-4 bg-[#f59e0b]/5 border-l-4 border-[#f59e0b]/50 hand-border-alt border-l-4"
            >
              <p className="font-[family-name:var(--font-caveat)] text-lg text-[#f59e0b]">
                🎯 Fun fact: I&apos;ve been gaming since I could hold a controller. My first game was Super Mario Bros on the NES!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
