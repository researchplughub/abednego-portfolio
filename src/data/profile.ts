import { Profile } from "@/types";

export const profileData: Profile = {
  name: "Abenego Nyabicha",
  role: "Cybersecurity & Software Engineer",
  headline:
    "I build secure, reliable systems at the intersection of cybersecurity, software engineering and data.",
  credibilityStrip: [
    "Cybersecurity",
    "Python",
    "Cloud",
    "DevSecOps",
    "Data & AI",
  ],
  location: {
    primary: "Dublin, Ireland",
    secondary: "Nairobi, Kenya",
    description: "International engineering footprint across Dublin and Nairobi",
  },
  summary: [
    "Practicing engineer specializing in software supply-chain security, robust software systems, and data-driven engineering.",
    "Brings a dual perspective as both a rigorous hands-on technical practitioner and the founder & technical lead of ResearchPlugHub.",
    "Driven by verifiable evidence, clean architecture, automated security controls, and reproducible technical outcomes rather than superficial badges.",
  ],
  socialLinks: {
    // Configurable URLs - update with your exact handles
    github: "https://github.com/[TODO:Your-GitHub-Handle]",
    linkedin: "https://linkedin.com/in/[TODO:Your-LinkedIn-Handle]",
    email: "mailto:[TODO:contact@yourdomain.com]",
  },
  cv: {
    url: "/cv.pdf",
    isAvailable: false, // Set to true once public/cv.pdf is added
    notice: "Formal CV available upon request while being updated for 2025/2026.",
  },
};
