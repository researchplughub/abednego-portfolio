import { SkillGroup } from "@/types";

export const technicalSkills: SkillGroup[] = [
  {
    category: "Security",
    description:
      "Specialized capabilities in software supply chain integrity, vulnerability visibility, and automated security controls.",
    skills: [
      { name: "Software Supply Chain Security", context: "SBOM analysis & dependency verification" },
      { name: "CycloneDX Specification", context: "SBOM standards & component indexing" },
      { name: "Vulnerability Scanning", context: "Trivy, Syft, pip-audit, OSV-Scanner" },
      { name: "DevSecOps Security Tooling", context: "Automated vulnerability triage & CI gates" },
      { name: "Container & Image Security", context: "Hardened base images & vulnerability audits" },
      { name: "Package URL (PURL) Resolution", context: "Component disambiguation & metadata mapping" },
    ],
  },
  {
    category: "Software & APIs",
    description:
      "Type-safe application engineering, modern web architectures, and high-performance API design.",
    skills: [
      { name: "Python", context: "Backend services, security automation, and data scripting" },
      { name: "TypeScript / JavaScript", context: "Type-safe full-stack application development" },
      { name: "Next.js (App Router)", context: "Server rendering, edge caching, and modern web apps" },
      { name: "FastAPI / Flask", context: "High-throughput RESTful service engineering" },
      { name: "REST APIs & GraphQL", context: "Interface design, pagination, and data contracts" },
      { name: "Microservices", context: "Service decoupling & distributed design patterns" },
    ],
  },
  {
    category: "Cloud & DevSecOps",
    description:
      "Automated infrastructure provisioning, container workloads, and continuous integration pipelines.",
    skills: [
      { name: "Docker", context: "Containerization & multi-stage reproducible builds" },
      { name: "Terraform", context: "Infrastructure as Code (IaC) configuration" },
      { name: "GitHub Actions", context: "Automated CI/CD workflows, linting, and build gates" },
      { name: "CI/CD Automation", context: "Zero-downtime release pipelines & quality checks" },
      { name: "Git & GitHub", context: "Version control, branching strategy, and code review" },
    ],
  },
  {
    category: "Data & Machine Learning",
    description:
      "Data preprocessing, statistical analysis, high-imbalance classification, and model explainability.",
    skills: [
      { name: "Pandas & NumPy", context: "Vectorized manipulation & large-scale tabular processing" },
      { name: "Scikit-learn", context: "Feature extraction, preprocessing, and model pipelines" },
      { name: "XGBoost & LightGBM", context: "Gradient boosting on complex structured datasets" },
      { name: "SHAP (SHapley Additive exPlanations)", context: "Model interpretability & feature importance attribution" },
      { name: "Imbalance Techniques", context: "SMOTE, SMOTE-NC, ADASYN & sampling strategies" },
    ],
  },
];
