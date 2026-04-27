"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Star } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  genre: string;
  role: string;
  techStack: string[];
  features: string[];
  status: "Released" | "In Development" | "Prototype";
  year: string;
  color: string;
  icon: string;
  gradient: string;
}

export const projects: Project[] = [
  {
    id: "echoes-of-the-void",
    title: "Echoes of the Void",
    shortDescription: "A atmospheric metroidvania set in a dying universe where sound shapes reality.",
    fullDescription:
      "Echoes of the Void is a hand-crafted metroidvania where players explore a crumbling cosmos. Every sound you make — footsteps, attacks, even silence — affects the world around you. The game features procedurally generated audio landscapes that react to player behavior, creating a truly unique experience each playthrough. With over 40 interconnected rooms, 8 boss encounters, and a deeply layered narrative told through environmental storytelling, this game pushes the boundaries of 2D exploration.",
    genre: "Metroidvania / Puzzle-Platformer",
    role: "Lead Designer & Developer",
    techStack: ["Unity", "C#", "FMOD", "Aseprite", "Tiled"],
    features: [
      "Dynamic audio system that reshapes the environment",
      "40+ hand-designed rooms with multiple paths",
      "8 unique boss encounters with sound-based mechanics",
      "New Game+ with alternate realities",
      "Original soundtrack with reactive music system",
    ],
    status: "Released",
    year: "2024",
    color: "#f59e0b",
    icon: "🌌",
    gradient: "from-amber-500/20 to-orange-600/10",
  },
  {
    id: "pixel-forge",
    title: "Pixel Forge",
    shortDescription: "A creative sandbox game where you build, battle, and share pixel-art worlds.",
    fullDescription:
      "Pixel Forge combines the creativity of building games with the excitement of action RPGs. Players design their own pixel-art characters, weapons, and worlds using an intuitive in-game editor, then bring them to life in multiplayer battles and cooperative dungeons. The game features a thriving community with thousands of user-created content pieces, weekly challenges, and seasonal events. Built with performance in mind, it runs smoothly even on modest hardware while supporting up to 16 players in a single session.",
    genre: "Sandbox / Action RPG",
    role: "Game Designer & UI Developer",
    techStack: ["Godot", "GDScript", "WebSockets", "Aseprite"],
    features: [
      "Full in-game pixel art editor with animation tools",
      "16-player multiplayer with dedicated servers",
      "Over 500 community-created items and worlds",
      "Weekly creative challenges with leaderboards",
      "Cross-platform play (PC & Mobile)",
    ],
    status: "Released",
    year: "2023",
    color: "#06d6a0",
    icon: "🔨",
    gradient: "from-emerald-500/20 to-teal-600/10",
  },
  {
    id: "neon-drift",
    title: "Neon Drift",
    shortDescription: "A fast-paced synthwave racing game with procedurally generated tracks.",
    fullDescription:
      "Neon Drift is a love letter to the synthwave aesthetic and arcade racing. Players pilot hover-cars through neon-lit cityscapes at breakneck speeds, drifting through tight corners and boosting through holographic checkpoints. The procedurally generated track system ensures no two races are the same, while the dynamic difficulty adjustment keeps the challenge engaging for both newcomers and veterans. Featuring a pumping synthwave soundtrack and stunning visual effects, it delivers pure adrenaline.",
    genre: "Racing / Arcade",
    role: "Solo Developer",
    techStack: ["Unity", "C#", "DOTween", "Blender"],
    features: [
      "Procedurally generated infinite tracks",
      "30+ unlockable hover-cars with unique handling",
      "Dynamic difficulty that adapts to skill level",
      "Photo mode with customizable filters",
      "Full synthwave soundtrack with 20+ tracks",
    ],
    status: "In Development",
    year: "2025",
    color: "#ef476f",
    icon: "🏎️",
    gradient: "from-rose-500/20 to-pink-600/10",
  },
  {
    id: "dungeon-diaries",
    title: "Dungeon Diaries",
    shortDescription: "A cozy roguelike journaling game where your actual diary entries power your character.",
    fullDescription:
      "Dungeon Diaries is a genre-defying blend of roguelike dungeon crawling and journaling. Players write diary entries that are analyzed to generate character traits, spells, and story events. Feeling adventurous? Your character gains boldness. Anxious about something? You might unlock a protective barrier spell. The game processes text input through a custom NLP system (running entirely offline) to create a deeply personal experience. The cozy hand-drawn art style and soothing soundtrack create a meditative atmosphere that makes each dungeon run feel like self-reflection.",
    genre: "Roguelike / Narrative",
    role: "Creative Director & Programmer",
    techStack: ["Unreal Engine", "C++", "Python", "Procreate"],
    features: [
      "Text-based character progression system",
      "Offline NLP for journal analysis",
      "Hand-drawn art style with 200+ unique illustrations",
      "Procedural narrative that reflects player emotions",
      "Daily journaling prompts for character growth",
    ],
    status: "Prototype",
    year: "2025",
    color: "#818cf8",
    icon: "📖",
    gradient: "from-indigo-500/20 to-violet-600/10",
  },
  {
    id: "starship-salvage",
    title: "Starship Salvage",
    shortDescription: "A zero-gravity space scavenger game with realistic orbital mechanics.",
    fullDescription:
      "Starship Salvage puts players in the boots of a space scavenger navigating the debris fields of a massive orbital battle. Using realistic zero-gravity movement and Newtonian physics, players must carefully manage their fuel, oxygen, and cargo capacity while salvaging valuable components from destroyed spacecraft. The game features a dynamic economy, faction reputation system, and a compelling story about survival in the aftermath of an interstellar war. Each salvage run is a tense puzzle of risk vs. reward.",
    genre: "Space Sim / Survival",
    role: "Gameplay Programmer",
    techStack: ["Unity", "C#", "HLSL Shaders", "Blender"],
    features: [
      "Realistic zero-gravity movement and physics",
      "Dynamic economy with fluctuating prices",
      "Faction reputation system affecting available missions",
      "50+ salvageable ship types with unique layouts",
      "Permadeath mode for hardcore players",
    ],
    status: "Released",
    year: "2023",
    color: "#38bdf8",
    icon: "🚀",
    gradient: "from-sky-500/20 to-cyan-600/10",
  },
  {
    id: "tiny-kingdoms",
    title: "Tiny Kingdoms",
    shortDescription: "A charming auto-battler where miniature kingdoms clash in bite-sized wars.",
    fullDescription:
      "Tiny Kingdoms distills the grand strategy genre into 5-minute matches. Players build their miniature kingdoms by placing buildings and recruiting units on a compact grid, then watch their armies auto-battle against opponents. With 100+ unique units, synergistic faction mechanics, and a ranked ladder system, there's surprising depth beneath the cute exterior. The hand-drawn art style gives each unit personality, from determined little knights to dramatically posing wizards. Perfect for quick sessions on mobile or deep strategic dives on desktop.",
    genre: "Auto-Battler / Strategy",
    role: "Game Designer & Artist",
    techStack: ["Godot", "GDScript", "Aseprite", "DaVinci Resolve"],
    features: [
      "5-minute bite-sized strategic matches",
      "100+ unique units across 6 factions",
      "Synergy system for strategic depth",
      "Ranked ladder and seasonal tournaments",
      "Charming hand-drawn art with personality",
    ],
    status: "In Development",
    year: "2025",
    color: "#fbbf24",
    icon: "👑",
    gradient: "from-yellow-500/20 to-amber-600/10",
  },
];

const statusColors: Record<string, string> = {
  Released: "#06d6a0",
  "In Development": "#f59e0b",
  Prototype: "#818cf8",
};

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

              <div className="relative z-10 p-6">
                {/* Status & Year */}
                <div className="flex items-center justify-between mb-4">
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
                    <p className="text-sm text-[#8888aa] mt-1">{project.genre}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-[#8888aa] leading-relaxed mb-4 line-clamp-3">
                  {project.shortDescription}
                </p>

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
