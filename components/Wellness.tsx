import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Icon } from "./icons";

const PILLARS = [
  {
    icon: Icon.Dumbbell,
    title: "Exercise Programs",
    desc: "Age-appropriate movement plans that keep you strong and mobile.",
  },
  {
    icon: Icon.Leaf,
    title: "Nutrition Guidance",
    desc: "Simple, sustainable eating habits for energy and longevity.",
  },
  {
    icon: Icon.Brain,
    title: "Mental Wellness",
    desc: "Practices that nurture clarity, connection, and resilience.",
  },
  {
    icon: Icon.Heart,
    title: "Stress Management",
    desc: "Tools to slow down, recharge, and savor everyday moments.",
  },
];

export default function Wellness() {
  return (
    <section id="wellness" className="relative py-20 lg:py-28">
      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Fitness & Wellness"
              title="A healthy body fuels a fulfilling retirement"
              description="Financial freedom means little without the health to enjoy it. We help you stay active, sharp, and well — for years to come."
            />

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {PILLARS.map((p, i) => (
                <Reveal key={p.title} delay={i * 70}>
                  <div className="flex h-full items-start gap-3.5 rounded-2xl border border-navy-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-soft dark:border-white/10 dark:bg-navy-900/60">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                      <p.icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-semibold text-navy-900 dark:text-white">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-navy-600 dark:text-navy-300">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <div className="mt-7 flex items-center gap-3 rounded-2xl bg-emerald-500/10 px-5 py-4">
                <Icon.Sparkles className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                <p className="text-sm font-medium text-navy-700 dark:text-navy-100">
                  Healthy living tips delivered monthly to every member.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={150} className="relative order-first lg:order-last">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="overflow-hidden rounded-[2rem] shadow-glow">
                <Image
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=80"
                  alt="Active older adults practicing wellness and staying healthy outdoors"
                  width={900}
                  height={1040}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -left-4 bottom-8 hidden rounded-2xl border border-navy-100 bg-white/90 p-4 shadow-soft backdrop-blur dark:border-white/10 dark:bg-navy-900/90 sm:block">
                <p className="font-display text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                  +9 yrs
                </p>
                <p className="text-xs text-navy-500 dark:text-navy-300">
                  active life expectancy*
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
