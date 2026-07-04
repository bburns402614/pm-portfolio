import type { Metadata } from "next";
import ArtifactsGrid from "@/components/ArtifactsGrid";

export const metadata: Metadata = {
  title: "PM Artifacts | Breanna Burns",
  description: "Frameworks, templates, and tools Breanna Burns builds and reaches for across fintech product work.",
};

export default function ArtifactsPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grain" />
        <div className="relative mx-auto max-w-5xl px-6 pt-28 pb-20 sm:pt-36 sm:pb-24 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-ink-soft">
            PM Toolkit
          </span>
          <h1 className="mt-10 font-heading font-bold text-[clamp(2.5rem,7vw,5rem)] leading-[0.95] tracking-tight text-ink">
            Artifacts I actually use.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-ink-soft">
            These are the frameworks, templates, and thinking tools I reach for across discovery,
            analysis, planning, compliance, and stakeholder work — built and refined on real projects.
          </p>
        </div>
      </div>

      {/* Filterable grid — client component */}
      <ArtifactsGrid />
    </div>
  );
}
