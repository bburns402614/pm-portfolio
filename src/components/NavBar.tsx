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
      <div className="flex justify-between h-16">
        {/* Logo */}
        <div className="flex">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-gray-800">Breanna Burns</span>
          </Link>
        </div>

        {/* Desktop navigation links */}
        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                pathname === href
                  ? "text-gray-900"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Hamburger button — visible only on mobile */}
        <div className="flex items-center sm:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
        className={`sm:hidden border-t border-gray-200 overflow-hidden transition-all duration-200 ease-in-out motion-reduce:transition-none ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <div className="pt-2 pb-3">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 text-base font-medium ${
                pathname === href
                  ? "text-gray-900 bg-gray-50"
                  : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
