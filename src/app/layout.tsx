import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Product Manager Portfolio",
  description: "Portfolio showcasing my product management experience, case studies, and achievements",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          {/* Navigation */}
          <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <Link href="/" className="flex items-center">
                    <span className="text-xl font-bold text-gray-800">PM Portfolio</span>
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link href="/" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
                    Home
                  </Link>
                  <Link href="/about" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                    About
                  </Link>
                  <Link href="/projects" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                    Projects
                  </Link>
                  <Link href="/case-studies" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                    Case Studies
                  </Link>
                  <Link href="/blog" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                    Blog
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Main content */}
          <main className="flex-grow">
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-white border-t">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contact</h3>
                  <div className="mt-4 space-y-2">
                    <a href="mailto:your.email@example.com" className="text-base text-gray-500 hover:text-gray-900">
                      Email
                    </a>
                    <p className="text-base text-gray-500">San Francisco Bay Area</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Connect</h3>
                  <div className="mt-4 space-y-2">
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-base text-gray-500 hover:text-gray-900">
                      LinkedIn
                    </a>
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="block text-base text-gray-500 hover:text-gray-900">
                      GitHub
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Resources</h3>
                  <div className="mt-4 space-y-2">
                    <Link href="/blog" className="text-base text-gray-500 hover:text-gray-900">
                      Blog Posts
                    </Link>
                    <Link href="/case-studies" className="block text-base text-gray-500 hover:text-gray-900">
                      Case Studies
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-8 border-t border-gray-200 pt-8">
                <p className="text-base text-gray-400 text-center">
                  © {new Date().getFullYear()} Your Name. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
