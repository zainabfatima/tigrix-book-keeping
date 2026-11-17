import type { Metadata } from "next";
import Link from "next/link";

import { Icon } from "@/components/brand/icons";
import { CtaBanner } from "@/components/shared/cta-banner";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { images, services } from "@/config/site";

export const metadata: Metadata = {
  title: "Bookkeeping Services",
  description:
    "Weekly bookkeeping, receipt organization, messy-books cleanup, monthly closes, QuickBooks setup, reconciliations, invoicing, job costing, and tax-ready reports.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="The books, kept current."
        lede="Weekly bookkeeping, receipt organization, and cleanup for messy books are the core. Contractors also get job-cost detail. Every other business gets the same clean close."
        image={images.spreadsheets}
      />
      <section className="py-16">
        <Container className="grid gap-4">
          {services.map((service) => (
            <article
              id={service.id}
              key={service.id}
              className="scroll-mt-28 rounded-2xl bg-white p-6 shadow-[0_16px_40px_-28px_rgba(15,30,61,0.55)] sm:p-8"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-navy text-emerald">
                  <Icon name={service.icon} className="size-5" />
                </span>
                <div>
                  <h2 className="text-2xl font-bold">{service.name}</h2>
                  <p className="mt-2 text-slate-700">{service.summary}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{service.detail}</p>
                </div>
              </div>
            </article>
          ))}
          <p className="text-sm text-slate-500">
            Not sure which one fits?{" "}
            <Link href="/request-service" className="font-semibold text-navy underline-offset-4 hover:underline">
              Request service
            </Link>{" "}
            and we will recommend a scope.
          </p>
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
