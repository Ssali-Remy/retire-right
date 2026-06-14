"use client";

import { useCallback, useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";
import { Icon } from "./icons";

const ITEMS = [
  {
    quote:
      "Retire Right Advisory gave me a plan I actually understand. For the first time, I feel genuinely excited about retiring — not afraid of it.",
    name: "Susan Nabukenya",
    role: "Marketing manager, Kampala · age 58",
    rating: 5,
  },
  {
    quote:
      "As a young professional, starting early felt overwhelming. They showed me how to grow my money beyond NSSF. I'm now years ahead of where I thought I'd be.",
    name: "Daniel Wasswa",
    role: "Software engineer, Ntinda · age 31",
    rating: 5,
  },
  {
    quote:
      "We rolled out their financial wellness programme across the company. Our staff finally feel supported in planning their futures.",
    name: "Amina Nalwoga",
    role: "HR Director, Nile Holdings",
    rating: 5,
  },
  {
    quote:
      "After 35 years in the civil service, I had no idea what came next. Their lifestyle assessment helped me start a farm I now love.",
    name: "George Byaruhanga",
    role: "Retired civil servant, Fort Portal · age 64",
    rating: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % ITEMS.length),
    []
  );
  const prev = () => setIndex((i) => (i - 1 + ITEMS.length) % ITEMS.length);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [paused, next]);

  const active = ITEMS[index];

  return (
    <section
      id="testimonials"
      className="relative bg-beige py-20 dark:bg-navy-900/40 lg:py-28"
    >
      <div className="container-px">
        <SectionHeading
          eyebrow="Testimonials"
          title="Stories of confidence and joy"
          description="From young professionals to happy retirees and organizations — hear from the people we've helped retire right."
        />

        <div
          className="mx-auto mt-12 max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="card relative overflow-hidden p-8 sm:p-12">
            <Icon.Quote className="h-10 w-10 text-gold-400" />

            <div key={index} className="animate-fade-in">
              <div className="mt-4 flex gap-1">
                {Array.from({ length: active.rating }).map((_, i) => (
                  <Icon.Star key={i} className="h-5 w-5 text-gold-400" />
                ))}
              </div>
              <blockquote className="mt-5 text-xl leading-relaxed text-navy-800 dark:text-navy-50 sm:text-2xl">
                “{active.quote}”
              </blockquote>
              <div className="mt-7 flex items-center gap-3.5">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 font-display text-lg font-bold text-emerald-700 dark:text-emerald-300">
                  {active.name.charAt(0)}
                </span>
                <div>
                  <p className="font-semibold text-navy-900 dark:text-white">
                    {active.name}
                  </p>
                  <p className="text-sm text-navy-500 dark:text-navy-300">
                    {active.role}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-2">
                {ITEMS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === index
                        ? "w-7 bg-emerald-500"
                        : "w-2.5 bg-navy-200 hover:bg-emerald-300 dark:bg-white/20"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-200 text-navy-700 transition-colors hover:border-emerald-400 hover:text-emerald-600 dark:border-white/15 dark:text-navy-100"
                >
                  <Icon.Arrow className="h-4 w-4 rotate-180" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-200 text-navy-700 transition-colors hover:border-emerald-400 hover:text-emerald-600 dark:border-white/15 dark:text-navy-100"
                >
                  <Icon.Arrow className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
