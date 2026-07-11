import type { Metadata } from "next";
import PrintButton from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "Resume | Breanna Burns",
  description: "Breanna Burns — Product Manager with 10+ years across healthcare and fintech.",
};

const experience = [
  {
    role: "Product Manager",
    company: "IOU Financial",
    location: "Remote",
    period: "02/2022 – Present",
    bullets: [
      "Owned end-to-end delivery of the Direct Merchant Application, live since March 2026 with 8,000+ applications processed and average time-to-submit under 2 minutes.",
      "Built the AE Workstation using AI document parsing and validation rules, reducing manual review effort by 40%.",
      "Architected integrations across Plaid, Lendflow, Salesforce, and Experian for automated credit decisioning and fraud validation; migrated credit-pull infrastructure with zero downtime.",
      "Built the Broker Portal from the ground up, serving 1,000+ brokers with multi-state compliance (CA and NY disclosures) and conflicting-application detection.",
      "Designed and deployed a six-agent AI pipeline using MCP integrations that ships full-stack builds from plain-English specs.",
    ],
  },
  {
    role: "Senior Business Analyst",
    company: "Quantum Health",
    location: "Columbus, OH",
    period: "03/2021 – 02/2022",
    bullets: [
      "Improved delivery efficiency by 28% through backlog prioritization and workflow redesign in a healthcare navigation setting.",
    ],
  },
  {
    role: "Senior Business Analyst",
    company: "Radiology Partners",
    location: "Columbus, OH",
    period: "11/2018 – 03/2021",
    bullets: [
      "Led AIDoc from proof of concept to nationwide adoption; coordinated PACS, EHR, and speech-recognition integrations across clinical and technical teams.",
    ],
  },
  {
    role: "Business Analyst / Project Coordinator / Contract Coordinator",
    company: "Buckeye Health Plan",
    location: "Columbus, OH",
    period: "11/2015 – 11/2018",
    bullets: [
      "Reduced provider credentialing turnaround by 70% through process redesign; led cross-department compliance initiatives that reduced claims denials.",
    ],
  },
  {
    role: "Registration Specialist",
    company: "OhioHealth",
    location: "Columbus, OH",
    period: "06/2011 – 11/2015",
    bullets: [
      "Subject matter expert during Epic EMR rollout, supporting intake workflows across outpatient, imaging, emergency, inpatient, and physician-practice settings.",
    ],
  },
];

const certs = [
  { name: "AI Agent Developer", org: "Google", year: "2026" },
  { name: "Certified Product Owner (CSPO)", org: "Scrum Alliance", year: "2024" },
  { name: "Certified SAFe Scrum Master (SAFe SM)", org: "Scaled Agile, Inc.", year: "2020" },
  { name: "Certified Scrum Master (CSM)", org: "Agile Scrum Alliance", year: "2018" },
];

const skills = [
  "Onboarding & Activation Funnels",
  "Funnel Analysis & Conversion Optimization",
  "Journey Mapping",
  "PRDs, User Stories & AC",
  "A/B Testing & Experimentation",
  "Workflow Automation & Internal Tooling",
  "AI & Agentic Automation (Claude, MCP)",
  "Vendor & API Integrations (Plaid, Lendflow, Salesforce, Experian)",
  "Regulatory Compliance & Multi-State Disclosures",
  "FullStory Session Analysis",
  "Atlassian Products",
  "SQL (working knowledge)",
];

