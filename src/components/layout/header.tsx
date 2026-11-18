"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";

import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { areas, mainNav, site } from "@/config/site";
import { cn } from "@/lib/utils";

const areaLinks = [
  { href: "/service-areas/atlanta", label: `${areas.atlanta.city}, ${areas.atlanta.abbr}` },
  { href: "/service-areas/detroit", label: `${areas.detroit.city}, ${areas.detroit.abbr}` },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    setAreasOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkClass = (href: string) =>
    cn(
      "text-sm font-medium text-navy transition hover:text-bronze",
      pathname === href && "text-bronze",
    );

  return (
    <header className="sticky top-0 z-50">
      <div className="h-1 bg-gradient-to-r from-amber via-emerald to-amber" />
      <div className="border-b border-black/10 bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-6">
          <Link href="/" aria-label={`${site.name} home`} className="shrink-0">
            <Logo tone="dark" />
          </Link>

          <nav className="hidden items-center gap-3 xl:gap-4 lg:flex" aria-label="Primary">
            {mainNav.map((item) => (
              <Link key={item.href} href={item.href} className={linkClass(item.href)}>
                {item.label}
              </Link>
            ))}
            <div className="relative">
              <button
                type="button"
                className={cn(
                  "inline-flex items-center gap-1 text-sm font-medium text-navy hover:text-bronze",
                  pathname.startsWith("/service-areas") && "text-bronze",
                )}
                aria-expanded={areasOpen}
                onClick={() => setAreasOpen((value) => !value)}
              >
                Areas
                <ChevronDown className={cn("size-4 transition", areasOpen && "rotate-180")} />
              </button>
              {areasOpen ? (
                <div className="absolute right-0 top-9 w-48 rounded-xl bg-white p-2 text-navy shadow-xl">
                  {areaLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-slate-50"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          </nav>

          <div className="hidden shrink-0 items-center gap-2 lg:flex">
            <Link href="/contact" className="px-1 text-sm font-medium text-navy hover:text-bronze">
              Contact
            </Link>
            <Button asChild variant="outlineNavy" className="shrink-0">
              <a href={site.phoneHref}>
                <Phone aria-hidden="true" />
                Call
                <span className="hidden font-semibold tracking-tight xl:inline">{site.phone}</span>
              </a>
            </Button>
            <Button asChild className="shrink-0">
              <Link href="/request-service">Request Service</Link>
            </Button>
          </div>

          <button
            type="button"
            className="grid size-11 place-items-center rounded-xl text-navy lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-x-0 bottom-[4.5rem] top-[5.25rem] z-40 overflow-y-auto bg-white px-4 py-6 md:bottom-0 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            <Link href="/" className="rounded-xl px-3 py-3 text-navy">
              Home
            </Link>
            {mainNav.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-xl px-3 py-3 text-navy">
                {item.label}
              </Link>
            ))}
            {areaLinks.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-xl px-3 py-3 text-slate-600">
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="rounded-xl px-3 py-3 text-navy">
              Contact
            </Link>
            <Button asChild variant="outlineNavy" size="lg" className="mt-4 w-full">
              <a href={site.phoneHref}>
                <Phone aria-hidden="true" />
                Call {site.phone}
              </a>
            </Button>
            <Button asChild size="lg" className="mt-3 w-full">
              <Link href="/request-service">Request Service</Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
