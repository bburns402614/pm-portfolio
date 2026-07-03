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
        <div className="relative mx-auto max-w-5xl px-6 pt-28 pb-24 sm:pt-36 sm:pb-32 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-ink-soft">
            Fintech &amp; Regulated Consumer Products · Columbus, OH
          </span>
          <h1 className="mt-10 font-heading font-bold text-[clamp(2.75rem,8vw,6rem)] leading-[0.95] tracking-tight text-ink">
            Product management,{" "}
            <span className="text-accent">grounded in the funnel.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-ink-soft">
            10+ years turning onboarding data into shipped improvements. I lead platform builds
            end-to-end — from journey maps and PRDs through funnel analysis, FullStory replay, and
            reliable lifecycle workflows — for teams that can&apos;t afford to get compliance or
            trust wrong.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="cursor-pointer rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-accent transition-colors duration-200"
            >
              View Case Studies
            </Link>
            <Link
              href="/about"
              className="cursor-pointer group flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-accent transition-colors duration-200"
            >
              About Me
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Impact stats */}
      <div className="bg-ink bg-grain-dark py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <dl className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
            {highlights.map((h) => (
              <div key={h.label} className="border-l-2 border-accent pl-6">
                <dt className="font-heading font-bold text-5xl text-white tracking-tight">{h.stat}</dt>
                <dd className="mt-2 text-sm text-white/50 leading-6">{h.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Skills */}
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-28">
        <div className="max-w-2xl mb-16">
          <h2 className="font-heading font-bold text-4xl tracking-tight text-ink mb-5">Core competencies</h2>
          <p className="text-ink-soft leading-7">
            Specialized in fintech onboarding, funnel optimization, and AI-enabled automation —
            backed by direct partnership with engineering, design, ops, and compliance.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-3 border border-line">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-paper p-8 hover:bg-accent-soft transition-colors duration-200">
              <div className="mb-4 h-0.5 w-10 bg-accent" />
              <h3 className="font-heading font-semibold text-ink">{skill.name}</h3>
              <p className="mt-2 text-sm text-ink-soft leading-6">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto max-w-6xl px-6 lg:px-8 pb-28">
        <div className="rounded-2xl border border-line bg-paper px-8 py-16 text-center sm:px-16">
          <h2 className="font-heading font-bold text-4xl tracking-tight text-ink">Want to see the work?</h2>
          <p className="mt-5 text-ink-soft max-w-md mx-auto leading-7">
            Dive into detailed case studies from IOU Financial, Radiology Partners, and Buckeye Health Plan.
          </p>
          <div className="mt-10 flex justify-center gap-x-4">
            <Link
              href="/projects"
              className="cursor-pointer rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white hover:bg-accent transition-colors duration-200"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="cursor-pointer rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink hover:border-accent hover:text-accent transition-colors duration-200"
            >
              My Background
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
