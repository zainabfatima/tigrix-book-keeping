import Link from "next/link";

import { Logo } from "@/components/brand/logo";
import { areas, mainNav, site } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-navy text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Logo />
          <p className="mt-4 text-sm leading-6">
            Bookkeeping for construction companies — and for every other business that wants clean, current books.
          </p>
          <p className="mt-3 text-sm text-slate-400">{site.remoteNote}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber">Quick links</p>
          <ul className="mt-4 space-y-2 text-sm">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/request-service" className="hover:text-white">
                Request Service
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber">Service areas</p>
          <div className="mt-4 space-y-4 text-sm">
            <div>
              <Link href="/service-areas/atlanta" className="font-semibold text-white hover:text-emerald">
                {areas.atlanta.city}, {areas.atlanta.state}
              </Link>
              <p className="mt-1 text-slate-400">{areas.atlanta.neighborhoods.join(" · ")}</p>
            </div>
            <div>
              <Link href="/service-areas/detroit" className="font-semibold text-white hover:text-emerald">
                {areas.detroit.city}, {areas.detroit.state}
              </Link>
              <p className="mt-1 text-slate-400">{areas.detroit.neighborhoods.join(" · ")}</p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber">Contact</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={site.phoneHref} className="hover:text-white">
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={site.addressHref}
                className="hover:text-white"
                target="_blank"
                rel="noreferrer"
              >
                {site.street}
                <br />
                {site.city}, {site.region} {site.postalCode}
                <br />
                {site.country}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li>{site.hours}</li>
          </ul>
          <p className="mt-4 text-xs leading-5 text-slate-500">
            Email and “Starting at $___” prices are still placeholders. Phone and office address are current.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-slate-500 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <p>© {site.copyrightYear} {site.name}. All rights reserved.</p>
          <p>QuickBooks is a trademark of Intuit. We work in it; we are not claiming an endorsement.</p>
        </div>
      </div>
    </footer>
  );
}
