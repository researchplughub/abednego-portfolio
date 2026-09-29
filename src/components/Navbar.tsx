"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Shield } from "lucide-react";
import { profileData } from "@/data/profile";
import { CvModal } from "./CvModal";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "/#work" },
    { name: "Expertise", href: "/#expertise" },
    { name: "Experience", href: "/#experience" },
    { name: "About", href: "/#about" },
    { name: "Education", href: "/#education" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-surface-border shadow-sm"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Monogram / Brand */}
            <Link
              href="/"
              className="flex items-center gap-2 group focus-visible:outline-none"
              aria-label="AN - Abenego Nyabicha Homepage"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-surface-card border border-surface-border group-hover:border-cyan-500/50 transition-colors">
                <span className="font-mono text-sm font-bold tracking-tight text-cyan-400 group-hover:text-cyan-300">
                  AN
                </span>
              </div>
              <div className="hidden sm:block text-left">
                <div className="text-xs font-mono font-semibold tracking-wider text-foreground uppercase">
                  Abenego Nyabicha
                </div>
                <div className="text-[10px] font-mono text-cyan-400/80">
                  Engineering & Security
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-3 py-1.5 rounded-md text-xs font-medium text-foreground-muted hover:text-cyan-400 hover:bg-surface-subtle/50 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop Action */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => setCvModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-surface-subtle hover:bg-surface border border-surface-border hover:border-cyan-500/40 text-foreground text-xs font-medium transition-all"
              >
                <span>CV</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={() => setCvModalOpen(true)}
                className="px-2.5 py-1 rounded text-xs font-mono border border-surface-border text-cyan-400"
              >
                CV
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-label="Toggle navigation menu"
                className="p-2 rounded-lg text-foreground-muted hover:text-foreground hover:bg-surface-subtle border border-transparent hover:border-surface-border focus-visible:outline-none"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="md:hidden border-b border-surface-border bg-background/95 backdrop-blur-lg px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-sm font-medium text-foreground-muted hover:text-cyan-400 hover:bg-surface-subtle"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </header>

      <CvModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </>
  );
}
