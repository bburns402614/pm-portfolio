import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Breanna Burns",
  description: "Case studies from Breanna Burns — fintech, healthcare, and internal tooling delivered end-to-end.",
};

const projects = [
  {
    id: "direct-merchant-application",
    company: "IOU Financial",
    initials: "DMA",
    title: "Direct Merchant Application: Concept to 8,000+ Submissions",
    period: "IOU Financial · Live since March 2026",
    tags: ["Fintech", "Onboarding", "Credit Decisioning", "AI Prototyping"],
    challenge:
      "IOU needed a direct-to-merchant path into financing that didn't depend on a broker's manual review to catch errors. That meant owning identity verification, real-time credit decisioning, bank connectivity, and lead routing in a single flow — fast enough that merchants wouldn't abandon it, and reliable enough that Compliance would sign off.",
    approach: [
      "Owned the full product lifecycle from discovery through iteration, defining the application flow, decisioning logic, and phased launch plan.",
      "Architected integrations with Lendflow, Plaid, Salesforce, and Baselayer to enable automated credit decisioning, bank connection, real-time lead sync, and deduplication.",
      "Migrated credit pull infrastructure from Equifax to Experian, including EIN classification and fraud validation logic, ahead of launch.",
      "Used FullStory session replay and funnel analysis (drop-off, conversion, time-to-complete) to surface friction and drive iterative improvements post-launch.",
      "Prototyped flows and edge cases with Claude AI and Magic Patterns to tighten the ideation-to-spec cycle before engineering handoff.",
    ],
    outcomes: [
      { stat: "8,000+", label: "applications processed since launch" },
      { stat: "<2 min", label: "average time-to-submit" },
      { stat: "Live", label: "in production since March 2026" },
    ],
    tools: ["Lendflow", "Plaid", "Salesforce", "Baselayer", "Experian", "FullStory", "Claude AI"],
  },
  {
    id: "broker-portal",
    company: "IOU Financial",
    initials: "BP",
    title: "Broker Portal: Built From the Ground Up",
    period: "IOU Financial · 2021 – 2024",
    tags: ["Fintech", "Compliance", "0→1", "Multi-tenant"],
    challenge:
      "IOU had no dedicated platform for its broker network — brokers needed a reliable way to submit and track loan applications, while IOU needed state-specific disclosure compliance and protection against duplicate submissions across a fast-growing broker base.",
    approach: [
      "Built the loan submission platform from the ground up, now serving 1,000+ brokers.",
      "Designed and shipped a loan calculator so brokers could scope deals before submitting.",
      "Implemented California and New York disclosure compliance logic to satisfy state-specific regulatory requirements.",
      "Built conflicting application detection to catch duplicate or competing submissions across the broker network.",
      "Delivered end-to-end status visibility so brokers always know where an application stands.",
      "Added staff masquerade login so internal teams could troubleshoot broker accounts directly.",
    ],
    outcomes: [
      { stat: "1,000+", label: "brokers actively using the platform" },
      { stat: "CA / NY", label: "disclosure compliance built in" },
      { stat: "0 → 1", label: "platform built from the ground up" },
    ],
    tools: ["Salesforce", "FullStory", "Atlassian", "Compliance Workflows"],
  },
  {
    id: "ae-workstation",
    company: "IOU Financial",
    initials: "AE",
    title: "AE Workstation: Automating Email-Based Loan Intake",
    period: "IOU Financial · 2024 – 2025",
    tags: ["Internal Tools", "Automation", "Document Parsing"],
    challenge:
      "Account Executives were processing loan submissions that arrived by email — a slow, manual, error-prone path that didn't scale as submission volume grew and pulled AEs away from higher-value work.",
    approach: [
      "Led the AE Workstation from concept through delivery as an internal intake engine automating email-based loan submissions via Heron.",
      "Designed document parsing logic to extract structured data from incoming submissions.",
      "Built validation rules and exception-handling logic to catch issues before they reached an AE's queue.",
      "Iterated on the exception-handling logic using real intake volume to keep tightening accuracy.",
    ],
    outcomes: [
      { stat: "40%", label: "reduction in manual intervention" },
      { stat: "Concept → delivery", label: "led end-to-end as sole product owner" },
      { stat: "Faster intake", label: "consistent, structured loan submission pipeline" },
    ],
    tools: ["Heron", "Document Parsing", "Validation Rules", "Exception Handling"],
  },
  {
    id: "radiology-partners-aidoc",
    company: "Radiology Partners",
    initials: "RP",
    title: "AIDoc Proof of Concept → Nationwide Rollout",
    period: "Radiology Partners · 2018 – 2021",
    tags: ["Healthcare", "AI/ML", "Integration", "Change Management"],
    challenge:
      "Radiologists needed faster triage for critical findings. Leadership wanted to pilot an AI-powered diagnostic tool (AIDoc) but had no established process for integrating with existing PACS, EHR, and speech recognition systems — or for driving clinical adoption.",
    approach: [
      "Led the end-to-end POC: coordinated cross-functional stakeholders across clinical, IT, and operations to define success criteria and integration requirements.",
      "Managed integrations with PACS, EHR, and speech recognition systems to fit AIDoc into existing radiologist workflows without requiring behavior change.",
      "Structured the pilot to generate clear, measurable outcomes that could justify a broader rollout decision.",
      "Supported clinical teams through adoption, capturing feedback to refine workflows iteratively.",
    ],
    outcomes: [
      { stat: "Nationwide", label: "expansion following successful pilot" },
      { stat: "Multi-system", label: "PACS/EHR/speech recognition integration delivered" },
      { stat: "Clinical adoption", label: "achieved across technical and clinical teams" },
    ],
    tools: ["PACS", "EHR", "AIDoc", "Stakeholder Coordination"],
  },
  {
    id: "buckeye-credentialing",
    company: "Buckeye Health Plan",
    initials: "BHP",
    title: "Credentialing Process Overhaul",
    period: "Buckeye Health Plan · 2015 – 2018",
    tags: ["Healthcare", "Process Improvement", "Compliance", "Operations"],
    challenge:
      "Provider credentialing was a slow, manual process creating backlogs, compliance risk, and downstream claims denials. Turnaround times were unacceptably long and the process lacked clear ownership across departments.",
    approach: [
      "Led cross-department initiative to map and redesign the credentialing workflow end-to-end.",
      "Identified bottlenecks driving turnaround delays and worked with stakeholders to eliminate handoff friction.",
      "Introduced process controls that improved accuracy and reduced the volume of claims denials tied to credentialing errors.",
    ],
    outcomes: [
      { stat: "70%", label: "reduction in credentialing turnaround time" },
      { stat: "Fewer denials", label: "claims denial rate reduced through improved accuracy" },
      { stat: "Compliance", label: "improved regulatory compliance posture" },
    ],
    tools: ["Process Mapping", "Cross-department Coordination", "Compliance Workflows"],
  },
];

