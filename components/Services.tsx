import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Icon } from "./icons";

const SERVICES = [
  {
    icon: Icon.Wallet,
    title: "Retirement Planning",
    desc: "A clear roadmap from where you are to the retirement you imagine.",
    points: [
      "Define your retirement goals",
      "Build income beyond your NSSF benefits",
      "Prepare for life transitions",
      "Plan for long-term financial security",
    ],
    accent: "emerald",
  },
  {
    icon: Icon.Chart,
    title: "Investment Advisory",
    desc: "Grow and protect your wealth with disciplined, personalized guidance.",
    points: [
      "Wealth preservation & inflation protection",
      "Treasury bonds, unit trusts & shares",
      "Risk assessment & financial literacy",
      "Land, property & SACCO diversification",
    ],
    accent: "gold",
  },
  {
    icon: Icon.Compass,
    title: "Lifestyle & Interest Assessment",
    desc: "Discover what will make your retirement genuinely fulfilling.",
    points: [
      "Passions and hobbies",
      "Volunteer opportunities",
      "Entrepreneurship possibilities",
      "Personal development goals",
    ],
    accent: "navy",
  },
  {
    icon: Icon.Briefcase,
    title: "Corporate Retirement Programs",
    desc: "Help your people transition with confidence and clarity.",
    points: [
      "Employee retirement workshops",
      "Financial wellness seminars",
      "Transition planning",
      "Pre-retirement coaching",
    ],
    accent: "emerald",
  },
];

const accentClasses: Record<string, string> = {
  emerald: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
  gold: "bg-gold-400/20 text-gold-500 dark:text-gold-300",
  navy: "bg-navy-800 text-gold-300",
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-beige py-20 dark:bg-navy-900/40 lg:py-28"
    >
      <div className="container-px">
        <SectionHeading
          eyebrow="Our Services"
          title="Everything you need to retire right"
          description="Financial strategy, lifestyle design, and organizational support — woven together into one confident plan for the years ahead."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="card card-hover group flex h-full flex-col">
                <div className="flex items-start gap-4">
                  <span
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${accentClasses[s.accent]}`}
                  >
                    <s.icon className="h-7 w-7" />
                  </span>
                  <div>
                    <h3 className="heading text-xl">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-navy-600 dark:text-navy-300">
                      {s.desc}
                    </p>
                  </div>
                </div>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2.5 text-sm text-navy-700 dark:text-navy-200"
                    >
                      <Icon.Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-3xl bg-navy-800 p-8 text-center sm:flex-row sm:text-left lg:p-10">
            <div className="max-w-xl">
              <h3 className="font-display text-2xl font-bold text-white">
                Not sure where to begin?
              </h3>
              <p className="mt-2 text-navy-100">
                Take our interactive readiness quiz and get a personalized
                snapshot of your retirement preparedness in two minutes.
              </p>
            </div>
            <a href="#quiz" className="btn-gold shrink-0 text-base">
              Take the Quiz
              <Icon.Arrow className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
