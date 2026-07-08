# luke-portfolio

Portfolio site for lukeshort.dev — built with Vite, React, TypeScript, React Router, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Structure

- `src/pages/Home.tsx` — landing page (hero, skills, latest posts)
- `src/pages/About.tsx` — bio, experience timeline, skills
- `src/pages/Blog.tsx` — blog index
- `src/pages/BlogPost.tsx` — individual post view (`/blog/:slug`)
- `src/data/posts.ts` — post content — **edit this to add/change posts**
- `src/components/Nav.tsx` / `Footer.tsx` — shared layout
- `src/index.css` — global styles / theme (see `:root` variables for colors)

## Placeholder content

Anything marked `[PLACEHOLDER]` in `About.tsx`, `Home.tsx`, and `posts.ts` was
generated as a stand-in because your LinkedIn profile didn't have bio/experience
details filled in. Swap those out with real copy whenever you're ready — search
the codebase for `PLACEHOLDER` to find every spot.

## Build

```bash
npm run build
npm run preview   # preview the production build locally
```

Output goes to `dist/`.

## Deploying to lukeshort.dev

Easiest options: [Vercel](https://vercel.com) or [Netlify](https://netlify.com) —
both auto-detect Vite, build with `npm run build`, and let you point your
custom domain (lukeshort.dev) at the deployment via DNS (usually a CNAME or
A record, configured in whichever registrar/DNS host you use for the domain).
