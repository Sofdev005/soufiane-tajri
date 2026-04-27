"use client";

import { motion } from "framer-motion";
import { Gamepad2, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-[#2a2a4a]/30 mt-auto">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#f59e0b]/5 rounded-full blur-[80px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Gamepad2 className="w-5 h-5 text-[#f59e0b]" />
            <span className="font-[family-name:var(--font-caveat)] text-lg font-bold text-[#f59e0b]">
              Soufiane.Tajri
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-[#8888aa] flex items-center gap-1">
            © 2026 Soufiane Tajri. Built with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-[#ef476f] inline mx-0.5" fill="currentColor" />
            </motion.span>
            and lots of ☕ — passion for games & good code
          </p>

          {/* Hand-drawn decoration */}
          <svg width="100" height="12" viewBox="0 0 100 12" fill="none" className="hidden sm:block">
            <motion.path
              d="M2 6 Q25 0 50 6 T98 6"
              stroke="#f59e0b"
              strokeWidth="1.5"
              fill="none"
              opacity="0.3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            />
          </svg>
        </div>
      </div>
    </footer>
  );
}
