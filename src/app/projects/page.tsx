const projects = [
  {
    id: "iou-retail-app",
    company: "IOU Financial",
    title: "Merchant Onboarding: Concept to MVP",
    period: "2022 – Present",
    tags: ["Fintech", "Onboarding", "Funnel Analysis", "AI Automation"],
    challenge:
      "Merchants needed a streamlined, reliable application experience to access financing — but the existing process had significant drop-off at key verification steps, high manual intervention rates, and no real-time visibility into where applicants were in the journey.",
    approach: [
      "Defined the full product narrative: problem statement, target users, journey map, and phased launch plan before writing a single requirement.",
      "Ran competitor analysis to benchmark onboarding patterns and verification sequencing, then translated findings into roadmap priorities.",
      "Performed funnel analysis across verification → revenue verification → submission to quantify drop-offs and identify the highest-impact intervention points.",
      "Used FullStory session replay to validate funnel data with real user behavior, surfacing UX failure patterns that metrics alone couldn't explain.",
      "Led integrations with Heron, Baselayer, and lending partners to automate document parsing and data validation at intake.",
      "Designed exception-handling and validation logic to catch errors early and reduce the need for manual review.",
    ],
    outcomes: [
      { stat: "40%", label: "reduction in manual intervention" },
      {
        stat: "MVP → iteration",
        label: "shipped on schedule with a phased launch plan",
      },
      {
        stat: "Shorter TTC",
        label: "time-to-complete reduced across activation-critical steps",
      },
    ],
    tools: ["FullStory", "Heron", "Baselayer", "Atlassian", "Funnel Analysis"],
  },
  {
    id: "radiology-partners-aidoc",
    company: "Radiology Partners",
    title: "AIDoc Proof of Concept → Nationwide Rollout",
    period: "2018 – 2021",
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
    title: "Credentialing Process Overhaul",
    period: "2015 – 2018",
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
      {
        stat: "Fewer denials",
        label: "claims denial rate reduced through improved accuracy",
      },
      { stat: "Compliance", label: "improved regulatory compliance posture" },
    ],
    tools: ["Process Mapping", "Cross-department Coordination", "Compliance Workflows"],
  },
];

export default function Projects() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900">Projects</h1>
          <p className="mt-4 text-lg text-gray-600">
            A look at how I approach problems — from discovery through delivery
            and iteration.
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((p) => (
            <div key={p.id} className="border-t border-gray-200 pt-12">
              <div className="mb-4 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mb-1 text-sm text-gray-500">
                {p.company} · {p.period}
              </p>
              <h2 className="mb-6 text-2xl font-bold text-gray-900">{p.title}</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="mb-3 text-sm font-semibold tracking-wide text-gray-500 uppercase">
                    The Challenge
                  </h3>
                  <p className="leading-7 text-gray-600">{p.challenge}</p>
                </div>

                <div>
                  <h3 className="mb-3 text-sm font-semibold tracking-wide text-gray-500 uppercase">
                    My Approach
                  </h3>
                  <ul className="space-y-3">
                    {p.approach.map((step, i) => (
                      <li key={i} className="flex gap-3 leading-6 text-gray-600">
                        <span className="mt-0.5 shrink-0 font-medium text-indigo-400">
                          {i + 1}.
                        </span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="mb-4 text-sm font-semibold tracking-wide text-gray-500 uppercase">
                    Outcomes
                  </h3>
                  <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {p.outcomes.map((o) => (
                      <div key={o.label} className="rounded-lg bg-indigo-50 p-4">
                        <dt className="text-2xl font-bold text-indigo-700">
                          {o.stat}
                        </dt>
                        <dd className="mt-1 text-sm text-gray-600">{o.label}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div>
                  <h3 className="mb-3 text-sm font-semibold tracking-wide text-gray-500 uppercase">
                    Tools & Methods
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {p.tools.map((t) => (
                      <span
                        key={t}
                        className="rounded bg-gray-100 px-2.5 py-1 text-xs text-gray-700"
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
      </div>
    </div>
  );
}

