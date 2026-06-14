import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export const Icon = {
  Shield: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M12 3 4 6v6c0 5 3.5 7.5 8 9 4.5-1.5 8-4 8-9V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  Growth: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M3 17 9 11l4 4 8-8" />
      <path d="M15 4h6v6" />
    </svg>
  ),
  Compass: (p: IconProps) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </svg>
  ),
  Heart: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M12 20s-7-4.3-9.3-9A4.7 4.7 0 0 1 12 7a4.7 4.7 0 0 1 9.3 4c-2.3 4.7-9.3 9-9.3 9Z" />
    </svg>
  ),
  Community: (p: IconProps) => (
    <svg {...base} {...p}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16 6a3 3 0 0 1 0 6" />
      <path d="M18 14a6 6 0 0 1 3 5" />
    </svg>
  ),
  Wallet: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M3 7a2 2 0 0 1 2-2h13a1 1 0 0 1 1 1v2" />
      <path d="M3 7v10a2 2 0 0 0 2 2h14a1 1 0 0 0 1-1v-3" />
      <path d="M21 9v6h-4a3 3 0 0 1 0-6h4Z" />
    </svg>
  ),
  Chart: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M4 4v16h16" />
      <rect x="7" y="11" width="3" height="6" rx="1" />
      <rect x="12" y="7" width="3" height="10" rx="1" />
      <rect x="17" y="13" width="3" height="4" rx="1" />
    </svg>
  ),
  Sparkles: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M12 3v4M12 17v4M5 12H3M21 12h-2" />
      <path d="m7 7 1.5 1.5M16.5 16.5 18 18M7 18l1.5-1.5M16.5 8.5 18 7" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  Briefcase: (p: IconProps) => (
    <svg {...base} {...p}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
    </svg>
  ),
  Dumbbell: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M6.5 6.5 17.5 17.5" />
      <path d="M3 8l2-2 3 3-2 2-3-3Z" />
      <path d="M21 16l-2 2-3-3 2-2 3 3Z" />
      <path d="m8 16-2 2M16 8l2-2" />
    </svg>
  ),
  Leaf: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M5 19c0-8 6-13 14-13 0 8-5 14-13 14a6 6 0 0 1-1-1Z" />
      <path d="M5 19c3-4 6-6 10-8" />
    </svg>
  ),
  Brain: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-1 5 3 3 0 0 0 1 5 3 3 0 0 0 3 3V4Z" />
      <path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 1 5 3 3 0 0 1-1 5 3 3 0 0 1-3 3V4Z" />
    </svg>
  ),
  Book: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M4 5a2 2 0 0 1 2-2h10a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a2 2 0 0 0-2 2V5Z" />
      <path d="M4 19a2 2 0 0 1 2-2h11" />
    </svg>
  ),
  Plane: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M10 3 3 14l3 1 1 3 4-5 6 6 2-1L13 6l8-1-1-2-10 0Z" />
    </svg>
  ),
  Gift: (p: IconProps) => (
    <svg {...base} {...p}>
      <rect x="3" y="9" width="18" height="11" rx="1" />
      <path d="M3 13h18M12 9v11" />
      <path d="M12 9S10.5 3 8 5s4 4 4 4ZM12 9s1.5-6 4-4-4 4-4 4Z" />
    </svg>
  ),
  Users: (p: IconProps) => (
    <svg {...base} {...p}>
      <circle cx="8" cy="9" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M2 19a6 6 0 0 1 12 0M14.5 13a5 5 0 0 1 5.5 6" />
    </svg>
  ),
  Phone: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M6 3h3l1.5 5L8 9.5a11 11 0 0 0 6.5 6.5L16 14l5 1.5V19a2 2 0 0 1-2.2 2A16 16 0 0 1 3 5.2 2 2 0 0 1 5 3Z" />
    </svg>
  ),
  Mail: (p: IconProps) => (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
  Pin: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
  Check: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="m5 12 4 4L19 6" />
    </svg>
  ),
  Arrow: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  Plus: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  ),
  Star: (p: IconProps) => (
    <svg {...{ ...base, fill: "currentColor", stroke: "none" }} {...p}>
      <path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19l1-5.8L3.5 9.2l5.9-.9L12 3Z" />
    </svg>
  ),
  Quote: (p: IconProps) => (
    <svg {...{ ...base, fill: "currentColor", stroke: "none" }} {...p}>
      <path d="M7 7h4v6a4 4 0 0 1-4 4v-2a2 2 0 0 0 2-2H7V7Zm8 0h4v6a4 4 0 0 1-4 4v-2a2 2 0 0 0 2-2h-2V7Z" />
    </svg>
  ),
  Sun: (p: IconProps) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5 4 4M20 20l-1-1M19 5l1-1M4 20l1-1" />
    </svg>
  ),
  Moon: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M20 14a8 8 0 1 1-10-10 7 7 0 0 0 10 10Z" />
    </svg>
  ),
  Menu: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  ),
  Close: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  ),
};
