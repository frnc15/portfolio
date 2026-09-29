import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import { ProjectLinks, Shot, Tags } from "@/components/ProjectVisuals";

type Props = { params: Promise<{ slug: string }> };

export const generateStaticParams = () => projects.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProject((await params).slug);
  return p ? { title: p.title, description: p.summary } : {};
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];

  const story = [
    ["The problem", project.problem],
    ["Approach", project.approach],
    ["Outcome", project.outcome],
  ];

  return (
    <article className="pb-16 pt-12 sm:pt-20">
      <Link href="/#work" className="text-sm text-muted hover:text-accent">Back to work</Link>
      <h1 className="mt-6 font-display text-5xl font-semibold tracking-tight sm:text-6xl">{project.title}</h1>
      <p className="mt-4 max-w-2xl text-xl text-muted">{project.summary}</p>

      <dl className="mt-10 grid gap-6 border-y border-line py-6 text-sm sm:grid-cols-3">
        <div><dt className="text-muted">Role</dt><dd className="mt-1 font-medium">{project.role}</dd></div>
        <div><dt className="text-muted">Year</dt><dd className="mt-1 font-medium">{project.year}</dd></div>
        <div><dt className="text-muted">Links</dt><dd className="mt-1"><ProjectLinks project={project} /></dd></div>
      </dl>

      <div className="mt-10"><Shot project={project} /></div>

      <div className="mt-14 space-y-10">
        {story.map(([title, text]) => (
          <section key={title} className="grid gap-3 md:grid-cols-[200px_1fr] md:gap-12">
            <h2 className="font-display text-xl font-semibold">{title}</h2>
            <p className="max-w-xl text-lg leading-relaxed">{text}</p>
          </section>
        ))}
        <section className="grid gap-3 md:grid-cols-[200px_1fr] md:gap-12">
          <h2 className="font-display text-xl font-semibold">Built with</h2>
          <Tags items={project.stack} />
        </section>
      </div>

      <Link href={`/projects/${next.slug}`} className="group mt-20 block border-t border-line pt-8">
        <span className="text-sm text-muted">Next project</span>
        <span className="mt-1 block font-display text-3xl font-semibold transition group-hover:text-accent">{next.title}</span>
      </Link>
    </article>
  );
}
