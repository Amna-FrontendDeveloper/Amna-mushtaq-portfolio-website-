import React, { useState } from "react";
import { PERSONAL_INFO } from "../data/portfolioData";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Copy,
  Check,
  Send,
  ArrowDown,
  ExternalLink,
  MessageCircle,
} from "lucide-react";

export const Contact: React.FC = () => {
  const [copiedType, setCopiedType] = useState<"email" | "phone" | null>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    projectType: "Healthcare Website",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    // Compose mailto body
    const subject = encodeURIComponent(
      `Project Inquiry: ${formState.projectType} - from ${formState.name}`
    );
    const body = encodeURIComponent(
      `Hi Amna,\n\nMy name is ${formState.name} (${formState.email}).\n\nProject Type: ${formState.projectType}\n\nMessage:\n${formState.message}\n\nLooking forward to hearing from you!`
    );

    // Open mail client
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      formState.name
        ? `Hi Amna, I'm ${formState.name}. I'm interested in discussing a ${formState.projectType}. ${formState.message}`
        : `Hi Amna, I came across your portfolio and would like to discuss a web project.`
    );
    window.open(`${PERSONAL_INFO.whatsappUrl}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  const handleScrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Top Banner */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-teal-950 rounded-3xl p-8 sm:p-12 lg:p-16 text-white text-left shadow-xl relative overflow-hidden mb-16">
          <div
            className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-semibold tracking-wider uppercase mb-5">
              Available For Projects & Independent Work
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white mb-4">
              Have a Business Problem That Needs a Digital Solution?
            </h2>

            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
              Let’s turn your idea into a professional, practical web solution.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => {
                  const formEl = document.getElementById("inquiry-form");
                  if (formEl) formEl.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm shadow-md transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                Start a Conversation
              </button>

              <button
                type="button"
                onClick={handleScrollToProjects}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition-all cursor-pointer"
              >
                <ArrowDown className="w-4 h-4" />
                View My Projects
              </button>
            </div>
          </div>
        </div>

        {/* Contact Split: Form + Verified Channels */}
        <div id="inquiry-form" className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          {/* Left Column: Direct Inquiries Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-teal-700 uppercase mb-2">
                <span className="w-6 h-px bg-teal-600" />
                Direct Channels
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Let's Discuss Your Project
              </h3>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                Reach out directly via email, WhatsApp, or connect on LinkedIn and GitHub.
                Expect a response within 24 hours.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-3.5">
              {/* Email */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-center justify-between group hover:border-teal-300 transition-all">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-3.5 flex-1 min-w-0"
                >
                  <div className="p-2.5 rounded-xl bg-teal-100 text-teal-800 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Email
                    </p>
                    <p className="text-sm font-bold text-slate-900 truncate group-hover:text-teal-700 transition-colors">
                      {PERSONAL_INFO.email}
                    </p>
                  </div>
                </a>
                <button
                  type="button"
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, "email")}
                  className="p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-200/50 rounded-lg transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedType === "email" ? (
                    <Check className="w-4 h-4 text-teal-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* WhatsApp */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-center justify-between group hover:border-emerald-300 transition-all">
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 flex-1 min-w-0"
                >
                  <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-800 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      WhatsApp (Direct Chat)
                    </p>
                    <p className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {PERSONAL_INFO.phoneRaw}{" "}
                      <span className="text-xs font-normal text-slate-600">
                        (+92 320 7730977)
                      </span>
                    </p>
                  </div>
                </a>
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
                  aria-label="Open WhatsApp chat"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* LinkedIn */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-center justify-between group hover:border-sky-300 transition-all">
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 flex-1 min-w-0"
                >
                  <div className="p-2.5 rounded-xl bg-sky-100 text-sky-800 shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      LinkedIn
                    </p>
                    <p className="text-sm font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                      Amna Mushtaq
                    </p>
                  </div>
                </a>
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-sky-700 hover:bg-sky-50 rounded-lg transition-colors"
                  aria-label="Open LinkedIn profile"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* GitHub */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-center justify-between group hover:border-slate-400 transition-all">
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 flex-1 min-w-0"
                >
                  <div className="p-2.5 rounded-xl bg-slate-200 text-slate-900 shrink-0">
                    <Github className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      GitHub
                    </p>
                    <p className="text-sm font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                      Amna-FrontendDeveloper
                    </p>
                  </div>
                </a>
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-200/50 rounded-lg transition-colors"
                  aria-label="Open GitHub repository"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick copy feedback toast */}
            {copiedType && (
              <div className="p-3 bg-teal-50 border border-teal-200 text-teal-800 text-xs rounded-xl flex items-center gap-2 animate-in fade-in">
                <Check className="w-4 h-4 text-teal-600 shrink-0" />
                <span>
                  {copiedType === "email" ? "Email address" : "Phone number"}{" "}
                  copied to clipboard!
                </span>
              </div>
            )}
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50/90 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Send a Project Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Fill in your details and describe what you need built.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 bg-teal-50 border border-teal-200 rounded-2xl text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-teal-900">
                    Thank You for Reaching Out!
                  </h4>
                  <p className="text-xs sm:text-sm text-teal-800 leading-relaxed max-w-md mx-auto">
                    Your email client has been prepared with your message. You can also chat instantly on WhatsApp for a quick response.
                  </p>
                  <div className="pt-3">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-bold text-teal-800 underline hover:text-teal-900 cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                      >
                        Your Name / Organization
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        placeholder="e.g. Dr. Ahmed / City Hospital"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        placeholder="contact@business.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      value={formState.projectType}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          projectType: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all cursor-pointer"
                    >
                      <option value="Healthcare Website">
                        Healthcare & Hospital Website
                      </option>
                      <option value="Business Website">
                        Business & Corporate Website
                      </option>
                      <option value="Web Application">
                        Custom Web Application / Portal
                      </option>
                      <option value="AI & API Integration">
                        AI or API Integration
                      </option>
                      <option value="Other Consultation">
                        Other Consultation / General Inquiry
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      Describe Your Problem / Goals
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder="Tell me about your business challenge, desired pages, or specific workflows..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3 items-center">
                    <button
                      type="submit"
                      className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm shadow-xs transition-colors cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      Send Inquiry via Email
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-xs transition-colors cursor-pointer"
                    >
                      <Phone className="w-4 h-4" />
                      WhatsApp Direct
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
