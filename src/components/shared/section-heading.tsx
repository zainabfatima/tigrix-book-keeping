import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  tone = "dark",
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  return (
    <div className={cn(align === "center" && "mx-auto max-w-2xl text-center")}>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">{eyebrow}</p>
      <h2
        className={cn(
          "mt-2 font-heading text-3xl font-bold tracking-tight sm:text-4xl",
          tone === "light" ? "text-white" : "text-navy",
        )}
      >
        {title}
      </h2>
      {lede ? (
        <p className={cn("mt-3 text-base leading-7", tone === "light" ? "text-slate-200" : "text-slate-600")}>
          {lede}
        </p>
      ) : null}
    </div>
  );
}
