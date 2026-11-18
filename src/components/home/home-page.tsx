import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Icon } from "@/components/brand/icons";
import { BooksIllustration } from "@/components/brand/books-illustration";
import { StorySlider } from "@/components/home/story-slider";
import { FadeIn } from "@/components/motion/fade-in";
import { SnapshotCounters } from "@/components/motion/counters";
import { Container } from "@/components/shared/container";
import { CtaBanner } from "@/components/shared/cta-banner";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  areas,
  constructionPoints,
  faqs,
  homeServices,
  images,
  industries,
  packages,
  services,
  site,
  steps,
  trustItems,
} from "@/config/site";

export function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(230,179,37,0.55),transparent_42%),linear-gradient(145deg,#0C0C0C_0%,#1A1406_52%,#6A4E08_130%)]" />
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "100% 28px",
          }}
        />
        <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <p className="inline-flex rounded-full border border-amber/40 bg-amber/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-amber">
              Construction first. Every business welcome.
            </p>
            <h1 className="mt-5 font-heading text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.35rem]">
              {site.heroTitle}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-200">
              Weekly bookkeeping, receipt organization, and cleanup for messy books — plus job-cost reports for contractors. The office is in Marietta. Atlanta, Detroit, and remote clients are welcome.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/request-service">Request Service</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/construction-bookkeeping">Construction bookkeeping</Link>
              </Button>
            </div>
          </div>
          <StorySlider />
        </Container>
      </section>

      <Container className="relative z-10 -mt-8">
        <div className="grid gap-3 rounded-2xl bg-white p-4 shadow-[0_18px_50px_-28px_rgba(15,30,61,0.55)] sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <div key={item.title} className="flex gap-3 rounded-xl p-3">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-navy text-emerald">
                <Icon name={item.icon} className="size-5" />
              </span>
              <div>
                <p className="font-semibold text-navy">{item.title}</p>
                <p className="text-sm text-slate-600">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <section className="bg-navy py-14">
        <Container>
          <p className="mb-6 max-w-2xl text-sm text-slate-300">
            A count of the practice itself — metros, services, and industries. Not client results, and not a certification.
          </p>
          <SnapshotCounters />
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="Bookkeeping that stays current"
            lede="Weekly bookkeeping, receipt organization, and messy-books cleanup lead the list. Reconciliations, invoicing, and the rest are on the services page."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {homeServices.map((service, index) => (
              <FadeIn key={service.id} delay={index * 0.04} className="h-full">
                <Link
                  href={`/services#${service.id}`}
                  className="group flex h-full flex-col rounded-2xl bg-white p-6 shadow-[0_16px_40px_-28px_rgba(15,30,61,0.55)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_-24px_rgba(15,30,61,0.45)]"
                >
                  <span className="grid size-11 place-items-center rounded-xl bg-emerald/15 text-navy">
                    <Icon name={service.icon} className="size-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold">{service.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{service.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy">
                    View service
                    <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <SectionHeading
            eyebrow="Catch-up"
            title="Messy books? We fix them."
            lede="Behind a month or behind a year, the job is the same: rebuild the record, then keep it that way."
          />
          <div className="mt-10">
            <BooksIllustration />
          </div>
          <div className="mt-8">
            <Button asChild>
              <Link href="/services#cleanup">See cleanup & catch-up</Link>
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Construction"
              title="Why contractors choose a bookkeeper who knows the job"
              lede="General contractors, builders, subcontractors, and remodelers run into the same gaps. We close them in the file."
            />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {constructionPoints.map((point) => (
                <li key={point.title} className="rounded-2xl bg-white p-4 shadow-[0_16px_40px_-30px_rgba(15,30,61,0.7)]">
                  <span className="grid size-9 place-items-center rounded-lg bg-amber text-navy">
                    <Icon name={point.icon} className="size-4" />
                  </span>
                  <h3 className="mt-3 text-base font-bold">{point.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{point.detail}</p>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8">
              <Link href="/construction-bookkeeping">Construction bookkeeping page</Link>
            </Button>
          </div>
          <div className="relative">
            <div className="absolute -left-3 -top-3 hidden h-full w-full rounded-2xl bg-navy lg:block" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl sm:aspect-[4/3]">
              <Image
                src={images.siteCrew.src}
                alt={images.siteCrew.alt}
                fill
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <SectionHeading
            eyebrow="Industries"
            title="Built for construction. Open to every business."
            lede="If you send invoices, pay vendors, and need a CPA-ready file, you are in range — even if you never pour concrete."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <Link
                key={industry.id}
                href={industry.featured ? "/construction-bookkeeping" : "/industries"}
                className="rounded-2xl border border-slate-200 bg-canvas p-5 transition duration-300 hover:-translate-y-1 hover:border-amber hover:shadow-lg"
              >
                <Icon name={industry.icon} className="size-5 text-navy" />
                <h3 className="mt-3 font-bold">
                  {industry.name}
                  {industry.featured ? (
                    <span className="ml-2 rounded-full bg-amber px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide">
                      Featured
                    </span>
                  ) : null}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{industry.summary}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title="Four steps from messy to current"
            align="center"
          />
          <ol className="mt-10 grid gap-4 md:grid-cols-4">
            {steps.map((item) => (
              <li key={item.step} className="rounded-2xl bg-white p-5 shadow-[0_16px_40px_-28px_rgba(15,30,61,0.55)]">
                <p className="font-heading text-3xl font-bold text-emerald">{item.step}</p>
                <h3 className="mt-3 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Pricing"
              title="Straightforward packages. Quoted for your file."
              lede="Placeholder prices until we see volume, software, and how far behind you are."
            />
            <Link href="/pricing" className="text-sm font-semibold text-navy underline-offset-4 hover:underline">
              Full pricing
            </Link>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {packages.map((pkg) => (
              <article
                key={pkg.id}
                className={`flex h-full flex-col rounded-2xl p-6 shadow-[0_16px_40px_-28px_rgba(15,30,61,0.55)] ${
                  pkg.featured ? "bg-navy text-white" : "bg-canvas text-slate-700"
                }`}
              >
                <p className={`text-xs font-semibold uppercase tracking-[0.16em] ${pkg.featured ? "text-amber" : "text-bronze"}`}>
                  {pkg.audience}
                </p>
                <h3 className={`mt-2 text-2xl font-bold ${pkg.featured ? "text-white" : ""}`}>{pkg.name}</h3>
                <p className={`mt-3 font-heading text-3xl font-bold ${pkg.featured ? "text-emerald" : "text-navy"}`}>
                  {pkg.price}
                </p>
                <p className={`mt-3 text-sm leading-6 ${pkg.featured ? "text-slate-200" : "text-slate-600"}`}>{pkg.summary}</p>
                <Button asChild className="mt-6" variant={pkg.featured ? "default" : "navy"}>
                  <Link href="/request-service">Request a custom quote</Link>
                </Button>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading
              eyebrow="FAQ"
              title="Straight answers before you send a file"
            />
            <div className="mt-6 flex flex-col gap-4 sm:flex-row lg:flex-col">
              <div className="relative h-40 flex-1 overflow-hidden rounded-2xl sm:h-48">
                <Image src={images.spreadsheets.src} alt={images.spreadsheets.alt} fill sizes="320px" className="object-cover" />
              </div>
              <div className="relative h-40 flex-1 overflow-hidden rounded-2xl sm:h-48">
                <Image src={images.reportsTable.src} alt={images.reportsTable.alt} fill sizes="320px" className="object-cover" />
              </div>
            </div>
          </div>
          <div>
            <Accordion type="single" collapsible className="rounded-2xl bg-white px-5 shadow-[0_16px_40px_-28px_rgba(15,30,61,0.55)]">
              {faqs.slice(0, 4).map((item, index) => (
                <AccordionItem key={item.q} value={`faq-${index}`}>
                  <AccordionTrigger>{item.q}</AccordionTrigger>
                  <AccordionContent>{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <Link href="/faq" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy">
              All {faqs.length} questions
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </Container>
      </section>

      <section className="pb-4">
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            {(["atlanta", "detroit"] as const).map((key) => {
              const area = areas[key];
              return (
                <Link
                  key={area.slug}
                  href={`/service-areas/${area.slug}`}
                  className="group relative h-56 overflow-hidden rounded-2xl"
                >
                  <Image
                    src={area.image.src}
                    alt={area.image.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber">Service area</p>
                    <p className="font-heading text-2xl font-bold text-white">
                      {area.city}, {area.abbr}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
          <p className="mt-4 text-sm text-slate-500">
            {services.length} services across both metros. {site.remoteNote}
          </p>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
