import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Icon } from "./icons";

const VALUES = [
  {
    icon: Icon.Shield,
    title: "Security",
    desc: "Financial foundations you can rely on through every stage of life.",
  },
  {
    icon: Icon.Growth,
    title: "Growth",
    desc: "Strategies that compound your wealth and your wellbeing over time.",
  },
  {
    icon: Icon.Compass,
    title: "Purpose",
    desc: "Helping you discover meaning and direction beyond your career.",
  },
  {
    icon: Icon.Heart,
    title: "Wellness",
    desc: "Health of body and mind as the cornerstone of a joyful retirement.",
  },
  {
    icon: Icon.Community,
    title: "Community",
    desc: "Belonging, connection, and friendships that enrich your years.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 lg:py-28">
      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] shadow-soft">
                <Image
                  src="https://images.unsplash.com/photo-1655720357872-ce227e4164ba?auto=format&fit=crop&w=900&q=80"
                  alt="A Retire Right Advisory consultant guiding Ugandan clients through their retirement plan"
                  width={900}
                  height={760}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-navy-100 bg-white p-5 shadow-glow dark:border-white/10 dark:bg-navy-900 sm:block">
                <p className="font-display text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                  20+
                </p>
                <p className="text-sm text-navy-500 dark:text-navy-300">
                  years of trusted guidance
                </p>
              </div>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="About Us"
              title="A trusted Ugandan partner for the most important chapter of your life"
              description="From Kampala to every corner of Uganda, Retire Right Advisory helps people prepare financially, socially, and physically for retirement — looking beyond NSSF to build a future where the years ahead feel like a beginning, not an ending."
            />

            <Reveal delay={120}>
              <div className="mt-8 rounded-2xl border-l-4 border-emerald-500 bg-emerald-500/5 p-6 dark:bg-emerald-500/10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">
                  Our Mission
                </p>
                <p className="mt-2 text-lg font-medium leading-relaxed text-navy-800 dark:text-navy-100">
                  To empower people to retire confidently and live meaningful,
                  healthy, and impactful lives.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 lg:mt-20">
          <Reveal>
            <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-navy-500 dark:text-navy-300">
              The values that guide everything we do
            </p>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 70}>
                <div className="card card-hover h-full">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800 text-gold-300">
                    <v.icon className="h-6 w-6" />
                  </span>
                  <h3 className="heading mt-5 text-lg">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600 dark:text-navy-300">
                    {v.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
