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
    company: 'Quantum Health • Columbus, OH',
    period: 'Mar 2021 – Feb 2022',
    bullets: [
      'Translated customer and business needs into user stories and acceptance criteria; supported iterative delivery to improve feature quality and adoption.',
      'Established feedback loops to identify post-launch friction and refine user workflows.',
      'Improved delivery efficiency by 28% through backlog and workflow improvements.',
    ],
  },
  {
    role: 'Senior Business Analyst',
    company: 'Radiology Partners • Columbus, OH',
    period: 'Nov 2018 – Mar 2021',
    bullets: [
      'Led implementation of AIDoc as a proof of concept, coordinating stakeholders and integrations (PACS/EHR/speech recognition); successful pilot expanded into nationwide usage.',
      'Supported AI-enabled diagnostic tool integrations and workflow adoption across clinical and technical teams.',
    ],
  },
  {
    role: 'Business Analyst / Project Coordinator / Contract Coordinator',
    company: 'Buckeye Health Plan • Columbus, OH',
    period: 'Nov 2015 – Nov 2018',
    bullets: [
      'Led cross-department initiatives supporting regulatory compliance and process improvements.',
      'Reduced credentialing turnaround time by 70% and improved processes that reduced claims denials.',
    ],
  },
]

const certs = [
  'Certified Scrum Product Owner (CSPO) — Scrum Alliance',
  'Certified ScrumMaster (CSM) — Scrum Alliance',
  'Certified SAFe Scrum Master — Scaled Agile',
]

const skills = [
  'Onboarding & Activation Funnels',
  'Funnel Analysis & Opportunity Sizing',
  'Journey Mapping',
  'Success Metrics / KPIs',
  'PRDs / User Stories / Acceptance Criteria',
  'Experimentation Support',
  'Vendor & API Integrations',
  'FullStory',
  'Atlassian Products',
  'Prototyping',
  'AI-Enabled Automation',
  'Cross-functional Leadership',
]

export default function About() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900">Breanna Burns</h1>
          <p className="mt-2 text-lg text-indigo-600 font-medium">Product Manager · Columbus, OH</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Product Manager with 10+ years of experience across fintech and regulated consumer products.
            I specialize in leading retail onboarding and activation experiences from concept to launch —
            using funnel analysis, FullStory session replay, and tight cross-functional partnerships to
            identify friction and ship improvements that move the needle.
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Experienced with AI-enabled automation (document parsing, data validation, exception handling)
            and building reliable lifecycle workflows that scale.
          </p>
          <div className="mt-6 flex gap-4 text-sm text-gray-500">
            <a href="mailto:burns.655@icloud.com" className="hover:text-indigo-600">burns.655@icloud.com</a>
            <span>·</span>
            <span>614-736-1701</span>
            <span>·</span>
            <a href="https://www.linkedin.com/in/breanna-burns/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">LinkedIn</a>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="bg-indigo-50 text-indigo-700 text-sm font-medium px-3 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Experience</h2>
          <div className="space-y-12">
            {experience.map((job) => (
              <div key={job.role + job.company}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{job.role}</h3>
                    <p className="text-indigo-600 font-medium">{job.company}</p>
                  </div>
                  <span className="text-sm text-gray-500 mt-1 sm:mt-0">{job.period}</span>
                </div>
                <ul className="space-y-2">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 text-gray-600 text-sm leading-6">
                      <span className="text-indigo-400 mt-0.5 shrink-0">▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Education</h2>
            <p className="font-medium text-gray-900">The Ohio State University</p>
            <p className="text-sm text-gray-500">Columbus, OH</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Certifications</h2>
            <ul className="space-y-2">
              {certs.map((c) => (
                <li key={c} className="text-sm text-gray-600 flex gap-2">
                  <span className="text-indigo-400 shrink-0">✓</span>{c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
