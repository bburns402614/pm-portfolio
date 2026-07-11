"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Logo from "@/components/Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "My Background" },
  { href: "/projects", label: "Case Studies" },
  { href: "/artifacts", label: "Artifacts" },
  { href: "/personal", label: "Personal" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close on scroll
  useEffect(() => {
    if (!isOpen) return;
    const close = () => setIsOpen(false);
    window.addEventListener("scroll", close, { passive: true });
    return () => window.removeEventListener("scroll", close);
  }, [isOpen]);

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <div className="flex justify-between items-center h-14 sm:h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-ink text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
            <Logo className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
          </span>
          <span className="text-sm font-heading font-bold text-ink tracking-tight hidden sm:inline">
            Breanna Burns
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex sm:items-center sm:gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative py-2 text-sm font-medium transition-colors ${
                pathname === href ? "text-ink" : "text-ink-soft hover:text-ink"
              }`}
            >
              {label}
              <span
                className={`absolute -bottom-0.5 left-0 h-px w-full bg-accent transition-transform duration-200 origin-left ${
                  pathname === href ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </Link>
          ))}
          <a
            href="mailto:burns.655@icloud.com"
            className="cursor-pointer rounded-full bg-ink px-4 py-2 text-sm font-medium text-white hover:bg-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            Get in touch
          </a>
        </div>

        {/* Hamburger — mobile only */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-ink-soft hover:text-ink hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent"
        >
          <svg
            aria-hidden="true"
            className="h-5 w-5 transition-transform duration-200"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isOpen ? (
              <>
                <path d="M6 18L18 6" />
                <path d="M6 6l12 12" />
              </>
            ) : (
              <>
                <path d="M3.75 6.75h16.5" />
                <path d="M3.75 12h16.5" />
                <path d="M3.75 17.25h16.5" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown — absolutely positioned so it overlays content instead of pushing it */}
      <div
        aria-hidden={!isOpen}
        className={`absolute left-0 right-0 top-full sm:hidden bg-paper/95 backdrop-blur-sm border-b border-line shadow-md transition-all duration-200 ease-in-out motion-reduce:transition-none ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-1 pointer-events-none"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-2">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-2.5 rounded-lg px-2 py-2.5 text-sm font-medium transition-colors ${
                pathname === href
                  ? "text-ink"
                  : "text-ink-soft hover:text-ink hover:bg-muted/60"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full shrink-0 transition-colors ${
                  pathname === href ? "bg-accent" : "bg-transparent"
                }`}
              />
              {label}
            </Link>
          ))}
          <div className="mt-1.5 pb-3 pt-2 border-t border-line">
            <a
              href="mailto:burns.655@icloud.com"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center rounded-full bg-ink px-4 py-2 text-sm font-medium text-white hover:bg-accent transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
