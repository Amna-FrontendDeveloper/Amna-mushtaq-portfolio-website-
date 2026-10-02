import React, { useState } from "react";
import { OTHER_PROJECTS, ProjectItem } from "../data/portfolioData";
import {
  ExternalLink,
  CheckCircle2,
  Clock,
  Globe,
  SlidersHorizontal,
} from "lucide-react";

interface OtherProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const OtherProjects: React.FC<OtherProjectsProps> = ({
  onSelectProject,
}) => {
  const [filter, setFilter] = useState<"all" | "healthcare" | "ai-web">("all");

  const filteredProjects = OTHER_PROJECTS.filter((project) => {
    if (filter === "all") return true;
    if (filter === "healthcare") {
      return (
        project.id === "shed-hospital" ||
        project.id === "javed-care-app" ||
        project.id === "maryam-waseem-surgical"
      );
    }
    if (filter === "ai-web") {
      return (
        project.id === "ai-customer-support-agent" ||
        project.id === "personal-portfolio-system" ||
        project.id === "custom-business-portal"
      );
    }
    return true;
  });

  return (
    <section className="py-16 sm:py-20 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-teal-700 uppercase mb-2">
              <span className="w-6 h-px bg-teal-600" />
              Verified Portfolio
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Web Applications & Digital Solutions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Practical applications built to solve operational workflows, customer communication, and healthcare presence needs.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-1 p-1 bg-white border border-slate-200/90 rounded-xl shadow-2xs self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filter === "all"
                  ? "bg-slate-900 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              All ({OTHER_PROJECTS.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter("healthcare")}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filter === "healthcare"
                  ? "bg-teal-700 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Healthcare (3)
            </button>
            <button
              type="button"
              onClick={() => setFilter("ai-web")}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filter === "ai-web"
                  ? "bg-slate-900 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              AI & Web Apps (3)
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const isUpcoming = project.isUpcoming;
            const hasLiveUrl = !!project.liveUrl;

            return (
              <div
                key={project.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-teal-300"
              >
                {/* Visual Thumbnail (if present) */}
                {project.desktopImage ? (
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                    <img
                      src={project.desktopImage}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="px-2.5 py-1 rounded-md bg-slate-900/85 backdrop-blur-xs text-white text-[11px] font-semibold">
                        {project.category}
                      </span>
                    </div>

                    {hasLiveUrl && (
                      <div className="absolute top-3 right-3">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-600/90 backdrop-blur-xs text-white text-[10px] font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-200 animate-pulse" />
                          Live URL
                        </span>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="p-6 pb-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                        {project.category}
                      </span>
                      {isUpcoming && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200">
                          <Clock className="w-3 h-3" />
                          Planned
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between text-left">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-xs font-medium text-slate-500 mt-1">
                      {project.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                      {project.highlights.slice(0, 3).map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-2 text-xs text-slate-600"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Integrations (if any) */}
                    {project.integrations && project.integrations.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-slate-100">
                        <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                          Integrations
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.integrations.map((integration) => (
                            <span
                              key={integration}
                              className="text-[11px] px-2 py-0.5 rounded-md bg-teal-50 text-teal-800 border border-teal-100 font-medium"
                            >
                              {integration}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Technologies & Action Buttons */}
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-[11px] px-2 py-0.5 rounded bg-slate-50 text-slate-500">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      {hasLiveUrl ? (
                        <>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-bold rounded-lg bg-teal-700 hover:bg-teal-800 text-white transition-all shadow-2xs"
                          >
                            <Globe className="w-3.5 h-3.5" />
                            <span>Visit Live</span>
                            <ExternalLink className="w-3 h-3 opacity-80" />
                          </a>

                          <button
                            type="button"
                            onClick={() => onSelectProject(project)}
                            className="inline-flex items-center justify-center p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all cursor-pointer"
                            title="Explore Case Study Specs"
                            aria-label={`View specs for ${project.title}`}
                          >
                            <SlidersHorizontal className="w-4 h-4" />
                          </button>
                        </>
                      ) : (
                        <button
                          type="button"
                          onClick={() => onSelectProject(project)}
                          className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-teal-700 hover:text-white text-slate-800 transition-all cursor-pointer"
                        >
                          <span>Explore Project Specs</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
