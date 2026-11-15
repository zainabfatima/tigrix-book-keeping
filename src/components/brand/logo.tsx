import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={cn("size-10 shrink-0", className)}
      aria-hidden="true"
    >
      <rect width="48" height="48" rx="14" fill="#0F1E3D" />
      <rect x="1.25" y="1.25" width="45.5" height="45.5" rx="13" stroke="#F59E0B" strokeOpacity="0.45" />
      <path d="M10 13.5h28a2.25 2.25 0 0 1 0 4.5H10a2.25 2.25 0 0 1 0-4.5Z" fill="#F8FAFC" />
      <path d="M29 13.5h9a2.25 2.25 0 0 1 0 4.5h-9V13.5Z" fill="#F59E0B" />
      <path d="M21.25 16.5h5.5A2.25 2.25 0 0 1 29 18.75v16.5a2.25 2.25 0 0 1-2.25 2.25h-5.5A2.25 2.25 0 0 1 19 35.25v-16.5a2.25 2.25 0 0 1 2.25-2.25Z" fill="#F8FAFC" />
      <path d="M31.5 24.5h7.5M31.5 29h7.5" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
      <path d="M31.6 34.4 34.2 37l5.6-6.2" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className={cn("font-heading text-[1.2rem] font-extrabold tracking-tight", word)}>
          Tigri<span className={accent}>x</span>
        </span>
        <span className={cn("mt-1 text-[0.62rem] font-bold uppercase tracking-[0.28em]", sub)}>
          Bookkeeping
        </span>
      </span>
    </span>
  );
}
