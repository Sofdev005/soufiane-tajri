"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Star, ImageIcon, Film } from "lucide-react";
import { projects, type Project } from "@/lib/portfolio-data";

const statusColors: Record<string, string> = {
  Released: "#06d6a0",
  "In Development": "#f59e0b",
  "Hackathon Winner": "#fbbf24",
};

export type { Project };

export default function ProjectsSection({
  onSelectProject,
}: {
  onSelectProject: (project: Project) => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2a2a4a] to-transparent" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#f59e0b]/3 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-[#ef476f]/3 rounded-full blur-[100px]" />
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
            ✏️ My creations
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2 mb-4">
            Featured <span className="hand-underline">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-[#f59e0b] mx-auto rounded-full" />
          <p className="text-[#8888aa] mt-4 max-w-lg mx-auto">
            Click on any project to explore the details, tech stack, and story behind each game.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer relative bg-[#1e1e36]/60 border border-[#2a2a4a]/50 rounded-2xl overflow-hidden hover:border-opacity-80 transition-all duration-300"
              style={{ "--hover-color": project.color } as React.CSSProperties}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 30%, ${project.color}15, transparent 70%)`,
                }}
              />

              {/* Card top gradient bar */}
              <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />

              {/* Cover image thumbnail */}
              {project.images.length > 0 && (
                <div className="relative overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e36]/90 via-transparent to-transparent" />
                  {project.images.length > 1 && (
                    <div className="absolute bottom-2 right-2 flex items-center gap-1 text-xs text-[#8888aa] bg-black/40 backdrop-blur-sm rounded-full px-2 py-1">
                      <ImageIcon className="w-3 h-3" />
                      {project.images.length}
                    </div>
                  )}
                </div>
              )}

              {/* Media badges when no cover image */}
              {project.images.length === 0 && project.videos.length > 0 && (
                <div className="flex items-center gap-2 px-6 pt-4">
                  {project.videos.length > 0 && (
                    <span className="flex items-center gap-1 text-xs text-[#8888aa] bg-[#0d0d1a]/50 rounded-full px-2 py-1">
                      <Film className="w-3 h-3" />
                      {project.videos.length} video{project.videos.length > 1 ? "s" : ""}
                    </span>
                  )}
                </div>
              )}

              <div className="relative z-10 p-6">
                {/* Status & Year */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
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
                    {project.awards.length > 0 && (
                      <span
                        className="text-xs font-medium px-2 py-1 rounded-full border"
                        style={{
                          color: "#fbbf24",
                          borderColor: "#fbbf2440",
                          backgroundColor: "#fbbf2410",
                        }}
                      >
                        🏆 Winner
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-[#8888aa] font-mono">{project.year}</span>
                </div>

                {/* Icon & Title */}
                <div className="flex items-start gap-3 mb-3">
                  <motion.span
                    className="text-3xl mt-1"
                    animate={{ y: [0, -3, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {project.icon}
                  </motion.span>
                  <div>
                    <h3 className="text-xl font-bold text-[#e8e6e3] group-hover:text-[#f59e0b] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#8888aa] mt-1">{project.category}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-[#8888aa] leading-relaxed mb-4 line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Meta info: team & duration */}
                <div className="flex items-center gap-3 mb-4 text-xs text-[#8888aa]">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#06d6a0]" />
                    {project.team}
                  </span>
                  <span>•</span>
                  <span>{project.duration}</span>
                </div>

                {/* Tech stack preview */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-md bg-[#0d0d1a]/50 text-[#8888aa] border border-[#2a2a4a]/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-xs px-2 py-1 text-[#8888aa]">
                      +{project.techStack.length - 3} more
                    </span>
                  )}
                </div>

                {/* Bottom actions */}
                <div className="flex items-center justify-between pt-4 border-t border-[#2a2a4a]/30">
                  <span className="text-xs text-[#8888aa]">{project.role}</span>
                  <div className="flex items-center gap-2">
                    <motion.span
                      className="text-[#8888aa] group-hover:text-[#f59e0b] transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Github className="w-4 h-4" />
                    </motion.span>
                    <motion.span
                      className="text-[#8888aa] group-hover:text-[#f59e0b] transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.span>
                    <motion.div
                      className="text-[#8888aa] group-hover:text-[#f59e0b] transition-colors flex items-center gap-1 text-xs"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Star className="w-3 h-3" />
                      View
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
