import React from "react";
import { APPROACH_CARDS } from "../data/portfolioData";
import { Target, Users, TrendingUp, Code2 } from "lucide-react";

export const Approach: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Target,
    Users,
    TrendingUp,
    Code2,
  };

  return (
    <section className="py-20 sm:py-24 bg-slate-50/50 border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-teal-700 uppercase mb-2">
            <span className="w-6 h-px bg-teal-600" />
            Core Values
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            My Approach
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Building software with intentional purpose, user empathy, and measurable value for organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {APPROACH_CARDS.map((card) => {
            const Icon = iconMap[card.icon] || Target;
            return (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:border-teal-300"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal-50 group-hover:bg-teal-700 group-hover:text-white text-teal-700 flex items-center justify-center transition-colors mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-2 text-[11px] font-semibold text-teal-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                  <span>Guiding Principle</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
