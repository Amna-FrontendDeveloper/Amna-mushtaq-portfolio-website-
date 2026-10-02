import React, { useEffect } from "react";
import { ProjectItem } from "../data/portfolioData";
import {
  X,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Target,
  MessageSquare,
  Globe,
  ExternalLink,
} from "lucide-react";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleDiscuss = () => {
    onClose();
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-y-auto flex flex-col text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-sm border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                {project.category}
              </span>
              {project.liveUrl && (
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Live Deployed
                </span>
              )}
            </div>
            <h3 id="modal-title" className="text-xl font-bold text-slate-900 mt-0.5">
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Main Screenshot (if available) */}
          {project.desktopImage && (
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-950 shadow-sm">
              <img
                src={project.desktopImage}
                alt={project.title}
                className="w-full h-auto object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          )}

          {/* Description */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              Project Overview
            </h4>
            <p className="text-base text-slate-700 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Problem, Solution, Goal */}
          <div className="grid grid-cols-1 gap-3.5">
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-1">
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Problem Solved</span>
              </div>
              <p className="text-xs sm:text-sm text-amber-950/80 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-teal-50/80 border border-teal-200/80">
              <div className="flex items-center gap-2 text-teal-900 font-bold text-sm mb-1">
                <Lightbulb className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Implemented Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-teal-950/80 leading-relaxed">
                {project.solution}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-sky-50/70 border border-sky-200/80">
              <div className="flex items-center gap-2 text-sky-900 font-bold text-sm mb-1">
                <Target className="w-4 h-4 text-sky-700 shrink-0" />
                <span>Primary Goal</span>
              </div>
              <p className="text-xs sm:text-sm text-sky-950/80 leading-relaxed">
                {project.goal}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
              Implementation Highlights
            </h4>
            <ul className="space-y-2">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-2.5">
              Technologies & Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 z-20 flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4 bg-slate-50 border-t border-slate-200">
          <p className="text-xs text-slate-500">
            Interested in building a similar digital solution?
          </p>
          <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold shadow-xs transition-colors"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Visit Live Site</span>
                <ExternalLink className="w-3 h-3 opacity-80" />
              </a>
            )}
            <button
              type="button"
              onClick={handleDiscuss}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              Discuss Project
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 text-xs font-semibold transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
