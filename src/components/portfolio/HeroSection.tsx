"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#f59e0b]/5 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#06d6a0]/5 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#818cf8]/3 rounded-full blur-[150px] animate-pulse-glow" style={{ animationDelay: "3s" }} />

        {/* Grid pattern */}
        <div className="absolute inset-0 doodle-grid opacity-50" />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#f59e0b]/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Hand-drawn badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-[#f59e0b]/30 rounded-full bg-[#f59e0b]/5"
        >
          <span className="w-2 h-2 rounded-full bg-[#06d6a0] animate-pulse" />
          <span className="text-[#f59e0b] text-sm font-medium font-[family-name:var(--font-geist-mono)]">
            Available for freelance work
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4">
            <span className="text-[#e8e6e3]">Hi, I&apos;m </span>
            <span className="relative inline-block">
              <span className="text-[#f59e0b] text-glow-amber">Alex Rivers</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
              >
                <motion.path
                  d="M2 8 C50 2, 100 2, 150 6 S250 10, 298 4"
                  stroke="#f59e0b"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </svg>
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-[family-name:var(--font-caveat)] text-[#06d6a0] font-bold mb-6 text-glow-green">
            Game Designer & Developer
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl text-[#8888aa] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Crafting immersive worlds and unforgettable gameplay experiences.
          <br className="hidden sm:block" />
          From pixel art to 3D — I turn wild ideas into playable realities.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-[#f59e0b] text-[#0d0d1a] font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#f59e0b]/25"
          >
            <span className="relative z-10">View My Games</span>
            <div className="absolute inset-0 bg-[#fbbf24] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-[#2a2a4a] text-[#e8e6e3] font-bold text-lg rounded-full hover:border-[#f59e0b]/50 hover:bg-[#f59e0b]/5 transition-all duration-300"
          >
            Let&apos;s Talk
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-[#8888aa] hover:text-[#f59e0b] transition-colors"
          >
            <span className="text-xs font-[family-name:var(--font-caveat)] text-lg">
              scroll down
            </span>
            <ChevronDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>

      {/* Hand-drawn decorations */}
      <HandDrawnStars />
    </section>
  );
}

function HandDrawnStars() {
  return (
    <>
      {/* Floating star 1 */}
      <motion.div
        className="absolute top-20 left-10 sm:left-20 text-[#f59e0b]/30"
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path
            d="M16 2 L19 12 L30 12 L21 19 L24 30 L16 23 L8 30 L11 19 L2 12 L13 12 Z"
            stroke="#f59e0b"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      {/* Floating star 2 */}
      <motion.div
        className="absolute top-40 right-10 sm:right-32 text-[#06d6a0]/25"
        animate={{ y: [0, -20, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
          <path
            d="M16 2 L19 12 L30 12 L21 19 L24 30 L16 23 L8 30 L11 19 L2 12 L13 12 Z"
            stroke="#06d6a0"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </motion.div>

      {/* Floating gamepad doodle */}
      <motion.div
        className="absolute bottom-40 left-5 sm:left-16 text-[#818cf8]/20"
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect
            x="4" y="14" width="40" height="24" rx="8"
            stroke="#818cf8" strokeWidth="1.5" fill="none"
          />
          <circle cx="16" cy="26" r="3" stroke="#818cf8" strokeWidth="1.5" fill="none" />
          <line x1="30" y1="23" x2="34" y2="19" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="34" y1="23" x2="30" y2="19" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </motion.div>

      {/* Heart doodle */}
      <motion.div
        className="absolute top-1/3 right-5 sm:right-10 text-[#ef476f]/20"
        animate={{ y: [0, -12, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path
            d="M14 24 C10 20, 2 16, 2 9 C2 5, 5 2, 9 2 C11 2, 13 3, 14 5 C15 3, 17 2, 19 2 C23 2, 26 5, 26 9 C26 16, 18 20, 14 24Z"
            stroke="#ef476f" strokeWidth="1.5" fill="none"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
    </>
  );
}
