import React from "react";
import { QUICK_STATS } from "../data/portfolioData";
import { GraduationCap, Clock, Code, Lightbulb } from "lucide-react";

export const QuickStats: React.FC = () => {
  const icons = [GraduationCap, Clock, Code, Lightbulb];

  return (
    <section className="border-y border-slate-200/80 bg-white py-8 sm:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 divide-slate-100">
          {QUICK_STATS.map((stat, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={stat.label}
                className="flex items-start gap-3.5 pt-4 sm:pt-0"
              >
                <div className="p-2.5 rounded-xl bg-teal-50 text-teal-700 shrink-0 mt-0.5">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                    {stat.category}
                  </p>
                  <p className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                    {stat.label}
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {stat.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
