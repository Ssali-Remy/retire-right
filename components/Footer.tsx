import { Icon } from "./icons";

const COLUMNS = [
  {
    title: "Services",
    links: [
      { label: "Retirement Planning", href: "#services" },
      { label: "Investment Advisory", href: "#services" },
      { label: "Lifestyle Assessment", href: "#services" },
      { label: "Corporate Programs", href: "#services" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Community", href: "#community" },
      { label: "Wellness", href: "#wellness" },
      { label: "Impact", href: "#impact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#blog" },
      { label: "Readiness Quiz", href: "#quiz" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-navy-100 bg-beige-light pt-16 dark:border-white/10 dark:bg-navy-950">
      <div className="container-px">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_repeat(3,1fr)]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-800">
                <Icon.Growth className="h-5 w-5 text-gold-300" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-base font-bold tracking-tight text-navy-900 dark:text-white">
                  Retire Right
                </span>
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-400">
                  Advisory
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-600 dark:text-navy-300">
              Helping Ugandans and organisations build financial security,
              discover purpose, and enjoy a fulfilling retirement. Based in
              Kampala, serving all of Uganda.
            </p>
            <div className="mt-6 flex gap-2.5">
              {["LinkedIn", "Instagram", "Facebook", "YouTube"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-200 text-xs font-semibold text-navy-600 transition-colors hover:border-emerald-400 hover:text-emerald-600 dark:border-white/15 dark:text-navy-200"
                >
                  {s.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-navy-900 dark:text-white">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-navy-600 transition-colors hover:text-emerald-600 dark:text-navy-300 dark:hover:text-emerald-400"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-navy-100 py-7 dark:border-white/10 sm:flex-row">
          <p className="text-sm text-navy-500 dark:text-navy-400">
            © {new Date().getFullYear()} Retire Right Advisory. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-navy-500 dark:text-navy-400">
            <a href="#" className="hover:text-emerald-600 dark:hover:text-emerald-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-emerald-600 dark:hover:text-emerald-400">
              Terms of Service
            </a>
            <a href="#" className="hover:text-emerald-600 dark:hover:text-emerald-400">
              Disclosures
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
