export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="7" y="5" width="4" height="22" rx="2" fill="currentColor" />
      <path d="M11 5h6a6 6 0 0 1 0 12h-6z" fill="var(--accent)" />
      <path d="M11 15h7a7 7 0 0 1 0 14h-7z" fill="currentColor" />
    </svg>
  );
}
