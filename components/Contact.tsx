"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Icon } from "./icons";

const CONTACT_DETAILS = [
  {
    icon: Icon.Phone,
    label: "Call us",
    value: "+256 312 200 145",
    href: "tel:+256312200145",
  },
  {
    icon: Icon.Mail,
    label: "Email us",
    value: "hello@retireright.co.ug",
    href: "mailto:hello@retireright.co.ug",
  },
  {
    icon: Icon.Pin,
    label: "Visit us",
    value: "Rwenzori Towers, Nakasero, Kampala, Uganda",
    href: "#",
  },
];

const SOCIALS = ["LinkedIn", "Instagram", "Facebook", "YouTube"];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28">
      <div className="container-px">
        <div className="overflow-hidden rounded-[2.5rem] border border-navy-100 bg-white shadow-soft dark:border-white/10 dark:bg-navy-900/60">
          <div className="grid lg:grid-cols-[1fr_1.1fr]">
            {/* Left: info / CTA */}
            <div className="relative overflow-hidden bg-navy-800 p-8 text-white sm:p-12">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-emerald-500/25 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-gold-400/15 blur-3xl" />

              <div className="relative">
                <span className="eyebrow border-white/20 bg-white/10 text-emerald-200">
                  Get in touch
                </span>
                <h2 className="font-display mt-5 text-3xl font-bold leading-tight sm:text-4xl">
                  Your best years deserve the right plan.
                </h2>
                <p className="mt-3 text-lg text-emerald-100">
                  Start preparing today.
                </p>

                <div className="mt-9 space-y-5">
                  {CONTACT_DETAILS.map((d) => (
                    <a
                      key={d.label}
                      href={d.href}
                      className="group flex items-start gap-4"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-gold-300 transition-colors group-hover:bg-emerald-500/30">
                        <d.icon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
                          {d.label}
                        </span>
                        <span className="text-[0.95rem] font-medium text-white">
                          {d.value}
                        </span>
                      </span>
                    </a>
                  ))}
                </div>

                <div className="mt-9">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
                    Follow us
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2.5">
                    {SOCIALS.map((s) => (
                      <a
                        key={s}
                        href="#"
                        className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-gold-300 hover:text-gold-300"
                      >
                        {s}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: booking form */}
            <div className="p-8 sm:p-12">
              <Reveal>
                <SectionHeading
                  align="left"
                  title="Book a consultation"
                  description="Tell us a little about you and we'll be in touch within one business day."
                />
              </Reveal>

              {sent ? (
                <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl border border-emerald-200 bg-emerald-500/10 p-10 text-center dark:border-emerald-500/30">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white">
                    <Icon.Check className="h-7 w-7" />
                  </span>
                  <h3 className="heading text-xl">Thank you!</h3>
                  <p className="max-w-sm text-sm text-navy-600 dark:text-navy-300">
                    Your request is on its way. One of our advisors will reach
                    out shortly to schedule your free consultation.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="text-sm font-semibold text-emerald-600 hover:underline dark:text-emerald-400"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} className="mt-8 grid gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Full name" id="name" type="text" placeholder="Jane Doe" required />
                    <Field label="Email" id="email" type="email" placeholder="jane@email.com" required />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Phone" id="phone" type="tel" placeholder="+256 7XX XXX XXX" />
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="interest" className="text-sm font-semibold text-navy-700 dark:text-navy-200">
                        I&apos;m interested in
                      </label>
                      <select
                        id="interest"
                        className="rounded-xl border border-navy-200 bg-beige-light px-4 py-3 text-navy-800 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30 dark:border-white/15 dark:bg-navy-950 dark:text-white"
                      >
                        <option>Retirement Planning</option>
                        <option>Investment Advisory</option>
                        <option>Lifestyle & Interest Assessment</option>
                        <option>Corporate Programs</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-sm font-semibold text-navy-700 dark:text-navy-200">
                      How can we help?
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us about your goals…"
                      className="resize-none rounded-xl border border-navy-200 bg-beige-light px-4 py-3 text-navy-800 outline-none transition placeholder:text-navy-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30 dark:border-white/15 dark:bg-navy-950 dark:text-white"
                    />
                  </div>
                  <button type="submit" className="btn-primary mt-1 w-full text-base">
                    Request my consultation
                    <Icon.Arrow className="h-4 w-4" />
                  </button>
                  <p className="text-center text-xs text-navy-400 dark:text-navy-400">
                    We respect your privacy. Your details are never shared.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  type,
  placeholder,
  required,
}: {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-navy-700 dark:text-navy-200">
        {label}
        {required && <span className="text-emerald-500"> *</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="rounded-xl border border-navy-200 bg-beige-light px-4 py-3 text-navy-800 outline-none transition placeholder:text-navy-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30 dark:border-white/15 dark:bg-navy-950 dark:text-white"
      />
    </div>
  );
}
