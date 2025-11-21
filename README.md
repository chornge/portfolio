# Portfolio page

A modern portfolio built with Next.js 15, React 19, Tailwind CSS 4, shadcn/ui,
Framer Motion animations, and Radix primitives. It showcases hero, experience,
project, and contact sections tailored for UI engineers.

## Tech stack

- Next.js App Router with TypeScript
- Tailwind CSS 4 + `tailwindcss-animate`
- shadcn/ui component primitives
- Framer Motion + Embla carousel + Lucide icons
- Vercel Analytics and serverless API routes

## Getting started

```bash
pnpm install
pnpm dev
```

The site runs at `http://localhost:3000`. Use `pnpm lint` before committing and
`pnpm build && pnpm start` to validate a production build.

## Project structure

- `app/` – routing, layouts, metadata, API route for resume PDFs
- `components/` – feature sections and shared UI primitives (shadcn/ui based)
- `hooks/` & `lib/` – reusable utilities like toasts and viewport helpers
- `public/` – static assets (logos, PDF resume, placeholders)

## Deployment

Deploy the app to any platform that supports Next.js 15 (Vercel recommended).
Set environment variables as needed, run `pnpm build`, and serve with
`next start` or the platform’s native adapter.
