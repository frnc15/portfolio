# Portfolio (Next.js + TypeScript + Tailwind)

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Make it yours
- `data/site.ts`: name, intro, about, skills, experience, socials, accent colours
- `data/projects.ts`: projects. Add a screenshot to `public/projects/` and set `image: "/projects/name.png"`
- Each project gets a page at `/projects/<slug>` automatically
- Colours live in `app/globals.css` (CSS variables); fonts in `app/layout.tsx`

Deploy on Vercel by importing the repo.