export default function Resume() {
  return (
    <div className="min-h-screen bg-muted py-8 flex flex-col items-center print:bg-white print:p-0 print:block print:min-h-0">

      {/* Action bar — hidden in print */}
      <div className="w-full max-w-[8.5in] mb-4 flex items-center justify-between px-1 print:hidden">
        <a href="/about" className="text-sm text-ink-soft hover:text-ink transition-colors">
          ← My Background
        </a>
        <PrintButton />
      </div>

      {/* Resume sheet — letter size on screen, full page in print */}
      <div
        id="resume-sheet"
        className="w-full max-w-[8.5in] bg-white shadow-[0_4px_40px_rgba(0,0,0,0.12)] print:shadow-none print:max-w-none"
        style={{ padding: "0.55in 0.65in", minHeight: "11in" }}
      >
        {/* Header */}
        <div className="flex items-baseline justify-between pb-2.5 mb-3 border-b-2 border-ink">
          <h1
            className="font-heading font-bold tracking-tight text-ink"
            style={{ fontSize: "19px" }}
          >
            Breanna Burns
          </h1>
          <p className="text-ink-soft" style={{ fontSize: "9.5px" }}>
            burns.655@icloud.com · 614-736-1701 · Columbus, OH · linkedin.com/in/breanna-burns · bburns.vercel.app
          </p>
        </div>

        {/* Summary */}
        <Section title="Summary">
          <p className="text-ink-soft leading-[1.45]" style={{ fontSize: "10.5px" }}>
            Product Manager with 10+ years across healthcare and fintech, building regulated,
            high-trust platforms where getting it wrong has real consequences. I own products
            end to end: discovery, PRDs, funnel analysis, FullStory session replay,
            cross-functional delivery with Engineering, Design, Ops, and Compliance, and
            AI-driven automation. I also build hands-on, including a self-designed multi-agent
            AI pipeline using MCP integrations.
          </p>
        </Section>

        {/* Skills */}
        <Section title="Skills">
          <p className="text-ink-soft leading-[1.5]" style={{ fontSize: "10.5px" }}>
            {skills.join("  ·  ")}
          </p>
        </Section>

        {/* Experience */}
        <Section title="Experience">
          <div style={{ marginTop: "2px" }}>
            {experience.map((job, idx) => (
              <div
                key={job.company}
                style={{ marginBottom: idx < experience.length - 1 ? "9px" : 0 }}
              >
                <div className="flex items-baseline justify-between" style={{ marginBottom: "2px" }}>
                  <div className="flex items-baseline gap-1.5 flex-wrap">
                    <span className="font-semibold text-ink" style={{ fontSize: "11px" }}>
                      {job.role}
                    </span>
                    <span className="text-ink-soft" style={{ fontSize: "10px" }}>
                      · {job.company}, {job.location}
                    </span>
                  </div>
                  <span className="text-ink-faint whitespace-nowrap" style={{ fontSize: "9.5px" }}>
                    {job.period}
                  </span>
                </div>
                <ul style={{ paddingLeft: "2px" }}>
                  {job.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-ink-soft leading-[1.45]"
                      style={{ fontSize: "10.5px", marginBottom: i < job.bullets.length - 1 ? "1px" : 0 }}
                    >
                      <span className="text-accent shrink-0 mt-px">·</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Selected Technical Work */}
        <Section title="Selected Technical Work">
          <li
            className="flex gap-2 text-ink-soft leading-[1.45] list-none"
            style={{ fontSize: "10.5px", paddingLeft: "2px" }}
          >
            <span className="text-accent shrink-0 mt-px">·</span>
            Designed and deployed a six-agent Claude Code pipeline (intake, planning, build,
            review, deploy, UI/UX QA) using MCP integrations; ships full-stack React builds
            from plain-English specs and deploys to Vercel.
          </li>
        </Section>

        {/* Certifications + Education */}
        <div className="grid grid-cols-2 gap-8" style={{ marginTop: "2px" }}>
          <Section title="Certifications">
            <ul style={{ marginTop: "2px" }}>
              {certs.map((c) => (
                <li
                  key={c.name}
                  className="text-ink-soft leading-[1.5]"
                  style={{ fontSize: "10.5px" }}
                >
                  <span className="text-ink font-medium">{c.name}</span>
                  {" "}· {c.org} · {c.year}
                </li>
              ))}
            </ul>
          </Section>
          <Section title="Education">
            <p className="text-ink-soft leading-[1.5]" style={{ fontSize: "10.5px", marginTop: "2px" }}>
              <span className="text-ink font-medium">The Ohio State University</span> · Columbus, OH
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <h2
        className="font-bold tracking-widest uppercase text-accent"
        style={{ fontSize: "8px", marginBottom: "4px" }}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}
