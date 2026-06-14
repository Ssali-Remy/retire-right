import Image from "next/image";
import Reveal from "./Reveal";
import { Icon } from "./icons";

const STATS = [
  { value: "12k+", label: "People guided" },
  { value: "240+", label: "Workshops" },
  { value: "98%", label: "Client confidence" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-beige-light via-beige-light to-white dark:from-navy-950 dark:via-navy-950 dark:to-navy-900" />
        <div className="absolute -left-24 top-10 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl dark:bg-emerald-500/10" />
        <div className="absolute -right-24 top-40 h-[28rem] w-[28rem] rounded-full bg-gold-300/20 blur-3xl dark:bg-gold-400/10" />
      </div>

      <div className="container-px grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div className="flex flex-col items-start gap-7">
          <Reveal>
            <span className="eyebrow">
              <Icon.Sparkles className="h-4 w-4" />
              Retirement, reimagined
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="heading text-4xl leading-[1.05] sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
              Plan Today.{" "}
              <span className="relative whitespace-nowrap text-emerald-600 dark:text-emerald-400">
                Thrive Tomorrow.
                <svg
                  className="absolute -bottom-2 left-0 h-3 w-full text-gold-400"
                  viewBox="0 0 300 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9C70 3 230 3 298 9"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="max-w-xl text-lg leading-relaxed text-navy-600 dark:text-navy-200">
              Helping Ugandans and organisations build financial security
              beyond NSSF, discover purpose, and enjoy a fulfilling retirement.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="#quiz" className="btn-primary text-base">
                Start Planning
                <Icon.Arrow className="h-4 w-4" />
              </a>
              <a href="#contact" className="btn-ghost text-base">
                Book a Consultation
              </a>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <dl className="mt-2 flex flex-wrap gap-x-10 gap-y-4">
              {STATS.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <dt className="font-display text-2xl font-bold text-navy-900 dark:text-white">
                    {s.value}
                  </dt>
                  <dd className="text-sm text-navy-500 dark:text-navy-300">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Hero imagery */}
        <Reveal delay={200} className="relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="overflow-hidden rounded-[2rem] border border-white/40 shadow-glow dark:border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1644041852210-4873f99366be?auto=format&fit=crop&w=900&q=80"
                alt="A happy young Ugandan couple planning a confident future together"
                width={900}
                height={1080}
                priority
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating card: financial confidence */}
            <div className="absolute -bottom-6 -left-4 hidden animate-float rounded-2xl border border-navy-100 bg-white/90 p-4 shadow-soft backdrop-blur dark:border-white/10 dark:bg-navy-900/90 sm:flex sm:items-center sm:gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                <Icon.Growth className="h-6 w-6" />
              </span>
              <div>
                <p className="text-sm font-semibold text-navy-900 dark:text-white">
                  Retirement on track
                </p>
                <p className="text-xs text-navy-500 dark:text-navy-300">
                  Income plan secured
                </p>
              </div>
            </div>

            {/* Floating card: purpose */}
            <div
              className="absolute -right-3 top-8 hidden animate-float rounded-2xl border border-navy-100 bg-white/90 p-4 shadow-soft backdrop-blur dark:border-white/10 dark:bg-navy-900/90 md:flex md:items-center md:gap-3"
              style={{ animationDelay: "1.5s" }}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-400/20 text-gold-500 dark:text-gold-300">
                <Icon.Compass className="h-6 w-6" />
              </span>
              <div>
                <p className="text-sm font-semibold text-navy-900 dark:text-white">
                  A new chapter
                </p>
                <p className="text-xs text-navy-500 dark:text-navy-300">
                  Purpose &amp; wellbeing
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Trust strip */}
      <Reveal delay={120} className="container-px mt-16 lg:mt-24">
        <div className="flex flex-col items-center gap-5 rounded-2xl border border-navy-100/70 bg-white/60 px-6 py-6 text-center shadow-soft backdrop-blur dark:border-white/10 dark:bg-navy-900/40 sm:flex-row sm:justify-between sm:text-left">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-navy-500 dark:text-navy-300">
            Trusted by professionals, families &amp; forward-thinking organisations across Uganda
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-navy-400 dark:text-navy-300">
            {["Nile Holdings", "Pearl Microfinance", "Savannah Group", "Kabira HR Forum"].map(
              (name) => (
                <span
                  key={name}
                  className="font-display text-base font-semibold tracking-tight opacity-80"
                >
                  {name}
                </span>
              )
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
