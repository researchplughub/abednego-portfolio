import Link from "next/link";
import { ArrowRight, Shield, Layers, Cpu, Server, ExternalLink, GitBranch } from "lucide-react";
import { caseStudies } from "@/data/projects";
import { isTodo, isValidUrl, filterCleanList } from "@/lib/todoUtils";

export function SelectedWork() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "cybersecurity":
        return <Shield className="w-4 h-4 text-cyan-400" />;
      case "fullstack":
        return <Layers className="w-4 h-4 text-cyan-400" />;
      case "machine-learning":
        return <Cpu className="w-4 h-4 text-cyan-400" />;
      default:
        return <Server className="w-4 h-4 text-cyan-400" />;
    }
  };

  // Only display projects with verified meaningful content (not placeholder cards)
  const visibleProjects = caseStudies.filter(
    (p) => !isTodo(p.title) && !isTodo(p.summary) && p.technologies.length > 0
  );

  return (
    <section id="work" className="py-20 border-t border-surface-border scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              Selected Work
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Evidence-Based Case Studies
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-sm text-foreground-muted max-w-md">
            Rigorous technical write-ups highlighting architecture, empirical findings, and operational delivery across cybersecurity, platforms, and data.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {visibleProjects.map((project) => {
            const cleanTechs = filterCleanList(project.technologies);
            const hasValidGithub = isValidUrl(project.githubUrl);
            const hasValidLive = isValidUrl(project.liveUrl);
            const cleanDate = project.date && !isTodo(project.date) ? project.date : undefined;

            return (
              <div
                key={project.slug}
                className="tech-card rounded-xl p-6 sm:p-8 flex flex-col justify-between border border-surface-border relative group"
              >
                <div>
                  {/* Meta Header */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-surface-subtle border border-surface-border text-xs font-mono text-cyan-400">
                      {getCategoryIcon(project.category)}
                      <span>{project.badge}</span>
                    </div>
                    {cleanDate && (
                      <span className="text-xs font-mono text-foreground-subtle">
                        {cleanDate}
                      </span>
                    )}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-cyan-300 transition-colors mb-3">
                    <Link href={`/work/${project.slug}`} className="focus:outline-none">
                      {project.title}
                    </Link>
                  </h3>

                  {/* Tagline / Summary */}
                  <p className="text-sm text-foreground-muted leading-relaxed mb-6">
                    {project.summary}
                  </p>

                  {/* Confirmed Technologies */}
                  {cleanTechs.length > 0 && (
                    <div className="mb-8">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-foreground-subtle mb-2">
                        Verified Technologies &amp; Standards
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {cleanTechs.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded bg-surface-subtle/80 border border-surface-border text-xs font-mono text-foreground-muted"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-surface-border/70 flex items-center justify-between">
                  <Link
                    href={`/work/${project.slug}`}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <div className="flex items-center gap-3">
                    {hasValidGithub && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded text-foreground-subtle hover:text-foreground hover:bg-surface-subtle transition-colors"
                        aria-label="View source repository"
                        title="Source repository"
                      >
                        <GitBranch className="w-4 h-4" />
                      </a>
                    )}
                    {hasValidLive && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded text-foreground-subtle hover:text-foreground hover:bg-surface-subtle transition-colors"
                        aria-label="View live deployment"
                        title="Live deployment"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
