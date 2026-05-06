import Link from 'next/link'

const skills = [
  { name: 'Onboarding & Activation Funnels', description: 'End-to-end funnel design, drop-off analysis, and iterative improvement' },
  { name: 'Funnel Analysis & Opportunity Sizing', description: 'Quantifying drop-offs to prioritize highest-impact fixes' },
  { name: 'Journey Mapping', description: 'Translating user journeys into clear product narratives and phased plans' },
  { name: 'AI-Enabled Automation', description: 'Document parsing, data validation, and exception handling workflows' },
  { name: 'Cross-functional Leadership', description: 'Partnering with Engineering, Design, Ops, and Compliance' },
  { name: 'Vendor & API Integrations', description: 'Third-party platform integrations to automate intake and onboarding' },
]

const highlights = [
  { stat: '10+', label: 'Years of PM Experience' },
  { stat: '40%', label: 'Reduction in Manual Intervention' },
  { stat: '70%', label: 'Faster Credentialing Turnaround' },
  { stat: '28%', label: 'Delivery Efficiency Improvement' },
]

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Product Manager & Fintech Leader
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              10+ years driving onboarding and activation experiences in fintech and regulated consumer products.
              I turn funnel data into shipped improvements and complex integrations into reliable workflows.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/case-studies"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                View Case Studies
              </Link>
              <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900">
                About Me <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Impact stats */}
      <div className="bg-indigo-600 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
            {highlights.map((h) => (
              <div key={h.stat} className="text-center">
                <dt className="text-4xl font-bold text-white">{h.stat}</dt>
                <dd className="mt-2 text-sm text-indigo-200">{h.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Skills */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-4">Core Competencies</h2>
        <p className="text-gray-600 mb-12">Specialized in fintech onboarding, funnel optimization, and AI-enabled automation.</p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900">{skill.name}</h3>
              <p className="mt-2 text-sm text-gray-500">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Want to see the work?</h2>
          <p className="mt-4 text-gray-600">Dive into detailed case studies from IOU Financial, Quantum Health, and Radiology Partners.</p>
          <div className="mt-8 flex justify-center gap-x-6">
            <Link
              href="/case-studies"
              className="rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500"
            >
              Case Studies
            </Link>
            <Link
              href="/about"
              className="rounded-md border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-100"
            >
              My Background
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
