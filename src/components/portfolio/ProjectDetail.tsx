"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, ChevronRight, ChevronLeft, Play, Image as ImageIcon, Film } from "lucide-react";
import type { Project } from "@/lib/portfolio-data";

const statusColors: Record<string, string> = {
  Released: "#06d6a0",
  "In Development": "#f59e0b",
  "Hackathon Winner": "#fbbf24",
};

export default function ProjectDetail({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const hasMedia = project && (project.images.length > 0 || project.videos.length > 0);

  const allMedia = project
    ? [
        ...project.images.map((src) => ({ type: "image" as const, src })),
        ...project.videos.map((src) => ({ type: "video" as const, src })),
      ]
    : [];

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + allMedia.length) % allMedia.length : null));
  }, [allMedia.length]);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % allMedia.length : null));
  }, [allMedia.length]);

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

          {/* Modal Container - flexbox for proper centering */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 60 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 60 }}
              transition={{ type: "spring", damping: 28, stiffness: 250 }}
              className="pointer-events-auto w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl"
              style={{
                boxShadow: `0 0 80px ${project.color}20, 0 25px 50px rgba(0,0,0,0.5)`,
              }}
            >
              <div className="h-full bg-[#0d0d1a] border border-[#2a2a4a] rounded-2xl overflow-hidden flex flex-col">
                {/* Header */}
                <div className="relative p-6 sm:p-8 pb-0 shrink-0">
                  {/* Glow */}
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-40 rounded-full blur-[100px] opacity-25"
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
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#e8e6e3]">
                          {project.title}
                        </h2>
                        <p className="text-[#8888aa] text-sm sm:text-base">{project.category}</p>
                      </div>
                    </div>

                    {/* Role, Duration, Team */}
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-[#8888aa]">Role:</span>
                        <span className="text-sm font-medium" style={{ color: project.color }}>
                          {project.role}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-[#8888aa]">Duration:</span>
                        <span className="text-sm font-medium text-[#e8e6e3]">
                          {project.duration}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-[#8888aa]">Team:</span>
                        <span className="text-sm font-medium text-[#e8e6e3]">
                          {project.team}
                        </span>
                      </div>
                    </div>

                    {/* Platforms */}
                    {project.platforms.length > 0 && (
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-sm text-[#8888aa]">Platforms:</span>
                        <div className="flex gap-2">
                          {project.platforms.map((p) => (
                            <span key={p} className="text-xs px-2 py-0.5 rounded-full bg-[#1e1e36] border border-[#2a2a4a]/50 text-[#e8e6e3]">
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Awards */}
                    {project.awards.length > 0 && (
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-sm text-[#8888aa]">Awards:</span>
                        <div className="flex gap-2">
                          {project.awards.map((award) => (
                            <span key={award} className="text-xs px-2 py-0.5 rounded-full bg-[#fbbf24]/10 border border-[#fbbf24]/30 text-[#fbbf24] font-medium">
                              {award}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content - scrollable */}
                <div className="flex-1 overflow-y-auto p-6 sm:p-8 pt-6 scrollbar-hide">
                  {/* Media Gallery Section */}
                  {hasMedia && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                      className="mb-8"
                    >
                      <h3 className="text-lg font-bold text-[#e8e6e3] mb-4 flex items-center gap-2">
                        <span className="w-6 h-px" style={{ backgroundColor: project.color }} />
                        Media Gallery
                      </h3>

                      {/* Images */}
                      {project.images.length > 0 && (
                        <div className="mb-4">
                          <div className="flex items-center gap-2 mb-3 text-sm text-[#8888aa]">
                            <ImageIcon className="w-4 h-4" />
                            <span>Screenshots ({project.images.length})</span>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {project.images.map((src, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 + i * 0.08 }}
                                whileHover={{ scale: 1.02 }}
                                onClick={() => openLightbox(i)}
                                className="relative group cursor-pointer rounded-xl overflow-hidden border border-[#2a2a4a]/50 hover:border-opacity-80 transition-all"
                                style={{ '--hover-color': project.color } as React.CSSProperties}
                              >
                                <img
                                  src={src}
                                  alt={`${project.title} screenshot ${i + 1}`}
                                  className="w-full h-48 sm:h-56 object-cover"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                                  <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileHover={{ opacity: 1, scale: 1 }}
                                    className="opacity-0 group-hover:opacity-100 transition-opacity w-10 h-10 rounded-full bg-[#1e1e36]/80 border border-[#2a2a4a] flex items-center justify-center"
                                  >
                                    <ExternalLink className="w-4 h-4 text-[#e8e6e3]" />
                                  </motion.div>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Videos */}
                      {project.videos.length > 0 && (
                        <div>
                          <div className="flex items-center gap-2 mb-3 text-sm text-[#8888aa]">
                            <Film className="w-4 h-4" />
                            <span>Videos ({project.videos.length})</span>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {project.videos.map((src, i) => {
                              const isYouTube = src.includes("youtube.com") || src.includes("youtu.be");
                              const videoIndex = project.images.length + i;

                              return (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, scale: 0.95 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 0.2 + (project.images.length + i) * 0.08 }}
                                  whileHover={{ scale: 1.02 }}
                                  onClick={() => openLightbox(videoIndex)}
                                  className="relative group cursor-pointer rounded-xl overflow-hidden border border-[#2a2a4a]/50 hover:border-opacity-80 transition-all"
                                >
                                  {isYouTube ? (
                                    <iframe
                                      src={src.replace("watch?v=", "embed/").replace("youtu.be/", "youtube.com/embed/")}
                                      title={`${project.title} video ${i + 1}`}
                                      className="w-full aspect-video"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                      allowFullScreen
                                    />
                                  ) : (
                                    <video
                                      src={src}
                                      className="w-full aspect-video object-cover"
                                      preload="metadata"
                                      playsInline
                                    />
                                  )}
                                  {!isYouTube && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                      <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center"
                                      >
                                        <Play className="w-6 h-6 text-white ml-1" />
                                      </motion.div>
                                    </div>
                                  )}
                                </motion.div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* No media message */}
                      {project.images.length === 0 && project.videos.length === 0 && (
                        <div className="rounded-xl border-2 border-dashed border-[#2a2a4a]/50 p-8 text-center">
                          <ImageIcon className="w-10 h-10 text-[#2a2a4a] mx-auto mb-3" />
                          <p className="text-[#8888aa] text-sm">No media added yet. Add image or video URLs in the project data.</p>
                        </div>
                      )}
                    </motion.div>
                  )}

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

                  {/* Highlights */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-8"
                  >
                    <h3 className="text-lg font-bold text-[#e8e6e3] mb-3 flex items-center gap-2">
                      <span className="w-6 h-px bg-[#06d6a0]" />
                      Key Highlights
                    </h3>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
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
                          <span>{highlight}</span>
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
                <div className="p-6 sm:p-8 pt-0 shrink-0">
                  <div className="flex items-center gap-3">
                    <motion.a
                      href={project.id === "asylum-fractured-mind" ? "#" : "#"}
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
                      View Details
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Lightbox for image viewing */}
          <AnimatePresence>
            {lightboxIndex !== null && allMedia[lightboxIndex] && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center"
                onClick={closeLightbox}
              >
                {/* Close button */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#1e1e36] border border-[#2a2a4a] flex items-center justify-center text-[#8888aa] hover:text-[#e8e6e3] transition-colors"
                >
                  <X className="w-5 h-5" />
                </motion.button>

                {/* Counter */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 text-sm text-[#8888aa] font-mono z-10">
                  {lightboxIndex + 1} / {allMedia.length}
                </div>

                {/* Prev button */}
                {allMedia.length > 1 && (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => { e.stopPropagation(); goPrev(); }}
                    className="absolute left-4 z-10 w-10 h-10 rounded-full bg-[#1e1e36]/80 border border-[#2a2a4a] flex items-center justify-center text-[#8888aa] hover:text-[#e8e6e3] transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </motion.button>
                )}

                {/* Next button */}
                {allMedia.length > 1 && (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => { e.stopPropagation(); goNext(); }}
                    className="absolute right-4 z-10 w-10 h-10 rounded-full bg-[#1e1e36]/80 border border-[#2a2a4a] flex items-center justify-center text-[#8888aa] hover:text-[#e8e6e3] transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                )}

                {/* Media content */}
                <div className="max-w-5xl max-h-[85vh] w-full mx-4" onClick={(e) => e.stopPropagation()}>
                  {allMedia[lightboxIndex].type === "image" ? (
                    <motion.img
                      key={lightboxIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      src={allMedia[lightboxIndex].src}
                      alt={`Media ${lightboxIndex + 1}`}
                      className="max-w-full max-h-[85vh] object-contain rounded-lg mx-auto"
                    />
                  ) : (
                    <motion.div
                      key={lightboxIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="w-full aspect-video"
                    >
                      {allMedia[lightboxIndex].src.includes("youtube.com") || allMedia[lightboxIndex].src.includes("youtu.be") ? (
                        <iframe
                          src={allMedia[lightboxIndex].src.replace("watch?v=", "embed/").replace("youtu.be/", "youtube.com/embed/")}
                          title={`Video ${lightboxIndex + 1}`}
                          className="w-full h-full rounded-lg"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <video
                          src={allMedia[lightboxIndex].src}
                          controls
                          autoPlay
                          className="w-full h-full rounded-lg"
                        />
                      )}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
}
