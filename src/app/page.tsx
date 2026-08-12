import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import AnimatedCounter from "@/components/AnimatedCounter";

const FUNNEL_STAGES = [
  { id: "discover", label: "DISCOVER", desc: "Lots of ideas, customer needs, data, opportunities.", pct: 26 },
  { id: "define",   label: "DEFINE",   pct: 41 },
  { id: "design",   label: "DESIGN",   pct: 55 },
  { id: "deliver",  label: "DELIVER",  pct: 67 },
  { id: "measure",  label: "MEASURE",  pct: 79 },
  { id: "grow",     label: "GROW",     pct: 92 },
];

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
    description: "Designed and deployed a six-agent Claude Code pipeline (intake, planning, build, review, deploy, UI/UX QA) with MCP integrations that ships full-stack builds from plain-English specs.",
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
  { stat: "10+", label: "Years of experience" },
  { stat: "8,000+", label: "Applications processed by Direct Merchant Application (DMA)" },
  { stat: "70%", label: "Credentialing turnaround reduction" },
  { stat: "40%", label: "Reduction in manual intervention" },
];

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <div className="relative overflow-x-hidden" style={{ backgroundColor: 'var(--background)' }}>
        <div className="absolute inset-0 bg-grain animate-grain-drift" />
        <div className="absolute inset-0 animate-vignette-pulse pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 35%, rgba(74,94,58,0.35) 100%)" }} />
        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-10 sm:pt-28 sm:pb-14 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_540px] gap-x-10 gap-y-10 items-center">
            {/* Left: text */}
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-ink-soft">
                  Healthcare &amp; Fintech · Regulated, High-Trust Products · Columbus, OH
                </span>
              </Reveal>
              <Reveal delay={60}>
                <p className="mt-5 font-heading italic text-ink-soft/60 text-base tracking-wide">
                  Thoughtful work. Measurable impact.
                </p>
              </Reveal>
              <Reveal delay={140}>
                <h1 className="mt-4 font-heading font-bold text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.1] tracking-tight text-ink">
                  Product management,{" "}
                  <span className="text-accent">grounded in the funnel.</span>
                </h1>
              </Reveal>
              <Reveal delay={240}>
                <p className="mt-8 text-lg leading-8 text-ink-soft">
                  10+ years building products in healthcare and fintech, where compliance and trust aren&apos;t
                  optional. I own platform builds from journey maps and PRDs through funnel analysis, FullStory
                  replay, and lifecycle workflows, for teams where getting it wrong has real consequences.
                </p>
              </Reveal>
              <Reveal delay={340}>
                <div className="mt-10 flex flex-wrap items-center gap-4">
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
                    My Background
                    <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </Reveal>
            </div>
            {/* Right: botanical funnel + stage labels */}
            <Reveal delay={180} className="w-full">
              <div className="flex items-stretch">
                {/* Funnel image */}
                <div className="relative shrink-0 w-[260px]" style={{ aspectRatio: "3/4" }}>
                  <Image
                    src="/botanical-funnel.png"
                    alt="Botanical product funnel — wildflowers and leaves flowing through a glass funnel into a rooted sprout"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
                {/* Stage labels */}
                <div className="relative flex-1">
                  {FUNNEL_STAGES.map((stage) => (
                    <div key={stage.id}>
                      {/* Label row */}
                      <div
                        className="absolute flex items-center"
                        style={{ top: `${stage.pct}%`, transform: "translateY(-50%)" }}
                      >
                        <div className="w-5 h-px bg-[#9a8d70]" />
                        <div className="w-2 h-2 rounded-full border border-[#9a8d70] shrink-0 ml-0.5" />
                        <div className="ml-2.5">
                          <p className="font-heading font-bold text-sm uppercase tracking-[0.18em] text-ink leading-none">
                            {stage.label}
                          </p>
                          {stage.desc && (
                            <p className="text-xs text-ink-soft mt-1 leading-snug max-w-[170px]">
                              {stage.desc}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Impact stats */}
      <div className="border-t border-b border-line bg-paper py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <dl className="grid grid-cols-2 divide-x divide-line lg:grid-cols-4">
            {highlights.map((h, i) => (
              <Reveal key={h.label} delay={i * 80} className="px-8 py-4 first:pl-0 lg:first:pl-8">
                <dt className="font-heading font-bold text-5xl text-ink tracking-tight tabular-nums">
                  <AnimatedCounter value={h.stat} />
                </dt>
                <dd className="mt-2 text-sm text-ink-faint leading-5">{h.label}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>

      {/* Skills */}
      <div className="mx-auto max-w-6xl px-6 lg:px-8 pt-16 pb-28">
        <Reveal className="max-w-2xl mb-16">
          <h2 className="font-heading font-bold text-4xl tracking-tight text-ink mb-5">Core competencies</h2>
          <p className="text-ink-soft leading-7">
            Onboarding and workflow automation across healthcare and fintech, plus AI-enabled building. I work directly with
            Engineering, Design, Ops, and Compliance, not just adjacent to them.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => (
            <Reveal key={skill.name} delay={(i % 3) * 90}>
              <div className="group relative overflow-hidden bg-paper p-8 h-full border border-line shadow-[inset_0_0_0_4px_var(--paper),inset_0_0_0_5px_rgba(74,94,58,0.18)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[inset_0_0_0_4px_var(--paper),inset_0_0_0_5px_var(--accent),0_10px_28px_-10px_rgba(74,94,58,0.28)]">
                <span
                  aria-hidden="true"
                  className="absolute top-5 right-5 select-none pointer-events-none font-heading italic font-bold text-7xl leading-none text-accent/[0.07] transition-colors duration-300 group-hover:text-accent/[0.13]"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="mb-5 h-px w-6 bg-accent transition-all duration-300 group-hover:w-10" />
                <h3 className="font-heading font-semibold text-ink">{skill.name}</h3>
                <p className="mt-2 text-sm text-ink-soft leading-6">{skill.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto max-w-6xl px-6 lg:px-8 pt-8 pb-28">
        <Reveal className="rounded-none border border-line bg-paper px-8 py-16 text-center sm:px-16">
          <h2 className="font-heading font-bold text-4xl tracking-tight text-ink">Want to see the case studies?</h2>
          <p className="mt-5 text-ink-soft max-w-md mx-auto leading-7">
            Detailed case studies from IOU Financial, Radiology Partners, and Buckeye Health Plan.
          </p>
          <div className="mt-10 flex justify-center gap-x-4">
            <Link
              href="/projects"
              className="cursor-pointer rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white hover:bg-accent hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
            >
              Case Studies
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
