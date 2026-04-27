"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Github, Linkedin, CheckCircle } from "lucide-react";
import { personalInfo } from "@/lib/portfolio-data";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2a2a4a] to-transparent" />
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#f59e0b]/3 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-60 h-60 bg-[#06d6a0]/3 rounded-full blur-[100px]" />
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
            ✏️ Let&apos;s connect
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2 mb-4">
            Get in <span className="hand-underline">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-[#f59e0b] mx-auto rounded-full" />
          <p className="text-[#8888aa] mt-4 max-w-lg mx-auto">
            Have a game idea? Need a developer? Or just want to chat about games? I&apos;d love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Info cards */}
            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: personalInfo.email, color: "#f59e0b" },
                { icon: MapPin, label: "Location", value: personalInfo.location, color: "#06d6a0" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-[#1e1e36]/50 border border-[#2a2a4a]/50 rounded-xl"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="text-xs text-[#8888aa]">{item.label}</p>
                    <p className="text-sm text-[#e8e6e3] font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-sm text-[#8888aa] mb-4">Find me online</p>
              <div className="flex gap-3">
                {[
                  { icon: Github, label: "GitHub", href: personalInfo.github, color: "#e8e6e3" },
                  { icon: Linkedin, label: "LinkedIn", href: personalInfo.linkedin, color: "#0ea5e9" },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-xl bg-[#1e1e36] border border-[#2a2a4a]/50 flex items-center justify-center hover:border-[#f59e0b]/30 transition-all duration-300 group"
                  >
                    <social.icon
                      className="w-5 h-5 text-[#8888aa] group-hover:text-[#f59e0b] transition-colors duration-300"
                    />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Hand-drawn note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="p-4 border border-[#f59e0b]/20 hand-border-alt bg-[#f59e0b]/5"
            >
              <p className="font-[family-name:var(--font-caveat)] text-lg text-[#f59e0b]">
                🎮 Game design student at ENSAD — always building, always iterating!
              </p>
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-sm text-[#8888aa] font-medium">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-[#1e1e36]/50 border border-[#2a2a4a] rounded-xl text-[#e8e6e3] placeholder:text-[#555570] focus:outline-none focus:border-[#f59e0b]/50 focus:ring-1 focus:ring-[#f59e0b]/20 transition-all duration-300"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm text-[#8888aa] font-medium">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-[#1e1e36]/50 border border-[#2a2a4a] rounded-xl text-[#e8e6e3] placeholder:text-[#555570] focus:outline-none focus:border-[#f59e0b]/50 focus:ring-1 focus:ring-[#f59e0b]/20 transition-all duration-300"
                />
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label className="text-sm text-[#8888aa] font-medium">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Game collaboration, project inquiry..."
                  className="w-full px-4 py-3 bg-[#1e1e36]/50 border border-[#2a2a4a] rounded-xl text-[#e8e6e3] placeholder:text-[#555570] focus:outline-none focus:border-[#f59e0b]/50 focus:ring-1 focus:ring-[#f59e0b]/20 transition-all duration-300"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm text-[#8888aa] font-medium">Your Message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project, idea, or just say hi! 👋"
                  className="w-full px-4 py-3 bg-[#1e1e36]/50 border border-[#2a2a4a] rounded-xl text-[#e8e6e3] placeholder:text-[#555570] focus:outline-none focus:border-[#f59e0b]/50 focus:ring-1 focus:ring-[#f59e0b]/20 transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-[#f59e0b] text-[#0d0d1a] font-bold text-lg rounded-xl flex items-center justify-center gap-2 hover:bg-[#fbbf24] transition-colors duration-300 hover:shadow-lg hover:shadow-[#f59e0b]/20 disabled:opacity-50"
                disabled={submitted}
              >
                {submitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
