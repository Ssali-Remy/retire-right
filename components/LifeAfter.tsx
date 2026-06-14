import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Icon } from "./icons";

const CARDS = [
  {
    icon: Icon.Book,
    title: "Lifelong Learning",
    items: ["Online courses", "Reading clubs", "Skills development"],
    accent: "from-emerald-500/20 to-emerald-500/0",
  },
  {
    icon: Icon.Briefcase,
    title: "Entrepreneurship",
    items: ["Small businesses", "Consulting", "Mentoring"],
    accent: "from-gold-400/25 to-gold-400/0",
  },
  {
    icon: Icon.Plane,
    title: "Travel & Experiences",
    items: ["Local & international travel", "Adventure & leisure"],
    accent: "from-navy-400/20 to-navy-400/0",
  },
  {
    icon: Icon.Gift,
    title: "Giving Back",
    items: ["Charity work", "Community service", "Coaching the next generation"],
    accent: "from-emerald-500/20 to-emerald-500/0",
  },
  {
    icon: Icon.Users,
    title: "Social Connections",
    items: ["Clubs & communities", "Family engagement", "Friendships & networking"],
    accent: "from-gold-400/25 to-gold-400/0",
  },
  {
    icon: Icon.Sparkles,
    title: "Personal Growth",
    items: ["New hobbies", "Creative pursuits", "Wellbeing rituals"],
    accent: "from-navy-400/20 to-navy-400/0",
  },
];

export default function LifeAfter() {
  return (
    <section id="life-after" className="relative py-20 lg:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Life After Retirement"
          title="A new chapter, full of possibility"
          description="Retirement isn't the end of your story — it's the start of your most meaningful chapter. Here's how our members are living it."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={i * 70}>
              <article className="card card-hover group relative h-full overflow-hidden">
                <div
                  className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${c.accent} blur-2xl transition-opacity duration-300 group-hover:opacity-100`}
                />
                <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-800 p-3.5 text-gold-300">
                  <c.icon className="h-7 w-7" />
                </span>
                <h3 className="heading relative mt-5 text-xl">{c.title}</h3>
                <ul className="relative mt-4 space-y-2.5">
                  {c.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-navy-700 dark:text-navy-200"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
