import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import ScrollProgress from "@/components/ScrollProgress";

const body = Archivo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

const heading = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Breanna Burns | Product Manager",
  description: "Portfolio showcasing Breanna Burns' product management experience, case studies, and achievements",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${body.variable} ${heading.variable}`}>
      <body className="font-sans antialiased">
        <div className="min-h-screen flex flex-col">
          <ScrollProgress />
          {/* Navigation */}
          <nav className="sticky top-0 z-50 border-b border-line bg-paper/80 backdrop-blur-md">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <NavBar />
            </div>
          </nav>

          {/* Main content */}
          <main className="flex-grow">
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-ink text-paper">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr] gap-10">
                <div>
                  <span className="font-heading font-bold text-2xl tracking-tight">Breanna Burns</span>
                  <p className="mt-3 text-sm text-paper/50 max-w-xs leading-6">
                    Product Manager with 10+ years in healthcare and fintech, building platforms where getting it wrong has real consequences.
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold tracking-widest uppercase text-paper/40">Contact</h3>
                  <div className="mt-4 space-y-2">
                    <a href="mailto:burns.655@icloud.com" className="block text-sm text-paper/70 hover:text-paper transition-colors">
                      burns.655@icloud.com
                    </a>
                    <p className="text-sm text-paper/70">614-736-1701</p>
                    <p className="text-sm text-paper/70">Columbus, OH</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xs font-semibold tracking-widest uppercase text-paper/40">Connect</h3>
                  <div className="mt-4 space-y-2">
                    <a href="https://www.linkedin.com/in/breanna-burns/" target="_blank" rel="noopener noreferrer" className="block text-sm text-paper/70 hover:text-paper transition-colors">
                      LinkedIn ↗
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-12 border-t border-paper/10 pt-8 flex flex-col sm:flex-row justify-between gap-2">
                <p className="text-sm text-paper/40">
                  © {new Date().getFullYear()} Breanna Burns. All rights reserved.
                </p>
                <p className="text-sm text-paper/40">Product Manager · Healthcare &amp; Fintech</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
