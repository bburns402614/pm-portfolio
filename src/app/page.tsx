import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Product Manager & Strategic Leader
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Driving product success through user-centric design, data-driven decisions, and strategic leadership. Experienced in building and scaling products that users love.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/projects"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                View Projects
              </Link>
              <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900">
                Learn More <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured sections */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-16">Featured Work</h2>
          
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
            {/* Case Studies */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Case Studies</h3>
              <div className="mt-6 space-y-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-start">
                    <span className="bg-white pr-3 text-base font-semibold text-indigo-600">Latest Work</span>
                  </div>
                </div>
                <div className="prose prose-indigo">
                  <ul role="list" className="space-y-4">
                    <li>Product Strategy & Vision Development</li>
                    <li>User Research & Customer Journey Mapping</li>
                    <li>Agile Product Development</li>
                    <li>Cross-functional Team Leadership</li>
                  </ul>
                </div>
                <Link href="/case-studies" className="text-sm font-semibold leading-6 text-indigo-600">
                  View Case Studies <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Skills & Expertise */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Skills & Expertise</h3>
              <div className="mt-6 space-y-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-start">
                    <span className="bg-white pr-3 text-base font-semibold text-indigo-600">Core Competencies</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900">Product Strategy</h4>
                    <p className="mt-2 text-sm text-gray-500">Vision development, roadmap planning, go-to-market strategy</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900">User Research</h4>
                    <p className="mt-2 text-sm text-gray-500">Customer interviews, usability testing, data analysis</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900">Agile Leadership</h4>
                    <p className="mt-2 text-sm text-gray-500">Sprint planning, backlog management, team coordination</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900">Data Analytics</h4>
                    <p className="mt-2 text-sm text-gray-500">KPI tracking, A/B testing, metrics analysis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
