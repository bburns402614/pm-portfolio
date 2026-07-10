import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Logo from "@/components/Logo";
import DownloadResumeButton from "@/components/DownloadResumeButton";

export const metadata: Metadata = {
  title: "My Background | Breanna Burns",
  description: "Resume and background for Breanna Burns, Product Manager with 10+ years in healthcare and fintech.",
};

const experience = [
  {
    role: 'Product Manager',
    company: 'IOU Financial',
    period: 'Feb 2022 – Present',
    bullets: [
      'Led the Direct Merchant Application from concept through MVP and iteration, defining the journey map, product scope, and phased launch plan.',
      'Ran competitor onboarding analysis to inform verification sequencing and step order; findings shaped the first-year roadmap.',
      'Owned activation-critical steps including OTP verification, revenue verification, and submission readiness; funnel improvements cut drop-off at each.',
      'Used FullStory session replay to validate funnel data, surface UX failure patterns, and drive iterative fixes sprint over sprint.',
      'Led integrations with Heron and Baselayer to automate document parsing and data validation, reducing manual review load.',
      '40% reduction in manual intervention from exception-handling and validation logic I designed.',
      'Defined application status semantics to give AEs and Ops clear lifecycle visibility and improve follow-up accuracy.',
    ],
  },
  {
    role: 'Senior Business Analyst',
    company: 'Quantum Health · Columbus, OH',
    period: 'Mar 2021 – Feb 2022',
    bullets: [
      'Wrote user stories and acceptance criteria tied directly to customer and business needs; supported iterative delivery to improve feature quality and adoption.',
      'Established feedback loops to catch post-launch friction early and refine workflows before it compounded.',
      '28% improvement in delivery efficiency through backlog prioritization and workflow changes.',
    ],
  },
  {
    role: 'Senior Business Analyst',
    company: 'Radiology Partners · Columbus, OH',
    period: 'Nov 2018 – Mar 2021',
    bullets: [
      'Led the AIDoc proof of concept: coordinated stakeholders, delivered PACS/EHR/speech recognition integrations, and structured the pilot to generate clear outcomes. It expanded to nationwide usage.',
      'Supported AI diagnostic tool integrations and workflow adoption across clinical and technical teams.',
    ],
  },
  {
    role: 'Business Analyst / Project Coordinator / Contract Coordinator',
    company: 'Buckeye Health Plan · Columbus, OH',
    period: 'Nov 2015 – Nov 2018',
    bullets: [
      'Led cross-department initiatives for regulatory compliance and process improvement.',
      'Reduced credentialing turnaround time 70% and tightened processes that were driving claims denials.',
    ],
  },
]

const certs = [
  { name: 'Certified Product Owner', org: 'Scrum Alliance', year: '2024' },
  { name: 'AI Agent Developer', org: 'Google', year: '2026' },
  { name: 'Certified SAFe Scrum Master', org: 'Scaled Agile, Inc.', year: '2020' },
  { name: 'Certified Scrum Master', org: 'Agile Scrum Alliance', year: '2018' },
]

const skills = [
  'Onboarding & Activation Funnels',
  'Funnel Analysis & Opportunity Sizing',
  'Journey Mapping',
  'Success Metrics / KPIs',
  'PRDs / User Stories / AC',
  'Experimentation Support',
  'Vendor & API Integrations',
  'AI Agent Development',
  'Claude / Anthropic SDK',
  'Plaid',
  'Lendflow',
  'Salesforce',
  'Experian',
  'FullStory',
  'Atlassian Products',
]

