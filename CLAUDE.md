# Tanvir Anjum Sazid - Corporate Portfolio & Services Web Application

## Project Overview
Next.js 14+ App Router, TypeScript, and modern modular CSS design system for Tanvir Anjum Sazid's professional corporate portfolio, showcasing Banking Operations, Administrative Coordination, Customer Support, and Document Processing.

## Architecture
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript (`strict: true`)
- **Styling**: Modern CSS design system with CSS custom properties, executive dark/light themes, and glassmorphism.
- **Routing**: `src/app/`
  - `src/app/(root)/page.tsx` - Main Portfolio Homepage
  - `src/app/about/page.tsx` - Detailed Biography & Credentials
  - `src/app/services/page.tsx` - Corporate Services Catalog & Capabilities
  - `src/app/cases/page.tsx` - Case Studies & Portfolio Demonstrations
  - `src/app/insights/page.tsx` - Articles & Industry Insights
  - `src/app/contact/page.tsx` - Multi-step Interactive Contact System
  - `src/app/test/page.tsx` - Component Sandbox & Interactive Showcase
- **Components**: Modular atomic components located in `components/`
- **Data Stores**: TypeScript data models located in `src/data/`

## Development Commands
- `npm run dev` - Start local Next.js development server
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks
