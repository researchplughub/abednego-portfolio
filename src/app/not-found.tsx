import Link from "next/link";
import { ArrowLeft, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="max-w-md w-full tech-card p-8 rounded-xl border border-surface-border text-center">
        <div className="inline-flex items-center justify-center p-3 rounded-lg bg-surface-subtle border border-surface-border text-cyan-400 mb-6">
          <Terminal className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-bold font-mono text-foreground mb-2">404</h1>
        <p className="text-foreground-muted mb-6 text-sm">
          The requested system route does not exist or has been relocated.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-surface-subtle hover:bg-surface border border-surface-border hover:border-cyan-500/50 text-cyan-400 text-sm font-medium transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Return to Portfolio
        </Link>
      </div>
    </div>
  );
}
