import React from "react";
import { PROCESS_STEPS } from "../data/portfolioData";
import { Compass, FileCode, Cpu, Sparkles } from "lucide-react";

export const Process: React.FC = () => {
  const stepIcons = [Compass, FileCode, Cpu, Sparkles];

  return (
    <section className="py-20 sm:py-24 bg-slate-50/60 border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-teal-700 uppercase mb-2">
            <span className="w-6 h-px bg-teal-600" />
            Execution Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Development Process
          </h2>
          <p className="text-slate-600 text-base mt-2">
            A structured, repeatable approach that ensures requirements are clearly defined before code is written.
          </p>
        </div>

        {/* Timeline Container: Desktop Horizontal, Mobile Vertical */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div
            className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-slate-200 -translate-y-8 z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = stepIcons[idx % stepIcons.length];
              return (
                <div
                  key={step.number}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left group hover:border-teal-300"
                >
                  <div>
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-teal-50 group-hover:bg-teal-700 group-hover:text-white text-teal-700 flex items-center justify-center transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-2xl font-black tracking-tight text-slate-300 group-hover:text-teal-600 transition-colors font-mono">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                      {step.number} — {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">
                      {step.description}
                    </p>

                    <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                      {step.details}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600">
                    <span>Phase 0{idx + 1}</span>
                    <span className="font-semibold text-teal-700">Verified</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
