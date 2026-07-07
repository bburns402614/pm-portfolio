"use client";

import { useState, useEffect } from "react";
import Reveal from "@/components/Reveal";

type Category = "AI Agents" | "Discovery" | "Analysis" | "Planning" | "Compliance" | "Communication";

type PreviewBlock =
  | { type: "section"; heading: string; body: string }
  | { type: "checklist"; items: { text: string; done?: boolean }[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "fields"; items: { label: string; value: string }[] }
  | { type: "bullets"; heading?: string; items: string[] }
  | { type: "divider" };

interface Artifact {
  category: Category;
  title: string;
  description: string;
  usedIn: string[];
  preview: PreviewBlock[];
}

const artifacts: Artifact[] = [
  // AI Agents
  {
    category: "AI Agents",
    title: "Customer Feedback Synthesis Agent",
    description:
      "Aggregates feedback from support tickets, user interviews, and NPS data, then synthesizes patterns, sentiment, and feature requests into a structured PM brief — cutting hours of manual analysis into minutes.",
    usedIn: ["Direct Merchant Application", "Broker Portal"],
    preview: [
      { type: "fields", items: [
        { label: "Period", value: "May 1 – May 31" },
        { label: "Sources", value: "143 items: support tickets, NPS responses, user interviews" },
        { label: "Model", value: "claude-opus-4-7 via Anthropic SDK" },
      ]},
      { type: "table", headers: ["Theme", "Volume", "Sentiment", "Priority"], rows: [
        ["OTP verification delays", "38", "Negative", "High"],
        ["Revenue verification confusion", "27", "Negative", "High"],
        ["Document upload UX", "19", "Mixed", "Medium"],
        ["Status update visibility", "14", "Negative", "Medium"],
        ["Approval speed praise", "11", "Positive", "Low"],
      ]},
      { type: "bullets", heading: "Top Feature Requests", items: [
        "Real-time application status tracking (mentioned 22x)",
        "Re-upload without restarting the flow (mentioned 17x)",
        "Clearer error messages on declined documents (mentioned 12x)",
      ]},
      { type: "section", heading: "Recommended PM Actions", body: "1. Prioritize OTP reliability fix in next sprint. 2. Add contextual help copy at revenue verification before the user reaches the upload field. 3. Investigate status email cadence — users report receiving no updates post-submission." },
    ],
  },
  {
    category: "AI Agents",
    title: "PRD and Documentation Generator",
    description:
      "Takes a feature brief or problem statement and produces a structured PRD draft — problem framing, user stories, acceptance criteria, and open questions — as a first-pass for PM refinement rather than blank-page authoring.",
    usedIn: ["Direct Merchant Application", "AE Workstation", "Broker Portal"],
    preview: [
      { type: "fields", items: [
        { label: "Feature", value: "Application Status Notifications" },
        { label: "Author", value: "B. Burns (AI-assisted first draft)" },
        { label: "Status", value: "Draft — awaiting PM review" },
        { label: "Target sprint", value: "Sprint 34" },
      ]},
      { type: "section", heading: "Problem", body: "Merchants submit applications and receive no status updates until manually contacted by an AE. This creates unnecessary inbound support volume and erodes trust during the underwriting window." },
      { type: "bullets", heading: "Affected Personas", items: [
        "Merchant (primary): needs progress visibility without calling support",
        "AE (secondary): spends ~2hrs/day answering status-update calls",
      ]},
      { type: "checklist", items: [
        { text: "User stories written", done: true },
        { text: "Acceptance criteria defined", done: true },
        { text: "Open questions resolved", done: false },
        { text: "Engineering estimate", done: false },
        { text: "Compliance sign-off on email copy", done: false },
      ]},
    ],
  },
  {
    category: "AI Agents",
    title: "Sprint Planning and Prioritization Agent",
    description:
      "Scores the backlog by impact, effort, and strategic alignment, then outputs a recommended sprint plan with rationale for each inclusion and deferral — making tradeoffs explicit before planning meetings.",
    usedIn: ["Direct Merchant Application", "Broker Portal"],
    preview: [
      { type: "table", headers: ["Ticket", "Impact", "Effort", "Alignment", "Score", "Rec."], rows: [
        ["OTP reliability fix", "9", "3", "High", "27", "Include"],
        ["Status email trigger", "8", "4", "High", "22", "Include"],
        ["Re-upload flow", "7", "5", "Medium", "18", "Include"],
        ["Error copy update", "6", "2", "Medium", "16", "Include"],
        ["Dashboard redesign", "5", "8", "Low", "8", "Defer"],
        ["New broker filter view", "4", "3", "Low", "6", "Defer"],
      ]},
      { type: "section", heading: "Sprint Rationale", body: "Top 4 items address the OTP and status-visibility themes from May feedback synthesis. Dashboard redesign deferred — high effort, no active user request driving it this cycle. Broker filter view deferred — stakeholder not available for review until Sprint 35." },
    ],
  },
  {
    category: "AI Agents",
    title: "Development Agent Pipeline",
    description:
      "Multi-agent system covering intake, architecture planning, UI/UX review, implementation, and code review — each agent specialized for its lane. Built to compress the ideation-to-shipped cycle on real product work.",
    usedIn: ["PM Portfolio (this site)"],
    preview: [
      { type: "table", headers: ["Agent", "Role", "Input", "Output"], rows: [
        ["Intake", "Classify & spec the request", "User request", "Structured spec"],
        ["Planner", "Architecture & task ordering", "Spec", "Ordered task list"],
        ["UI/UX", "Design specs & component plan", "Task list", "Design handoff"],
        ["Coder", "Implementation", "Design + plan", "Working code"],
        ["Reviewer", "QA, edge cases, security", "Code diff", "PASS or fix list"],
        ["Deploy", "Commit, push, deploy", "PASS verdict", "Production release"],
      ]},
      { type: "section", heading: "Loop Behavior", body: "If Reviewer returns FIXES REQUIRED, the fix list passes back to Coder. Loop repeats until PASS or 3 iterations, at which point the issue escalates to the user. Parallel execution is flagged explicitly when planner identifies independent subtasks." },
    ],
  },
  {
    category: "AI Agents",
    title: "SDR Agent",
    description:
      "Autonomous outbound agent for lead research, personalized outreach drafting, and follow-up sequencing — built to reduce manual prospecting time and keep reps focused on qualified conversations.",
    usedIn: ["In Progress"],
    preview: [
      { type: "fields", items: [
        { label: "Status", value: "In progress — architecture phase" },
        { label: "Goal", value: "Reduce manual prospecting time by 60%" },
        { label: "Stack", value: "Anthropic SDK, web scraping, email API" },
      ]},
      { type: "bullets", heading: "Planned Agent Steps", items: [
        "Step 1 — Lead intake: receive ICP criteria and prospect list",
        "Step 2 — Research: pull LinkedIn, company site, recent news per lead",
        "Step 3 — Personalization: draft opening line tied to a specific signal",
        "Step 4 — Sequence: schedule follow-up touches with variant logic",
        "Step 5 — Handoff: flag warm signals for rep review queue",
      ]},
    ],
  },

  // Discovery
  {
    category: "Discovery",
    title: "Onboarding Drop-off Interview Guide",
    description:
      "Structured merchant interview framework to pinpoint where and why applicants abandon mid-flow — separating UX friction from trust or eligibility blockers.",
    usedIn: ["Direct Merchant Application"],
    preview: [
      { type: "fields", items: [
        { label: "Session length", value: "30 min" },
        { label: "Target participant", value: "Merchant who abandoned at step 3 or later" },
        { label: "Interviewer note", value: "Do not mention specific drop-off data — let them narrate first" },
      ]},
      { type: "checklist", items: [
        { text: "Intro: explain purpose, confirm recording consent", done: true },
        { text: "Warm-up: tell me about your business and why you applied", done: true },
        { text: "Recall: walk me through the application — where did you start?", done: false },
        { text: "Friction probe: was there a point where you hesitated or stopped?", done: false },
        { text: "Cause probe: what would have made you continue?", done: false },
        { text: "Close: anything else about the process you'd want to change?", done: false },
      ]},
      { type: "bullets", heading: "What to Listen For", items: [
        "Trust signals — did they feel the form was legitimate?",
        "Effort signals — was any step unexpectedly hard or time-consuming?",
        "Information gaps — did they not have what was required at that moment?",
      ]},
    ],
  },
  {
    category: "Discovery",
    title: "Journey Map Canvas",
    description:
      "End-to-end experience map from first touchpoint through funded state, with lanes for actions, emotions, questions, and system dependencies at each step.",
    usedIn: ["Direct Merchant Application", "Broker Portal"],
    preview: [
      { type: "table", headers: ["Stage", "Actions", "Emotion", "Questions", "System"], rows: [
        ["Awareness", "Clicks ad / referral link", "Hopeful", "Is this company legit?", "Marketing site"],
        ["Application", "Fills form, uploads docs", "Anxious", "How long will this take?", "App portal"],
        ["Verification", "Waits for review", "Uncertain", "Did my application go through?", "Underwriting"],
        ["Decision", "Receives approval or decline", "Relieved / Frustrated", "What happens next?", "Email + AE call"],
        ["Funded", "Receives funds in account", "Satisfied", "When can I reapply?", "Core banking"],
      ]},
    ],
  },
  {
    category: "Discovery",
    title: "Stakeholder Kickoff Brief",
    description:
      "Pre-sprint alignment doc covering problem statement, scope boundaries, decision owners, and open questions — keeps Engineering, Compliance, and Ops on the same page before work starts.",
    usedIn: ["AIDoc Rollout", "Credentialing Process", "AE Workstation"],
    preview: [
      { type: "fields", items: [
        { label: "Initiative", value: "AIDoc Integration — Automated Document Parsing" },
        { label: "Problem", value: "Ops manually reviews 200+ documents/day. Error rate ~8%, avg handle time 12 min/doc." },
        { label: "Out of scope", value: "Re-training the model; changes to underwriting rules; mobile flow" },
        { label: "Decision owner", value: "B. Burns (PM), with sign-off from Ops and Compliance" },
        { label: "Target launch", value: "Q3 2023 — pilot at 20% of inbound volume" },
      ]},
      { type: "bullets", heading: "Open Questions", items: [
        "What is the acceptable false-positive rate before manual review triggers?",
        "Who owns the exceptions queue post-launch — Ops or Engineering?",
        "Does Legal need to review the vendor data processing agreement before pilot?",
      ]},
    ],
  },
  {
    category: "Discovery",
    title: "Competitor Onboarding Audit",
    description:
      "Side-by-side teardown of competitor application flows: step count, required fields, verification methods, and friction points — used to inform sequencing decisions.",
    usedIn: ["Direct Merchant Application", "Broker Portal"],
    preview: [
      { type: "table", headers: ["Competitor", "Steps", "Verification", "Est. time", "Notable pattern"], rows: [
        ["Kabbage", "5", "Bank link (Plaid)", "~8 min", "No doc upload required"],
        ["Fundbox", "4", "Bank link only", "~5 min", "Decision in 3 min"],
        ["BlueVine", "6", "Bank + tax docs", "~12 min", "Progress bar, saves state"],
        ["PayPal WC", "3", "Account-linked", "~2 min", "Pre-filled from existing data"],
        ["IOU (us)", "9", "Bank + docs + OTP", "~18 min", "Highest friction, most data"],
      ]},
      { type: "section", heading: "Key Insight", body: "Competitors using bank-link-only (Plaid) eliminate 4–6 form steps and 60%+ of the document upload friction. Our manual revenue doc requirement is the primary differentiator — and the primary drop-off driver at step 3." },
    ],
  },

  // Analysis
  {
    category: "Analysis",
    title: "Funnel Drop-off Scorecard",
    description:
      "Ranks each funnel step by drop-off volume × completion impact. Cuts through opinion by making the highest-leverage fixes obvious before sprint planning.",
    usedIn: ["Direct Merchant Application"],
    preview: [
      { type: "table", headers: ["Step", "Entry", "Exits", "Drop %", "Impact Score"], rows: [
        ["1. Business info", "1,240", "87", "7%", "4"],
        ["2. Owner info", "1,153", "102", "9%", "6"],
        ["3. Revenue verification", "1,051", "318", "30%", "28"],
        ["4. OTP verification", "733", "196", "27%", "22"],
        ["5. Document upload", "537", "147", "27%", "18"],
        ["6. Review & submit", "390", "44", "11%", "9"],
      ]},
      { type: "section", heading: "Highest-Leverage Fix", body: "Revenue verification (step 3) accounts for 30% drop-off — more than steps 4 and 5 combined. Recommend: add contextual help modal explaining what counts as valid revenue proof before the user encounters the upload field." },
    ],
  },
  {
    category: "Analysis",
    title: "FullStory Session Review Checklist",
    description:
      "Structured protocol for replaying sessions: what to look for, how to tag friction patterns, and how to convert replay findings into actionable tickets.",
    usedIn: ["Direct Merchant Application", "Broker Portal"],
    preview: [
      { type: "checklist", items: [
        { text: "Filter sessions: Step 3 entry + exit without submit", done: true },
        { text: "Watch for rage-clicks on the upload button", done: true },
        { text: "Note idle time on revenue amount input field", done: true },
        { text: "Tag sessions where user opened help text", done: false },
        { text: "Tag sessions where user navigated back mid-flow", done: false },
        { text: "Cluster findings: UX friction / missing info / trust blockers", done: false },
        { text: "Convert top 3 patterns into Jira tickets with session links", done: false },
      ]},
      { type: "bullets", heading: "Common Patterns to Watch", items: [
        "Idle for 60+ seconds — user is confused or left to find missing info",
        "Back navigation at a specific step — order or field labeling may be off",
        "Repeated field edits — validation messaging is unclear or delayed",
      ]},
    ],
  },
  {
    category: "Analysis",
    title: "KPI Definition Framework",
    description:
      "Maps each feature to leading indicators (submission rate, step completion) and lagging indicators (approval rate, time-to-fund) — defined before launch, not after.",
    usedIn: ["Direct Merchant Application", "Broker Portal", "AE Workstation"],
    preview: [
      { type: "table", headers: ["Feature", "Leading Indicator", "Lagging Indicator", "Owner", "Cadence"], rows: [
        ["OTP fix", "OTP success rate", "Step 4 completion rate", "PM + Eng", "Weekly"],
        ["Status emails", "Email open rate", "Support ticket volume", "PM + Ops", "Bi-weekly"],
        ["Re-upload flow", "Re-upload attempt rate", "Doc approval rate", "PM", "Weekly"],
        ["Revenue help modal", "Modal open rate", "Step 3 drop-off %", "PM + Design", "Weekly"],
      ]},
      { type: "section", heading: "Framework Rule", body: "Every feature must have at least one leading indicator defined before engineering starts. Lagging indicators confirm the hypothesis; leading indicators tell you in the first week if the bet is directionally right." },
    ],
  },
  {
    category: "Analysis",
    title: "Exception & Error Rate Tracker",
    description:
      "Log format and triage process for surfacing validation failures, integration timeouts, and parsing errors — separates noise from patterns worth engineering time.",
    usedIn: ["AE Workstation", "Direct Merchant Application"],
    preview: [
      { type: "table", headers: ["Error Type", "Count (7d)", "Trend", "Source", "Status"], rows: [
        ["Heron parse failure", "23", "Up 40%", "Document upload", "Engineering — P1"],
        ["Plaid timeout", "11", "Stable", "Revenue verification", "Vendor ticket open"],
        ["OTP send failure", "8", "Down 20%", "Phone verification", "Monitoring"],
        ["Experian match error", "4", "New", "Owner verification", "Triaging"],
      ]},
      { type: "section", heading: "Triage Rule", body: "Any error type trending +25% WoW or appearing for the first time gets a P1 ticket within 24 hours. Stable errors below 10/week stay in the monitoring queue and are reviewed bi-weekly." },
    ],
  },

  // Planning
  {
    category: "Planning",
    title: "Integration Spec Template",
    description:
      "API contract doc covering endpoint behavior, required fields, edge cases, failure modes, and rollback plan — written before engineering starts, not during.",
    usedIn: ["Direct Merchant Application", "Broker Portal"],
    preview: [
      { type: "fields", items: [
        { label: "Integration", value: "Heron Data — Document Parsing API" },
        { label: "Endpoint", value: "POST /v1/documents/parse" },
        { label: "Auth", value: "Bearer token — env var only, never client-side" },
        { label: "Trigger", value: "On document upload completion" },
        { label: "Timeout", value: "30s — fallback to manual review queue" },
      ]},
      { type: "table", headers: ["Field", "Required", "Type", "Notes"], rows: [
        ["file_url", "Yes", "string", "Pre-signed S3 URL, 5 min TTL"],
        ["document_type", "Yes", "enum", "bank_statement | tax_return | voided_check"],
        ["merchant_id", "Yes", "uuid", "Internal ID for audit trail"],
        ["callback_url", "No", "string", "Webhook for async parse result"],
      ]},
      { type: "bullets", heading: "Failure Modes", items: [
        "Timeout: flag record as pending_manual_review, notify Ops queue",
        "Parse confidence < 0.7: auto-request re-upload with specific doc guidance",
        "API down: queue for retry with 5-min backoff, max 3 attempts then Ops alert",
      ]},
    ],
  },
  {
    category: "Planning",
    title: "PRD Structure",
    description:
      "One-page format: problem, affected personas, proposed solution, out-of-scope, open questions, and measurable success criteria. Opinionated enough to force decisions early.",
    usedIn: ["Direct Merchant Application", "Broker Portal", "AE Workstation"],
    preview: [
      { type: "fields", items: [
        { label: "Feature", value: "Revenue Verification Help Modal" },
        { label: "Problem", value: "30% exit at the revenue step — FullStory shows most idle 90+ seconds before leaving" },
        { label: "Solution", value: "Contextual help drawer: what counts as proof, acceptable file types, why we collect it" },
        { label: "Out of scope", value: "Changing the verification requirement; redesigning the upload component" },
        { label: "Success metric", value: "Step 3 drop-off rate below 18% within 30 days of launch" },
      ]},
      { type: "checklist", items: [
        { text: "User stories written", done: true },
        { text: "Acceptance criteria complete", done: true },
        { text: "Design mockup approved", done: true },
        { text: "Compliance reviewed copy", done: false },
        { text: "Engineering estimate received", done: false },
      ]},
    ],
  },
  {
    category: "Planning",
    title: "Acceptance Criteria Checklist",
    description:
      "Step-by-step gate for engineering handoff: each requirement mapped to a testable behavior, edge case coverage, and a Compliance sign-off field where applicable.",
    usedIn: ["Direct Merchant Application", "Broker Portal", "AIDoc Rollout"],
    preview: [
      { type: "section", heading: "Feature: Revenue Verification Help Modal", body: "Engineer signs off that all items below are testable and covered before PR is submitted for review." },
      { type: "checklist", items: [
        { text: "Help icon is visible on revenue verification screen at all viewport widths", done: true },
        { text: "Clicking the icon opens the modal without navigating away from the flow", done: true },
        { text: "Modal lists: acceptable doc types, max file size, why we collect this", done: true },
        { text: "Modal has an accessible close button and closes on Esc key", done: true },
        { text: "Modal is suppressed if the user already has a successfully uploaded document", done: false },
        { text: "Compliance-approved copy used verbatim — no paraphrasing", done: false },
        { text: "Modal open event tracked in analytics (event: help_modal_opened, step: revenue)", done: false },
      ]},
    ],
  },
  {
    category: "Planning",
    title: "Phased Launch Plan",
    description:
      "Staged rollout template with go/no-go criteria, rollback triggers, internal comms cadence, and hypercare checklist for the first 30 days post-launch.",
    usedIn: ["Direct Merchant Application", "AIDoc Rollout"],
    preview: [
      { type: "table", headers: ["Phase", "Audience", "Duration", "Go/No-Go Trigger"], rows: [
        ["Internal", "PM + Eng + QA only", "3 days", "No critical bugs in smoke test"],
        ["Soft launch", "10% of new applications", "7 days", "Drop-off rate no worse than baseline"],
        ["Broad rollout", "50% of applications", "14 days", "Step 3 completion rate improving"],
        ["Full launch", "100%", "Ongoing", "KPIs stable for 2 consecutive weeks"],
      ]},
      { type: "bullets", heading: "Rollback Triggers", items: [
        "Step 3 drop-off increases >5% vs baseline at any phase",
        "Unhandled JS error rate >0.5% in the modal component",
        "Compliance flags any copy before next phase start",
      ]},
      { type: "fields", items: [
        { label: "Hypercare", value: "30 days — PM reviews funnel metrics every Tuesday" },
        { label: "Internal comms", value: "Slack #product-updates on each phase transition" },
      ]},
    ],
  },

  // Compliance
  {
    category: "Compliance",
    title: "State Disclosure Review Checklist",
    description:
      "CA and NY regulatory requirements mapped to specific feature behaviors — covers disclosure timing, consent language, and documentation audit trail.",
    usedIn: ["Broker Portal"],
    preview: [
      { type: "table", headers: ["Requirement", "CA", "NY", "Feature Behavior", "Status"], rows: [
        ["APR disclosure before application", "Required", "Required", "Shown on step 1 of flow", "Compliant"],
        ["Right to rescind language", "Required", "Not required", "CA-conditional modal on submit", "Compliant"],
        ["Broker fee disclosure", "Required", "Required", "Pre-populated in broker portal", "Review needed"],
        ["Data retention notice", "Required", "Required", "Footer link only — not inline", "Non-compliant"],
        ["Consent to pull credit", "Required", "Required", "Checkbox, logged with timestamp", "Compliant"],
      ]},
      { type: "section", heading: "Priority Actions", body: "Data retention notice must surface inline at the point of data collection, not only in the footer. This is a CA and NY blocker. Ticket BBP-412 is open; target: next sprint." },
    ],
  },
  {
    category: "Compliance",
    title: "Launch Readiness Gate",
    description:
      "Cross-functional sign-off matrix: Engineering, Legal, Compliance, Ops, and Support each confirm their lane is clear before a feature goes live.",
    usedIn: ["Direct Merchant Application", "Broker Portal", "AIDoc Rollout"],
    preview: [
      { type: "table", headers: ["Team", "Owner", "Requirement", "Status", "Date"], rows: [
        ["Engineering", "Tech Lead", "No critical open bugs", "Signed off", "Jun 10"],
        ["Legal", "GC", "Vendor DPA approved", "Signed off", "Jun 8"],
        ["Compliance", "CCO", "Disclosure copy approved", "Pending", "—"],
        ["Operations", "Ops Director", "Team trained on exceptions queue", "Pending", "—"],
        ["Support", "Support Lead", "FAQ updated, team briefed", "Signed off", "Jun 11"],
      ]},
      { type: "section", heading: "Launch Decision", body: "All lanes must be signed off before production deploy. Current blockers: Compliance copy review (expected Jun 13) and Ops training session (scheduled Jun 14). Target launch: Jun 17." },
    ],
  },
  {
    category: "Compliance",
    title: "PII & Data Handling Map",
    description:
      "Documents every PII field collected, its purpose, consent mechanism, retention period, and access controls — built for regulated environments where audit trails matter.",
    usedIn: ["Direct Merchant Application", "Credentialing Process"],
    preview: [
      { type: "table", headers: ["PII Field", "Purpose", "Consent", "Retention", "Access"], rows: [
        ["SSN", "Owner identity verification", "Explicit checkbox + timestamp", "7 years", "Underwriting only"],
        ["Bank statements", "Revenue verification", "Explicit checkbox", "7 years", "Underwriting + Ops"],
        ["Business EIN", "Entity verification", "Implied (application)", "7 years", "Underwriting"],
        ["Phone number", "OTP delivery", "Explicit at collection", "2 years", "Auth system only"],
        ["Email address", "Communications", "Explicit at registration", "Account lifetime", "CRM + Auth"],
      ]},
    ],
  },

  // Communication
  {
    category: "Communication",
    title: "AE Handoff Brief",
    description:
      "Structured context doc for Account Executives picking up a new application or workflow — covers what the product does, what the AE owns, and where to escalate edge cases.",
    usedIn: ["AE Workstation"],
    preview: [
      { type: "fields", items: [
        { label: "Application ID", value: "APP-20240612-8821" },
        { label: "Business", value: "Riverside Catering LLC" },
        { label: "Stage", value: "Pending revenue verification" },
        { label: "AE owner", value: "Jordan T." },
        { label: "Submitted", value: "June 12, 2024 — 2:14 PM" },
      ]},
      { type: "bullets", heading: "What the AE Owns", items: [
        "Follow up if no document upload within 48 hours",
        "Escalate to underwriting if documents fail parse twice",
        "Owner on all inbound calls about this application",
      ]},
      { type: "bullets", heading: "Escalation Path", items: [
        "Doc parse failure x2 → Ops exceptions queue",
        "Identity mismatch → Compliance + Legal",
        "Application stale 7 days → Close and trigger re-engage outreach",
      ]},
    ],
  },
  {
    category: "Communication",
    title: "Stakeholder Status Update",
    description:
      "Biweekly format for non-technical stakeholders: what shipped, what's in flight, blockers, and one metric moving in the right direction.",
    usedIn: ["Direct Merchant Application", "AIDoc Rollout", "Credentialing Process"],
    preview: [
      { type: "fields", items: [
        { label: "Period", value: "June 10–21, 2024" },
        { label: "Initiative", value: "Direct Merchant Application — Revenue Verification Sprint" },
      ]},
      { type: "bullets", heading: "Shipped", items: [
        "Revenue verification help modal — live June 14",
        "OTP retry logic fix — reduced OTP failures by 22%",
        "Heron parse error alert to Ops queue — live June 17",
      ]},
      { type: "bullets", heading: "In Flight", items: [
        "Status email trigger (ETA June 28)",
        "Re-upload flow redesign (ETA July 5)",
      ]},
      { type: "fields", items: [
        { label: "Metric moving right", value: "Step 3 drop-off: 30% → 24% week over week" },
        { label: "Blocker", value: "Compliance copy review for status email — escalated June 20" },
      ]},
    ],
  },
  {
    category: "Communication",
    title: "Vendor Escalation Framework",
    description:
      "Decision tree for integration issues: when to self-resolve, when to escalate to vendor support, and when to trigger engineering or leadership involvement.",
    usedIn: ["Direct Merchant Application", "Broker Portal"],
    preview: [
      { type: "table", headers: ["Condition", "First Action", "If Unresolved 24h", "If Unresolved 72h"], rows: [
        ["API timeout spike", "Check vendor status page", "Open vendor support ticket", "Eng lead + PM review fallback"],
        ["Parse accuracy drop", "Pull sample failures for vendor", "Joint review call with vendor", "Escalate to executive contact"],
        ["Auth failure", "Rotate token + retest", "Vendor emergency line", "Switch to manual processing"],
        ["Data mismatch", "Log sample + compare schema", "Vendor ticket with examples", "Eng + PM + Legal review"],
      ]},
      { type: "section", heading: "Self-Resolve Threshold", body: "If the issue affects fewer than 5 applications per hour and a known workaround exists in the runbook, the on-call AE can self-resolve. Any issue above that threshold or with no runbook entry triggers the vendor escalation path immediately." },
    ],
  },
];

const categoryMeta: Record<Category, { color: string; bg: string; border: string; activeBg: string; activeBorder: string }> = {
  "AI Agents":   { color: "text-indigo-700", bg: "bg-indigo-50",  border: "border-indigo-200", activeBg: "bg-indigo-600",  activeBorder: "border-indigo-600"  },
  Discovery:     { color: "text-violet-700", bg: "bg-violet-50",  border: "border-violet-200", activeBg: "bg-violet-600",  activeBorder: "border-violet-600"  },
  Analysis:      { color: "text-blue-700",   bg: "bg-blue-50",    border: "border-blue-200",   activeBg: "bg-blue-600",    activeBorder: "border-blue-600"    },
  Planning:      { color: "text-emerald-700",bg: "bg-emerald-50", border: "border-emerald-200",activeBg: "bg-emerald-600", activeBorder: "border-emerald-600" },
  Compliance:    { color: "text-amber-700",  bg: "bg-amber-50",   border: "border-amber-200",  activeBg: "bg-amber-600",   activeBorder: "border-amber-600"   },
  Communication: { color: "text-rose-700",   bg: "bg-rose-50",    border: "border-rose-200",   activeBg: "bg-rose-600",    activeBorder: "border-rose-600"    },
};

const categories: Category[] = ["AI Agents", "Discovery", "Analysis", "Planning", "Compliance", "Communication"];

function Block({ block }: { block: PreviewBlock }) {
  switch (block.type) {
    case "section":
      return (
        <div className="mb-5">
          <p className="text-[11px] font-semibold tracking-widest uppercase text-ink-faint mb-1">{block.heading}</p>
          <p className="text-sm text-ink-soft leading-6">{block.body}</p>
        </div>
      );
    case "checklist":
      return (
        <ul className="mb-5 space-y-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm">
              <span className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${item.done ? "bg-accent border-accent" : "border-line"}`}>
                {item.done && (
                  <svg className="h-2.5 w-2.5 text-white" fill="none" viewBox="0 0 10 8">
                    <path d="M1 4l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>
              <span className={item.done ? "text-ink-faint line-through" : "text-ink-soft"}>{item.text}</span>
            </li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div className="mb-5 overflow-x-auto rounded-lg border border-line">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-line bg-muted/50">
                {block.headers.map((h) => (
                  <th key={h} className="py-2 px-3 text-left text-[11px] font-semibold tracking-wider uppercase text-ink-faint whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className={`border-b border-line last:border-0 ${i % 2 === 1 ? "bg-muted/25" : ""}`}>
                  {row.map((cell, j) => (
                    <td key={j} className="py-2 px-3 text-ink-soft align-top">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "fields":
      return (
        <dl className="mb-5 space-y-2">
          {block.items.map((item) => (
            <div key={item.label} className="grid grid-cols-[auto_1fr] gap-x-4 items-baseline">
              <dt className="text-[11px] font-semibold uppercase tracking-wider text-ink-faint whitespace-nowrap">{item.label}</dt>
              <dd className="text-sm text-ink-soft">{item.value}</dd>
            </div>
          ))}
        </dl>
      );
    case "bullets":
      return (
        <div className="mb-5">
          {block.heading && (
            <p className="text-[11px] font-semibold tracking-widest uppercase text-ink-faint mb-2">{block.heading}</p>
          )}
          <ul className="space-y-1.5">
            {block.items.map((item, i) => (
              <li key={i} className="flex gap-2 text-sm text-ink-soft">
                <span className="text-accent shrink-0 mt-0.5">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      );
    case "divider":
      return <hr className="mb-5 border-line" />;
    default:
      return null;
  }
}

export default function ArtifactsGrid() {
  const [active, setActive] = useState<Category | null>(null);
  const [selected, setSelected] = useState<Artifact | null>(null);

  useEffect(() => {
    if (!selected) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setSelected(null); };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  const visible = active ? artifacts.filter((a) => a.category === active) : artifacts;

  return (
    <>
      {/* Filter pills */}
      <div className="mx-auto max-w-6xl px-6 lg:px-8 pb-10">
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => {
            const meta = categoryMeta[cat];
            const isActive = active === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(isActive ? null : cat)}
                className={`cursor-pointer inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-all duration-150 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                  isActive
                    ? `${meta.activeBg} ${meta.activeBorder} text-white`
                    : `${meta.color} ${meta.bg} ${meta.border} hover:opacity-80`
                }`}
              >
                {cat}
                {isActive && <span aria-hidden="true" className="text-white/70">×</span>}
              </button>
            );
          })}
          {active && (
            <button
              type="button"
              onClick={() => setActive(null)}
              className="cursor-pointer inline-flex items-center rounded-full border border-line px-3 py-1 text-xs font-medium text-ink-soft hover:text-ink transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              Show all
            </button>
          )}
        </div>
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-6xl px-6 lg:px-8 pb-28">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((artifact, i) => {
            const meta = categoryMeta[artifact.category];
            return (
              <Reveal
                key={artifact.title}
                as="button"
                type="button"
                delay={(i % 6) * 60}
                onClick={() => setSelected(artifact)}
                aria-label={`Preview ${artifact.title} template`}
                className="group w-full text-left flex flex-col rounded-xl border border-line bg-paper p-6 hover:border-accent/30 hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                <span
                  className={`self-start inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold tracking-wide ${meta.color} ${meta.bg} ${meta.border}`}
                >
                  {artifact.category}
                </span>

                <h3 className="mt-4 font-heading font-semibold text-ink leading-snug">
                  {artifact.title}
                </h3>

                <p className="mt-2 text-sm text-ink-soft leading-6 flex-grow">
                  {artifact.description}
                </p>

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
                        {project}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-1 text-[11px] font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                  <span>Preview template</span>
                  <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6h7m-3-3 3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-ink/50 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[85vh] flex flex-col rounded-2xl bg-paper shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sticky header */}
            <div className="flex items-start justify-between gap-4 border-b border-line px-6 py-4 shrink-0">
              <div>
                <span
                  className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold tracking-wide ${categoryMeta[selected.category].color} ${categoryMeta[selected.category].bg} ${categoryMeta[selected.category].border}`}
                >
                  {selected.category}
                </span>
                <h2 className="mt-1.5 font-heading font-bold text-ink text-lg leading-snug">{selected.title}</h2>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close preview"
                className="shrink-0 rounded-md p-1.5 text-ink-faint hover:text-ink hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Scrollable content */}
            <div className="overflow-y-auto px-6 py-5">
              <p className="text-[11px] font-semibold tracking-widest uppercase text-ink-faint mb-5">Template Preview</p>
              {selected.preview.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
