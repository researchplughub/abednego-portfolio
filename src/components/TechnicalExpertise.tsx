import { technicalSkills } from "@/data/skills";
import { ShieldCheck, Cloud, Database } from "lucide-react";

export function TechnicalExpertise() {
  const getDomainIcon = (index: number) => {
    switch (index) {
      case 0:
        return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
      case 1:
        return <Cloud className="w-5 h-5 text-cyan-400" />;
      case 2:
        return <Database className="w-5 h-5 text-cyan-400" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="expertise" className="py-20 border-t border-surface-border scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              Technical Competencies
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Applied Engineering Stack
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-sm text-foreground-muted max-w-md">
            Practitioner-level tools and frameworks applied across system security, cloud architecture, and data pipelines.
          </p>
        </div>

        {/* Competency Domains */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {technicalSkills.map((domain, idx) => (
            <div
              key={domain.category}
              className="tech-card rounded-xl p-6 sm:p-7 border border-surface-border flex flex-col justify-between"
            >
              <div>
                {/* Domain Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-surface-subtle border border-surface-border">
                    {getDomainIcon(idx)}
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {domain.category}
                  </h3>
                </div>

                <p className="text-xs text-foreground-muted leading-relaxed mb-6">
                  {domain.description}
                </p>

                {/* Skills list with application context */}
                <div className="space-y-2.5">
                  {domain.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-lg bg-surface-subtle/60 border border-surface-border/80 hover:border-cyan-500/40 transition-colors"
                    >
                      <div className="text-xs font-semibold text-foreground font-mono">
                        {skill.name}
                      </div>
                      {skill.context && (
                        <div className="text-[11px] text-foreground-subtle mt-0.5 leading-snug">
                          {skill.context}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-surface-border/50 text-[11px] font-mono text-cyan-400/80">
                Verified hands-on capability
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
