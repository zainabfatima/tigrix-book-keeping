import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CtaBanner } from "@/components/shared/cta-banner";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { images, site } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Tigris LLC is a bookkeeping firm in Marietta, Georgia, focused on construction companies and open to every other business, serving Atlanta, Detroit, and remote clients.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A bookkeeping firm for people who build — and people who run everything else."
        lede="Tigris keeps the file current so owners can see the job, the cash, and what the CPA will need. Weekly books, organized receipts, and cleanup for messy files. No invented awards on this page."
        image={images.meeting}
      />
      <section className="py-16">
        <Container className="grid gap-6 lg:grid-cols-3">
          <article className="rounded-2xl bg-white p-6 shadow-[0_16px_40px_-28px_rgba(15,30,61,0.55)] lg:col-span-2">
            <h2 className="text-2xl font-bold">How we work</h2>
            <div className="mt-4 space-y-4 text-slate-700 leading-7">
              <p>
                Construction is the primary niche: contractors, builders, subcontractors, and remodelers who need job costs, retainage, change orders, draws, and store receipts in the right place.
              </p>
              <p>
                The same standard applies to every other business we serve. If the books are behind, we scope a cleanup. If they are current, we keep a weekly or monthly close and hand reports to your CPA.
              </p>
              <p>
                We work in QuickBooks Online, QuickBooks Desktop, and the other tools listed on the request form. Saying so is not a certification. Tax filing stays with your CPA.
              </p>
              <p>
                The office is at {site.addressLine}. Call {site.phone}. Service areas are Atlanta, Georgia and Detroit, Michigan. {site.remoteNote} We reply during {site.hours}.
              </p>
            </div>
            <Link href="/request-service" className="mt-6 inline-block font-semibold text-navy underline-offset-4 hover:underline">
              Request service
            </Link>
          </article>
          <aside className="rounded-2xl border border-dashed border-amber bg-amber/10 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#b45309]">Placeholder</p>
            <h2 className="mt-2 text-xl font-bold">Team profiles</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Names, photos, and credentials will be added here when they are confirmed. None are shown on this demo, so nothing on this page is a stand-in biography.
            </p>
          </aside>
        </Container>
      </section>
      <section className="pb-8">
        <Container className="grid gap-4 md:grid-cols-2">
          <div className="relative h-64 overflow-hidden rounded-2xl">
            <Image src={images.atlanta.src} alt={images.atlanta.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="relative h-64 overflow-hidden rounded-2xl">
            <Image src={images.detroit.src} alt={images.detroit.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </div>
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
