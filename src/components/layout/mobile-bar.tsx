import Link from "next/link";
import { Phone } from "lucide-react";

import { site } from "@/config/site";

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white p-2 shadow-[0_-8px_24px_rgba(15,30,61,0.12)] md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={site.phoneHref}
          className="inline-flex h-14 flex-col items-center justify-center gap-0.5 rounded-xl border-2 border-navy bg-navy px-2 text-white"
        >
          <span className="inline-flex items-center gap-2 text-base font-bold leading-none">
            <Phone className="size-5" aria-hidden="true" />
            Call
          </span>
          <span className="text-[0.7rem] font-semibold tracking-wide text-amber">{site.phone}</span>
        </a>
        <Link
          href="/request-service"
          className="inline-flex h-14 items-center justify-center rounded-xl bg-emerald px-2 text-base font-bold text-navy"
        >
          Request Service
        </Link>
      </div>
    </div>
  );
}
