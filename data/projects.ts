export type Project = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  role: string;
  summary: string;
  problem: string;
  approach: string;
  outcome: string;
  stack: string[];
  live?: string;
  repo?: string;
  image?: string; // e.g. "/projects/ledgerly.png" (file in /public)
  color: string; // "r g b" used for the placeholder mockup
};

// Placeholder content: replace with your own work.
export const projects: Project[] = [
  {
    slug: "ledgerly",
    title: "Ledgerly",
    tagline: "A finance dashboard that makes cash flow readable at a glance.",
    year: "2025",
    role: "Design & development",
    summary: "Dashboard for small businesses to track income, spending and upcoming invoices.",
    problem: "Owners were exporting bank data to spreadsheets each week because existing tools buried the numbers they needed.",
    approach: "I interviewed 8 owners, mapped the questions they ask each Monday, and designed the home screen around those answers. The UI is built with Next.js and a shared chart component set.",
    outcome: "Weekly report time dropped from about 40 minutes to 5 in user testing. Lighthouse accessibility score: 100.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Figma"],
    live: "https://example.com",
    repo: "https://github.com/yourname/ledgerly",
    color: "79 99 255",
  },
  {
    slug: "fieldnote",
    title: "Fieldnote",
    tagline: "An offline-first notes app for people who work outdoors.",
    year: "2024",
    role: "Product design & front-end",
    summary: "Installable web app for capturing notes, photos and locations without a connection.",
    problem: "Field researchers lost notes when signal dropped, and phone apps were too fiddly with gloves on.",
    approach: "Large touch targets, a single-tap capture flow, and a local-first data layer that syncs when a connection returns.",
    outcome: "Adopted by a 30-person research team. Zero lost notes reported over a full season.",
    stack: ["React", "TypeScript", "IndexedDB", "PWA", "Tailwind CSS"],
    live: "https://example.com",
    repo: "https://github.com/yourname/fieldnote",
    color: "16 163 127",
  },
  {
    slug: "kiosk-ui",
    title: "Kiosk UI",
    tagline: "A design system for a self-service ordering product.",
    year: "2024",
    role: "Design system lead",
    summary: "Tokens, components and documentation shared between design and engineering.",
    problem: "Three teams were shipping three versions of the same button.",
    approach: "Audited existing screens, defined tokens, then built matching Figma and React components with a documented contribution flow.",
    outcome: "60% fewer UI bugs in the first quarter and a much faster path from design to release.",
    stack: ["React", "Storybook", "Figma", "TypeScript"],
    repo: "https://github.com/yourname/kiosk-ui",
    color: "244 92 67",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
