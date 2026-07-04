import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PM Artifacts | Breanna Burns",
  description: "Frameworks, templates, and tools Breanna Burns builds and reaches for across fintech product work.",
};

type Category = "Discovery" | "Analysis" | "Planning" | "Compliance" | "Communication" | "AI Agents";

interface Artifact {
  category: Category;
  title: string;
  description: string;
  usedIn: string[];
}

const artifacts: Artifact[] = [
  // Discovery
  {
    category: "Discovery",
    title: "Onboarding Drop-off Interview Guide",
    description:
      "Structured merchant interview framework to pinpoint where and why applicants abandon mid-flow — separating UX friction from trust or eligibility blockers.",
    usedIn: ["Direct Merchant Application"],
  },
  {
    category: "Discovery",
    title: "Journey Map Canvas",
    description:
      "End-to-end experience map from first touchpoint through funded state, with lanes for actions, emotions, questions, and system dependencies at each step.",
    usedIn: ["Direct Merchant Application", "Broker Portal"],
  },
  {
    category: "Discovery",
    title: "Stakeholder Kickoff Brief",
    description:
      "Pre-sprint alignment doc covering problem statement, scope boundaries, decision owners, and open questions — keeps Engineering, Compliance, and Ops on the same page before work starts.",
    usedIn: ["AIDoc Rollout", "Credentialing Process", "AE Workstation"],
  },
  {
    category: "Discovery",
    title: "Competitor Onboarding Audit",
    description:
      "Side-by-side teardown of competitor application flows: step count, required fields, verification methods, and friction points — used to inform sequencing decisions.",
    usedIn: ["Direct Merchant Application", "Broker Portal"],
  },

  // Analysis
  {
    category: "Analysis",
    title: "Funnel Drop-off Scorecard",
    description:
      "Ranks each funnel step by drop-off volume × completion impact. Cuts through opinion by making the highest-leverage fixes obvious before sprint planning.",
    usedIn: ["Direct Merchant Application"],
  },
  {
    category: "Analysis",
    title: "FullStory Session Review Checklist",
    description:
      "Structured protocol for replaying sessions: what to look for, how to tag friction patterns, and how to convert replay findings into actionable tickets.",
    usedIn: ["Direct Merchant Application", "Broker Portal"],
  },
  {
    category: "Analysis",
    title: "KPI Definition Framework",
    description:
      "Maps each feature to leading indicators (submission rate, step completion) and lagging indicators (approval rate, time-to-fund) — defined before launch, not after.",
    usedIn: ["Direct Merchant Application", "Broker Portal", "AE Workstation"],
  },
  {
    category: "Analysis",
    title: "Exception & Error Rate Tracker",
    description:
      "Log format and triage process for surfacing validation failures, integration timeouts, and parsing errors — separates noise from patterns worth engineering time.",
    usedIn: ["AE Workstation", "Direct Merchant Application"],
  },

  // Planning
  {
    category: "Planning",
    title: "Integration Spec Template",
    description:
      "API contract doc covering endpoint behavior, required fields, edge cases, failure modes, and rollback plan — written before engineering starts, not during.",
    usedIn: ["Direct Merchant Application", "Broker Portal"],
  },
  {
    category: "Planning",
    title: "PRD Structure",
    description:
      "One-page format: problem, affected personas, proposed solution, out-of-scope, open questions, and measurable success criteria. Opinionated enough to force decisions early.",
    usedIn: ["Direct Merchant Application", "Broker Portal", "AE Workstation"],
  },
  {
    category: "Planning",
    title: "Acceptance Criteria Checklist",
    description:
      "Step-by-step gate for engineering handoff: each requirement mapped to a testable behavior, edge case coverage, and a Compliance sign-off field where applicable.",
    usedIn: ["Direct Merchant Application", "Broker Portal", "AIDoc Rollout"],
  },
  {
    category: "Planning",
    title: "Phased Launch Plan",
    description:
      "Staged rollout template with go/no-go criteria, rollback triggers, internal comms cadence, and hypercare checklist for the first 30 days post-launch.",
    usedIn: ["Direct Merchant Application", "AIDoc Rollout"],
  },

  // Compliance
  {
    category: "Compliance",
    title: "State Disclosure Review Checklist",
    description:
      "CA and NY regulatory requirements mapped to specific feature behaviors — covers disclosure timing, consent language, and documentation audit trail.",
    usedIn: ["Broker Portal"],
  },
  {
    category: "Compliance",
    title: "Launch Readiness Gate",
    description:
      "Cross-functional sign-off matrix: Engineering, Legal, Compliance, Ops, and Support each confirm their lane is clear before a feature goes live.",
    usedIn: ["Direct Merchant Application", "Broker Portal", "AIDoc Rollout"],
  },
  {
    category: "Compliance",
    title: "PII & Data Handling Map",
    description:
      "Documents every PII field collected, its purpose, consent mechanism, retention period, and access controls — built for regulated environments where audit trails matter.",
    usedIn: ["Direct Merchant Application", "Credentialing Process"],
  },

  // AI Agents
  {
    category: "AI Agents",
    title: "Customer Feedback Synthesis Agent",
    description:
      "Aggregates feedback from support tickets, user interviews, and NPS data, then synthesizes patterns, sentiment, and feature requests into a structured PM brief — cutting hours of manual analysis into minutes.",
    usedIn: ["Direct Merchant Application", "Broker Portal"],
  },
  {
    category: "AI Agents",
    title: "PRD and Documentation Generator",
    description:
      "Takes a feature brief or problem statement and produces a structured PRD draft — problem framing, user stories, acceptance criteria, and open questions — as a first-pass for PM refinement rather than blank-page authoring.",
    usedIn: ["Direct Merchant Application", "AE Workstation", "Broker Portal"],
  },
  {
    category: "AI Agents",
    title: "Sprint Planning and Prioritization Agent",
    description:
      "Scores the backlog by impact, effort, and strategic alignment, then outputs a recommended sprint plan with rationale for each inclusion and deferral — making tradeoffs explicit before planning meetings.",
    usedIn: ["Direct Merchant Application", "Broker Portal"],
  },
  {
    category: "AI Agents",
    title: "Development Agent Pipeline",
    description:
      "Multi-agent system covering intake, architecture planning, UI/UX review, implementation, and code review — each agent specialized for its lane. Built to compress the ideation-to-shipped cycle on real product work.",
    usedIn: ["PM Portfolio (this site)"],
  },
  {
    category: "AI Agents",
    title: "SDR Agent",
    description:
      "Autonomous outbound agent for lead research, personalized outreach drafting, and follow-up sequencing — built to reduce manual prospecting time and keep reps focused on qualified conversations.",
    usedIn: ["In Progress"],
  },

  // Communication
  {
    category: "Communication",
    title: "AE Handoff Brief",
    description:
      "Structured context doc for Account Executives picking up a new application or workflow — covers what the product does, what the AE owns, and where to escalate edge cases.",
    usedIn: ["AE Workstation"],
  },
  {
    category: "Communication",
    title: "Stakeholder Status Update",
    description:
      "Biweekly format for non-technical stakeholders: what shipped, what's in flight, blockers, and one metric moving in the right direction.",
    usedIn: ["Direct Merchant Application", "AIDoc Rollout", "Credentialing Process"],
  },
  {
    category: "Communication",
    title: "Vendor Escalation Framework",
    description:
      "Decision tree for integration issues: when to self-resolve, when to escalate to vendor support, and when to trigger engineering or leadership involvement.",
    usedIn: ["Direct Merchant Application", "Broker Portal"],
  },
];

