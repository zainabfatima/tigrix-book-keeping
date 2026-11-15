import type { Metadata } from "next";

import { RequestForm } from "@/components/forms/request-form";
import { Container } from "@/components/shared/container";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Request Service",
  description:
    "Request bookkeeping from Tigrix LLC. Share your business, software, and how far behind the books are. Construction and every other industry welcome.",
};

export default function RequestServicePage() {
  return (
    <section className="bg-[linear-gradient(180deg,#0F1E3D_0%,#0F1E3D_220px,#F8FAFC_220px)] py-14">
      <Container className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">Request service</p>
        <h1 className="mt-2 font-heading text-4xl font-bold text-white">Tell us about the books.</h1>
        <p className="mt-3 max-w-2xl text-slate-200">
          Four short steps. Construction is listed first. {site.responseTime}
        </p>
        <p className="mt-3 max-w-2xl text-sm text-amber/90">
          Demo only: this form validates and logs your answers in the browser console. It does not store or email them.
        </p>
        <div className="mt-8">
          <RequestForm />
        </div>
      </Container>
    </section>
  );
}
