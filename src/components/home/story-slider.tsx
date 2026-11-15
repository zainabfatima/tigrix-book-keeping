"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

import { storySlides } from "@/config/site";
import { cn } from "@/lib/utils";

const INTERVAL = 4800;

const kindTone: Record<(typeof storySlides)[number]["kind"], string> = {
  Problem: "bg-amber text-navy",
  Service: "bg-emerald text-navy",
  "Who we serve": "bg-white text-navy",
};

export function StorySlider() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [held, setHeld] = useState(false);
  const [hidden, setHidden] = useState(false);
  const count = storySlides.length;
  const slide = storySlides[index];
  const autoplayEnabled = !reduce && !paused;
  const playing = autoplayEnabled && !held && !hidden;

  const go = useCallback(
    (next: number) => {
      setIndex(((next % count) + count) % count);
    },
    [count],
  );

  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, INTERVAL);
    return () => window.clearInterval(id);
  }, [playing, count, index]);

  useEffect(() => {
    const onVisibility = () => setHidden(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  return (
    <div
      className="relative"
      role="region"
      aria-roledescription="carousel"
      aria-label="Problems, services, and who Tigrix serves"
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(false)}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          go(index + 1);
        }
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          go(index - 1);
        }
      }}
    >
      <div className="absolute -bottom-4 -right-4 hidden h-full w-full rounded-2xl bg-amber lg:block" />
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
        <AnimatePresence mode="sync">
          <motion.div
            key={slide.id}
            className="absolute inset-0"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src={slide.image.src}
              alt={slide.image.alt}
              fill
              priority={index === 0}
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/25 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-1 bg-white/20">
          {playing ? (
            <span
              key={slide.id}
              className="block h-full origin-left bg-emerald"
              style={{ animation: `story-progress ${INTERVAL}ms linear forwards` }}
            />
          ) : null}
        </div>

        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <p className={cn("inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em]", kindTone[slide.kind])}>
            {slide.kind}
            <span className="sr-only">
              , slide {index + 1} of {count}
            </span>
          </p>
          <p className="mt-2 max-w-sm font-heading text-lg font-bold leading-tight text-white sm:text-xl">{slide.title}</p>
          <div className="mt-3 flex items-center justify-between gap-3">
            <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Slides">
              {storySlides.map((item, itemIndex) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={itemIndex === index}
                  aria-label={`${item.kind}: ${item.title}`}
                  onClick={() => go(itemIndex)}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    itemIndex === index ? "w-6 bg-emerald" : "w-1.5 bg-white/55 hover:bg-white",
                  )}
                />
              ))}
            </div>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                className="grid size-8 place-items-center rounded-full bg-white/15 text-white backdrop-blur-sm transition hover:bg-white/25"
                onClick={() => go(index - 1)}
                aria-label="Previous slide"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                className="grid size-8 place-items-center rounded-full bg-white/15 text-white backdrop-blur-sm transition hover:bg-white/25"
                onClick={() => setPaused((value) => !value)}
                aria-pressed={!autoplayEnabled}
                aria-label={autoplayEnabled ? "Pause slideshow" : "Play slideshow"}
              >
                {autoplayEnabled ? <Pause className="size-3.5" /> : <Play className="size-3.5" />}
              </button>
              <button
                type="button"
                className="grid size-8 place-items-center rounded-full bg-white/15 text-white backdrop-blur-sm transition hover:bg-white/25"
                onClick={() => go(index + 1)}
                aria-label="Next slide"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
          <Link href={slide.href} className="mt-2 inline-flex text-sm font-semibold text-emerald hover:text-white">
            {slide.cta}
          </Link>
        </div>
      </div>
    </div>
  );
}
