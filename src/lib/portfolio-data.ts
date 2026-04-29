export const personalInfo = {
  name: "Soufiane Tajri",
  firstName: "Soufiane",
  lastName: "Tajri",
  tagline: "Game Developer & Game Designer",
  email: "sofian16tajri@gmail.com",
  location: "Morocco",
  linkedin: "https://www.linkedin.com/in/soufiane-tajri-50a488257",
  github: "https://github.com/Sofdev005",
  bio: [
    "I'm a game designer & developer student focused on building gameplay systems and prototypes.",
    "My work centers on player control, interaction, and system-driven mechanics in both 2D and 3D projects. I primarily use Unity and Godot, choosing tools based on technical requirements rather than engine preference.",
    "I care about clean architecture, iteration speed, and mechanics that feel responsive and intentional.",
  ],
  stats: [
    { number: "6+", label: "Games Built" },
    { number: "2+", label: "Years Coding" },
    { number: "2", label: "Hackathon Won" },
  ],
};

export const skillCategories = [
{
    title: "Game Design",
    color: "#c45d3e",
    icon: "🎨",
    skills: [
      { name: "Game Design", level: 90 },
      { name: "Level Design & Encounter Pacing (2D & 3D)", level: 85 },
      { name: "Narrative & Mechanical Integration", level: 75 },
      { name: "Puzzle & Quest Design", level: 75 },
      { name: "UI/UX Wireframing & Player Flow", level: 70 },
      { name: "Sound Design", level: 70 },
      { name: "3D Modeling & Animation", level: 75 },
      
    ],
    tags: ["Game Design", "Level Design", "Encounter Pacing", "Narrative Design", "Mechanical Storytelling", "Puzzle Design", "Quest Design", "UI/UX for Games", "Sound Design", "3D Modeling & Animation", "Pixel Art"],
  },
  {
    title: "Technical Design",
    color: "#e76f51",
    icon: "🔧",
    skills: [
      { name: "Gameplay Prototyping & Iteration", level: 90 },
      { name: "Systems Design", level: 85 },
      { name: "Player Control & Character Mechanics", level: 85 },
      { name: "Combat, AI & Interaction Design", level: 80 },
      { name: "Economy, Progression & Balance Tuning", level: 80 },
    ],
    tags: ["Gameplay Prototyping", "Systems Design", "Player Control", "Character Mechanics", "Combat Design", "AI Behavior", "Interaction Design", "Economy Design", "Progression Tuning", "Balance Tuning"],
  },
  {
    title: "Game Development",
    color: "#06d6a0",
    icon: "🎮",
    skills: [
      { name: "Unity / C#", level: 90 },
      { name: "Gameplay Programming", level: 90 },
      { name: "Godot 4 / GDScript", level: 85 },
      { name: "Rapid Prototyping (Greybox to Polish)", level: 90 },
      { name: "Visual Scripting (Blueprints, Bolt)", level: 80 },
      { name: "2D & 3D Math for Gameplay", level: 80 },
      
      { name: "Debugging & Performance Profiling", level: 90 },
      { name: "Cross-platform Development", level: 85 },
    ],
    tags: ["Unity / C#", "Godot 4 / GDScript", "Unreal Engine", "Gameplay Programming", "Rapid Prototyping", "Greyboxing", "Visual Scripting", "Blueprints", "2D & 3D Math", "Tool Creation", "Debugging", "Performance Profiling", "Cross-platform"],
  },
  {
    title: "Software Engineering",
    color: "#118ab2",
    icon: "⚙️",
    skills: [
      { name: "Object-Oriented Programming", level: 90 },
      { name: "Data Structures & Algorithms", level: 85 },
      { name: "Design Patterns", level: 75 },
      { name: "Clean Code & Architecture", level: 90 },
      { name: "Git & Source Control", level: 85 },
      { name: "SQL/mySQL/T-SQL", level: 80 },
      { name: "Full-stack Web Dev", level: 80 },
      { name: "UML & Software Modeling", level: 80 },
      
    ],
    tags: ["OOP", "Java", "Python", "C++", "C", "VB.net", "Data Structures", "Algorithms", "Design Patterns", "Clean Code", "Software Architecture", "Git", "SQL", "T-SQL", "Full-stack Web Dev", "UML", "Software Engineering", "Agile", "Scrum"],
  },
  {
    title: "Soft & Process Skills",
    color: "#ffd166",
    icon: "🤝",
    skills: [
      { name: "Playtesting & Iterating from Feedback", level: 100 },
      { name: "Cross-discipline Communication", level: 100 },
      { name: "Game Design Documentation (GDDs, Flowcharts)", level: 100 },
      { name: "Collaborative Mindset", level: 100 },
      { name: "Time Estimation & Milestone Scoping", level: 100 },
    ],
    tags: ["Playtesting", "Iteration", "Cross-discipline Communication", "Design Documentation", "GDDs", "Flowcharts", "Collaboration", "Milestone Scoping", "Time Estimation"],
  },
];

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  shortDescription: string;
  fullDescription: string;
  role: string;
  duration: string;
  team: string;
  platforms: string[];
  awards: string[];
  highlights: string[];
  techStack: string[];
  status: "Released" | "In Development" | "Hackathon Winner";
  color: string;
  icon: string;
  gradient: string;
  images: string[];
  videos: string[];
}

