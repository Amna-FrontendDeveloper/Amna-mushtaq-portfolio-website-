import React, { useState } from "react";
import {
  FEATURED_HOSPITAL_PROJECT,
  OTHER_PROJECTS,
  ProjectItem,
} from "../data/portfolioData";
import {
  Monitor,
  Smartphone,
  ExternalLink,
  MessageSquare,
  AlertCircle,
  Lightbulb,
  Target,
  CheckCircle2,
  Globe,
} from "lucide-react";

interface FeaturedProjectProps {
  onOpenCaseStudy: (project: ProjectItem) => void;
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  onOpenCaseStudy,
}) => {
  const hospitalProjects = [
    FEATURED_HOSPITAL_PROJECT,
    ...OTHER_PROJECTS.filter(
      (p) => p.id === "shed-hospital" || p.id === "javed-care-app"
    ),
  ];

  const [activeProject, setActiveProject] = useState<ProjectItem>(
    FEATURED_HOSPITAL_PROJECT
  );

  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");

  const handleDiscussClick = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="projects"
      className="py-20 sm:py-24 bg-slate-50/70 border-t border-slate-200/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 text-left">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-teal-700 uppercase mb-2">
              <span className="w-6 h-px bg-teal-600" />
              Flagship Healthcare Solutions
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured Project
            </h2>

            <p className="text-slate-600 text-base mt-2">
              Designed for real-world patient trust, accessibility, and clear
              clinical navigation.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold text-teal-800 bg-teal-100/70 rounded-full border border-teal-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Live Deployed Solution
            </span>
          </div>
        </div>

        {/* Quick Hospital Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="text-xs font-semibold text-slate-500 mr-1">
            Featured Deployments:
          </span>

          {hospitalProjects.map((p) => {
            const isSelected = activeProject.id === p.id;

            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setActiveProject(p)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? "bg-slate-900 text-white shadow-xs"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80"
                }`}
              >
                {p.title}
              </button>
            );
          })}
        </div>

        {/* Big Featured Showcase Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden">
          {/* Top Bar inside Card with View Mode Toggles & Live Indicator */}
          <div className="px-6 py-4 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />

              <span className="text-xs font-mono text-slate-300 ml-2 hidden sm:inline">
                {activeProject.title} — {activeProject.subtitle}
              </span>
            </div>

            {/* Desktop / Mobile Preview Selector */}
            <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-lg">
              <button
                type="button"
                onClick={() => setViewMode("desktop")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  viewMode === "desktop"
                    ? "bg-teal-600 text-white shadow-xs"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                Desktop
              </button>

              <button
                type="button"
                onClick={() => setViewMode("mobile")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  viewMode === "mobile"
                    ? "bg-teal-600 text-white shadow-xs"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                Mobile
              </button>
            </div>
          </div>

          {/* Visual Preview Display */}
          <div className="bg-slate-950 p-4 sm:p-8 flex justify-center items-center overflow-hidden">
            {viewMode === "desktop" ? (
              <div className="w-full max-w-4xl relative rounded-xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900 group">
                {activeProject.desktopImage ? (
                  <img
                    src={activeProject.desktopImage}
                    alt={`${activeProject.title} Desktop Interface Mockup`}
                    className="w-full h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="aspect-video flex items-center justify-center text-slate-400 text-sm">
                    Desktop preview unavailable
                  </div>
                )}
              </div>
            ) : (
              <div className="w-full max-w-xs relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800 bg-slate-900">
                {activeProject.mobileImage ? (
                  <img
                    src={activeProject.mobileImage}
                    alt={`${activeProject.title} Mobile Screen Mockup`}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="aspect-[9/16] flex items-center justify-center bg-slate-900 text-slate-400 text-sm text-center p-6">
                    Mobile preview coming soon
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Project Details Body */}
          <div className="p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left Column: Description & Triple Breakdown */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                      {activeProject.category}
                    </span>

                    {activeProject.liveUrl && (
                      <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        Live Online
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {activeProject.title}
                  </h3>

                  <p className="text-base text-slate-600 mt-2 leading-relaxed">
                    {activeProject.description}
                  </p>
                </div>

                {/* Structured Problem / Solution / Goal Breakdown */}
                <div className="space-y-4 pt-2">
                  {/* Problem */}
                  <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/70">
                    <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-1">
                      <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                      <h4>The Problem</h4>
                    </div>

                    <p className="text-xs sm:text-sm text-amber-950/80 leading-relaxed">
                      {activeProject.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-200/70">
                    <div className="flex items-center gap-2 text-teal-900 font-bold text-sm mb-1">
                      <Lightbulb className="w-4 h-4 text-teal-700 shrink-0" />
                      <h4>The Solution</h4>
                    </div>

                    <p className="text-xs sm:text-sm text-teal-950/80 leading-relaxed">
                      {activeProject.solution}
                    </p>
                  </div>

                  {/* Goal */}
                  <div className="p-4 rounded-xl bg-sky-50/70 border border-sky-200/70">
                    <div className="flex items-center gap-2 text-sky-900 font-bold text-sm mb-1">
                      <Target className="w-4 h-4 text-sky-700 shrink-0" />
                      <h4>The Goal</h4>
                    </div>

                    <p className="text-xs sm:text-sm text-sky-950/80 leading-relaxed">
                      {activeProject.goal}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Highlights, Technologies & Action CTAs */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6 text-left">
                {/* Highlights */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Key Features & UX Modules
                  </h4>

                  <ul className="space-y-2.5">
                    {activeProject.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology Badges */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Technologies Used
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200/80 text-slate-800 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-4 border-t border-slate-200/80 flex flex-col gap-3">
                  {/* Primary Live URL Button */}
                  {activeProject.liveUrl && (
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex justify-center items-center gap-2 px-5 py-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold shadow-xs transition-colors"
                    >
                      <Globe className="w-4 h-4" />
                      Visit Live Website
                      <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                    </a>
                  )}

                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <button
                      type="button"
                      onClick={() => onOpenCaseStudy(activeProject)}
                      className="flex-1 inline-flex justify-center items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                    >
                      <span>Project Specs</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleDiscussClick}
                      className="flex-1 inline-flex justify-center items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 text-xs font-semibold transition-colors cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-teal-700" />
                      <span>Discuss Project</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
