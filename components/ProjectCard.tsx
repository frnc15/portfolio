import Link from "next/link";
import type { Project } from "@/data/projects";
import { ProjectLinks, Shot, Tags } from "./ProjectVisuals";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col gap-5">
      <div className="transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-accent/10">
        <Shot project={project} />
      </div>
      <div className="space-y-3">
        <h3 className="font-display text-2xl font-semibold tracking-tight">
          {/* Stretched link makes the whole card clickable without nesting anchors */}
          <Link href={`/projects/${project.slug}`} className="after:absolute after:inset-0">{project.title}</Link>
        </h3>
        <p className="text-muted">{project.tagline}</p>
        <Tags items={project.stack} />
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}
