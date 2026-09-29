"use client";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

export default function Hero() {
  const [active, setActive] = useState(site.accents[0].rgb);

  useEffect(() => {
    const current = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim();
    if (current) setActive(current);
  }, []);

  const pick = (rgb: string) => {
    document.documentElement.style.setProperty("--accent", rgb);
    try { localStorage.accent = rgb; } catch {}
    setActive(rgb);
  };
  const delay = (n: number) => ({ animationDelay: `${n * 120}ms` });

  return (
    <section className="pb-20 pt-16 sm:pt-28">
      <p className="rise text-muted" style={delay(0)}>{site.name}, {site.title.toLowerCase()}</p>
      <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl">
        <span className="rise block" style={delay(1)}>Interfaces that feel</span>
        <span className="rise block text-accent" style={delay(2)}>obvious to use.</span>
      </h1>
      <p className="rise mt-8 max-w-xl text-lg leading-relaxed text-muted" style={delay(3)}>{site.intro}</p>
      <div className="rise mt-9 flex flex-wrap items-center gap-4" style={delay(4)}>
        <a href="#work" className="rounded-full bg-accent px-6 py-3 font-medium text-white transition hover:brightness-110 active:scale-95">View my work</a>
        <a href="#contact" className="rounded-full border border-line px-6 py-3 font-medium transition hover:border-accent">Get in touch</a>
      </div>
      <div className="rise mt-14 flex items-center gap-4 text-sm text-muted" style={delay(5)}>
        <span>Try the site in another colour</span>
        <div className="flex gap-2" role="radiogroup" aria-label="Accent colour">
          {site.accents.map((a) => (
            <button key={a.name} role="radio" aria-checked={active === a.rgb} aria-label={a.name} onClick={() => pick(a.rgb)}
              style={{ backgroundColor: `rgb(${a.rgb})` }}
              className={`h-7 w-7 rounded-full transition hover:scale-110 ${active === a.rgb ? "ring-2 ring-fg ring-offset-2 ring-offset-bg" : ""}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
