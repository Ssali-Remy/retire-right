"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { Icon } from "./icons";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setDone(true);
    setEmail("");
  };

  return (
    <section className="relative py-12 lg:py-16">
      <div className="container-px">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-600 to-emerald-700 p-8 text-center shadow-glow sm:p-12">
            <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-gold-400/20 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

            <div className="relative mx-auto max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                <Icon.Mail className="h-4 w-4" />
                Newsletter
              </span>
              <h2 className="font-display mt-4 text-3xl font-bold text-white sm:text-4xl">
                Insights for a richer retirement
              </h2>
              <p className="mt-3 text-emerald-50">
                Monthly tips on money, health, and purpose — thoughtful, never
                spammy. Join thousands planning their best years.
              </p>

              {done ? (
                <div className="mx-auto mt-7 inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3.5 font-semibold text-emerald-700">
                  <Icon.Check className="h-5 w-5" />
                  You&apos;re subscribed — welcome aboard!
                </div>
              ) : (
                <form
                  onSubmit={submit}
                  className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row"
                >
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    className="w-full rounded-full border border-white/30 bg-white/15 px-5 py-3.5 text-white placeholder-emerald-100 outline-none transition focus:border-white focus:bg-white/25"
                  />
                  <button type="submit" className="btn-gold shrink-0">
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
