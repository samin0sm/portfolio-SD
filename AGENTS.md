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
