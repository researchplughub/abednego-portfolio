import Image from "next/image";
import { Compass, Shield, Terminal, Globe2 } from "lucide-react";

export function AboutMe() {
  return (
    <section id="about" className="py-20 border-t border-surface-border scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              Practitioner Profile
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              About Abenego Nyabicha
            </h2>
          </div>
          <div className="mt-3 md:mt-0 flex items-center gap-2 text-xs font-mono text-cyan-400 bg-surface-subtle px-3 py-1.5 rounded-lg border border-surface-border">
            <Globe2 className="w-4 h-4" />
            <span>Dublin, Ireland · Nairobi, Kenya</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-foreground-muted leading-relaxed">
            <p>
              I am a Cybersecurity &amp; Software Engineer working at the intersection of application security, modern cloud software systems, and data pipelines. My engineering practice centers on building systems that are not only performant and scalable, but fundamentally resilient and auditable.
            </p>
            <p>
              My background bridges deep technical security research—such as empirical investigations into Software Bill of Materials (SBOM) visibility, package URL mapping discrepancies, and dependency vulnerability detection—with hands-on software engineering across Python, TypeScript, Next.js, and containerized cloud environments.
            </p>
            <p>
              As the Founder and Technical Lead of ResearchPlugHub, I have taken a real digital platform from initial concept through architectural design, edge cloud deployment, technical SEO, and ongoing operational optimization. This dual identity as both an engineering practitioner and a venture builder reinforces my commitment to shipping dependable software that solves tangible problems.
            </p>
            <p>
              Operating across an international footprint between Dublin and Nairobi, I bring a global perspective to technical consulting, distributed team collaboration, and high-assurance engineering projects.
            </p>

            {/* Core Tenets Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
              <div className="tech-card rounded-lg p-4 border border-surface-border">
                <div className="flex items-center gap-2 mb-1.5 text-cyan-400 font-mono text-xs font-semibold">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Security by Design</span>
                </div>
                <p className="text-[11px] text-foreground-subtle leading-normal">
                  Automated SBOMs, dependency auditing, and shift-left gates before code touches production.
                </p>
              </div>

              <div className="tech-card rounded-lg p-4 border border-surface-border">
                <div className="flex items-center gap-2 mb-1.5 text-cyan-400 font-mono text-xs font-semibold">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Evidence-First</span>
                </div>
                <p className="text-[11px] text-foreground-subtle leading-normal">
                  Validating identifier-layer failures and ML models on imbalance through reproducible data.
                </p>
              </div>

              <div className="tech-card rounded-lg p-4 border border-surface-border">
                <div className="flex items-center gap-2 mb-1.5 text-cyan-400 font-mono text-xs font-semibold">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Full Ownership</span>
                </div>
                <p className="text-[11px] text-foreground-subtle leading-normal">
                  From threat modeling and architecture to containerized CI/CD and operational stability.
                </p>
              </div>
            </div>
          </div>

          {/* Profile Card & Headshot Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="tech-card rounded-xl p-3 border border-surface-border relative group overflow-hidden">
              <div className="relative aspect-[4/5] w-full rounded-lg overflow-hidden bg-surface-subtle">
                <Image
                  src="/images/abednego-laptop.jpg"
                  alt="Abenego Nyabicha - Engineering and Technical Practice"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 400px"
                  className="object-cover object-top hover:scale-102 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-background/80 backdrop-blur-md border border-surface-border">
                  <div className="text-xs font-mono font-semibold text-foreground">
                    Abenego Nyabicha
                  </div>
                  <div className="text-[10px] font-mono text-cyan-400">
                    Cybersecurity &amp; Software Engineer · Dublin &amp; Nairobi
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
