"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WavingCharacter() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: -100, rotate: 180 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          onClick={() => setVisible(false)}
          className="fixed bottom-6 right-6 z-40 cursor-pointer group"
          title="Click to dismiss!"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-[#f59e0b]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Character SVG */}
            <svg
              width="80"
              height="100"
              viewBox="0 0 80 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-lg filter transition-all duration-300 group-hover:drop-shadow-[0_0_20px_rgba(245,158,11,0.4)]"
            >
              {/* Body */}
              <ellipse cx="40" cy="72" rx="18" ry="22" fill="#1e1e36" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />

              {/* Face */}
              <circle cx="40" cy="38" r="20" fill="#1e1e36" stroke="#f59e0b" strokeWidth="2" />

              {/* Eyes */}
              <circle cx="33" cy="35" r="3" fill="#f59e0b" />
              <circle cx="47" cy="35" r="3" fill="#f59e0b" />
              <circle cx="34" cy="34" r="1" fill="#0d0d1a" />
              <circle cx="48" cy="34" r="1" fill="#0d0d1a" />

              {/* Smile */}
              <path d="M33 44 Q40 50 47 44" stroke="#f59e0b" strokeWidth="2" fill="none" strokeLinecap="round" />

              {/* Blush */}
              <circle cx="28" cy="42" r="3" fill="#ef476f" opacity="0.3" />
              <circle cx="52" cy="42" r="3" fill="#ef476f" opacity="0.3" />

              {/* Hair - messy game dev style */}
              <path d="M20 32 Q22 15 40 14 Q58 15 60 32" stroke="#f59e0b" strokeWidth="2" fill="none" strokeLinecap="round" />
              <path d="M24 26 Q30 18 35 28" stroke="#f59e0b" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              <path d="M45 25 Q50 16 56 28" stroke="#f59e0b" strokeWidth="1.5" fill="none" strokeLinecap="round" />

              {/* Left arm */}
              <path d="M22 65 L12 80" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />

              {/* Right arm (waving!) */}
              <g className="animate-wave">
                <path d="M58 65 L68 45" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
                {/* Hand */}
                <circle cx="68" cy="43" r="5" fill="#1e1e36" stroke="#f59e0b" strokeWidth="2" />
                {/* Fingers spread (waving) */}
                <line x1="68" y1="38" x2="67" y2="33" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="71" y1="39" x2="73" y2="34" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="73" y1="43" x2="77" y2="41" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
              </g>

              {/* Legs */}
              <line x1="33" y1="90" x2="30" y2="98" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
              <line x1="47" y1="90" x2="50" y2="98" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />

              {/* Feet */}
              <ellipse cx="28" cy="99" rx="5" ry="2" fill="#f59e0b" opacity="0.5" />
              <ellipse cx="52" cy="99" rx="5" ry="2" fill="#f59e0b" opacity="0.5" />

              {/* Speech bubble */}
              <g>
                <rect x="55" y="5" width="50" height="22" rx="8" fill="#1e1e36" stroke="#f59e0b" strokeWidth="1.5" />
                <polygon points="58,27 65,27 58,34" fill="#1e1e36" stroke="#f59e0b" strokeWidth="1.5" strokeLinejoin="round" />
                <text x="80" y="20" textAnchor="middle" fill="#f59e0b" fontSize="10" fontFamily="var(--font-caveat)" fontWeight="bold">
                  Hey!
                </text>
              </g>

              {/* Game controller icon on shirt */}
              <g transform="translate(32, 64)">
                <rect x="0" y="0" width="16" height="10" rx="3" fill="none" stroke="#06d6a0" strokeWidth="1" />
                <circle cx="5" cy="5" r="1.5" fill="none" stroke="#06d6a0" strokeWidth="1" />
                <line x1="12" y1="3" x2="14" y2="1" stroke="#06d6a0" strokeWidth="1" strokeLinecap="round" />
              </g>
            </svg>

            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#1e1e36] text-[#f59e0b] text-xs font-[family-name:var(--font-caveat)] px-3 py-1 rounded-full border border-[#f59e0b]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Click me! 👋
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
