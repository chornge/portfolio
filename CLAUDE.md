# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm install      # Install dependencies
pnpm dev          # Start dev server (localhost:3000)
pnpm build        # Production build
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

## Architecture

This is a **Next.js 15 portfolio site** for an Android Developer, deployed on Vercel.

**Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4, shadcn/ui (Radix primitives), Framer Motion

**Analytics:** PostHog (`lib/analytics.ts`), Vercel Analytics, Vercel Speed Insights

### Directory Structure

- `app/` - Next.js App Router: layouts, page, API routes, SEO (robots.ts, sitemap.ts)
- `components/` - React components
  - `ui/` - shadcn/ui primitives (button, card, badge, etc.)
  - `aceternity/` - Custom animation components (text effects, backgrounds)
  - Root level: Page sections (hero, about, skills, experience, projects, contact, footer)
- `hooks/` - Custom hooks (`use-mobile.ts` for 768px breakpoint, `use-toast.ts`)
- `lib/` - Utilities: `utils.ts` (cn function), `analytics.ts` (PostHog wrapper)
- `public/` - Static assets (images, resume PDF)

### Key Patterns

**Styling:** Tailwind CSS v4 with CSS variables for theming. Use `cn()` from `lib/utils.ts` to merge classes.

**Components:** shadcn/ui "new-york" style. Add new components via shadcn CLI.

**Animation:** Framer Motion with container/item variants pattern. Respects `prefers-reduced-motion`.

**Dark Mode:** Class-based (`.dark` on html), persisted via next-themes and localStorage.

**Analytics:** Typed events through `Analytics` object in `lib/analytics.ts`. Tracks section views, clicks, theme toggles.

### Configuration

- `components.json` - shadcn/ui config (style: new-york, path aliases)
- `next.config.mjs` - TypeScript build errors ignored, images unoptimized
- Path alias: `@/*` maps to project root
