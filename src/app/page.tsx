import Link from "next/link";
import Reveal from "@/components/Reveal";
import AnimatedCounter from "@/components/AnimatedCounter";

const skills = [
  {
    name: "Onboarding & Activation Funnels",
    description: "Full-funnel design, drop-off analysis, and iteration until the numbers move",
  },
  {
    name: "Funnel Analysis & Opportunity Sizing",
    description: "Quantifying drop-offs to prioritize the highest-impact fixes first",
  },
  {
    name: "Journey Mapping",
    description: "Mapping user journeys into clear product narratives and phased launch plans",
  },
  {
    name: "AI Agent Development",
    description: "Building agents for feedback synthesis, PRD generation, sprint planning, and outbound sales using the Anthropic SDK",
  },
  {
    name: "Cross-functional Leadership",
    description: "Day-to-day partner to Engineering, Design, Ops, and Compliance",
  },
  {
    name: "Vendor & API Integrations",
    description: "Third-party integrations to automate intake, onboarding, and decisioning",
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
        <div
          aria-hidden="true"
          className="animate-float-a absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="animate-float-b absolute top-40 -left-32 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-6 pt-28 pb-24 sm:pt-36 sm:pb-32 lg:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-ink-soft">
              Healthcare &amp; Fintech · Regulated, High-Trust Products
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-10 font-heading font-bold text-[clamp(2.75rem,8vw,6rem)] leading-[0.95] tracking-tight text-ink">
              Product management,{" "}
              <span className="text-gradient-accent">grounded in the funnel.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-ink-soft">
              10+ years building products in healthcare and fintech, where compliance and trust aren&apos;t
              optional. I own platform builds from journey maps and PRDs through funnel analysis, FullStory
              replay, and lifecycle workflows, for teams where getting it wrong has real consequences.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="cursor-pointer rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-accent hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
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
          </Reveal>
        </div>
      </div>

      {/* Impact stats */}
      <div className="bg-ink bg-grain-dark py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <dl className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
            {highlights.map((h, i) => (
              <Reveal key={h.label} delay={i * 80} className="border-l-2 border-accent pl-6">
                <dt className="font-heading font-bold text-5xl text-white tracking-tight tabular-nums">
                  <AnimatedCounter value={h.stat} />
                </dt>
                <dd className="mt-2 text-sm text-white/50 leading-6">{h.label}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>

      {/* Skills */}
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-28">
        <Reveal className="max-w-2xl mb-16">
          <h2 className="font-heading font-bold text-4xl tracking-tight text-ink mb-5">Core competencies</h2>
          <p className="text-ink-soft leading-7">
            Fintech onboarding, funnel optimization, and AI-enabled automation. I work directly with
            Engineering, Design, Ops, and Compliance, not just adjacent to them.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-3 border border-line">
          {skills.map((skill, i) => (
            <Reveal key={skill.name} delay={(i % 3) * 90}>
              <div className="group bg-paper p-8 h-full hover:bg-accent-soft hover:-translate-y-1 hover:shadow-md transition-all duration-200">
                <div className="mb-4 h-0.5 w-10 bg-accent transition-all duration-300 group-hover:w-16" />
                <h3 className="font-heading font-semibold text-ink">{skill.name}</h3>
                <p className="mt-2 text-sm text-ink-soft leading-6">{skill.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto max-w-6xl px-6 lg:px-8 pb-28">
        <Reveal className="rounded-2xl border border-line bg-paper px-8 py-16 text-center sm:px-16">
          <h2 className="font-heading font-bold text-4xl tracking-tight text-ink">Want to see the work?</h2>
          <p className="mt-5 text-ink-soft max-w-md mx-auto leading-7">
            Detailed case studies from IOU Financial, Radiology Partners, and Buckeye Health Plan.
          </p>
          <div className="mt-10 flex justify-center gap-x-4">
            <Link
              href="/projects"
              className="cursor-pointer rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white hover:bg-accent hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="cursor-pointer rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all duration-200"
            >
              My Background
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
