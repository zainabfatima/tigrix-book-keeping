import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={cn("size-14 shrink-0", className)} aria-hidden="true">
      <rect width="48" height="48" rx="13" fill="#0F1E3D" />
      <rect
        x="1.5"
        y="1.5"
        width="45"
        height="45"
        rx="11.5"
        fill="none"
        stroke="#F59E0B"
        strokeWidth="2.25"
      />
      <path d="M8 11.5h32a3 3 0 0 1 0 6H8a3 3 0 0 1 0-6Z" fill="#F8FAFC" />
      <path d="M28 11.5h12a3 3 0 0 1 0 6H28v-6Z" fill="#F59E0B" />
      <path d="M18.5 17.5h9a2 2 0 0 1 2 2v19a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-19a2 2 0 0 1 2-2Z" fill="#F8FAFC" />
      <path d="M32 24.5h9M32 31h9" stroke="#10B981" strokeWidth="3" strokeLinecap="round" />
      <path
        d="M32 37.2 35.4 41l6.4-7.6"
        stroke="#10B981"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const word = tone === "light" ? "text-white" : "text-navy";
  const accent = tone === "light" ? "text-emerald" : "text-[#047857]";
  const sub = tone === "light" ? "text-amber" : "text-[#b45309]";

  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className={cn("font-heading text-[1.7rem] font-extrabold tracking-tight", word)}>
          Tigri<span className={accent}>s</span>
        </span>
        <span className={cn("mt-1.5 text-[0.78rem] font-extrabold uppercase tracking-[0.22em]", sub)}>
          Bookkeeping
        </span>
      </span>
    </span>
  );
}
