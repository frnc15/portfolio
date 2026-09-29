"use client";
import Link from "next/link";
import { useState } from "react";
import { site } from "@/data/site";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggleTheme = () => {
    const dark = document.documentElement.classList.toggle("dark");
    try { localStorage.theme = dark ? "dark" : "light"; } catch {}
  };

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="font-display text-lg font-semibold tracking-tight">{site.name}</Link>
        <nav aria-label="Main" className="hidden items-center gap-7 text-sm md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-muted transition-colors hover:text-fg">{l.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={toggleTheme} aria-label="Toggle light and dark theme"
            className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition hover:border-accent hover:text-fg">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 3v18" fill="currentColor" /><path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" /></svg>
          </button>
          <button onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Menu"
            className="grid h-9 w-9 place-items-center rounded-full border border-line md:hidden">
            <svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <nav aria-label="Mobile" className="border-t border-line px-5 py-3 md:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-lg">{l.label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}
