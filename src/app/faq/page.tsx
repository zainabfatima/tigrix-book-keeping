import type { Metadata } from "next";

import { FaqList } from "@/components/faq/faq-list";
import { CtaBanner } from "@/components/shared/cta-banner";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { faqs, images } from "@/config/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about Tigrix bookkeeping: construction and other industries, Atlanta and Detroit, QuickBooks, catch-up work, job costing, CPA handoff, and pricing.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions owners ask before they share a file."
        lede={`${faqs.length} short answers. If yours is not here, send a request and we will reply within 1 business day.`}
        image={images.laptopNotes}
      />
      <section className="py-16">
        <Container>
          <FaqList />
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
