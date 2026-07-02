"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center h-16 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white font-serif italic text-sm">
            BB
          </span>
          <span className="text-base font-semibold text-ink tracking-tight hidden sm:inline">
            Breanna Burns
          </span>
        </Link>

        {/* Desktop navigation links */}
        <div className="hidden sm:flex sm:items-center sm:gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative py-2 text-sm font-medium transition-colors ${
                pathname === href
                  ? "text-ink"
                  : "text-ink-soft hover:text-ink"
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
            className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-white hover:bg-accent-strong transition-colors"
          >
            Get in touch
          </a>
        </div>

        {/* Hamburger button — visible only on mobile */}
        <div className="flex items-center sm:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex items-center justify-center rounded-md p-2 text-ink-soft hover:text-ink hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent"
          >
            {isOpen ? (
              /* X icon */
              <svg
                aria-hidden="true"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 18L18 6" />
                <path d="M6 6l12 12" />
              </svg>
            ) : (
              /* Hamburger icon */
              <svg
                aria-hidden="true"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3.75 6.75h16.5" />
                <path d="M3.75 12h16.5" />
                <path d="M3.75 17.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation panel — slides open/closed via max-height transition */}
      <div
        className={`sm:hidden border-t border-line overflow-hidden transition-all duration-200 ease-in-out motion-reduce:transition-none ${
          isOpen ? "max-h-56" : "max-h-0"
        }`}
      >
        <div className="pt-2 pb-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className={`block px-1 py-3 text-base font-medium ${
                pathname === href
                  ? "text-ink"
                  : "text-ink-soft hover:text-ink"
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href="mailto:burns.655@icloud.com"
            onClick={() => setIsOpen(false)}
            className="mt-2 inline-block rounded-full bg-ink px-4 py-2 text-sm font-medium text-white"
          >
            Get in touch
          </a>
        </div>
      </div>
    </>
  );
}
