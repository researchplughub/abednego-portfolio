export interface Profile {
  name: string;
  role: string;
  headline: string;
  credibilityStrip: string[];
  location: {
    primary: string;
    secondary?: string;
    description: string;
  };
  summary: string[];
  socialLinks: {
    github: string;
    linkedin: string;
    email: string;
  };
  cv: {
    url: string;
    isAvailable: boolean;
    notice?: string;
  };
}

export interface CaseStudySection {
  title: string;
  content?: string;
  bulletPoints?: string[];
  subsections?: {
    subtitle: string;
    content: string;
    points?: string[];
  }[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  tagline: string;
  badge: string;
  category: "cybersecurity" | "fullstack" | "machine-learning" | "cloud-devsecops";
  featured: boolean;
  status: "completed" | "in-progress" | "research";
  summary: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  date?: string;
  
  // Detailed case study sections (only rendered when present and non-empty)
  overview?: string;
  problem?: {
    summary: string;
    details?: string[];
  };
  objectives?: string[];
  role?: string;
  methodologyOrArchitecture?: {
    summary: string;
    keyPoints?: string[];
  };
  implementationDetails?: {
    title: string;
    description: string;
    highlights?: string[];
  }[];
  securityConsiderations?: string[];
  challenges?: string[];
  results?: {
    summary: string;
    metricsOrFindings?: string[];
  };
  lessonsLearned?: string[];
  evidenceOrArtifacts?: {
    title: string;
    description: string;
    type: "report" | "code" | "schema" | "benchmark";
  }[];
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: {
    name: string;
    context?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  roleType: string;
  period: string; // e.g. "2023 – Present" or "[TODO: Confirm Dates]"
  location: string;
  summary: string;
  responsibilities: string[];
  technologiesUsed?: string[];
  isCurrent?: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  period: string;
  focus?: string;
  highlights?: string[];
}
