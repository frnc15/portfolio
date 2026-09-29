import Image from "next/image";
import type { Project } from "@/data/projects";

// Shows the real screenshot if `image` is set, otherwise a browser-frame placeholder.
export function Shot({ project }: { project: Project }) {
  if (project.image) {
    return <Image src={project.image} alt={`${project.title} screenshot`} width={1600} height={1000} className="w-full rounded-xl border border-line" />;
  }
  const c = project.color;
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-bg" role="img" aria-label={`${project.title} preview placeholder`}>
      <div className="flex gap-1.5 border-b border-line px-4 py-3">
        {[0, 1, 2].map((i) => <span key={i} className="h-2.5 w-2.5 rounded-full bg-line" />)}
      </div>
      <div className="grid aspect-[16/9] grid-cols-3 gap-3 p-5">
        <div className="col-span-2 rounded-lg" style={{ backgroundColor: `rgb(${c} / .18)` }} />
        <div className="space-y-3">
          <div className="h-1/2 rounded-lg" style={{ backgroundColor: `rgb(${c} / .5)` }} />
          <div className="h-[calc(50%-.75rem)] rounded-lg bg-line" />
        </div>
        <div className="col-span-3 flex items-end text-xs text-muted">Add a screenshot: set `image` in data/projects.ts</div>
      </div>
    </div>
  );
}

export function Tags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((t) => <li key={t} className="rounded-full border border-line px-3 py-1 text-xs text-muted">{t}</li>)}
    </ul>
  );
}

export function ProjectLinks({ project }: { project: Project }) {
  const cls = "relative z-10 font-medium underline decoration-accent decoration-2 underline-offset-4 hover:text-accent";
  return (
    <div className="flex gap-5 text-sm">
      {project.live && <a href={project.live} target="_blank" rel="noreferrer" className={cls}>Live demo</a>}
      {project.repo && <a href={project.repo} target="_blank" rel="noreferrer" className={cls}>GitHub</a>}
    </div>
  );
}
