import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Icon } from "./icons";

const POSTS = [
  {
    category: "Retirement Planning",
    title: "The 5 milestones every retirement plan should hit by 50",
    excerpt:
      "A decade-by-decade checklist to keep your retirement on track — and what to do if you're behind.",
    read: "6 min read",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Investments",
    title: "Diversification after 55: protecting what you've built",
    excerpt:
      "How to shift from growth to preservation without sacrificing the income you'll need.",
    read: "5 min read",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Healthy Aging",
    title: "Why purpose may be the most powerful longevity habit",
    excerpt:
      "Research shows a strong sense of purpose can add years to your life. Here's how to find yours.",
    read: "7 min read",
    image:
      "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=800&q=80",
  },
];

const TOPICS = [
  "Retirement planning",
  "Investments",
  "Healthy aging",
  "Purpose & wellbeing",
  "Success stories",
  "Financial literacy",
];

export default function Blog() {
  return (
    <section id="blog" className="relative py-20 lg:py-28">
      <div className="container-px">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Insights & Blog"
            title="Guidance for every stage of the journey"
            description="Practical, optimistic articles on money, health, and living well after work."
          />
          <Reveal delay={120}>
            <a
              href="#contact"
              className="btn-ghost shrink-0 whitespace-nowrap"
            >
              View all articles
              <Icon.Arrow className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {POSTS.map((post, i) => (
            <Reveal key={post.title} delay={i * 90}>
              <article className="card card-hover group flex h-full flex-col overflow-hidden p-0">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy-800 backdrop-blur dark:bg-navy-900/90 dark:text-navy-100">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="heading text-lg leading-snug transition-colors group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                    {post.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-navy-600 dark:text-navy-300">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-navy-100 pt-4 dark:border-white/10">
                    <span className="text-xs font-medium text-navy-400 dark:text-navy-300">
                      {post.read}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                      Read
                      <Icon.Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="text-sm font-semibold text-navy-500 dark:text-navy-300">
              Explore topics:
            </span>
            {TOPICS.map((t) => (
              <span
                key={t}
                className="rounded-full border border-navy-100 bg-white px-4 py-1.5 text-sm font-medium text-navy-700 transition-colors hover:border-emerald-400 hover:text-emerald-600 dark:border-white/10 dark:bg-navy-900/60 dark:text-navy-200"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