export const projects: Project[] = [
  {
    id: "the-third-perspective",
    title: "The Third Perspective (المنظور الثالث)",
    category: "Legal Simulation / Serious Game",
    year: "2026",
    shortDescription: "A high-stakes legal simulation where players deliver justice by investigating evidence and interrogating suspects under pressure.",
    fullDescription: "Winner of the 1st Prize at the Gaming Hackathon 2026. 'The Third Perspective' challenges players to step into the role of a judge. Developed in just 48 hours, the game features a narrative-driven investigation loop, evidence management systems, and a branching verdict mechanic grounded in the Moroccan Constitution and legal codes.",
    role: "Lead Game Designer & Developer",
    duration: "48 Hours (Hackathon)",
    team: "Collaborative Team",
    platforms: ["PC"],
    awards: ["1st Prize - Gaming Hackathon 2026"],
    highlights: [
      "Designed and implemented an interactive 'Suspect Interrogation' system for real-time investigation",
      "Developed a specialized Evidence Management UI for reviewing testimonies and criminal records",
      "Integrated real-world legal frameworks, including articles from the Moroccan Constitution",
      "Engineered a branching narrative system where verdicts are evaluated based on evidence utilization",
    ],
    techStack: ["Unity", "C#", "Narrative Design", "UI/UX Design", "Rapid Prototyping", "Technical Architecture"],
    status: "Hackathon Winner",
    color: "#ffd700",
    icon: "⚖️",
    gradient: "from-amber-600/60 to-slate-950",
    images: ["3rd/Picture1.png", "3rd/Picture3.png", "3rd/Picture4.png","3rd/Picture6.png", "3rd/Picture7.png", "3rd/Picture8.png", "3rd/Picture9.png", "3rd/Picture10.png"],
    videos: ["3rd/tpp.mp4"],
}
  ,
  {
    id: "homa",
    title: "HOMA",
    category: "Platformer",
    year: "2025",
    shortDescription: "A 2D mobile platformer built in Godot that won the Gaming Hackathon 2025 at ENSAD.",
    fullDescription: "A 2D mobile platformer developed in Godot as part of the Gaming Hackathon 2025 at ENSAD. The game won the hackathon. Responsible for core gameplay development, systems implementation, debugging, and extensive testing to ensure stability and performance on mobile devices.",
    role: "Gameplay Developer & Tester",
    duration: "Hackathon (48h)",
    team: "Team",
    platforms: ["Mobile"],
    awards: ["🏆 Gaming Hackathon 2025 Winner"],
    highlights: [
      "Won Gaming Hackathon 2025 at ENSAD",
      "Core gameplay systems and mechanics implementation",
      "Mobile-optimized performance and responsive controls",
      "Extensive testing and debugging pipeline",
    ],
    techStack: ["Godot", "GDScript", "2D Platformer Design", "Gameplay Programming", "Mobile Optimization", "Testing & Debugging", "Team Collaboration"],
    status: "Hackathon Winner",
    color: "#06d6a0",
    icon: "🏃",
    gradient: "from-emerald-900/60 to-green-950",
    images: ["homa/homa1.png", "homa/homa2.png", "homa/homa4.png"],
    videos: ["homa/ff.mp4"],
  },
  {
    id: "paralysis-dream",
    title: "Paralysis Dream",
    category: "Horror",
    year: "2024",
    shortDescription: "A psychological horror game created entirely from scratch — all level design, sound, 3D assets, and gameplay programming.",
    fullDescription: "A psychological horror game created entirely from scratch. Handled all aspects of development, including level design, sound design, 3D asset creation, and gameplay programming, with a focus on atmosphere and player psychology. A complete solo development pipeline from concept to playable build.",
    role: "Solo Developer (Full Stack)",
    duration: "Solo Project",
    team: "Solo",
    platforms: ["PC"],
    awards: [],
    highlights: [
      "Full solo development pipeline end-to-end",
      "Original 3D asset creation and animation",
      "Atmosphere-first level and sound design",
      "Player psychology-driven gameplay systems",
    ],
    techStack: ["Unity", "C#", "Game Design", "Level Design", "Sound Design", "3D Modeling", "Gameplay Programming", "Psychological Horror"],
    status: "Released",
    color: "#818cf8",
    icon: "💀",
    gradient: "from-violet-900/60 to-gray-950",
    images: ["paralysis/gp.png","paralysis/MM.png", "paralysis/gp2.png", "paralysis/gp3.png"],
    videos: ["paralysis/gpp.mp4"],
  },
  {
    id: "skyfall",
    title: "Skyfall",
    category: "2D Game",
    year: "2024",
    shortDescription: "A 2D solo Unity game — clean architecture, responsive controls, and polished game feel.",
    fullDescription: "A 2D game developed solo using Unity. Managed the full production pipeline, from asset integration to gameplay programming, focusing on clean architecture, responsive controls, and polished game feel. Custom pixel art and sound integration completed the experience.",
    role: "Solo Developer",
    duration: "Solo Project",
    team: "Solo",
    platforms: ["PC"],
    awards: [],
    highlights: [
      "Full solo production pipeline from concept to build",
      "Responsive controls and polished game feel",
      "Clean architecture and maintainable code structure",
      "Custom pixel art and sound integration",
    ],
    techStack: ["Unity", "C#", "2D Game Development", "Gameplay Programming", "Sound Design", "Pixel Art Creation"],
    status: "Released",
    color: "#38bdf8",
    icon: "⬇️",
    gradient: "from-sky-900/60 to-blue-950",
    images: [ "skyfall/sk2.png","skyfall/sk.png", "skyfall/sk3.png"],
    videos: [],
  },
  {
    id: "asylum-fractured-mind",
    title: "Asylum: Fractured Mind",
    category: "Horror",
    year: "2025",
    shortDescription: "A psychological horror game set in a derelict asylum — atmosphere, tension, and narrative-driven exploration.",
    fullDescription: "A psychological horror game set in a derelict asylum, built with a strong focus on atmosphere, tension, and narrative-driven exploration. The project emphasizes immersive sound design, level pacing, and systemic gameplay mechanics. Currently in active development with iterative design processes driving the experience.",
    role: "Game Designer & Developer",
    duration: "In Progress",
    team: "Solo",
    platforms: ["PC"],
    awards: [],
    highlights: [
      "Immersive atmosphere and tension-driven level design",
      "Narrative-driven exploration and pacing systems",
      "Advanced sound design for psychological horror",
      "Systemic gameplay mechanics and event triggers",
    ],
    techStack: ["Unity", "C#", "Game Design", "Level Design", "Sound Design", "Systems Design", "Horror Gameplay"],
    status: "In Development",
    color: "#ef476f",
    icon: "🏚️",
    gradient: "from-rose-900/60 to-gray-950",
    images: [],
    videos: [],
  }
];

export const education = [
  {
    school: "École Nationale Supérieure d'Art et de Design (ENSAD)",
    degree: "DENSAD (Bac+5) — Game Design & Animation",
    dateRange: "Oct 2024 — Jun 2027",
    achievements: [
      "Advanced training in game design, interactive systems, and animation",
      "Hands-on projects using Unity and C# for gameplay and systems development",
      "Experience in level design, character design, and real-time 2D/3D animation",
      "Multidisciplinary approach combining UI/UX, sound design, and systems design",
    ],
  },
  {
    school: "Brevet de Technicien Supérieur (BTS)",
    degree: "Bac+2 — Information Systems Development",
    dateRange: "Oct 2022 — Jul 2024",
    achievements: [
      "Strong foundation in software development and object-oriented programming",
      "Full-stack web development with Java and backend systems",
      "Database design and management using Oracle Database",
      "Applied UML modeling and software architecture principles",
      "Project management and collaborative development workflows",
    ],
  },
];
