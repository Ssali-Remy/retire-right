"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { Icon } from "./icons";

const METRICS = [
  { value: 12400, suffix: "+", label: "People guided", icon: Icon.Users },
  { value: 240, suffix: "+", label: "Workshops conducted", icon: Icon.Book },
  { value: 85, suffix: "+", label: "Organizations served", icon: Icon.Briefcase },
  { value: 60, suffix: "+", label: "Community initiatives", icon: Icon.Heart },
];

function useCountUp(target: number, run: boolean, duration = 1600) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!run) return;
    let frame: number;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, run, duration]);
  return value;
}

function Metric({
  value,
  suffix,
  label,
  icon: IconCmp,
  run,
}: (typeof METRICS)[number] & { run: boolean }) {
  const count = useCountUp(value, run);
  const display =
    value >= 1000 ? count.toLocaleString("en-US") : count.toString();
  return (
    <div className="flex flex-col items-center gap-3 rounded-3xl border border-white/10 bg-white/5 p-7 text-center backdrop-blur transition-transform duration-300 hover:-translate-y-1">
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-400/20 text-gold-300">
        <IconCmp className="h-6 w-6" />
      </span>
      <p className="font-display text-4xl font-bold text-white sm:text-[2.75rem]">
        {display}
        <span className="text-gold-300">{suffix}</span>
      </p>
      <p className="text-sm font-medium text-navy-100">{label}</p>
    </div>
  );
}

const STORIES = [
  {
    quote:
      "Their corporate workshop transformed how our employees see retirement. Engagement and confidence soared.",
    name: "Priya N.",
    role: "Head of People, Vantage HR",
  },
  {
    quote:
      "I went from anxious about money to excited about the future. I finally have a plan I understand and trust.",
    name: "Robert M.",
    role: "Early retiree",
  },
  {
    quote:
      "The team helped me turn 30 years of experience into a thriving consulting practice. Retirement felt like a promotion.",
    name: "Helen T.",
    role: "Independent consultant",
  },
];

export default function Impact() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRun(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="impact" className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-navy-900">
        <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-gold-400/15 blur-3xl" />
      </div>

      <div className="container-px">
        <SectionHeading
          eyebrow="Our Impact"
          title={<span className="text-white">Real change, measured in lives</span>}
          description={
            <span className="text-navy-100">
              Every number represents a person stepping into their next chapter
              with confidence, purpose, and security.
            </span>
          }
        />

        <div
          ref={ref}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {METRICS.map((m) => (
            <Metric key={m.label} {...m} run={run} />
          ))}
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {STORIES.map((s, i) => (
            <Reveal key={s.name} delay={i * 90}>
              <figure className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <Icon.Quote className="h-7 w-7 text-gold-300" />
                <blockquote className="mt-3 text-sm leading-relaxed text-navy-50">
                  “{s.quote}”
                </blockquote>
                <figcaption className="mt-5">
                  <p className="text-sm font-semibold text-white">{s.name}</p>
                  <p className="text-xs text-navy-200">{s.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
