"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, ChevronRight } from "lucide-react";
import type { Project } from "./ProjectsSection";

const statusColors: Record<string, string> = {
  Released: "#06d6a0",
  "In Development": "#f59e0b",
  Prototype: "#818cf8",
};

export default function ProjectDetail({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-4 sm:inset-8 md:inset-12 lg:inset-x-auto lg:top-8 lg:bottom-8 lg:max-w-3xl lg:mx-auto z-50 overflow-hidden rounded-2xl"
          >
            <div className="h-full bg-[#0d0d1a] border border-[#2a2a4a] rounded-2xl overflow-hidden flex flex-col">
              {/* Header */}
              <div className="relative p-6 pb-0">
                {/* Glow */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 rounded-full blur-[80px] opacity-30"
                  style={{ backgroundColor: project.color }}
                />

                {/* Close button */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#1e1e36] border border-[#2a2a4a] flex items-center justify-center text-[#8888aa] hover:text-[#e8e6e3] hover:border-[#f59e0b]/30 transition-colors"
                >
                  <X className="w-5 h-5" />
                </motion.button>

                <div className="relative z-10">
                  {/* Status & Year */}
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="text-xs font-medium px-3 py-1 rounded-full border"
                      style={{
                        color: statusColors[project.status],
                        borderColor: `${statusColors[project.status]}40`,
                        backgroundColor: `${statusColors[project.status]}10`,
                      }}
                    >
                      {project.status}
                    </span>
                    <span className="text-xs text-[#8888aa] font-mono">{project.year}</span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-4xl sm:text-5xl">{project.icon}</span>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-[#e8e6e3]">
                        {project.title}
                      </h2>
                      <p className="text-[#8888aa]">{project.genre}</p>
                    </div>
                  </div>

                  {/* Role */}
                  <div className="flex items-center gap-2 mt-3">
                    <span className="text-sm text-[#8888aa]">Role:</span>
                    <span className="text-sm font-medium" style={{ color: project.color }}>
                      {project.role}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content - scrollable */}
              <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-8"
                >
                  <h3 className="text-lg font-bold text-[#e8e6e3] mb-3 flex items-center gap-2">
                    <span className="w-6 h-px bg-[#f59e0b]" />
                    About the Project
                  </h3>
                  <p className="text-[#8888aa] leading-relaxed">
                    {project.fullDescription}
                  </p>
                </motion.div>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mb-8"
                >
                  <h3 className="text-lg font-bold text-[#e8e6e3] mb-3 flex items-center gap-2">
                    <span className="w-6 h-px bg-[#06d6a0]" />
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="flex items-start gap-3 text-[#8888aa]"
                      >
                        <ChevronRight
                          className="w-4 h-4 mt-1 shrink-0"
                          style={{ color: project.color }}
                        />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Tech Stack */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mb-8"
                >
                  <h3 className="text-lg font-bold text-[#e8e6e3] mb-3 flex items-center gap-2">
                    <span className="w-6 h-px bg-[#818cf8]" />
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + i * 0.05 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-4 py-2 bg-[#1e1e36] border border-[#2a2a4a] rounded-xl text-sm text-[#e8e6e3] hover:border-opacity-60 transition-colors"
                        style={{
                          borderColor: `${project.color}30`,
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Hand-drawn decoration */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.15 }}
                  transition={{ delay: 0.8 }}
                  className="text-center py-4"
                >
                  <svg width="200" height="20" viewBox="0 0 200 20" fill="none" className="mx-auto">
                    <path d="M5 10 Q25 2 50 10 T100 10 T150 10 T195 10" stroke="#f59e0b" strokeWidth="1.5" fill="none" />
                  </svg>
                </motion.div>
              </div>

              {/* Footer with links */}
              <div className="p-6 pt-0">
                <div className="flex items-center gap-3">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-sm transition-all duration-300"
                    style={{
                      backgroundColor: `${project.color}15`,
                      color: project.color,
                      border: `1px solid ${project.color}30`,
                    }}
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-sm text-[#0d0d1a] transition-all duration-300"
                    style={{ backgroundColor: project.color }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Play Now
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
