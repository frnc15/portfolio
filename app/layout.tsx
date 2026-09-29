import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import Header from "@/components/Header";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });
const body = Instrument_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: { default: `${site.name}: ${site.title}`, template: `%s | ${site.name}` },
  description: site.description,
};

// Applies saved theme and accent before first paint to avoid a flash.
const init = `try{var d=document.documentElement,t=localStorage.theme;if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme:dark)').matches))d.classList.add('dark');var a=localStorage.accent;if(a)d.style.setProperty('--accent',a)}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: init }} /></head>
      <body>
        <Header />
        <main className="mx-auto max-w-5xl px-5 sm:px-8">{children}</main>
        <footer className="mx-auto max-w-5xl px-5 py-10 text-sm text-muted sm:px-8">
          © {new Date().getFullYear()} {site.name}. Built with Next.js and Tailwind CSS.
        </footer>
      </body>
    </html>
  );
}
