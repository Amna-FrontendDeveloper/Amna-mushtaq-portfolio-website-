/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { QuickStats } from "./components/QuickStats";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { FeaturedProject } from "./components/FeaturedProject";
import { OtherProjects } from "./components/OtherProjects";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { ExperienceEducation } from "./components/ExperienceEducation";
import { Approach } from "./components/Approach";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ProjectModal } from "./components/ProjectModal";
import {
  FEATURED_HOSPITAL_PROJECT,
  ProjectItem,
} from "./data/portfolioData";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Monitor active section based on scroll position
  useEffect(() => {
    const sectionIds = ["home", "about", "skills", "projects", "services", "contact"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFB] text-slate-900 selection:bg-teal-100 selection:text-teal-900 flex flex-col font-sans">
      {/* Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Quick Stats Strip */}
        <QuickStats />

        {/* About Section */}
        <About />

        {/* Technical Skills Section */}
        <Skills />

        {/* Featured Project: Hospital & Healthcare Website */}
        <FeaturedProject
          onOpenCaseStudy={(proj) => setSelectedProject(proj)}
        />

        {/* Other Projects: AI Support Agent, Portfolio, Upcoming Solutions */}
        <OtherProjects onSelectProject={(proj) => setSelectedProject(proj)} />

        {/* Services Section */}
        <Services />

        {/* 4-Step Development Process */}
        <Process />

        {/* Experience & Education */}
        <ExperienceEducation />

        {/* Why Work With Me / My Approach */}
        <Approach />

        {/* Contact & Final CTA Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Case Study & Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
