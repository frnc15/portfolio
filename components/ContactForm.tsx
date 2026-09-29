"use client";
import { site } from "@/data/site";

const field = "w-full rounded-lg border border-line bg-transparent px-4 py-3 outline-none transition focus:border-accent";

// No backend needed: composes an email in the visitor's mail app.
export default function ContactForm() {
  return (
    <form
      className="mt-8 grid max-w-lg gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        const d = new FormData(e.currentTarget);
        const body = `${d.get("message")}\n\n${d.get("name")} (${d.get("email")})`;
        window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Hello from your portfolio")}&body=${encodeURIComponent(body)}`;
      }}
    >
      <input name="name" required placeholder="Your name" aria-label="Your name" className={field} />
      <input name="email" type="email" required placeholder="Your email" aria-label="Your email" className={field} />
      <textarea name="message" required rows={4} placeholder="What are you working on?" aria-label="Message" className={field} />
      <button className="justify-self-start rounded-full bg-accent px-6 py-3 font-medium text-white transition hover:brightness-110 active:scale-95">Send message</button>
    </form>
  );
}
