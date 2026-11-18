import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/components/brand/icons";
import { CtaBanner } from "@/components/shared/cta-banner";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";
import { constructionPoints, images } from "@/config/site";

export const metadata: Metadata = {
  title: "Construction Bookkeeping",
  description:
    "Bookkeeping for contractors, builders, subcontractors, and remodelers. Job costing, retainage, change orders, draws, subcontractor 1099 details, and Home Depot or Lowe's receipt coding. We also serve every other business.",
};

const audiences = ["General contractors", "Builders", "Subcontractors", "Remodelers"];

export default function ConstructionPage() {
  return (
    <>
      <PageHero
        eyebrow="Construction bookkeeping"
        title="Job costs that match the work in the field."
        lede="Tigris keeps construction books current — weekly closes, organized receipts, and cleanup when the file is messy — and we do the same for every other business we take on. If you build things, this is the page written for you."
        image={images.siteCrew}
      />

      <section className="py-16">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-bronze">On the job</p>
            <h2 className="mt-2 text-3xl font-bold">What construction files usually need</h2>
            <p className="mt-3 text-slate-600">
              A generic close misses retainage, change orders, and the receipt that belongs to one job and not another. These are the items we build the file around.
            </p>
            <ul className="mt-6 grid gap-3">
              {constructionPoints.map((point) => (
                <li key={point.title} className="flex gap-3 rounded-2xl bg-white p-4 shadow-[0_16px_40px_-30px_rgba(15,30,61,0.7)]">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-amber text-navy">
                    <Icon name={point.icon} className="size-4" />
                  </span>
                  <div>
                    <h3 className="font-bold">{point.title}</h3>
                    <p className="text-sm leading-6 text-slate-600">{point.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src={images.plans.src} alt={images.plans.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            </div>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image src={images.rebar.src} alt={images.rebar.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <h2 className="text-3xl font-bold">Who this is for</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((name) => (
              <div key={name} className="rounded-2xl border border-slate-200 bg-canvas p-5">
                <p className="font-semibold text-navy">{name}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-slate-600">
            If you are not in construction, you are still in the right place. Restaurants, shops, trucking companies, practices, and professional firms use the same weekly or monthly close.{" "}
            <Link href="/industries" className="font-semibold text-navy underline-offset-4 hover:underline">
              See every industry
            </Link>
            .
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/request-service">Request Service</Link>
            </Button>
            <Button asChild variant="outlineNavy">
              <Link href="/pricing">View pricing</Link>
            </Button>
          </div>
        </Container>
      </section>
      <CtaBanner title="Bring the job file current." lede="Tell us the software, how far behind you are, and whether you need job costing. We reply within 1 business day." />
    </>
  );
}
