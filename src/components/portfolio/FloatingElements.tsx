"use client";

import { motion } from "framer-motion";

const floatingItems = [
  {
    x: "5%",
    y: "20%",
    size: 24,
    color: "#f59e0b",
    delay: 0,
    duration: 7,
    type: "star",
  },
  {
    x: "90%",
    y: "15%",
    size: 20,
    color: "#06d6a0",
    delay: 1,
    duration: 8,
    type: "circle",
  },
  {
    x: "85%",
    y: "45%",
    size: 28,
    color: "#ef476f",
    delay: 2,
    duration: 6,
    type: "heart",
  },
  {
    x: "8%",
    y: "55%",
    size: 22,
    color: "#818cf8",
    delay: 0.5,
    duration: 9,
    type: "triangle",
  },
  {
    x: "92%",
    y: "75%",
    size: 18,
    color: "#f59e0b",
    delay: 3,
    duration: 7,
    type: "diamond",
  },
  {
    x: "3%",
    y: "80%",
    size: 26,
    color: "#06d6a0",
    delay: 1.5,
    duration: 8,
    type: "star",
  },
  {
    x: "50%",
    y: "10%",
    size: 16,
    color: "#ef476f",
    delay: 2.5,
    duration: 6,
    type: "cross",
  },
  {
    x: "15%",
    y: "35%",
    size: 14,
    color: "#38bdf8",
    delay: 4,
    duration: 10,
    type: "circle",
  },
  {
    x: "78%",
    y: "90%",
    size: 20,
    color: "#fbbf24",
    delay: 1,
    duration: 7,
    type: "triangle",
  },
  {
    x: "35%",
    y: "85%",
    size: 16,
    color: "#818cf8",
    delay: 3.5,
    duration: 8,
    type: "diamond",
  },
];

function Star({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path
        d="M16 2 L19 12 L30 12 L21 19 L24 30 L16 23 L8 30 L11 19 L2 12 L13 12Z"
        stroke={color}
        strokeWidth="1.5"
        fill={`${color}15`}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Circle({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.5" fill={`${color}10`} />
    </svg>
  );
}

function Heart({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 21 C8 17, 2 14, 2 8 C2 5, 4 2, 8 2 C10 2, 11 3, 12 4.5 C13 3, 14 2, 16 2 C20 2, 22 5, 22 8 C22 14, 16 17, 12 21Z"
        stroke={color}
        strokeWidth="1.5"
        fill={`${color}10`}
        strokeLinecap="round"
      />
    </svg>
  );
}

function Triangle({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3 L22 21 L2 21 Z"
        stroke={color}
        strokeWidth="1.5"
        fill={`${color}10`}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Diamond({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2 L22 12 L12 22 L2 12 Z"
        stroke={color}
        strokeWidth="1.5"
        fill={`${color}10`}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Cross({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <line x1="12" y1="4" x2="12" y2="20" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="4" y1="12" x2="20" y2="12" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const shapeComponents: Record<string, React.FC<{ size: number; color: string }>> = {
  star: Star,
  circle: Circle,
  heart: Heart,
  triangle: Triangle,
  diamond: Diamond,
  cross: Cross,
};

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {floatingItems.map((item, i) => {
        const Shape = shapeComponents[item.type];
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: item.x,
              top: item.y,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, -5, 0],
              rotate: [0, 360],
              opacity: [0.15, 0.35, 0.15],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut",
            }}
          >
            <Shape size={item.size} color={item.color} />
          </motion.div>
        );
      })}

      {/* Glowing orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full"
          style={{
            width: 4 + Math.random() * 6,
            height: 4 + Math.random() * 6,
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
            backgroundColor: ["#f59e0b", "#06d6a0", "#ef476f", "#818cf8", "#38bdf8"][i],
          }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0.5, 1.5, 0.5],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
