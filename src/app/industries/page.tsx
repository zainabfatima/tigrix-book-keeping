import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/components/brand/icons";
import { CtaBanner } from "@/components/shared/cta-banner";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { images, industries } from "@/config/site";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Construction is the primary niche at Tigris LLC. We also keep books for real estate, restaurants, retail, trucking, professional services, e-commerce, and healthcare practices.",
};

export default function IndustriesPage() {
  const featured = industries.find((industry) => industry.featured);
  const rest = industries.filter((industry) => !industry.featured);

  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Construction is home base. Every business is welcome."
        lede="The niche is contractors, builders, subcontractors, and remodelers. The practice is bookkeeping — so other industries get the same standard."
        image={images.smallBusiness}
      />
      <section className="py-16">
        <Container className="space-y-4">
          {featured ? (
            <Link
              href="/construction-bookkeeping"
              className="grid overflow-hidden rounded-2xl bg-navy text-white shadow-xl md:grid-cols-2"
            >
              <div className="relative min-h-64">
                <Image src={images.floorLaptop.src} alt={images.floorLaptop.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber">Featured</p>
                <h2 className="mt-2 text-3xl font-bold text-white">{featured.name}</h2>
                <p className="mt-3 text-slate-200">{featured.summary}</p>
                <p className="mt-4 text-sm font-semibold text-emerald">Open the construction page</p>
              </div>
            </Link>
          ) : null}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((industry) => (
              <article
                key={industry.id}
                className="rounded-2xl bg-white p-6 shadow-[0_16px_40px_-28px_rgba(15,30,61,0.55)] transition duration-300 hover:-translate-y-1"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-emerald/15 text-navy">
                  <Icon name={industry.icon} className="size-5" />
                </span>
                <h2 className="mt-4 text-xl font-bold">{industry.name}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{industry.summary}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
