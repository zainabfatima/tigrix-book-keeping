"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

import { snapshot } from "@/config/site";

function Count({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setValue(to);
      return;
    }
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / 900);
      setValue(Math.round(to * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to]);

  return <span ref={ref}>{value}</span>;
}

export function SnapshotCounters() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {snapshot.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white"
        >
          <p className="font-heading text-4xl font-bold text-emerald">
            <Count to={item.value} />
          </p>
          <p className="mt-1 font-semibold">{item.label}</p>
          <p className="text-sm text-slate-300">{item.detail}</p>
        </div>
      ))}
    </div>
  );
}
