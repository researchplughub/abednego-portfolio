import { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "sbom-visibility",
    title: "Software Supply Chain Security & SBOM Visibility Analysis",
    tagline:
      "Empirical analysis of Software Bill of Materials (SBOM) generation, identifier-layer failures, and vulnerability visibility discrepancies across scanning tooling.",
    badge: "Cybersecurity Research & Engineering",
    category: "cybersecurity",
    featured: true,
    status: "research",
    summary:
      "A reproducible investigation into how disparate SBOM generation engines and security scanners interpret component inventories, revealing critical visibility gaps caused by identifier mismatches and empty-inventory behaviors.",
    technologies: [
      "CycloneDX",
      "Syft",
      "Trivy",
      "pip-audit",
      "OSV-Scanner",
      "Package URLs (PURLs)",
      "Python",
      "Docker",
    ],
    githubUrl: "https://github.com/[TODO:Your-GitHub-Handle/sbom-visibility-research]",
    liveUrl: undefined,
    date: "2024",
    overview:
      "As regulatory frameworks mandate Software Bill of Materials (SBOM) adoption across modern software engineering workflows, organizations rely heavily on automated tools to discover dependencies and flag known vulnerabilities. This project systematically investigates the operational reality of software supply chain tooling, evaluating how different SBOM generation engines and vulnerability analyzers represent identical codebases and why discrepancies emerge.",
    problem: {
      summary:
        "Modern development environments frequently suffer from 'identifier-layer failures'—a breakdown where security scanners fail to match installed packages against vulnerability databases due to differing naming standards, malformed PURLs, or silent empty-inventory generation.",
      details: [
        "Inconsistent component enumeration between generator engines (e.g., Syft vs. Trivy) analyzing the same project artifacts.",
        "Identifier mismatch failures where valid dependencies are omitted or misidentified, preventing downstream CVE lookup.",
        "Silent empty inventory behaviors where tools exit with zero status despite failing to extract nested or virtual environment packages.",
        "Divergent vulnerability counts reported by downstream scanners (OSV-Scanner, pip-audit, Trivy) when ingesting identical CycloneDX manifests.",
      ],
    },
    objectives: [
      "Benchmark CycloneDX SBOM generation across industry-standard scanning and cataloging engines.",
      "Isolate identifier-layer failure points causing CVE detection blind spots.",
      "Establish reproducible test baselines to empirically measure component visibility discrepancies.",
      "Provide actionable engineering guidelines for establishing trusted software supply-chain pipelines.",
    ],
    role: "Lead Researcher & Security Engineer — designed the evaluation methodology, built reproducible containerized test fixtures, executed multi-tool comparative sweeps, and documented vulnerability visibility differentials.",
    methodologyOrArchitecture: {
      summary:
        "Engineered an automated benchmarking harness executing deterministic containerized environments to generate and analyze CycloneDX SBOMs across controlled package topologies.",
      keyPoints: [
        "Controlled Fixtures: Multi-tier Python and polyglot dependency graphs with known nested, pinned, and dynamic dependencies.",
        "Generation Layer: Automated execution of Syft, Trivy, and native package managers to export normalized CycloneDX JSON manifests.",
        "Triage & Comparison: Automated parsing of generated component inventories to detect dropped transitive packages and malformed PURLs.",
        "Downstream Analysis: Feeding standardized SBOM manifests through pip-audit and OSV-Scanner to record vulnerability mapping delta.",
      ],
    },
    implementationDetails: [
      {
        title: "Deterministic Containerized Test Environments",
        description:
          "Built isolated Docker containers providing clean dependency isolation, guaranteeing reproducible generator execution without host-level contamination.",
        highlights: [
          "Eliminated environment noise across multiple OS baseline images.",
          "Ensured identical package resolution across runs for strict baseline comparability.",
        ],
      },
      {
        title: "PURL and Component Mapping Validation",
        description:
          "Developed verification scripts to validate Package URL (PURL) construction against official specifications and target package registries.",
        highlights: [
          "Mapped discrepancies between namespace definitions across scanners.",
          "Identified root causes of downstream database query misses.",
        ],
      },
      {
        title: "Automated Differential Reporting",
        description:
          "Automated the diffing of component inventories (names, versions, hashes, licenses) and resulting CVE matches to quantify scanner divergence.",
      },
    ],
    securityConsiderations: [
      "False Sense of Security: Demonstrating that a clean or passed SBOM scan does not guarantee zero vulnerabilities if the generator silently skipped dependencies.",
      "Supply Chain Traceability: Emphasizing cryptographic hashes and canonical PURLs to prevent dependency confusion and tampering.",
      "Fail-Closed CI/CD Design: Advising teams to implement validation checks that flag suspiciously small or empty component inventories rather than passing automatically.",
    ],
    challenges: [
      "Reconciling disparate SBOM specification versions and schema nuances between CycloneDX iterations.",
      "Handling ecosystem-specific package resolution idiosyncrasies (e.g., editable installs, wheels vs. sdist, transitive namespace packages).",
      "Isolating whether a missed CVE stemmed from an upstream vulnerability database discrepancy or an identifier-layer failure.",
    ],
    results: {
      summary:
        "The empirical findings demonstrated that scanner discrepancy is primarily rooted in component identification rather than vulnerability database deficiencies. Standardizing PURL schemas and enforcing inventory completeness checks significantly reduces supply chain blind spots.",
      metricsOrFindings: [
        "Identified distinct scenarios where generators produced silent empty inventory manifests due to path and environment mismatches.",
        "Cataloged vulnerability detection divergence across scanners ingesting identical project trees.",
        "Formulated recommendations for deterministic SBOM generation pipelines in enterprise CI/CD workflows.",
      ],
    },
    lessonsLearned: [
      "Never treat an SBOM as an unquestioned ground truth without verifying its generator fidelity and component completeness.",
      "Automated security gates should validate that the component count meets expected baselines before evaluating CVE thresholds.",
      "Cross-referencing multiple vulnerability databases (OSV, NVD) against standardized PURLs is vital for high-assurance environments.",
    ],
  },
  {
    slug: "researchplughub",
    title: "ResearchPlugHub — Cloud Platform & Research Workflow System",
    tagline:
      "End-to-end engineering, cloud deployment, responsive UI architecture, and technical optimization for an active research-support venture.",
    badge: "Full-Stack & Cloud Product Engineering",
    category: "fullstack",
    featured: true,
    status: "completed",
    summary:
      "Designed and deployed the digital platform for ResearchPlugHub, taking the product from concept through architecture, component design, SEO structuring, web performance optimization, and operational delivery on Vercel.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
      "Responsive UI",
      "SEO / Structured Data",
      "Web Performance Optimization",
      "[TODO: Confirm Backend Services / APIs Used]",
    ],
    githubUrl: undefined, // Private production codebase
    liveUrl: "https://[TODO:confirm-researchplughub-domain.com]",
    date: "2024 – Present",
    overview:
      "ResearchPlugHub is an active academic and research-support venture providing specialized consulting and technical solutions for researchers, postgraduate candidates, and academic writers. As the Founder and Technical Lead, I engineered the digital presence and operational infrastructure end-to-end, prioritizing fast load times, clear service positioning, search discoverability, and frictionless client engagement.",
    problem: {
      summary:
        "Academic support and technical research services operate in an environment requiring high client trust, meticulous presentation, and seamless mobile-to-desktop accessibility across international audiences (including the UK, Ireland, and East Africa).",
      details: [
        "Need for a high-performance web platform that establishes immediate professional credibility.",
        "Requirement for clear information architecture distinguishing multiple service tiers (methodology, data analysis, publication preparation).",
        "Essential international accessibility across varying network qualities and device form factors.",
        "Requirement for high organic discoverability through technical SEO and structured data.",
      ],
    },
    objectives: [
      "Build a modern, responsive web application from the ground up using a scalable component architecture.",
      "Achieve near-perfect Core Web Vitals and fast load times on edge infrastructure.",
      "Implement structured schema markup (JSON-LD) for enhanced search visibility.",
      "Establish automated continuous deployment with zero-downtime releases on Vercel.",
    ],
    role: "Founder & Technical Lead — responsible for technical decision-making, UI/UX architecture, responsive implementation, frontend engineering, SEO optimization, deployment pipelines, and platform maintenance.",
    methodologyOrArchitecture: {
      summary:
        "Engineered a modular, component-driven frontend architecture on Next.js, leveraging modern utility-first styling and edge caching to ensure rapid international delivery.",
      keyPoints: [
        "Component Modularization: Separation of presentation layouts, reusable interactive blocks, and content configurations.",
        "Edge Delivery: Deployed via Vercel's global CDN network for low-latency delivery across European and African users.",
        "Structured Metadata Engine: Dynamic Open Graph tags and schema.org definitions embedded across core service paths.",
        "Zero-Bloat Asset Strategy: Optimized typography and vectorized assets to maintain lean bundle footprints.",
      ],
    },
    implementationDetails: [
      {
        title: "Responsive Frontend Architecture",
        description:
          "Engineered a modern, responsive interface utilizing Tailwind CSS, ensuring pixel-perfect layout adaptation from compact mobile displays to high-resolution desktop screens.",
        highlights: [
          "Accessible typography scale and high-contrast color scheme.",
          "Mobile-first navigation with zero layout shift during transitions.",
        ],
      },
      {
        title: "Technical SEO & Structured Data",
        description:
          "Integrated comprehensive schema.org metadata, canonical link hierarchies, dynamic sitemaps, and robots configuration to maximize search indexing fidelity.",
      },
      {
        title: "Deployment & CI/CD Pipeline",
        description:
          "Established automated Git-driven deployments on Vercel, enabling instant preview environments and automated production builds upon branch merges.",
      },
      {
        title: "Backend & Extended Capabilities",
        description:
          "[TODO: Document specific backend integrations, contact routing APIs, analytics tooling, and any authentication/database services as confirmed].",
      },
    ],
    securityConsiderations: [
      "Client Privacy: Sensitive academic and research consulting inquiries handled with confidentiality; client details strictly separated from public analytics.",
      "Header Hardening: Configured modern HTTP security headers and Content Security Policies on deployment infrastructure.",
      "Input Hygiene: Form validation safeguards preventing automated spam submissions and malicious injection payloads.",
    ],
    challenges: [
      "Balancing rich informational content with minimal JavaScript bundle sizes to guarantee fast loading in bandwidth-constrained regions.",
      "Structuring complex multi-stage service offerings into clear, digestible client conversion pathways.",
      "Iterating user interfaces based on direct feedback from early researchers and academic clients.",
    ],
    results: {
      summary:
        "Successfully took the platform from concept to live production, providing a reliable digital storefront and engagement hub supporting an expanding roster of researchers and clients.",
      metricsOrFindings: [
        "Achieved rapid international page load speeds through edge-cached rendering.",
        "Delivered a dependable, zero-maintenance operational deployment with continuous automated releases.",
        "Established a solid technical foundation enabling iterative feature rollouts.",
      ],
    },
    lessonsLearned: [
      "Building a business-facing product demands continuous alignment between technical architecture and user trust signals.",
      "Rigorous technical SEO and structured data pay substantial dividends in early organic discoverability.",
      "A modular, cleanly separated component codebase makes continuous branding and copy updates seamless.",
    ],
  },
  {
    slug: "fraud-detection-ml",
    title: "MSc Fraud Detection & Imbalanced Data ML Pipeline",
    tagline:
      "High-imbalance anomaly detection pipeline combining advanced sampling techniques, gradient boosting models, and SHAP explainability.",
    badge: "Machine Learning & Data Engineering",
    category: "machine-learning",
    featured: false,
    status: "completed",
    summary:
      "Engineered an end-to-end machine learning pipeline addressing severe class imbalance in financial transaction datasets, comparing SMOTE/SMOTE-NC/ADASYN strategies with XGBoost and SHAP model explainability.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "XGBoost",
      "LightGBM",
      "SHAP",
      "SMOTE / SMOTE-NC",
    ],
    githubUrl: "https://github.com/[TODO:Your-GitHub-Handle/fraud-detection-pipeline]",
    liveUrl: undefined,
    date: "[TODO: Confirm Year]",
    overview:
      "Financial fraud detection systems operate under extreme class imbalance, where fraudulent transactions account for a tiny fraction of total volume. This project engineered a rigorous evaluation pipeline to assess the efficacy of synthetic oversampling techniques paired with gradient boosted decision trees and explainable AI attribution.",
    problem: {
      summary:
        "Standard machine learning classifiers bias heavily toward the majority class when trained on high-imbalance datasets, yielding deceptively high accuracy while missing critical fraudulent anomalies.",
      details: [
        "Severe class skew leading to false negatives in high-cost fraud scenarios.",
        "Risk of synthetic sampling techniques (SMOTE, ADASYN) introducing noisy boundary artifacts.",
        "The black-box nature of tree ensembles necessitating post-hoc model explainability for regulatory and operational compliance.",
      ],
    },
    objectives: [
      "Construct a reproducible data preparation and feature engineering pipeline for high-dimensional tabular transaction data.",
      "Benchmark sampling strategies (SMOTE, SMOTE-NC, ADASYN) against cost-sensitive learning algorithms.",
      "Train and evaluate XGBoost and LightGBM models prioritizing PR-AUC, Recall, and F1-score over raw accuracy.",
      "Implement SHAP value analysis to generate global feature importance rankings and local transaction-level explanations.",
    ],
    role: "ML Engineer & Researcher — developed the preprocessing pipeline, executed model training sweeps, performed hyperparameter optimization, and conducted interpretability evaluations.",
    methodologyOrArchitecture: {
      summary:
        "Structured a multi-phase machine learning workflow with strict cross-validation safeguards to prevent data leakage during oversampling.",
      keyPoints: [
        "Data Ingestion & Cleaning: Preprocessing numerical features and encoding categorical features using robust scalers.",
        "Leakage-Free Resampling: Applying resampling exclusively within training folds during stratified cross-validation.",
        "Model Training: Tuning XGBoost and LightGBM classifiers using randomized search and precision-recall optimization.",
        "Interpretability Layer: Calculating TreeSHAP values to attribute decision weight across key risk indicators.",
      ],
    },
    implementationDetails: [
      {
        title: "Leakage-Proof Validation Architecture",
        description:
          "Ensured that all oversampling (SMOTE/SMOTE-NC) and feature scaling transformations were fitted strictly inside training folds, preventing overoptimistic evaluation metrics.",
      },
      {
        title: "Model Attribution via SHAP",
        description:
          "Computed TreeSHAP values across positive fraud classifications to highlight which transaction attributes (e.g., velocity, amount relative to historical average, time-of-day) tipped the prediction threshold.",
      },
    ],
    securityConsiderations: [
      "Adversarial Robustness: Evaluating whether feature perturbation could allow fraudulent transactions to bypass probability cutoffs.",
      "Data Confidentiality: Operating on anonymized benchmark datasets with synthetic attributes to safeguard financial privacy.",
    ],
    challenges: [
      "Managing computational overhead when computing pairwise distances for oversampling on massive datasets.",
      "Selecting probability decision thresholds tailored to business cost asymmetries (cost of false positive vs. cost of undetected fraud).",
    ],
    results: {
      summary:
        "Achieved strong precision-recall trade-offs while verifying that model decisions correlated with statistically defensible risk indicators rather than spurious noise.",
      metricsOrFindings: [
        "[TODO: Insert verified PR-AUC / Recall metrics from thesis/project].",
        "Demonstrated that targeted sampling combined with cost-sensitive XGBoost significantly outperformed raw baselines.",
      ],
    },
    lessonsLearned: [
      "In high-imbalance problems, ROC-AUC can be dangerously misleading; Precision-Recall AUC provides a far more honest picture.",
      "Model explainability is not just a compliance requirement—it is a critical debugging tool for identifying dataset leakage.",
    ],
  },
  {
    slug: "cloud-devsecops-pipeline",
    title: "Automated Cloud Infrastructure & DevSecOps Hardening",
    tagline:
      "Automated Infrastructure as Code, container orchestration, and continuous security scanning pipeline.",
    badge: "Cloud & DevSecOps Engineering",
    category: "cloud-devsecops",
    featured: false,
    status: "completed",
    summary:
      "A template architecture implementing declarative infrastructure provisioning with Terraform, containerized service execution with Docker, and automated security scanning integrated directly into GitHub Actions CI/CD workflows.",
    technologies: [
      "Terraform",
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "Linux",
      "DevSecOps Tooling",
      "[TODO: Confirm Cloud Provider - AWS / GCP / Azure]",
    ],
    githubUrl: "https://github.com/[TODO:Your-GitHub-Handle/cloud-devsecops-blueprint]",
    liveUrl: undefined,
    date: "[TODO: Confirm Year]",
    overview:
      "Modern cloud engineering demands automated infrastructure lifecycle management paired with shift-left security enforcement. This project establishes an infrastructure blueprint utilizing Terraform for reproducible provisioning, Docker for containerized workload isolation, and GitHub Actions to enforce static analysis, dependency scanning, and linting before code reaches deployment branches.",
    problem: {
      summary:
        "Manual cloud provisioning and late-stage security testing lead to configuration drift, unpatched container vulnerabilities, and high remediation costs in production.",
      details: [
        "Unreproducible cloud environments resulting from manual console tweaks.",
        "Vulnerable container base images entering runtime environments unnoticed.",
        "Lack of automated pull-request validation for infrastructure state files.",
      ],
    },
    objectives: [
      "Codify cloud resources using modular Terraform manifests.",
      "Containerize backend services using minimal, hardened Docker base images.",
      "Implement automated GitHub Actions workflows executing linting, static analysis, and vulnerability checks on every push.",
      "Enforce least-privilege access patterns and secrets hygiene.",
    ],
    role: "DevSecOps & Cloud Engineer — author of IaC configurations, container build files, and automated GitHub Actions workflow definitions.",
    methodologyOrArchitecture: {
      summary:
        "Constructed a declarative shift-left deployment model enforcing security testing at every milestone of the development lifecycle.",
      keyPoints: [
        "Declarative Provisioning: Terraform scripts defining network boundaries, compute instances, and storage buckets.",
        "Minimal Containers: Multi-stage Dockerfiles utilizing distroless/alpine images to minimize surface area.",
        "Automated Security Gates: GitHub Actions runners executing dependency and container scans before merging.",
      ],
    },
    implementationDetails: [
      {
        title: "Infrastructure as Code (IaC)",
        description:
          "Modular Terraform code organizing environment parameters, state locking, and reproducible variable definitions.",
      },
      {
        title: "Hardened Container Configurations",
        description:
          "Engineered multi-stage Docker builds running unprivileged user processes to mitigate container breakout vectors.",
      },
    ],
    securityConsiderations: [
      "Secrets Management: Zero hardcoded credentials in source control; enforcement of GitHub encrypted secrets and scoped environment variables.",
      "Least Privilege: Strict IAM roles restricting runner privileges during automated builds.",
    ],
    challenges: [
      "Balancing CI build speed against exhaustive vulnerability scanning depth.",
      "Managing Terraform state locking safely across distributed team commits.",
    ],
    results: {
      summary:
        "Established a clean, reproducible deployment foundation ensuring that every commit is vetted for vulnerabilities and configuration drift.",
      metricsOrFindings: [
        "Standardized reproducible deployment times across test and production baselines.",
        "Automated immediate alerts for vulnerable dependencies before merge approval.",
      ],
    },
    lessonsLearned: [
      "Automating security checks in CI transforms security from a late-stage bottleneck into an everyday engineering standard.",
      "Immutable infrastructure via Terraform and Docker drastically eliminates production debugging mysteries.",
    ],
  },
];
