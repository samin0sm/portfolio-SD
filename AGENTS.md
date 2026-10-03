# Agent Guidelines & Repository Structure

This repository is built with **Next.js App Router** and **TypeScript**.

### Directory Structure Convention:
- `components/` - Standalone reusable React components & section subcomponents
  - `components/about/` - Subcomponents for About page
  - `components/blog/` - Subcomponents for Insights/Blog page
  - `components/cases/` - Subcomponents for Case Studies/Projects page
  - `components/contact/` - Subcomponents for Multi-step Contact page
  - `components/contact/steps/` - Individual step components
  - `components/services/` - Subcomponents for Services page
- `public/` - Static assets, documents, fonts, images
  - `public/assets/about/`
  - `public/assets/blog/`
  - `public/assets/case-details/`
  - `public/assets/cases/`
  - `public/assets/contact/`
  - `public/assets/marquee_icons/`
  - `public/assets/services/`
  - `public/fonts/`
- `src/app/` - App router pages and layouts
- `src/data/` - Typed structured data modules for home, about, services, cases, and blog

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
