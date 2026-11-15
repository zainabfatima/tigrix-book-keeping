import Image from "next/image";

import { Container } from "@/components/shared/container";
import type { Photo } from "@/config/site";

export function PageHero({
  eyebrow,
  title,
  lede,
  image,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  image?: Photo;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#0F1E3D_0%,#12344a_58%,#0f766e_140%)]" />
      <Container className="relative grid items-center gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">{eyebrow}</p>
          <h1 className="mt-3 max-w-xl font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-8 text-slate-200">{lede}</p>
        </div>
        {image ? (
          <div className="relative">
            <div className="absolute -bottom-3 -right-3 hidden h-full w-full rounded-2xl bg-amber sm:block" />
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
