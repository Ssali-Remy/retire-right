import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const SITE_URL = "https://retirerightadvisory.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Retire Right Advisory — Plan Today. Thrive Tomorrow.",
    template: "%s | Retire Right Advisory",
  },
  description:
    "Retire Right Advisory is a Kampala-based firm helping Ugandans and organisations build financial security beyond NSSF, discover purpose, and enjoy a fulfilling retirement. Plan today, thrive tomorrow.",
  keywords: [
    "retirement planning Uganda",
    "NSSF retirement",
    "financial advisory Kampala",
    "investment advisory Uganda",
    "retirement readiness",
    "corporate retirement programs",
    "financial wellness Uganda",
    "life after retirement",
  ],
  authors: [{ name: "Retire Right Advisory" }],
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Retire Right Advisory — Plan Today. Thrive Tomorrow.",
    description:
      "Uganda's partner for building financial security beyond NSSF, discovering purpose, and enjoying a fulfilling retirement.",
    siteName: "Retire Right Advisory",
    locale: "en_UG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retire Right Advisory — Plan Today. Thrive Tomorrow.",
    description:
      "Uganda's partner for building financial security beyond NSSF and enjoying a fulfilling retirement.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF8F2" },
    { media: "(prefers-color-scheme: dark)", color: "#06101F" },
  ],
  width: "device-width",
  initialScale: 1,
};

// Prevents a flash of the wrong theme before hydration.
const themeScript = `
  (function () {
    try {
      var stored = localStorage.getItem('rra-theme');
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (stored === 'dark' || (!stored && prefersDark)) {
        document.documentElement.classList.add('dark');
      }
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jakarta.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-emerald-500 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
