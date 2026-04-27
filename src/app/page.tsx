"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";

import Navigation from "@/components/portfolio/Navigation";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection, { type Project } from "@/components/portfolio/ProjectsSection";
import ProjectDetail from "@/components/portfolio/ProjectDetail";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";
import WavingCharacter from "@/components/portfolio/WavingCharacter";
import FloatingElements from "@/components/portfolio/FloatingElements";

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleSelectProject = useCallback((project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  }, []);

  const handleCloseProject = useCallback(() => {
    setSelectedProject(null);
    document.body.style.overflow = "";
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Floating background elements */}
      <FloatingElements />

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection onSelectProject={handleSelectProject} />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Detail Modal */}
      <ProjectDetail project={selectedProject} onClose={handleCloseProject} />

      {/* Waving Character */}
      <WavingCharacter />
    </div>
  );
}