const categoryMeta: Record<Category, { color: string; bg: string; border: string }> = {
  "AI Agents":   { color: "text-indigo-700", bg: "bg-indigo-50",  border: "border-indigo-200" },
  Discovery:     { color: "text-violet-700", bg: "bg-violet-50",  border: "border-violet-200" },
  Analysis:      { color: "text-blue-700",   bg: "bg-blue-50",    border: "border-blue-200"   },
  Planning:      { color: "text-emerald-700",bg: "bg-emerald-50", border: "border-emerald-200"},
  Compliance:    { color: "text-amber-700",  bg: "bg-amber-50",   border: "border-amber-200"  },
  Communication: { color: "text-rose-700",   bg: "bg-rose-50",    border: "border-rose-200"   },
};

const categories: Category[] = ["AI Agents", "Discovery", "Analysis", "Planning", "Compliance", "Communication"];

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

      {/* Legend */}
      <div className="mx-auto max-w-6xl px-6 lg:px-8 pb-10">
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => {
            const meta = categoryMeta[cat];
            return (
              <span
                key={cat}
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${meta.color} ${meta.bg} ${meta.border}`}
              >
                {cat}
              </span>
            );
          })}
        </div>
      </div>

      {/* Artifact grid */}
      <div className="mx-auto max-w-6xl px-6 lg:px-8 pb-28">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {artifacts.map((artifact) => {
            const meta = categoryMeta[artifact.category];
            return (
              <div
                key={artifact.title}
                className="group flex flex-col rounded-xl border border-line bg-paper p-6 hover:border-accent/30 hover:shadow-sm transition-all duration-200"
              >
                {/* Category tag */}
                <span
                  className={`self-start inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold tracking-wide ${meta.color} ${meta.bg} ${meta.border}`}
                >
                  {artifact.category}
                </span>

                {/* Title */}
                <h3 className="mt-4 font-heading font-semibold text-ink leading-snug">
                  {artifact.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-ink-soft leading-6 flex-grow">
                  {artifact.description}
                </p>

                {/* Used in */}
                <div className="mt-5 pt-4 border-t border-line">
                  <p className="text-[11px] font-semibold tracking-widest uppercase text-ink-faint mb-2">
                    Used in
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {artifact.usedIn.map((project) => (
                      <span
                        key={project}
                        className={`rounded-md px-2 py-0.5 text-[11px] font-medium ${
                          project === "In Progress"
                            ? "bg-amber-50 text-amber-700 border border-amber-200"
                            : "bg-muted text-ink-soft"
                        }`}
                      >
                        {project === "In Progress" ? "⚙ In Progress" : project}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
