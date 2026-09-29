export default function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="grid gap-6 border-t border-line py-16 md:grid-cols-[200px_1fr] md:gap-12">
      <h2 className="font-display text-2xl font-semibold tracking-tight md:sticky md:top-24 md:self-start">{title}</h2>
      <div>{children}</div>
    </section>
  );
}
