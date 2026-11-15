import Link from "next/link";

import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="bg-[linear-gradient(160deg,#0F1E3D,#12344a_60%,#0f766e)] py-24 text-white">
      <Container className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">404</p>
        <h1 className="mt-3 font-heading text-4xl font-bold text-white sm:text-5xl">This page is not on the job.</h1>
        <p className="mt-4 text-lg text-slate-200">
          The link may be outdated. The books, the services, and the request form are still right where you left them.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/">Back home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/request-service">Request Service</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
