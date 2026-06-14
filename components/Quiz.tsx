"use client";

import { useMemo, useState } from "react";
import SectionHeading from "./SectionHeading";
import { Icon } from "./icons";

type Option = { label: string; value: number; interest?: string };
type Question = { id: string; prompt: string; options: Option[] };

const QUESTIONS: Question[] = [
  {
    id: "stage",
    prompt: "Where are you on your retirement journey?",
    options: [
      { label: "Just starting my career", value: 1 },
      { label: "Mid-career, planning ahead", value: 2 },
      { label: "Approaching retirement", value: 3 },
      { label: "Recently retired", value: 4 },
    ],
  },
  {
    id: "savings",
    prompt: "How would you describe your retirement savings?",
    options: [
      { label: "Only my NSSF, nothing extra", value: 0 },
      { label: "NSSF plus a little on the side", value: 1 },
      { label: "I save consistently each month", value: 2 },
      { label: "I'm well ahead of plan", value: 3 },
    ],
  },
  {
    id: "income",
    prompt: "Do you have a clear retirement income strategy?",
    options: [
      { label: "Not at all", value: 0 },
      { label: "A rough idea", value: 1 },
      { label: "A solid plan", value: 2 },
      { label: "A detailed, tested plan", value: 3 },
    ],
  },
  {
    id: "purpose",
    prompt: "What excites you most about life after work?",
    options: [
      { label: "Learning new skills", value: 2, interest: "Lifelong Learner" },
      { label: "Travel & adventure", value: 2, interest: "Explorer" },
      { label: "Starting something of my own", value: 2, interest: "Builder" },
      { label: "Giving back & mentoring", value: 2, interest: "Giver" },
    ],
  },
  {
    id: "wellness",
    prompt: "How is your focus on health and wellbeing?",
    options: [
      { label: "I rarely prioritize it", value: 0 },
      { label: "I'm trying to improve", value: 1 },
      { label: "It's a regular habit", value: 2 },
      { label: "It's central to my life", value: 3 },
    ],
  },
];

const INTEREST_SUGGESTIONS: Record<
  string,
  { tagline: string; activities: string[] }
> = {
  "Lifelong Learner": {
    tagline:
      "You're energized by growth. Retirement is your chance to finally dive deep.",
    activities: [
      "Enroll in online courses & reading clubs",
      "Pursue a long-postponed certification",
      "Teach a skill at a community center",
    ],
  },
  Explorer: {
    tagline:
      "The world is calling. Your next chapter is full of new horizons.",
    activities: [
      "Plan local and international travel",
      "Join adventure & leisure groups",
      "Document your journeys creatively",
    ],
  },
  Builder: {
    tagline:
      "You've got more to create. Channel your experience into something new.",
    activities: [
      "Launch a small business or consultancy",
      "Mentor founders or freelance part-time",
      "Turn a hobby into a side venture",
    ],
  },
  Giver: {
    tagline:
      "Purpose flows through service. Your impact can grow in retirement.",
    activities: [
      "Volunteer with causes you love",
      "Coach younger generations",
      "Join community service initiatives",
    ],
  },
};

