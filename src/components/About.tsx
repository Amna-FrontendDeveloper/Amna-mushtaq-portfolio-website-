import React from "react";
import { Compass, Palette, Code2, Sparkles, ArrowRight } from "lucide-react";

export const About: React.FC = () => {
  const steps = [
    {
      name: "Understand",
      desc: "Identify the core operational challenge, patient/client pain point, and business objective.",
      icon: Compass,
    },
    {
      name: "Design",
      desc: "Structure intuitive information architecture, readable layouts, and trustworthy UI.",
      icon: Palette,
    },
    {
      name: "Develop",
      desc: "Write clean, modular, and responsive code utilizing modern tools like React and Tailwind.",
      icon: Code2,
    },
    {
      name: "Improve",
      desc: "Refine usability, audit mobile responsiveness, and ensure clarity across all touchpoints.",
      icon: Sparkles,
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-24 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & Story */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-teal-700 uppercase">
              <span className="w-6 h-px bg-teal-600" />
              About Amna Mushtaq
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              I Build Solutions,{" "}
              <span className="text-teal-700">Not Just Websites.</span>
            </h2>

            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
                I’m a final-semester Software Engineering student at{" "}
                <span className="font-semibold text-slate-800">
                  Virtual University of Pakistan
                </span>
                , passionate about using technology to solve real-world problems.
              </p>
              <p>
                I design and develop professional websites and web applications
                that help businesses improve their digital presence and connect
                better with their customers.
              </p>
              <p className="p-3.5 bg-white rounded-xl border border-slate-200/90 text-slate-700 font-medium shadow-2xs">
                My approach is simple:{" "}
                <span className="text-teal-800 font-semibold">
                  understand the problem first, then build a practical digital
                  solution around it.
                </span>
              </p>
              <p>
                For healthcare and hospital projects, my focus is on creating
                clear, trustworthy, and user-friendly websites where patients can
                easily understand doctors, services, departments, contact
                information, and other important details.
              </p>
            </div>
          </div>

          {/* Right Column: Visual Process Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
                    My Work Philosophy
                  </p>
                  <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                    Understand → Design → Develop → Improve
                  </h3>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-teal-50 text-teal-800">
                  4-Step Loop
                </span>
              </div>

              {/* Step Flow List */}
              <div className="mt-6 space-y-4">
                {steps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.name}
                      className="group flex items-start gap-4 p-3.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200/80 transition-all duration-200"
                    >
                      <div className="p-2.5 rounded-lg bg-teal-50 group-hover:bg-teal-700 group-hover:text-white text-teal-700 transition-colors shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono text-teal-600 font-bold">
                            0{idx + 1}
                          </span>
                          <h4 className="text-sm font-bold text-slate-900">
                            {step.name}
                          </h4>
                          {idx < steps.length - 1 && (
                            <ArrowRight className="w-3 h-3 text-slate-300 ml-auto hidden sm:block" />
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-snug">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Subtle footer tip inside card */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <span>Outcome-driven development</span>
                <span className="font-semibold text-slate-700">
                  Reliable & Maintainable
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
