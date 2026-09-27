"use client";

import { useState } from "react";
import Link from "next/link";
import { Github, Linkedin, ArrowRight } from "lucide-react";
import { profileData } from "@/data/profile";
import { isValidUrl } from "@/lib/todoUtils";
import { CvModal } from "./CvModal";

export function Hero() {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  const hasGithub = isValidUrl(profileData.socialLinks.github);
  const hasLinkedin = isValidUrl(profileData.socialLinks.linkedin);

  return (
    <>
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
        {/* Ambient subtle cyan glow in background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-500/10 blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            {/* Engineering Status Indicator */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-surface-card border border-surface-border text-xs font-mono text-foreground-muted mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>Available for Technical Roles & Advisory</span>
              <span className="text-surface-border">|</span>
              <span className="text-cyan-400">Dublin · Nairobi</span>
            </div>

            {/* Candidate Identity */}
            <div className="space-y-3 mb-6">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground uppercase">
                {profileData.name}
              </h1>
              <div className="flex items-center gap-3">
                <div className="h-0.5 w-8 bg-cyan-500" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-mono text-cyan-400 font-medium">
                  {profileData.role}
                </h2>
              </div>
            </div>

            {/* Core Technical Headline */}
            <p className="text-lg sm:text-2xl text-foreground-muted font-normal leading-relaxed mb-8 max-w-2xl">
              &ldquo;{profileData.headline}&rdquo;
            </p>

            {/* Credibility Strip */}
            <div className="mb-10 p-3.5 rounded-lg bg-surface-card border border-surface-border max-w-2xl">
              <div className="text-[11px] font-mono uppercase tracking-wider text-foreground-subtle mb-2">
                Core Domains & Capabilities
              </div>
              <div className="flex flex-wrap items-center gap-y-2 text-xs sm:text-sm font-mono text-foreground-muted">
                {profileData.credibilityStrip.map((item, idx) => (
                  <span key={item} className="flex items-center">
                    <span className="text-foreground hover:text-cyan-400 transition-colors font-medium">
                      {item}
                    </span>
                    {idx < profileData.credibilityStrip.length - 1 && (
                      <span className="mx-2.5 text-cyan-500/60">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-background font-semibold text-sm transition-all shadow-cyan-subtle"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={() => setCvModalOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-surface-subtle hover:bg-surface border border-surface-border hover:border-cyan-500/50 text-foreground text-sm font-medium transition-all"
              >
                <span>Download CV</span>
              </button>

              {hasGithub && (
                <a
                  href={profileData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-surface-subtle hover:bg-surface border border-surface-border hover:border-cyan-500/50 text-foreground-muted hover:text-foreground text-sm font-medium transition-all"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
              )}

              {hasLinkedin && (
                <a
                  href={profileData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-surface-subtle hover:bg-surface border border-surface-border hover:border-cyan-500/50 text-foreground-muted hover:text-foreground text-sm font-medium transition-all"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      <CvModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </>
  );
}
