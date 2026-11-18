import Image from "next/image";
import Link from "next/link";

import { CtaBanner } from "@/components/shared/cta-banner";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { areas, site, type Area } from "@/config/site";

export function AreaPage({ area }: { area: Area }) {
  const other = area.slug === "atlanta" ? areas.detroit : areas.atlanta;

  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0">
          <Image src={area.image.src} alt={area.image.alt} fill priority sizes="100vw" className="object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />
        </div>
        <Container className="relative py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">
            {area.city}, {area.state}
          </p>
          <h1 className="mt-3 max-w-2xl font-heading text-4xl font-bold text-white sm:text-5xl">{area.title}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-100">{area.lede}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/request-service">Request Service</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/construction-bookkeeping">Construction bookkeeping</Link>
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-bold">Nearby communities</h2>
            <p className="mt-3 text-slate-600">
              We work with businesses in {area.city} and these surrounding communities. {site.remoteNote}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {area.neighborhoods.map((name) => (
                <li key={name} className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy shadow-sm">
                  {name}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-slate-600">
              Construction companies are the focus. Restaurants, shops, carriers, practices, and professional firms in the same area are welcome too.
            </p>
          </div>
          <aside className="rounded-2xl bg-white p-6 shadow-[0_16px_40px_-28px_rgba(15,30,61,0.55)]">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-bronze">Also serving</p>
            <h3 className="mt-2 text-2xl font-bold">
              {other.city}, {other.abbr}
            </h3>
            <p className="mt-2 text-sm text-slate-600">{other.neighborhoods.join(", ")}</p>
            <Link href={`/service-areas/${other.slug}`} className="mt-4 inline-block text-sm font-semibold text-navy underline-offset-4 hover:underline">
              View the {other.city} page
            </Link>
          </aside>
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
