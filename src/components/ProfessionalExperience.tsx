import { professionalExperience } from "@/data/experience";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { isTodo, filterCleanList } from "@/lib/todoUtils";

export function ProfessionalExperience() {
  // Only display experience entries that have verified meaningful titles and summaries (not pure placeholder cards)
  const visibleExperiences = professionalExperience.filter(
    (exp) => !isTodo(exp.title) && !isTodo(exp.organization)
  );

  if (visibleExperiences.length === 0) return null;

  return (
    <section id="experience" className="py-20 border-t border-surface-border scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              Career &amp; Leadership
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Professional Experience
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-sm text-foreground-muted max-w-md">
            Product ownership, applied engineering, and technical advisory across venture leadership and systems consulting.
          </p>
        </div>

        {/* Experience Timeline / Cards */}
        <div className="space-y-6">
          {visibleExperiences.map((exp) => {
            // Clean period: remove any trailing [TODO...] tags
            const cleanPeriod = exp.period.replace(/\s*\[TODO:[^\]]*\]/gi, "").trim();
            const hasPeriod = cleanPeriod.length > 0 && !isTodo(cleanPeriod);
            const cleanLocation = !isTodo(exp.location) ? exp.location : undefined;
            const cleanResponsibilities = filterCleanList(exp.responsibilities);
            const cleanTechnologies = filterCleanList(exp.technologiesUsed);

            return (
              <div
                key={exp.id}
                className={`tech-card rounded-xl p-6 sm:p-8 border ${
                  exp.isCurrent ? "border-cyan-500/30" : "border-surface-border"
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-foreground">
                        {exp.title}
                      </h3>
                      {exp.isCurrent && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-cyan-950/60 text-cyan-400 border border-cyan-800/60">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="text-base font-medium text-cyan-400 font-mono">
                      {exp.organization}
                      <span className="text-foreground-subtle font-sans text-xs ml-2">
                        ({exp.roleType})
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-foreground-subtle">
                    {hasPeriod && (
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{cleanPeriod}</span>
                      </div>
                    )}
                    {cleanLocation && (
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{cleanLocation}</span>
                      </div>
                    )}
                  </div>
                </div>

                <p className="text-sm text-foreground-muted mb-4 leading-relaxed">
                  {exp.summary}
                </p>

                {/* Responsibilities list (strictly cleaned of any TODOs) */}
                {cleanResponsibilities.length > 0 && (
                  <div className="space-y-2 mb-6">
                    {cleanResponsibilities.map((resp, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-foreground-muted">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Associated Technologies where confirmed (no TODO badges) */}
                {cleanTechnologies.length > 0 && (
                  <div className="pt-4 border-t border-surface-border/60">
                    <div className="text-[11px] font-mono text-foreground-subtle uppercase mb-2">
                      Technologies &amp; Environments
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cleanTechnologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-surface-subtle border border-surface-border text-xs font-mono text-foreground-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
