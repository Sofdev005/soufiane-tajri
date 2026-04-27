"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { education } from "@/lib/portfolio-data";

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2a2a4a] to-transparent" />
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-[#818cf8]/3 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-60 h-60 bg-[#f59e0b]/3 rounded-full blur-[100px]" />
      </div>

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-[family-name:var(--font-caveat)] text-[#f59e0b] text-xl sm:text-2xl">
            ✏️ Where I learned
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2 mb-4">
            My <span className="hand-underline">Education</span>
          </h2>
          <div className="w-20 h-1 bg-[#f59e0b] mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#f59e0b] via-[#818cf8] to-[#06d6a0] opacity-30"
          />

          <div className="space-y-12 sm:space-y-16">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.4 + index * 0.2 }}
                className="relative pl-12 sm:pl-20"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.2, type: "spring" }}
                  className="absolute left-[10px] sm:left-[26px] top-2 w-5 h-5 rounded-full border-2 border-[#f59e0b] bg-[#0d0d1a]"
                  style={{ boxShadow: `0 0 12px ${index === 0 ? "#f59e0b" : "#818cf8"}40` }}
                />

                {/* Card */}
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="relative p-6 sm:p-8 bg-[#1e1e36]/50 border border-[#2a2a4a]/50 rounded-2xl hover:border-[#f59e0b]/20 transition-all duration-300 overflow-hidden"
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 30% 0%, ${index === 0 ? "#f59e0b" : "#818cf8"}08, transparent 70%)`,
                    }}
                  />

                  <div className="relative z-10">
                    {/* Date range badge */}
                    <motion.span
                      initial={{ opacity: 0, y: -10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.6 + index * 0.2 }}
                      className="inline-block text-xs font-mono px-3 py-1 rounded-full bg-[#f59e0b]/10 text-[#f59e0b] border border-[#f59e0b]/20 mb-4"
                    >
                      {edu.dateRange}
                    </motion.span>

                    {/* School name */}
                    <h3
                      className="text-xl sm:text-2xl font-bold mb-2"
                      style={{ color: index === 0 ? "#f59e0b" : "#818cf8" }}
                    >
                      {edu.school}
                    </h3>

                    {/* Degree */}
                    <p className="text-[#e8e6e3] font-medium text-sm sm:text-base mb-6">
                      {edu.degree}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-3">
                      {edu.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.8 + index * 0.2 + i * 0.08 }}
                          className="flex items-start gap-3"
                        >
                          {/* Checkmark doodle */}
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="mt-0.5 shrink-0">
                            <circle cx="10" cy="10" r="8" stroke={index === 0 ? "#f59e0b" : "#818cf8"} strokeWidth="1.2" fill="none" opacity="0.4" />
                            <path d="M7 10 L9.5 12.5 L14 8" stroke={index === 0 ? "#06d6a0" : "#06d6a0"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span className="text-sm text-[#8888aa] leading-relaxed">
                            {achievement}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hand-drawn decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-16 gap-6"
        >
          {/* Graduation cap doodle */}
          <motion.div
            animate={{ y: [0, -6, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="text-[#f59e0b]/20"
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M20 6 L36 16 L20 26 L4 16 Z" stroke="#f59e0b" strokeWidth="1.5" fill="none" />
              <line x1="20" y1="26" x2="20" y2="34" stroke="#f59e0b" strokeWidth="1.5" />
              <path d="M10 20 L10 28 Q10 34 20 34 Q30 34 30 28 L30 20" stroke="#f59e0b" strokeWidth="1.5" fill="none" />
            </svg>
          </motion.div>

          {/* Book doodle */}
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [0, -4, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, delay: 1 }}
            className="text-[#818cf8]/20"
          >
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <rect x="6" y="6" width="24" height="24" rx="2" stroke="#818cf8" strokeWidth="1.5" fill="none" />
              <line x1="18" y1="8" x2="18" y2="28" stroke="#818cf8" strokeWidth="1.2" />
              <line x1="10" y1="12" x2="16" y2="12" stroke="#818cf8" strokeWidth="1" opacity="0.5" />
              <line x1="10" y1="16" x2="15" y2="16" stroke="#818cf8" strokeWidth="1" opacity="0.5" />
              <line x1="20" y1="12" x2="26" y2="12" stroke="#818cf8" strokeWidth="1" opacity="0.5" />
              <line x1="20" y1="16" x2="25" y2="16" stroke="#818cf8" strokeWidth="1" opacity="0.5" />
            </svg>
          </motion.div>

          {/* Pencil doodle */}
          <motion.div
            animate={{ y: [0, -5, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, delay: 2 }}
            className="text-[#06d6a0]/20"
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M6 26 L22 6 L28 12 L12 28 Z" stroke="#06d6a0" strokeWidth="1.5" fill="none" />
              <line x1="6" y1="26" x2="12" y2="28" stroke="#06d6a0" strokeWidth="1.5" />
              <line x1="22" y1="6" x2="28" y2="12" stroke="#06d6a0" strokeWidth="1.5" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
