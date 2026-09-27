import { educationAndCredentials, certifications } from "@/data/education";
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { isTodo, filterCleanList } from "@/lib/todoUtils";

export function Education() {
  // Filter degrees that have at least some non-TODO degree title
  const visibleDegrees = educationAndCredentials
    .map((edu) => {
      // Strip any [TODO...] from degree name
      const cleanDegree = edu.degree.replace(/\s*\[TODO:[^\]]*\]/gi, "").trim();
      const cleanInstitution = isTodo(edu.institution) ? undefined : edu.institution;
      const cleanPeriod = !edu.period || isTodo(edu.period)
        ? undefined
        : edu.period.replace(/\s*\[TODO:[^\]]*\]/gi, "").trim();
      const cleanLocation = !edu.location || isTodo(edu.location)
        ? undefined
        : edu.location.replace(/\s*\[TODO:[^\]]*\]/gi, "").trim();
      const cleanFocus = isTodo(edu.focus) ? undefined : edu.focus;
      const cleanHighlights = filterCleanList(edu.highlights);

      return {
        ...edu,
        cleanDegree: cleanDegree.length > 0 && !isTodo(cleanDegree) ? cleanDegree : undefined,
        cleanInstitution,
        cleanPeriod,
        cleanLocation,
        cleanFocus,
        cleanHighlights,
      };
    })
    .filter((edu) => edu.cleanDegree !== undefined);

  // Filter certifications: only render if name is NOT a TODO
  const visibleCertifications = certifications.filter(
    (cert) => !isTodo(cert.name) && !isTodo(cert.issuer)
  );

  // If no degrees and no certifications are verified yet, gracefully hide the section
  if (visibleDegrees.length === 0 && visibleCertifications.length === 0) {
    return null;
  }

  return (
    <section id="education" className="py-20 border-t border-surface-border scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              Academic Foundations
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Education &amp; Qualifications
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-sm text-foreground-muted max-w-md">
            Formal technical degrees and academic research foundations supporting rigorous engineering practices.
          </p>
        </div>

        {/* Degrees Grid */}
        {visibleDegrees.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {visibleDegrees.map((edu) => (
              <div
                key={edu.id}
                className="tech-card rounded-xl p-6 sm:p-8 border border-surface-border flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-surface-subtle border border-surface-border text-cyan-400">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">
                        {edu.cleanDegree}
                      </h3>
                      {edu.cleanInstitution && (
                        <div className="text-sm font-mono text-cyan-400">
                          {edu.cleanInstitution}
                        </div>
                      )}
                    </div>
                  </div>

                  {(edu.cleanPeriod || edu.cleanLocation) && (
                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-foreground-subtle mb-4">
                      {edu.cleanPeriod && (
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{edu.cleanPeriod}</span>
                        </div>
                      )}
                      {edu.cleanLocation && (
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{edu.cleanLocation}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {edu.cleanFocus && (
                    <p className="text-xs text-foreground-muted mb-4 leading-relaxed">
                      <span className="text-foreground font-semibold">Specialization: </span>
                      {edu.cleanFocus}
                    </p>
                  )}

                  {edu.cleanHighlights.length > 0 && (
                    <div className="space-y-2 pt-2 border-t border-surface-border/50">
                      <div className="text-[11px] font-mono text-foreground-subtle uppercase">
                        Academic Highlights &amp; Research
                      </div>
                      {edu.cleanHighlights.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-foreground-muted">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Certifications: only render if at least one verified certification exists */}
        {visibleCertifications.length > 0 && (
          <div className="tech-card rounded-xl p-6 sm:p-8 border border-surface-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-surface-subtle border border-surface-border text-cyan-400">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground">
                Certifications &amp; Continuing Engineering Development
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {visibleCertifications.map((cert) => (
                <div
                  key={cert.id}
                  className="p-3.5 rounded-lg bg-surface-subtle/50 border border-surface-border"
                >
                  <div className="text-xs font-semibold text-foreground font-mono mb-1">
                    {cert.name}
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-foreground-subtle">
                    <span>{cert.issuer}</span>
                    <span>{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
