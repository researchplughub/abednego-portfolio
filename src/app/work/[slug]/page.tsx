import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { caseStudies } from "@/data/projects";
import { profileData } from "@/data/profile";
import { getSiteUrl } from "@/lib/siteConfig";
import { isTodo, isValidUrl, filterCleanList } from "@/lib/todoUtils";
import {
  ArrowLeft,
  GitBranch,
  ExternalLink,
  Shield,
  Layers,
  Cpu,
  Server,
  AlertTriangle,
  Target,
  UserCheck,
  Cpu as ArchIcon,
  CheckCircle2,
  FileCode2,
  Lock,
  Flame,
  Award,
  BookOpen,
} from "lucide-react";

interface CaseStudyProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({
    slug: cs.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyProps): Promise<Metadata> {
  const project = caseStudies.find((cs) => cs.slug === params.slug);
  if (!project) return { title: "Project Not Found" };

  const siteUrl = getSiteUrl();

  return {
    title: `${project.title} | ${profileData.name}`,
    description: project.summary,
    alternates: {
      canonical: `${siteUrl}/work/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | ${profileData.name}`,
      description: project.summary,
      url: `${siteUrl}/work/${project.slug}`,
      type: "article",
    },
  };
}

export default function CaseStudyPage({ params }: CaseStudyProps) {
  const project = caseStudies.find((cs) => cs.slug === params.slug);

  if (!project) {
    notFound();
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "cybersecurity":
        return <Shield className="w-5 h-5 text-cyan-400" />;
      case "fullstack":
        return <Layers className="w-5 h-5 text-cyan-400" />;
      case "machine-learning":
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      default:
        return <Server className="w-5 h-5 text-cyan-400" />;
    }
  };

  // Clean and filter all data fields strictly avoiding TODOs
  const cleanTechs = filterCleanList(project.technologies);
  const hasValidGithub = isValidUrl(project.githubUrl);
  const hasValidLive = isValidUrl(project.liveUrl);
  const cleanDate = project.date && !isTodo(project.date) ? project.date : undefined;

  const cleanProblemDetails = filterCleanList(project.problem?.details);
  const cleanObjectives = filterCleanList(project.objectives);
  const cleanArchKeyPoints = filterCleanList(
    project.methodologyOrArchitecture?.keyPoints
  );

  // Filter implementation details
  const cleanImplementation = project.implementationDetails
    ?.filter((item) => !isTodo(item.title) && !isTodo(item.description))
    .map((item) => ({
      ...item,
      highlights: filterCleanList(item.highlights),
    }));

  const cleanSecurity = filterCleanList(project.securityConsiderations);
  const cleanChallenges = filterCleanList(project.challenges);
  const cleanMetricsOrFindings = filterCleanList(
    project.results?.metricsOrFindings
  );
  const cleanLessons = filterCleanList(project.lessonsLearned);

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            <span>Back to Selected Work</span>
          </Link>
        </div>

        {/* Header Block */}
        <header className="mb-12 pb-10 border-b border-surface-border">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface-subtle border border-surface-border text-xs font-mono text-cyan-400 mb-4">
            {getCategoryIcon(project.category)}
            <span>{project.badge}</span>
            {cleanDate && (
              <>
                <span className="text-surface-border">|</span>
                <span className="text-foreground-subtle">{cleanDate}</span>
              </>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-foreground-muted leading-relaxed mb-6 font-normal">
            {project.tagline}
          </p>

          {/* Action Links */}
          {(hasValidGithub || hasValidLive) && (
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {hasValidGithub && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-subtle hover:bg-surface border border-surface-border hover:border-cyan-500/50 text-foreground text-xs font-mono transition-all"
                >
                  <GitBranch className="w-4 h-4 text-cyan-400" />
                  <span>Source Repository</span>
                </a>
              )}
              {hasValidLive && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-background text-xs font-semibold font-mono transition-all shadow-cyan-subtle"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Deployment</span>
                </a>
              )}
            </div>
          )}
        </header>

        {/* Content Body - Only rendering sections with verified meaningful data */}
        <div className="space-y-12">
          {/* Overview */}
          {project.overview && !isTodo(project.overview) && (
            <section>
              <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
                <FileCode2 className="w-4 h-4" />
                <span>Overview</span>
              </h2>
              <div className="tech-card rounded-xl p-6 border border-surface-border">
                <p className="text-sm sm:text-base text-foreground-muted leading-relaxed">
                  {project.overview}
                </p>
              </div>
            </section>
          )}

          {/* The Problem */}
          {project.problem && !isTodo(project.problem.summary) && (
            <section>
              <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                <span>The Problem &amp; Core Challenge</span>
              </h2>
              <div className="tech-card rounded-xl p-6 border border-surface-border space-y-4">
                <p className="text-sm sm:text-base text-foreground-muted leading-relaxed font-medium">
                  {project.problem.summary}
                </p>
                {cleanProblemDetails.length > 0 && (
                  <ul className="space-y-2 pt-2 border-t border-surface-border/60">
                    {cleanProblemDetails.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground-muted">
                        <span className="text-cyan-400 font-mono mt-0.5">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          )}

          {/* Objectives */}
          {cleanObjectives.length > 0 && (
            <section>
              <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span>Key Objectives</span>
              </h2>
              <div className="tech-card rounded-xl p-6 border border-surface-border">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {cleanObjectives.map((obj, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-lg bg-surface-subtle/60 border border-surface-border/80 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                      <span className="text-xs text-foreground-muted leading-relaxed">
                        {obj}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* My Role */}
          {project.role && !isTodo(project.role) && (
            <section>
              <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
                <UserCheck className="w-4 h-4" />
                <span>My Role &amp; Contribution</span>
              </h2>
              <div className="tech-card rounded-xl p-6 border border-surface-border">
                <p className="text-sm text-foreground-muted leading-relaxed">
                  {project.role}
                </p>
              </div>
            </section>
          )}

          {/* Architecture / Methodology */}
          {project.methodologyOrArchitecture && !isTodo(project.methodologyOrArchitecture.summary) && (
            <section>
              <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
                <ArchIcon className="w-4 h-4" />
                <span>Architecture &amp; Methodology</span>
              </h2>
              <div className="tech-card rounded-xl p-6 border border-surface-border space-y-4">
                <p className="text-sm sm:text-base text-foreground-muted leading-relaxed">
                  {project.methodologyOrArchitecture.summary}
                </p>
                {cleanArchKeyPoints.length > 0 && (
                  <div className="space-y-2 pt-2 border-t border-surface-border/60">
                    {cleanArchKeyPoints.map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground-muted">
                        <span className="text-cyan-400 font-mono mt-0.5">›</span>
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Verified Technologies */}
          {cleanTechs.length > 0 && (
            <section>
              <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3">
                Verified Technologies &amp; Standards
              </h2>
              <div className="flex flex-wrap gap-2">
                {cleanTechs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md bg-surface-subtle border border-surface-border text-xs font-mono text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Implementation Highlights */}
          {cleanImplementation && cleanImplementation.length > 0 && (
            <section>
              <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3">
                Implementation Details
              </h2>
              <div className="space-y-4">
                {cleanImplementation.map((detail, idx) => (
                  <div
                    key={idx}
                    className="tech-card rounded-xl p-6 border border-surface-border"
                  >
                    <h3 className="text-base font-bold text-foreground mb-2">
                      {detail.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed mb-3">
                      {detail.description}
                    </p>
                    {detail.highlights && detail.highlights.length > 0 && (
                      <ul className="space-y-1.5 pt-2 border-t border-surface-border/60">
                        {detail.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-foreground-muted">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Security Considerations */}
          {cleanSecurity.length > 0 && (
            <section>
              <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
                <Lock className="w-4 h-4" />
                <span>Security Considerations</span>
              </h2>
              <div className="tech-card rounded-xl p-6 border border-surface-border">
                <div className="space-y-3">
                  {cleanSecurity.map((sec, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground-muted">
                      <Shield className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                      <span>{sec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Challenges Encountered */}
          {cleanChallenges.length > 0 && (
            <section>
              <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
                <Flame className="w-4 h-4" />
                <span>Engineering Challenges</span>
              </h2>
              <div className="tech-card rounded-xl p-6 border border-surface-border">
                <ul className="space-y-2.5">
                  {cleanChallenges.map((ch, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground-muted">
                      <span className="text-cyan-400 font-mono mt-0.5">•</span>
                      <span>{ch}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* Results & Findings */}
          {project.results && !isTodo(project.results.summary) && (
            <section>
              <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Results &amp; Empirical Findings</span>
              </h2>
              <div className="tech-card rounded-xl p-6 border border-surface-border space-y-4">
                <p className="text-sm sm:text-base text-foreground-muted leading-relaxed font-medium">
                  {project.results.summary}
                </p>
                {cleanMetricsOrFindings.length > 0 && (
                  <div className="space-y-2 pt-2 border-t border-surface-border/60">
                    {cleanMetricsOrFindings.map((res, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground-muted">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                        <span>{res}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Lessons Learned */}
          {cleanLessons.length > 0 && (
            <section>
              <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>Lessons Learned &amp; Key Takeaways</span>
              </h2>
              <div className="tech-card rounded-xl p-6 border border-surface-border">
                <div className="space-y-2.5">
                  {cleanLessons.map((lesson, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground-muted">
                      <span className="text-cyan-400 font-mono mt-0.5">›</span>
                      <span>{lesson}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Bottom Navigation */}
          <div className="pt-10 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Case Studies</span>
            </Link>

            <Link
              href="/#contact"
              className="px-4 py-2 rounded-lg bg-surface-subtle hover:bg-surface border border-surface-border hover:border-cyan-500/40 text-xs font-mono text-foreground transition-colors"
            >
              Discuss This Engineering Work
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
