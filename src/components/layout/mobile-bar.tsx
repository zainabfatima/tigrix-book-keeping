import Link from "next/link";
import { Phone } from "lucide-react";

import { site } from "@/config/site";

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-2 backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={site.phoneHref}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-navy/15 font-semibold text-navy"
        >
          <Phone className="size-4" aria-hidden="true" />
          Call
        </a>
        <Link
          href="/request-service"
          className="inline-flex h-12 items-center justify-center rounded-xl bg-emerald font-semibold text-navy"
        >
          Request Service
        </Link>
      </div>
    </div>
  );
}
