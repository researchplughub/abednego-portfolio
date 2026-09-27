"use client";

import { useState } from "react";
import { Mail, Linkedin, Github, Send, AlertCircle, ArrowUpRight } from "lucide-react";
import { profileData } from "@/data/profile";
import { isValidUrl } from "@/lib/todoUtils";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website_hp: "", // Honeypot field
  });

  const [formNotice, setFormNotice] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const hasValidEmail = isValidUrl(profileData.socialLinks.email);
  const hasValidLinkedin = isValidUrl(profileData.socialLinks.linkedin);
  const hasValidGithub = isValidUrl(profileData.socialLinks.github);

  const cleanEmail = hasValidEmail
    ? profileData.socialLinks.email.replace("mailto:", "")
    : undefined;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check: If the hidden field is filled, silently discard
    if (formData.website_hp) {
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please complete all required fields before proceeding.");
      return;
    }

    setErrorMessage("");

    // Honest handling: Since an automated delivery provider (e.g. Formspree/Next.js action) is not yet configured,
    // we NEVER simulate success or claim "Message sent".
    if (hasValidEmail) {
      const subject = encodeURIComponent(
        formData.subject || `Engineering Inquiry from ${formData.name}`
      );
      const body = encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\n${formData.message}`
      );
      window.location.href = `mailto:${cleanEmail}?subject=${subject}&body=${body}`;
    } else {
      setFormNotice(
        "The automated delivery gateway is currently awaiting provider configuration. Please connect directly via LinkedIn or verify the email configuration."
      );
    }
  };

  return (
    <section id="contact" className="py-20 border-t border-surface-border scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              Direct Inquiries
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Let&apos;s Connect
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-sm text-foreground-muted max-w-md">
            Available for full-time engineering roles, technical leadership positions, and specialized consulting engagements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Direct Channels Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="tech-card rounded-xl p-6 sm:p-8 border border-surface-border space-y-6">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Direct Communication
                </h3>
                <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
                  Feel free to reach out directly regarding technical opportunities, collaboration, or research consulting.
                </p>
              </div>

              <div className="space-y-4">
                {/* Email Channel */}
                {hasValidEmail ? (
                  <a
                    href={profileData.socialLinks.email}
                    className="flex items-center gap-3.5 p-3.5 rounded-lg bg-surface-subtle hover:bg-surface border border-surface-border hover:border-cyan-500/40 text-foreground transition-all group"
                  >
                    <div className="p-2 rounded-md bg-surface-card border border-surface-border text-cyan-400 group-hover:text-cyan-300">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono uppercase tracking-wider text-foreground-subtle">
                        Email
                      </div>
                      <div className="text-xs sm:text-sm font-medium font-mono text-cyan-400 group-hover:underline">
                        {cleanEmail}
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-3.5 p-3.5 rounded-lg bg-surface-subtle border border-surface-border text-foreground-muted">
                    <div className="p-2 rounded-md bg-surface-card border border-surface-border text-cyan-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono uppercase tracking-wider text-foreground-subtle">
                        Email
                      </div>
                      <div className="text-xs text-foreground-muted">
                        Available upon request
                      </div>
                    </div>
                  </div>
                )}

                {/* LinkedIn Channel */}
                {hasValidLinkedin && (
                  <a
                    href={profileData.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-3.5 rounded-lg bg-surface-subtle hover:bg-surface border border-surface-border hover:border-cyan-500/40 text-foreground transition-all group"
                  >
                    <div className="p-2 rounded-md bg-surface-card border border-surface-border text-cyan-400 group-hover:text-cyan-300">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div className="flex items-center justify-between flex-grow">
                      <div>
                        <div className="text-[11px] font-mono uppercase tracking-wider text-foreground-subtle">
                          LinkedIn
                        </div>
                        <div className="text-xs sm:text-sm font-medium text-foreground group-hover:text-cyan-400">
                          Connect on LinkedIn
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-foreground-subtle group-hover:text-cyan-400" />
                    </div>
                  </a>
                )}

                {/* GitHub Channel */}
                {hasValidGithub && (
                  <a
                    href={profileData.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-3.5 rounded-lg bg-surface-subtle hover:bg-surface border border-surface-border hover:border-cyan-500/40 text-foreground transition-all group"
                  >
                    <div className="p-2 rounded-md bg-surface-card border border-surface-border text-cyan-400 group-hover:text-cyan-300">
                      <Github className="w-4 h-4" />
                    </div>
                    <div className="flex items-center justify-between flex-grow">
                      <div>
                        <div className="text-[11px] font-mono uppercase tracking-wider text-foreground-subtle">
                          GitHub
                        </div>
                        <div className="text-xs sm:text-sm font-medium text-foreground group-hover:text-cyan-400">
                          Explore Repositories &amp; Code
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-foreground-subtle group-hover:text-cyan-400" />
                    </div>
                  </a>
                )}
              </div>

              <div className="pt-4 border-t border-surface-border/60 text-xs font-mono text-foreground-subtle">
                Location: {profileData.location.description}
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="tech-card rounded-xl p-6 sm:p-8 border border-surface-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-foreground">
                  Send a Message
                </h3>
                <span className="text-[11px] font-mono text-cyan-400/80 bg-surface-subtle px-2.5 py-1 rounded border border-surface-border">
                  Direct Routing
                </span>
              </div>

              {formNotice && (
                <div className="mb-4 p-3.5 rounded-lg bg-surface-subtle border border-surface-border text-xs text-foreground-muted flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <span>{formNotice}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Honeypot field (hidden from legitimate users, catches spam bots) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website_hp">Leave this empty</label>
                  <input
                    type="text"
                    id="website_hp"
                    name="website_hp"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website_hp}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono uppercase tracking-wider text-foreground-subtle mb-1.5"
                    >
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-surface-subtle border border-surface-border text-sm text-foreground placeholder:text-foreground-subtle focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono uppercase tracking-wider text-foreground-subtle mb-1.5"
                    >
                      Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-surface-subtle border border-surface-border text-sm text-foreground placeholder:text-foreground-subtle focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono uppercase tracking-wider text-foreground-subtle mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Engineering Role / Technical Advisory"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-surface-subtle border border-surface-border text-sm text-foreground placeholder:text-foreground-subtle focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono uppercase tracking-wider text-foreground-subtle mb-1.5"
                  >
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide context on your role, project requirements, or inquiry..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-surface-subtle border border-surface-border text-sm text-foreground placeholder:text-foreground-subtle focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                  />
                </div>

                {errorMessage && (
                  <div className="p-3 rounded-lg bg-red-950/40 border border-red-800/50 flex items-center gap-2.5 text-xs text-red-300">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-background font-semibold text-sm transition-all shadow-cyan-subtle"
                  >
                    <span>Send via Email Client</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <span className="text-[11px] text-foreground-subtle font-mono">
                    Protected by spam honeypot
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