const highlights = [
  {
    id: "referral-partner-management",
    title: "Referral Partner Management",
    description:
      "Full admin epic for IOU's referral channel — partner CRUD, auto-generated partner codes, Salesforce push, and commission tracking, giving IOU a scalable system for partner-driven growth.",
    tools: ["Salesforce", "Admin Tooling", "Commission Tracking"],
  },
  {
    id: "sofi-lantern",
    title: "SoFi Lantern Integration",
    description:
      "Secure URL redirection for SoFi leads into IOU's application flow, with SFTP file delivery and draft-save behavior so partial applications aren't lost mid-journey.",
    tools: ["SFTP", "Partner Integration", "Lead Routing"],
  },
  {
    id: "experian-migration",
    title: "Credit Bureau Migration: Equifax → Experian",
    description:
      "Migrated credit pull infrastructure from Equifax to Experian, including EIN classification and fraud validation logic, with no disruption to in-flight applications.",
    tools: ["Experian", "Fraud Validation", "EIN Classification"],
  },
];

export default function Projects() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grain" />
        <div className="relative mx-auto max-w-5xl px-6 pt-28 pb-20 sm:pt-36 sm:pb-24 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-ink-soft">
            Case Studies
          </span>
          <h1 className="mt-10 font-heading font-bold text-[clamp(2.5rem,7vw,5rem)] leading-[0.95] tracking-tight text-ink">
            How I approach problems.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-ink-soft">
            From discovery through delivery and iteration — across fintech, healthcare, and internal tooling.
          </p>
        </div>
      </div>

      {/* Project cards */}
      <div className="mx-auto max-w-5xl px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {projects.map((p, idx) => (
            <div
              key={p.id}
              className="rounded-2xl border border-line bg-paper p-8 sm:p-12 transition-all duration-200 hover:border-accent/30 hover:shadow-[0_4px_32px_rgba(37,99,235,0.08)]"
            >
              {/* Card header */}
              <div className="flex items-start justify-between gap-6 mb-8">
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-white font-heading font-bold text-xs tracking-tight">
                    {p.initials}
                  </span>
                  <div>
                    <p className="text-xs font-medium tracking-wide text-ink-soft">{p.period}</p>
                    <h2 className="font-heading font-bold text-xl tracking-tight text-ink leading-snug">{p.title}</h2>
                  </div>
                </div>
                <span className="font-heading font-bold text-5xl text-foreground/[0.04] select-none hidden sm:block tabular-nums">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Tags */}
              <div className="mb-8 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-background border border-line px-2.5 py-1 text-xs font-medium text-ink-soft"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="space-y-8">
                {/* Challenge */}
                <div>
                  <h3 className="mb-3 text-xs font-semibold tracking-widest text-ink-faint uppercase">
                    The Challenge
                  </h3>
                  <p className="leading-7 text-ink-soft">{p.challenge}</p>
                </div>

                {/* Approach */}
                <div>
                  <h3 className="mb-3 text-xs font-semibold tracking-widest text-ink-faint uppercase">
                    My Approach
                  </h3>
                  <ul className="space-y-3">
                    {p.approach.map((step, i) => (
                      <li key={i} className="flex gap-3 leading-6 text-ink-soft">
                        <span className="mt-0.5 shrink-0 font-heading font-bold text-accent text-sm">
                          {i + 1}.
                        </span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcomes */}
                <div>
                  <h3 className="mb-4 text-xs font-semibold tracking-widest text-ink-faint uppercase">
                    Outcomes
                  </h3>
                  <dl className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {p.outcomes.map((o) => (
                      <div key={o.label} className="rounded-xl bg-ink p-5">
                        <dt className="font-heading font-bold text-3xl text-white tracking-tight">
                          {o.stat}
                        </dt>
                        <dd className="mt-1.5 text-sm text-white/50 leading-5">{o.label}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Tools */}
                <div>
                  <h3 className="mb-3 text-xs font-semibold tracking-widest text-ink-faint uppercase">
                    Tools & Methods
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {p.tools.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-ink-soft"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional highlights */}
        <div className="mt-24 border-t border-line pt-16">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-semibold tracking-widest uppercase text-ink-faint">Also Shipped</span>
            <h2 className="mt-3 font-heading font-bold text-2xl tracking-tight text-ink">Additional Highlights</h2>
            <p className="mt-3 text-ink-soft leading-7">
              Smaller-scope initiatives delivered alongside the platforms above.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-px bg-line sm:grid-cols-3 border border-line rounded-2xl overflow-hidden">
            {highlights.map((h) => (
              <div key={h.id} className="bg-paper p-7 hover:bg-accent-soft transition-colors duration-200">
                <div className="mb-4 h-0.5 w-10 bg-accent" />
                <h3 className="font-heading font-semibold text-ink">{h.title}</h3>
                <p className="mt-2 text-sm text-ink-soft leading-6">{h.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {h.tools.map((t) => (
                    <span key={t} className="rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-ink-soft">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
