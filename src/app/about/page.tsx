const experience = [
  {
    role: 'Product Manager',
    company: 'IOU Financial',
    period: 'Feb 2022 – Present',
    bullets: [
      'Led the Retail Application (merchant-facing) from concept → MVP → iteration, defining product narrative, journey map, and phased launch plan.',
      'Conducted competitor analysis to inform onboarding patterns and verification sequencing; translated insights into roadmap priorities.',
      'Owned activation-critical steps (OTP/email verification, revenue verification, submission readiness) and drove funnel improvements to reduce friction.',
      'Used FullStory session replay to validate funnel findings, uncover UX failure patterns, and convert insights into iterative product/UX changes.',
      'Led integrations with Heron, Baselayer, and partners to automate document parsing and data validation for smoother onboarding.',
      'Designed exception-handling and validation logic that reduced manual intervention by 40%.',
      'Built lifecycle visibility by defining application status semantics that enable better follow-up and operational execution.',
    ],
  },
  {
    role: 'Senior Business Analyst',
    company: 'Quantum Health · Columbus, OH',
    period: 'Mar 2021 – Feb 2022',
    bullets: [
      'Translated customer and business needs into user stories and acceptance criteria; supported iterative delivery to improve feature quality and adoption.',
      'Established feedback loops to identify post-launch friction and refine user workflows.',
      'Improved delivery efficiency by 28% through backlog prioritization and workflow improvements.',
    ],
  },
  {
    role: 'Senior Business Analyst',
    company: 'Radiology Partners · Columbus, OH',
    period: 'Nov 2018 – Mar 2021',
    bullets: [
      'Led implementation of AIDoc as a proof of concept, coordinating stakeholders and integrations (PACS/EHR/speech recognition); successful pilot expanded into nationwide usage.',
      'Supported AI-enabled diagnostic tool integrations and workflow adoption across clinical and technical teams.',
    ],
  },
  {
    role: 'Business Analyst / Project Coordinator / Contract Coordinator',
    company: 'Buckeye Health Plan · Columbus, OH',
    period: 'Nov 2015 – Nov 2018',
    bullets: [
      'Led cross-department initiatives supporting regulatory compliance and process improvements.',
      'Reduced credentialing turnaround time by 70% and improved processes that reduced claims denials.',
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
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-ink text-white font-heading font-bold text-sm tracking-tight">
              BB
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
                  <span key={skill} className="bg-accent-soft text-accent text-xs font-medium px-2.5 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          {/* Main */}
          <div>
            <p className="text-lg leading-8 text-ink-soft max-w-2xl">
              Product Manager with 10+ years of experience across fintech and regulated consumer
              products. I&apos;ve led multiple platform builds end-to-end — Broker Portal, AE
              Workstation, and Direct Merchant Application — using funnel analysis and FullStory
              session replay to identify friction and ship improvements.
            </p>
            <p className="mt-4 text-lg leading-8 text-ink-soft max-w-2xl">
              Strong cross-functional partner to Engineering, Design, Ops, and Compliance;
              experienced with third-party integrations (Plaid, Lendflow, Salesforce, Experian)
              and building reliable lifecycle workflows.
            </p>
            <p className="mt-4 text-lg leading-8 text-ink-soft max-w-2xl">
              I prototype and build with AI — not just prompt it. I&apos;ve built agents for
              customer feedback synthesis, PRD generation, and sprint prioritization using the
              Anthropic SDK, and I completed Google&apos;s 5-Day AI Agent Intensive. Currently
              building an SDR agent for automated outbound prospecting.
            </p>

            {/* Experience timeline */}
            <div className="mt-16">
              <h2 className="font-heading font-bold text-2xl tracking-tight text-ink mb-10">Experience</h2>
              <div className="relative space-y-12 border-l border-line pl-8">
                {experience.map((job) => (
                  <div key={job.role + job.company} className="relative">
                    <span className="absolute -left-[2.35rem] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background" />
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
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Certs */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-12 border-t border-line pt-12">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
