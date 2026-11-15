import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";

export function CtaBanner({
  title = "Ready for books you can actually use?",
  lede = "Tell us where the file stands. Construction companies and every other business get the same reply: within 1 business day.",
}: {
  title?: string;
  lede?: string;
}) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <Container className="relative overflow-hidden rounded-2xl bg-navy px-6 py-12 text-white shadow-[0_24px_60px_-32px_rgba(15,30,61,0.8)] sm:px-10">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(16,185,129,0.22),transparent_42%,rgba(245,158,11,0.18))]" />
        <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">Request service</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-white">{title}</h2>
            <p className="mt-3 text-slate-200">{lede}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/request-service">Request Service</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
