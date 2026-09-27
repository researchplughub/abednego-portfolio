import { profileData } from "@/data/profile";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { isValidUrl } from "@/lib/todoUtils";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const hasValidEmail = isValidUrl(profileData.socialLinks.email);
  const hasValidLinkedin = isValidUrl(profileData.socialLinks.linkedin);
  const hasValidGithub = isValidUrl(profileData.socialLinks.github);

  return (
    <footer className="border-t border-surface-border bg-background/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Identity & Status */}
          <div className="text-center md:text-left">
            <div className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
              {profileData.name}
            </div>
            <div className="text-xs text-foreground-subtle mt-0.5">
              {profileData.role} · Dublin &amp; Nairobi
            </div>
          </div>

          {/* Social / Channel Icons */}
          <div className="flex items-center gap-4">
            {hasValidGithub && (
              <a
                href={profileData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-foreground-subtle hover:text-cyan-400 hover:bg-surface-subtle transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {hasValidLinkedin && (
              <a
                href={profileData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-foreground-subtle hover:text-cyan-400 hover:bg-surface-subtle transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            {hasValidEmail && (
              <a
                href={profileData.socialLinks.email}
                className="p-2 rounded-lg text-foreground-subtle hover:text-cyan-400 hover:bg-surface-subtle transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            )}
          </div>

          {/* Copyright & Up Arrow */}
          <div className="flex items-center gap-4 text-xs font-mono text-foreground-subtle">
            <span>&copy; {currentYear} All Rights Reserved</span>
            <a
              href="#"
              className="p-2 rounded-lg hover:text-cyan-400 hover:bg-surface-subtle transition-colors"
              aria-label="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
