import Link from "next/link";

const skills = [
  {
    name: "Onboarding & Activation Funnels",
    description: "End-to-end funnel design, drop-off analysis, and iterative improvement",
  },
  {
    name: "Funnel Analysis & Opportunity Sizing",
    description: "Quantifying drop-offs to prioritize highest-impact fixes",
  },
  {
    name: "Journey Mapping",
    description: "Translating user journeys into clear product narratives and phased plans",
  },
  {
    name: "AI-Enabled Automation",
    description: "Document parsing, data validation, and exception handling workflows",
  },
  {
    name: "Cross-functional Leadership",
    description: "Partnering with Engineering, Design, Ops, and Compliance",
  },
  {
    name: "Vendor & API Integrations",
    description: "Third-party platform integrations to automate intake and onboarding",
  },
];

const highlights = [
  { stat: "10+", label: "Years of PM experience" },
  { stat: "8,000+", label: "Applications processed by Direct App" },
  { stat: "1,000+", label: "Brokers served by Broker Portal" },
  { stat: "40%", label: "Reduction in manual intervention" },
];

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grain" />
        <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-accent-soft blur-3xl opacity-70" />
        <div className="relative mx-auto max-w-4xl px-6 pt-24 pb-20 sm:pt-32 sm:pb-28 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-1.5 text-xs font-medium tracking-wide text-ink-soft">
            Fintech &amp; Regulated Consumer Products · Columbus, OH
          </span>
          <h1 className="mt-8 font-serif text-5xl leading-[1.1] tracking-tight text-ink sm:text-6xl">
            Product management,{" "}
            <span className="italic text-accent">grounded in the funnel.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-soft">
            10+ years turning onboarding data into shipped improvements. I lead platform builds
            end-to-end — from journey maps and PRDs through funnel analysis, FullStory replay, and
            reliable lifecycle workflows — for teams that can&apos;t afford to get compliance or
            trust wrong.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-accent-strong transition-colors"
            >
              View Case Studies
            </Link>
            <Link
              href="/about"
              className="group flex items-center gap-1.5 text-sm font-semibold text-ink"
            >
              About Me
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Impact stats */}
      <div className="bg-ink bg-grain-dark py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <dl className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
            {highlights.map((h) => (
              <div key={h.label} className="border-l border-white/15 pl-5">
                <dt className="font-serif text-4xl text-white">{h.stat}</dt>
                <dd className="mt-2 text-sm text-white/50">{h.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Skills */}
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl tracking-tight text-ink mb-4">Core competencies</h2>
          <p className="text-ink-soft mb-12 leading-7">
            Specialized in fintech onboarding, funnel optimization, and AI-enabled automation —
            backed by direct partnership with engineering, design, ops, and compliance.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-3 border border-line">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-paper p-7 hover:bg-accent-soft/40 transition-colors">
              <div className="mb-3 h-1 w-8 bg-brass" />
              <h3 className="font-semibold text-ink">{skill.name}</h3>
              <p className="mt-2 text-sm text-ink-soft leading-6">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto max-w-6xl px-6 lg:px-8 pb-24">
        <div className="rounded-2xl border border-line bg-paper px-8 py-14 text-center sm:px-16">
          <h2 className="font-serif text-3xl text-ink">Want to see the work?</h2>
          <p className="mt-4 text-ink-soft">
            Dive into detailed case studies from IOU Financial, Radiology Partners, and Buckeye Health Plan.
          </p>
          <div className="mt-8 flex justify-center gap-x-4">
            <Link
              href="/projects"
              className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-strong transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink hover:bg-background transition-colors"
            >
              My Background
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
