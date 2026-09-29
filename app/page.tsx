import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export default function Home() {
  return (
    <>
      <Hero />

      <Section id="about" title="About">
        <div className="max-w-xl space-y-4 text-lg leading-relaxed">
          {site.about.map((p) => <p key={p}>{p}</p>)}
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <dl className="divide-y divide-line">
          {site.skills.map((s) => (
            <div key={s.group} className="grid gap-2 py-5 first:pt-0 sm:grid-cols-[140px_1fr]">
              <dt className="font-medium">{s.group}</dt>
              <dd className="text-muted">{s.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <section id="work" className="border-t border-line py-16">
        <h2 className="mb-10 font-display text-2xl font-semibold tracking-tight">Selected work</h2>
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
          {projects.map((p) => <ProjectCard key={p.slug} project={p} />)}
        </div>
      </section>

      <Section id="experience" title="Experience">
        <ol className="divide-y divide-line">
          {site.experience.map((e) => (
            <li key={e.role} className="grid gap-2 py-6 first:pt-0 sm:grid-cols-[140px_1fr]">
              <span className="text-sm text-muted">{e.period}</span>
              <div>
                <h3 className="font-medium">{e.role}, {e.company}</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-muted">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="contact" title="Contact">
        <p className="max-w-md text-lg">Have a project in mind? Write to <a href={`mailto:${site.email}`} className="underline decoration-accent decoration-2 underline-offset-4">{site.email}</a> or use the form.</p>
        <ContactForm />
        <ul className="mt-8 flex gap-6 text-sm">
          {site.socials.map((s) => <li key={s.label}><a href={s.href} target="_blank" rel="noreferrer" className="text-muted hover:text-accent">{s.label}</a></li>)}
        </ul>
      </Section>
    </>
  );
}
