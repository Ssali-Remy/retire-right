"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { Icon } from "./icons";

const FAQS = [
  {
    q: "When is the right time to start planning for retirement?",
    a: "The best time is now — whatever your age. Young professionals benefit most from compounding, while those closer to retirement gain clarity and confidence. We tailor our guidance to exactly where you are today.",
  },
  {
    q: "Do I need a lot of money to work with Retire Right Advisory?",
    a: "Not at all. We work with people across every income level and life stage. Our goal is to help you make the most of what you have and build a confident, realistic path forward.",
  },
  {
    q: "What makes your approach different?",
    a: "We plan for your whole retirement — not just your finances. Alongside investment and income strategies, we help you prepare socially, physically, and emotionally so your next chapter is genuinely fulfilling.",
  },
  {
    q: "Can you help organizations support their employees?",
    a: "Yes. Our corporate programs include retirement preparation workshops, financial wellness seminars, transition planning, and pre-retirement coaching designed to boost engagement and confidence across your team.",
  },
  {
    q: "Is the readiness quiz financial advice?",
    a: "The quiz offers a helpful snapshot and personalized suggestions, but it isn't formal financial advice. For a tailored strategy, book a consultation with one of our advisors.",
  },
  {
    q: "How do consultations work?",
    a: "Start by booking a free introductory consultation. We'll discuss your goals, answer your questions, and outline how we can help — with no pressure and no obligation.",
  },
];

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-2xl border border-navy-100 bg-white transition-colors dark:border-white/10 dark:bg-navy-900/60">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-display text-base font-semibold text-navy-900 dark:text-white sm:text-lg">
          {q}
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
            open
              ? "rotate-45 border-emerald-400 bg-emerald-500 text-white"
              : "border-navy-200 text-navy-600 dark:border-white/15 dark:text-navy-200"
          }`}
        >
          <Icon.Plus className="h-4 w-4" />
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-[0.95rem] leading-relaxed text-navy-600 dark:text-navy-300">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative py-20 lg:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered"
          description="Everything you need to know about getting started with Retire Right Advisory."
        />
        <div className="mx-auto mt-12 grid max-w-3xl gap-3">
          {FAQS.map((f) => (
            <Item key={f.q} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
