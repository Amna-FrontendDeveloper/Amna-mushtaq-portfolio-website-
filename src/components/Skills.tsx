import React, { useState } from "react";
import { SKILL_CATEGORIES } from "../data/portfolioData";
import {
  Code,
  Server,
  Wrench,
  Cpu,
  Layers,
  CheckCircle,
} from "lucide-react";

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categoryIcons: Record<string, React.ElementType> = {
    frontend: Code,
    backend: Server,
    tools: Wrench,
    "ai-integrations": Cpu,
  };

  const filteredCategories =
    selectedCategory === "all"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === selectedCategory);

  return (
    <section id="skills" className="py-20 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-teal-700 uppercase mb-2">
            <span className="w-6 h-px bg-teal-600" />
            Capabilities & Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Technical Skills
          </h2>
          <p className="text-slate-600 text-base mt-3 leading-relaxed">
            Practical, modern web and software development tools organized by
            discipline. Focused on building responsive, maintainable solutions
            grounded in real business needs.
          </p>
        </div>

        {/* Category Filter Controls */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100/80 rounded-xl mb-10 w-fit max-w-full">
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              selectedCategory === "all"
                ? "bg-white text-slate-900 shadow-xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
            }`}
          >
            All Disciplines
          </button>
          {SKILL_CATEGORIES.map((cat) => {
            const Icon = categoryIcons[cat.id] || Layers;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  isSelected
                    ? "bg-white text-slate-900 shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
                }`}
              >
                <Icon className="w-3.5 h-3.5 text-teal-600" />
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((category) => {
            const Icon = categoryIcons[category.id] || Layers;
            return (
              <div
                key={category.id}
                className="bg-slate-50/70 hover:bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200/80 transition-all duration-300 hover:border-teal-200 hover:shadow-sm"
              >
                {/* Header */}
                <div className="flex items-start justify-between pb-4 border-b border-slate-200/60 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-teal-100/60 text-teal-800">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-medium text-slate-500">
                    {category.skills.length} skills
                  </span>
                </div>

                {/* Skills Badges List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group p-3 bg-white rounded-xl border border-slate-200/70 hover:border-teal-400 hover:shadow-xs transition-all duration-200 flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                          {skill.name}
                        </span>
                        <CheckCircle className="w-3.5 h-3.5 text-teal-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <span className="text-xs text-slate-500 leading-snug">
                        {skill.focus}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Clean Note */}
        <div className="mt-10 p-4 rounded-xl bg-teal-50/60 border border-teal-100 text-xs text-teal-900 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-600 shrink-0" />
            <span>
              <strong>Practical Application First:</strong> Focus is on solving
              real business requirements through dependable code, clear logic,
              and maintainable architecture.
            </span>
          </div>
          <span className="text-teal-700 font-semibold">
            No subjective percentages
          </span>
        </div>
      </div>
    </section>
  );
};
