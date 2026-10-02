import React from "react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { Mail, Phone, Github, Linkedin, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-900 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand & Positioning */}
          <div className="max-w-md text-left">
            <a
              href="#home"
              className="text-2xl font-black tracking-tight text-white hover:text-teal-400 transition-colors"
            >
              {PERSONAL_INFO.name}
            </a>
            <p className="text-sm font-medium text-teal-400 mt-1">
              Software Engineer | Turning Business Problems into Effective Web Solutions
            </p>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              BS Software Engineering student at Virtual University of Pakistan.
              Developing practical digital solutions and high-trust healthcare web experiences.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-teal-600 text-slate-300 hover:text-white border border-slate-800 transition-all"
              aria-label="Email Amna Mushtaq"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-emerald-600 text-slate-300 hover:text-white border border-slate-800 transition-all"
              aria-label="WhatsApp Chat"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-sky-600 text-slate-300 hover:text-white border border-slate-800 transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-800 transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Navigation & Copyright Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <nav aria-label="Footer" className="flex flex-wrap items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-teal-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <p>© 2026 {PERSONAL_INFO.name}. All rights reserved.</p>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
