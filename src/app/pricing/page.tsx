import type { Metadata } from "next";
import Link from "next/link";

import { CtaBanner } from "@/components/shared/cta-banner";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";
import { images, packages, priceNote } from "@/config/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Weekly Clean Books, Monthly Essentials, and Cleanup & Catch-Up. Starting prices are placeholders until Tigrix quotes your volume and catch-up work.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Three ways to start. One custom quote."
        lede="Every package shows a placeholder price. The real number depends on transactions, software, and whether the books need a catch-up first."
        image={images.charts}
      />
      <section className="py-16">
        <Container>
          <div className="grid gap-4 lg:grid-cols-3">
            {packages.map((pkg) => (
              <article
                key={pkg.id}
                className={`flex flex-col rounded-2xl p-6 shadow-[0_16px_40px_-28px_rgba(15,30,61,0.55)] ${
                  pkg.featured ? "bg-navy text-white ring-2 ring-amber" : "bg-white"
                }`}
              >
                {pkg.featured ? (
                  <p className="mb-3 w-fit rounded-full bg-amber px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy">
                    Built for active jobs
                  </p>
                ) : null}
                <h2 className={`text-2xl font-bold ${pkg.featured ? "text-white" : ""}`}>{pkg.name}</h2>
                <p className={`mt-2 text-sm ${pkg.featured ? "text-slate-300" : "text-slate-500"}`}>{pkg.audience}</p>
                <p className={`mt-4 font-heading text-3xl font-bold ${pkg.featured ? "text-emerald" : "text-navy"}`}>
                  {pkg.price}
                </p>
                <p className={`mt-3 text-sm leading-6 ${pkg.featured ? "text-slate-200" : "text-slate-600"}`}>{pkg.summary}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className={pkg.featured ? "text-emerald" : "text-navy"} aria-hidden="true">
                        ▸
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-6" variant={pkg.featured ? "default" : "navy"}>
                  <Link href="/request-service">Request a custom quote</Link>
                </Button>
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-6 text-slate-600">{priceNote}</p>
        </Container>
      </section>
      <CtaBanner title="Ask for a quote before you commit." />
    </>
  );
}
