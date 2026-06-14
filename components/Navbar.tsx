"use client";

import { useEffect, useState } from "react";
import { Icon } from "./icons";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#community", label: "Community" },
  { href: "#wellness", label: "Wellness" },
  { href: "#impact", label: "Impact" },
  { href: "#blog", label: "Blog" },
];

function Logo() {
  return (
    <a href="#home" className="group flex items-center gap-2.5" aria-label="Retire Right Advisory home">
      <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-navy-800 shadow-soft transition-transform duration-300 group-hover:scale-105">
        <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-500/30 to-gold-400/30" />
        <svg viewBox="0 0 24 24" className="relative h-5 w-5 text-gold-300" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 17 9 11l4 4 8-8" />
          <path d="M15 4h6v6" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-base font-bold tracking-tight text-navy-900 dark:text-white">
          Retire Right
        </span>
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-400">
          Advisory
        </span>
      </span>
    </a>
  );
}

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("rra-theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-200 bg-white/70 text-navy-700 transition-all duration-300 hover:border-emerald-400 hover:text-emerald-600 dark:border-white/15 dark:bg-white/5 dark:text-gold-300 dark:hover:text-gold-200"
    >
      {dark ? <Icon.Sun className="h-5 w-5" /> : <Icon.Moon className="h-5 w-5" />}
    </button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-navy-100/70 bg-beige-light/85 backdrop-blur-xl dark:border-white/10 dark:bg-navy-950/85"
          : "bg-transparent"
      }`}
    >
      <nav className="container-px flex h-[4.5rem] items-center justify-between">
        <Logo />

        <div className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-navy-700 transition-colors duration-200 hover:bg-emerald-500/10 hover:text-emerald-700 dark:text-navy-100 dark:hover:text-emerald-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <a href="#contact" className="btn-primary hidden px-5 py-2.5 sm:inline-flex">
            Book a Consultation
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-200 bg-white/70 text-navy-800 dark:border-white/15 dark:bg-white/5 dark:text-white lg:hidden"
          >
            {open ? <Icon.Close className="h-5 w-5" /> : <Icon.Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-navy-100/70 bg-beige-light/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 dark:border-white/10 dark:bg-navy-950/95 lg:hidden ${
          open ? "max-h-[26rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-px flex flex-col gap-1 py-4">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium text-navy-700 transition-colors hover:bg-emerald-500/10 hover:text-emerald-700 dark:text-navy-100 dark:hover:text-emerald-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2 w-full"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </header>
  );
}
