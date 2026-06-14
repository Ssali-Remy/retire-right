import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Icon } from "./icons";

const FEATURES = [
  {
    icon: Icon.Users,
    title: "Networking Groups",
    desc: "Connect with peers who share your stage, goals, and curiosity.",
  },
  {
    icon: Icon.Compass,
    title: "Mentorship Programs",
    desc: "Give and receive wisdom across generations and industries.",
  },
  {
    icon: Icon.Gift,
    title: "Volunteer Opportunities",
    desc: "Channel your time and talent into causes that matter to you.",
  },
  {
    icon: Icon.Heart,
    title: "Group Activities",
    desc: "Fitness, arts, travel, and hobby circles to enjoy together.",
  },
  {
    icon: Icon.Sparkles,
    title: "Events & Meetups",
    desc: "Regular gatherings that turn acquaintances into lifelong friends.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "I retired worried about losing my sense of purpose. The community gave me a second family and a calendar full of joy.",
    name: "Margaret Nakato",
    role: "Retired head teacher, Mukono",
  },
  {
    quote:
      "The mentorship programme let me keep contributing. I coach young entrepreneurs in Kampala every week — it's the best part of my retirement.",
    name: "David Okello",
    role: "Former operations manager, Gulu",
  },
];

export default function Community() {
  return (
    <section
      id="community"
      className="relative bg-beige py-20 dark:bg-navy-900/40 lg:py-28"
    >
      <div className="container-px">
        <SectionHeading
          eyebrow="Community"
          title="Retirement is better, together"
          description="Belonging is one of the strongest predictors of a happy retirement. We help you build connections that last."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          {/* Feature cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 70}>
                <div className="card card-hover flex h-full items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                    <f.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="heading text-lg">{f.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-navy-600 dark:text-navy-300">
                      {f.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={350}>
              <div className="flex h-full flex-col justify-center rounded-3xl bg-navy-800 p-7 text-white">
                <p className="font-display text-4xl font-bold text-gold-300">
                  3,500+
                </p>
                <p className="mt-1 text-navy-100">
                  active members across our community groups
                </p>
              </div>
            </Reveal>
          </div>

          {/* Testimonials */}
          <div className="flex flex-col gap-5 lg:col-span-5">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 120} className="h-full">
                <figure className="card flex h-full flex-col justify-between">
                  <Icon.Quote className="h-8 w-8 text-gold-400" />
                  <blockquote className="mt-4 text-[1.05rem] leading-relaxed text-navy-800 dark:text-navy-100">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500/15 font-display text-sm font-bold text-emerald-700 dark:text-emerald-300">
                      {t.name.charAt(0)}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-navy-900 dark:text-white">
                        {t.name}
                      </p>
                      <p className="text-xs text-navy-500 dark:text-navy-300">
                        {t.role}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
