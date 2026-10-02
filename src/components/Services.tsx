import React from "react";
import { SERVICES } from "../data/portfolioData";
import {
  Briefcase,
  HeartPulse,
  LayoutDashboard,
  Cpu,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

export const Services: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Briefcase,
    HeartPulse,
    LayoutDashboard,
    Cpu,
  };

  const handleScrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-teal-700 uppercase mb-2">
            <span className="w-6 h-px bg-teal-600" />
            Client Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How I Can Help Your Business
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Practical development services focused on solving operational problems,
            increasing customer inquiries, and establishing a professional digital presence.
          </p>
        </div>

        {/* 4 Professional Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.icon] || Briefcase;
            return (
              <div
                key={service.id}
                className="group p-8 rounded-2xl bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-teal-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-xl bg-teal-100/70 text-teal-800 group-hover:bg-teal-700 group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold text-slate-600 group-hover:text-teal-700 transition-colors">
                      Custom Development
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm mt-2 leading-relaxed font-medium">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-2.5 pt-4 border-t border-slate-200/60">
                    {service.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={handleScrollToContact}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-900 transition-colors cursor-pointer"
                  >
                    <span>Inquire for this service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-teal-900 via-slate-900 to-slate-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-left max-w-xl">
            <p className="text-teal-300 text-xs font-bold uppercase tracking-wider mb-1">
              Direct Collaboration
            </p>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              Have a Problem You Want to Solve? Let's Talk.
            </h3>
            <p className="text-slate-300 text-sm mt-1">
              Whether you need a new healthcare website, a business presence overhaul, or a custom web app, I'm ready to help.
            </p>
          </div>

          <button
            type="button"
            onClick={handleScrollToContact}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm shadow-md transition-all whitespace-nowrap cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            Start a Conversation
          </button>
        </div>
      </div>
    </section>
  );
};
