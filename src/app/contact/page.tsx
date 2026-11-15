import type { Metadata } from "next";

import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/shared/container";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Tigrix LLC about bookkeeping for construction companies and every other business in Atlanta, Detroit, or remote.",
};

export default function ContactPage() {
  return (
    <section className="py-16">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b45309]">Contact</p>
          <h1 className="mt-2 text-4xl font-bold">Send a note.</h1>
          <p className="mt-3 text-slate-600">
            For a full scope, the request form is the better start. Use this page for a shorter question.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-navy">
            <li>
              <a href={site.phoneHref} className="font-semibold">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="font-semibold">
                {site.email}
              </a>
            </li>
            <li>{site.hours}</li>
            <li>Atlanta, GA · Detroit, MI · Remote welcome</li>
          </ul>
          <p className="mt-4 text-xs text-slate-500">
            Phone and email above are placeholders until they are replaced in the site config. This form is a demo and does not send email.
          </p>
        </div>
        <ContactForm />
      </Container>
    </section>
  );
}
