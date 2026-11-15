"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

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
      "text-sm font-medium text-slate-200 transition hover:text-white",
      pathname === href && "text-amber",
    );

  return (
    <header className="sticky top-0 z-50">
      <div className="h-1 bg-gradient-to-r from-amber via-emerald to-amber" />
      <div className="border-b border-white/10 bg-navy/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link href="/" aria-label="Tigrix LLC home">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
            {mainNav.map((item) => (
              <Link key={item.href} href={item.href} className={linkClass(item.href)}>
                {item.label}
              </Link>
            ))}
            <div className="relative">
              <button
                type="button"
                className={cn(
                  "inline-flex items-center gap-1 text-sm font-medium text-slate-200 hover:text-white",
                  pathname.startsWith("/service-areas") && "text-amber",
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

          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/contact" className="text-sm font-medium text-slate-200 hover:text-white">
              Contact
            </Link>
            <Button asChild>
              <Link href="/request-service">Request Service</Link>
            </Button>
          </div>

          <button
            type="button"
            className="grid size-11 place-items-center rounded-xl text-white lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-x-0 bottom-16 top-[4.25rem] z-40 overflow-y-auto bg-navy px-4 py-6 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            <Link href="/" className="rounded-xl px-3 py-3 text-white">
              Home
            </Link>
            {mainNav.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-xl px-3 py-3 text-white">
                {item.label}
              </Link>
            ))}
            {areaLinks.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-xl px-3 py-3 text-slate-200">
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="rounded-xl px-3 py-3 text-white">
              Contact
            </Link>
            <Button asChild className="mt-4">
              <Link href="/request-service">Request Service</Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