function readiness(score: number, max: number) {
  const pct = Math.round((score / max) * 100);
  if (pct >= 75)
    return {
      pct,
      label: "Thriving & On Track",
      color: "text-emerald-600 dark:text-emerald-400",
      ring: "#2E8B57",
      note: "You're in a strong position. Let's optimize and protect what you've built.",
    };
  if (pct >= 45)
    return {
      pct,
      label: "Building Momentum",
      color: "text-gold-500 dark:text-gold-300",
      ring: "#D4AF37",
      note: "You've made meaningful progress. A focused plan will accelerate you.",
    };
  return {
    pct,
    label: "Early Days — Big Opportunity",
    color: "text-navy-700 dark:text-navy-100",
    ring: "#3d5d87",
    note: "The best time to start is now. Small steps today create big security later.",
  };
}

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Option>>({});

  const total = QUESTIONS.length;
  const current = QUESTIONS[step];
  const done = step >= total;

  const maxScore = useMemo(
    () =>
      QUESTIONS.reduce(
        (sum, q) => sum + Math.max(...q.options.map((o) => o.value)),
        0
      ),
    []
  );

  const score = useMemo(
    () => Object.values(answers).reduce((sum, o) => sum + o.value, 0),
    [answers]
  );

  const interest = answers["purpose"]?.interest ?? "Lifelong Learner";
  const result = readiness(score, maxScore);
  const suggestion = INTEREST_SUGGESTIONS[interest];

  const choose = (opt: Option) => {
    setAnswers((prev) => ({ ...prev, [current.id]: opt }));
    setStep((s) => s + 1);
  };

  const restart = () => {
    setAnswers({});
    setStep(0);
  };

  const progress = Math.round((Math.min(step, total) / total) * 100);
  const circumference = 2 * Math.PI * 52;

  return (
    <section id="quiz" className="relative py-20 lg:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Retirement Readiness Quiz"
          title="See where you stand in two minutes"
          description="Answer five quick questions for a personalized readiness snapshot and lifestyle suggestions tailored to what excites you."
        />

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="card relative overflow-hidden p-7 sm:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-400/10 blur-2xl" />

            {!done ? (
              <div className="relative">
                {/* Progress */}
                <div className="mb-7 flex items-center justify-between gap-4">
                  <span className="text-sm font-semibold text-navy-500 dark:text-navy-300">
                    Question {step + 1} of {total}
                  </span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-navy-100 dark:bg-white/10">
                    <div
                      className="h-full rounded-full bg-emerald-500 transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                <h3 className="heading text-2xl sm:text-[1.7rem]">
                  {current.prompt}
                </h3>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {current.options.map((opt) => {
                    const active = answers[current.id]?.label === opt.label;
                    return (
                      <button
                        key={opt.label}
                        onClick={() => choose(opt)}
                        className={`group flex items-center justify-between gap-3 rounded-2xl border px-5 py-4 text-left text-[0.95rem] font-medium transition-all duration-200 ${
                          active
                            ? "border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
                            : "border-navy-100 bg-white text-navy-800 hover:-translate-y-0.5 hover:border-emerald-400 hover:shadow-soft dark:border-white/10 dark:bg-navy-900/60 dark:text-navy-100"
                        }`}
                      >
                        {opt.label}
                        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-navy-200 text-navy-400 transition-colors group-hover:border-emerald-400 group-hover:text-emerald-500 dark:border-white/15">
                          <Icon.Arrow className="h-4 w-4" />
                        </span>
                      </button>
                    );
                  })}
                </div>

                {step > 0 && (
                  <button
                    onClick={() => setStep((s) => Math.max(0, s - 1))}
                    className="mt-6 text-sm font-semibold text-navy-500 underline-offset-4 hover:text-emerald-600 hover:underline dark:text-navy-300"
                  >
                    ← Back
                  </button>
                )}
              </div>
            ) : (
              <div className="relative animate-fade-in">
                <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-8">
                  {/* Score ring */}
                  <div className="relative h-36 w-36 shrink-0">
                    <svg className="h-full w-full -rotate-90" viewBox="0 0 120 120">
                      <circle
                        cx="60"
                        cy="60"
                        r="52"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="10"
                        className="text-navy-100 dark:text-white/10"
                      />
                      <circle
                        cx="60"
                        cy="60"
                        r="52"
                        fill="none"
                        stroke={result.ring}
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={
                          circumference - (result.pct / 100) * circumference
                        }
                        style={{ transition: "stroke-dashoffset 1s ease" }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="font-display text-3xl font-bold text-navy-900 dark:text-white">
                        {result.pct}%
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wide text-navy-400 dark:text-navy-300">
                        ready
                      </span>
                    </div>
                  </div>

                  <div className="text-center sm:text-left">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-400 dark:text-navy-300">
                      Your readiness
                    </p>
                    <h3 className={`heading mt-1 text-2xl ${result.color}`}>
                      {result.label}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-navy-600 dark:text-navy-300">
                      {result.note}
                    </p>
                  </div>
                </div>

                {/* Interest profile */}
                <div className="mt-8 rounded-2xl border border-gold-200 bg-gold-50 p-6 dark:border-gold-400/20 dark:bg-gold-400/5">
                  <div className="flex items-center gap-2">
                    <Icon.Sparkles className="h-5 w-5 text-gold-500" />
                    <p className="text-sm font-semibold text-navy-800 dark:text-navy-100">
                      Your lifestyle profile:{" "}
                      <span className="text-gold-600 dark:text-gold-300">
                        The {interest}
                      </span>
                    </p>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600 dark:text-navy-300">
                    {suggestion.tagline}
                  </p>
                  <ul className="mt-4 grid gap-2.5 sm:grid-cols-3">
                    {suggestion.activities.map((a) => (
                      <li
                        key={a}
                        className="flex items-start gap-2 rounded-xl bg-white/70 px-3 py-2.5 text-xs font-medium text-navy-700 dark:bg-white/5 dark:text-navy-200"
                      >
                        <Icon.Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a href="#contact" className="btn-primary flex-1">
                    Get my personalized plan
                    <Icon.Arrow className="h-4 w-4" />
                  </a>
                  <button onClick={restart} className="btn-ghost">
                    Retake quiz
                  </button>
                </div>
                <p className="mt-4 text-center text-xs text-navy-400 dark:text-navy-400">
                  This snapshot is for guidance only and isn&apos;t financial advice.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
