"use client";

import { useState } from "react";
import { FileText, X, Mail, CheckCircle2 } from "lucide-react";
import { profileData } from "@/data/profile";

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CvModal({ isOpen, onClose }: CvModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
    >
      <div className="relative w-full max-w-lg tech-card p-6 md:p-8 rounded-xl border border-surface-border shadow-cyan-subtle">
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 p-2 text-foreground-muted hover:text-foreground rounded-lg hover:bg-surface-subtle transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 text-cyan-400 mb-4">
          <div className="p-2.5 rounded-lg bg-cyan-950/40 border border-cyan-800/40">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 id="cv-modal-title" className="text-lg font-semibold text-foreground">
              Curriculum Vitae
            </h3>
            <p className="text-xs text-foreground-subtle font-mono">
              Abenego Nyabicha · Engineering & Security
            </p>
          </div>
        </div>

        <div className="space-y-4 text-sm text-foreground-muted mb-6">
          <p>
            {profileData.cv.notice ||
              "The formal CV is currently being updated with recent software supply-chain research and platform engineering milestones."}
          </p>
          <div className="p-3 rounded-lg bg-surface-subtle border border-surface-border flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
            <span className="text-xs text-foreground-muted leading-relaxed">
              To receive a tailored copy formatted for technical recruitment or advisory engagements, please reach out directly or use the contact form below.
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={profileData.socialLinks.email}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-background font-semibold text-sm transition-colors"
          >
            <Mail className="w-4 h-4" />
            Request via Email
          </a>
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-lg bg-surface-subtle hover:bg-surface border border-surface-border text-foreground-muted hover:text-foreground text-sm font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
