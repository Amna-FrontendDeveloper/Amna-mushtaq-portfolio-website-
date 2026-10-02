import React from "react";
import { EXPERIENCE_DATA, EDUCATION_DATA } from "../data/portfolioData";
import { Briefcase, GraduationCap, CheckCircle2, Calendar } from "lucide-react";

export const ExperienceEducation: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-left">
          {/* Experience Column */}
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-teal-700 uppercase mb-2">
              <span className="w-6 h-px bg-teal-600" />
              Career Track
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-6">
              Experience
            </h2>

            <div className="bg-slate-50/80 rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs hover:shadow-sm transition-all">
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200/60">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-teal-100/70 text-teal-800">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {EXPERIENCE_DATA.title}
                    </h3>
                    <p className="text-sm font-semibold text-teal-700">
                      {EXPERIENCE_DATA.role}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 whitespace-nowrap">
                  {EXPERIENCE_DATA.status}
                </span>
              </div>

              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                {EXPERIENCE_DATA.description}
              </p>

              <div className="mt-6 pt-4 border-t border-slate-200/60">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Core Focus Areas
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {EXPERIENCE_DATA.focusAreas.map((area) => (
                    <div
                      key={area}
                      className="flex items-center gap-2 text-xs font-medium text-slate-700"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education Column */}
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-teal-700 uppercase mb-2">
              <span className="w-6 h-px bg-teal-600" />
              Academic Background
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-6">
              Education
            </h2>

            <div className="bg-slate-50/80 rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between h-[calc(100%-4rem)]">
              <div>
                <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200/60">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-teal-100/70 text-teal-800">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {EDUCATION_DATA.degree}
                      </h3>
                      <p className="text-sm font-semibold text-teal-700">
                        {EDUCATION_DATA.institution}
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 whitespace-nowrap">
                    <Calendar className="w-3 h-3 text-teal-600" />
                    <span>Graduating {EDUCATION_DATA.expectedYear}</span>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold px-2.5 py-1 rounded-md bg-teal-50 text-teal-800 border border-teal-200/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                    Current Status: Final Semester
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {EDUCATION_DATA.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-600">
                <span>Degree: Bachelor of Science (BS)</span>
                <span className="font-semibold text-slate-700">
                  Software Engineering
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
