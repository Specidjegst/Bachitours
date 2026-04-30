export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <circle cx="16" cy="16" r="16" fill="#0A4D6E" />
        <path
          d="M5 19c2-1.5 3.5-1.5 5.5 0s3.5 1.5 5.5 0 3.5-1.5 5.5 0 3.5 1.5 5.5 0"
          stroke="#38BFC9"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M5 23c2-1.5 3.5-1.5 5.5 0s3.5 1.5 5.5 0 3.5-1.5 5.5 0 3.5 1.5 5.5 0"
          stroke="#F4A340"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span className="font-display text-xl font-bold tracking-tight text-deep">
        Bachitours
      </span>
    </span>
  );
}
