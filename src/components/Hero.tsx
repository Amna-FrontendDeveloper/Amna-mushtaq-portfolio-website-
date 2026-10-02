import React, { useState, useEffect } from "react";
import { ArrowDown, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

export const Hero: React.FC = () => {
  const [profileImg, setProfileImg] = useState<string>(PERSONAL_INFO.profileImage);

  useEffect(() => {
    // Preserve the image uploaded by the user via Change Photo, or default to personal info image
    try {
      const saved = localStorage.getItem("amna_custom_avatar");
      if (saved) {
        setProfileImg(saved);
      }
    } catch {
      // ignore
    }
  }, []);

  const floatingBadges = [
    { name: "React", pos: "top-4 -left-5 sm:-left-7" },
    { name: "JavaScript", pos: "top-24 -right-4 sm:-right-6" },
    { name: "Python", pos: "bottom-20 -left-4 sm:-left-6" },
    { name: "HTML & CSS", pos: "bottom-6 -right-3 sm:-right-5" },
  ];

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50"
    >
      {/* Subtle background ambient mesh */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-teal-100/40 via-sky-50/30 to-emerald-100/30 blur-3xl rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Positioning */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/70 text-teal-800 text-xs font-semibold tracking-wider uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600 animate-pulse" />
              SOFTWARE ENGINEER • WEB DEVELOPER
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] text-balance mb-6">
              Turning Business Problems into{" "}
              <span className="text-teal-700 underline decoration-teal-300 decoration-wavy decoration-1 underline-offset-8">
                Effective Web Solutions
              </span>
            </h1>

            {/* Supporting paragraph */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              {PERSONAL_INFO.heroParagraph}
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <button
                type="button"
                onClick={() => handleScrollTo("projects")}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 active:bg-teal-900 rounded-xl shadow-xs transition-all cursor-pointer"
              >
                View My Work
                <ArrowDown className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => handleScrollTo("contact")}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 hover:text-slate-900 border border-slate-200 rounded-xl shadow-xs transition-all cursor-pointer"
              >
                Let's Work Together
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            {/* Micro Trust Markers */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-600 pt-3 border-t border-slate-200/60 w-full max-w-xl">
              <div className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Virtual University of Pakistan</span>
              </div>
              <div className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Healthcare & Business Web Focus</span>
              </div>
              <div className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Clean, Accessible Code</span>
              </div>
            </div>
          </div>

          {/* Right Column: Modern Portrait Card with Floating Tech Badges */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer decorative soft border glow */}
              <div
                className="absolute -inset-2 bg-gradient-to-b from-teal-200/40 via-teal-100/20 to-transparent rounded-3xl blur-md"
                aria-hidden="true"
              />

              {/* Main Portrait Container */}
              <div className="relative bg-white rounded-2xl p-3 shadow-lg border border-slate-200/80 group">
                <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-slate-900">
                  <img
                    src={profileImg}
                    alt="Amna Mushtaq – Software Engineer & Web Developer"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />

                  {/* Open To Work Badge */}
                  <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-700/90 backdrop-blur-xs text-white text-[11px] font-bold tracking-wide shadow-md border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                    #OpenToWork
                  </div>

                  {/* Subtle bottom gradient overlay for card readability */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent flex items-end p-4">
                    <div>
                      <p className="text-white font-bold text-base leading-tight">
                        Amna Mushtaq
                      </p>
                      <p className="text-teal-200 text-xs font-medium mt-0.5">
                        BS Software Engineering · Graduating 2026
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Technology Badges */}
                {floatingBadges.map((badge, idx) => (
                  <div
                    key={badge.name}
                    className={`absolute ${badge.pos} bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-md rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-800 transition-transform duration-300 hover:scale-110 hover:border-teal-400 select-none z-20`}
                    style={{ animationDelay: `${idx * 150}ms` }}
                  >
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal-500 mr-1.5" />
                    {badge.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