export default function About() {
  return (
    <div className="bg-background">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20">
        <div className="mb-8 flex items-center justify-between print:hidden">
          <p className="text-xs font-semibold tracking-widest uppercase text-ink-faint">Resume</p>
          <DownloadResumeButton />
        </div>
        <div id="resume-content" className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16">
          {/* Sidebar */}
          <Reveal as="aside" className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative w-full max-w-[15rem] print:hidden">
              <div aria-hidden="true" className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-gradient-to-br from-accent to-violet-600" />
              <div aria-hidden="true" className="absolute -left-2 -bottom-2 z-[2] flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white">
                <Logo className="h-6 w-6 text-white" />
              </div>
              <div className="group relative overflow-hidden rounded-2xl bg-muted shadow-[0_10px_30px_-12px_rgba(37,99,235,0.35)]" style={{ aspectRatio: "1086 / 1448" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/portrait.png" alt="Breanna Burns, Product Manager" className="block h-full w-full object-cover object-top grayscale contrast-[1.08] brightness-[1.03] transition-transform duration-700 group-hover:scale-105" />
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent to-violet-600 opacity-90 mix-blend-color" />
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/35 to-transparent" />
              </div>
            </div>
            <h1 className="mt-6 font-heading font-bold text-3xl tracking-tight text-ink">Breanna Burns</h1>
            <p className="mt-1 text-sm font-medium text-accent">Product Manager</p>
            <p className="text-sm text-ink-soft">Columbus, OH</p>

            <div className="mt-6 space-y-2 text-sm">
              <a href="mailto:burns.655@icloud.com" className="block text-ink-soft hover:text-ink transition-colors">
                burns.655@icloud.com
              </a>
              <p className="text-ink-soft">614-736-1701</p>
              <a href="https://www.linkedin.com/in/breanna-burns/" target="_blank" rel="noopener noreferrer" className="block text-ink-soft hover:text-ink transition-colors">
                linkedin.com/in/breanna-burns ↗
              </a>
            </div>

            <div className="mt-10 border-t border-line pt-8">
              <h2 className="text-xs font-semibold tracking-widest uppercase text-ink-faint mb-4">Skills</h2>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((skill) => (
                  <span key={skill} className="bg-accent-soft text-accent text-xs font-medium px-2.5 py-1 rounded-full transition-transform duration-150 hover:scale-105">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Main */}
          <div>
            <Reveal>
              <p className="text-lg leading-8 text-ink-soft max-w-2xl">
                Product Manager with 10+ years in fintech and customer-facing products. I&apos;ve
                led three platform builds from scratch: Broker Portal, AE Workstation, and Direct
                Merchant Application. Funnel analysis and FullStory session replay are how I find
                friction. Shipped improvements are how I close it.
              </p>
              <p className="mt-4 text-lg leading-8 text-ink-soft max-w-2xl">
                I work closely with Engineering, Design, Ops, and Compliance as a day-to-day partner.
                Third-party integrations are a big part of what I do: Plaid, Lendflow, Salesforce,
                Experian. Lifecycle workflows are where I invest significant engineering time to make
                sure nothing slips through.
              </p>
              <p className="mt-4 text-lg leading-8 text-ink-soft max-w-2xl">
                I build with AI, not just prompt it. Agents for feedback synthesis, PRD generation,
                and sprint prioritization are already running on the Anthropic SDK. I finished
                Google&apos;s 5-Day AI Agent Intensive and I&apos;m currently building an SDR agent
                for automated outbound prospecting.
              </p>
            </Reveal>

            {/* Experience timeline */}
            <div className="mt-16">
              <Reveal>
                <h2 className="font-heading font-bold text-2xl tracking-tight text-ink mb-10">Experience</h2>
              </Reveal>
              <div className="relative space-y-12 border-l border-line pl-8">
                {experience.map((job, i) => (
                  <Reveal key={job.role + job.company} delay={i * 100} className="relative">
                    <span className="animate-soft-pulse absolute -left-[2.35rem] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background" />
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-3 gap-1">
                      <div>
                        <h3 className="text-lg font-semibold text-ink">{job.role}</h3>
                        <p className="text-accent text-sm font-medium">{job.company}</p>
                      </div>
                      <span className="text-xs uppercase tracking-wide text-ink-faint whitespace-nowrap">{job.period}</span>
                    </div>
                    <ul className="space-y-2">
                      {job.bullets.map((b, i) => (
                        <li key={i} className="flex gap-3 text-ink-soft text-sm leading-6">
                          <span className="text-accent mt-0.5 shrink-0">—</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Education & Certs */}
            <Reveal className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-12 border-t border-line pt-12">
              <div>
                <h2 className="font-heading font-bold text-2xl tracking-tight text-ink mb-4">Education</h2>
                <p className="font-medium text-ink">The Ohio State University</p>
                <p className="text-sm text-ink-soft">Columbus, OH</p>
              </div>
              <div>
                <h2 className="font-heading font-bold text-2xl tracking-tight text-ink mb-4">Certifications</h2>
                <ul className="space-y-3">
                  {certs.map((c) => (
                    <li key={c.name} className="text-sm">
                      <span className="text-ink font-medium">{c.name}</span>
                      <span className="text-ink-faint"> · {c.org} · {c.year}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  )
}
