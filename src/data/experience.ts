import { ExperienceItem } from "@/types";

export const professionalExperience: ExperienceItem[] = [
  {
    id: "researchplughub",
    title: "Founder & Technical Lead",
    organization: "ResearchPlugHub",
    roleType: "Technical Leadership & Product Engineering",
    period: "2024 – Present [TODO: Confirm Start Date]",
    location: "Dublin, Ireland & Nairobi, Kenya (Remote / Hybrid)",
    summary:
      "Founded and technically lead an active academic and research-support platform, overseeing product architecture, engineering implementation, digital infrastructure, and client technical solutions.",
    responsibilities: [
      "Architected, built, and deployed the ResearchPlugHub web platform on Next.js, TypeScript, and edge cloud infrastructure.",
      "Engineered high-performance, responsive UI systems with strict Core Web Vitals optimization and mobile responsiveness.",
      "Implemented comprehensive technical SEO, structured data (JSON-LD), and canonical link hierarchies to drive organic discoverability.",
      "Consult on quantitative and technical research methodologies, data workflows, and computational research requirements for international postgraduate and academic clients.",
      "[TODO: Add additional confirmed operational responsibilities and technical milestones]",
    ],
    technologiesUsed: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
      "Git / GitHub",
      "[TODO: Confirm Backend Services / Tools]",
    ],
    isCurrent: true,
  },
  {
    id: "cybersecurity-consulting",
    title: "Cybersecurity & Software Engineering Practitioner",
    organization: "Independent Technical Consulting",
    roleType: "Engineering & Advisory",
    period: "[TODO: Confirm Dates / Duration]",
    location: "Dublin, Ireland & Nairobi, Kenya",
    summary:
      "Provide engineering and security analysis spanning software supply chain verification, vulnerability assessment, cloud hardening, and automated pipeline design.",
    responsibilities: [
      "Conduct empirical software supply chain security assessments, analyzing SBOM generation engines and identifier-layer failure modes.",
      "Assist technical teams and researchers in constructing reproducible, secure data and software pipelines.",
      "Implement automated security checks (Trivy, Syft, OSV-Scanner, pip-audit) within continuous integration workflows.",
      "[TODO: Confirm specific client / organizational engagements where public disclosure is permitted]",
    ],
    technologiesUsed: [
      "Python",
      "CycloneDX",
      "Docker",
      "Linux",
      "DevSecOps Tooling",
      "GitHub Actions",
    ],
    isCurrent: false,
  },
  {
    id: "prior-engineering-role",
    title: "[TODO: Previous Engineering Role Title]",
    organization: "[TODO: Previous Organization / Company Name]",
    roleType: "Software / Systems Engineering",
    period: "[TODO: e.g. 2021 – 2023]",
    location: "[TODO: Location]",
    summary:
      "[TODO: Provide a brief summary of earlier engineering, software development, or systems administration roles].",
    responsibilities: [
      "[TODO: Key responsibility 1]",
      "[TODO: Key responsibility 2]",
      "[TODO: Key responsibility 3]",
    ],
    technologiesUsed: [
      "[TODO: Technologies used in this role]",
    ],
    isCurrent: false,
  },
];
