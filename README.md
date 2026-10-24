# Rabana Industries

Marketing website for Rabana Industries, a precision manufacturing company offering CNC machining, fabrication, assembly and lifecycle support.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white)

## Overview

An industrial, blueprint-styled site (dark by default, with a light theme) built around a quote-request funnel. Capabilities, industries, case studies and job listings are static data in `src/data/`, and there is no backend. The downloadable spec sheet in `public/` is a labelled placeholder.

## Pages & Features

| Route | Page | Highlights |
| --- | --- | --- |
| `/` | Home | Staggered hero with spec chips and a "System Overview" panel whose metrics update on a timer, capability and industry grids, count-up metrics, process timeline, case studies, certification strip, FAQ, quote CTA |
| `/capabilities` | Capabilities | Six services (CNC machining, fabrication, assembly & integration, rapid prototyping, maintenance & repair, logistics & supply) plus service pillars |
| `/industries` | Industries | Six sectors (automotive, aerospace, energy, construction, agriculture, defense) and program-support details |
| `/projects` | Projects | Eight case studies filterable by industry, with animated layout transitions |
| `/projects/:slug` | Project detail | Challenge, solution, results and capability tags for each case study |
| `/quality` | Quality & Safety | Certifications list, spec-sheet download, safety commitments and a QA-process accordion |
| `/careers` | Careers | Six job listings, benefits and an application form (UI only) |
| `/contact` | Contact | Quote request form (`/contact#quote`) with validation on blur and submit, business hours and emergency support |

`/quality`, `/careers` and `/projects/:slug` are lazy-loaded with `React.lazy`.

Site-wide:

- Desktop mega-menu under Capabilities (services and industries) and a slide-in mobile drawer, with a "Request a Quote" CTA throughout.
- Dark/light theme toggle. An inline script in `index.html` applies the saved theme before React loads, which avoids a flash of the wrong theme.
- Route progress bar, scroll-to-top, animated page transitions and parallax bands. Motion is reduced when `prefers-reduced-motion` is set.
- Rajdhani (display) and IBM Plex Sans (body) from Google Fonts. Colors are CSS-variable tokens so both themes share one Tailwind palette.
- Forms are front-end only. The quote form validates and shows a "Submitted" badge, and the careers form is a static layout. Nothing is sent anywhere.

## Tech Stack

- [React 19](https://react.dev) + TypeScript (strict mode), bundled with [Vite 7](https://vite.dev)
- [Tailwind CSS 3.4](https://tailwindcss.com) (class-based dark mode, CSS custom properties) with PostCSS and Autoprefixer
- [Framer Motion 12](https://motion.dev) for transitions, reveals, parallax and the animated hero diagram
- [React Router 7](https://reactrouter.com) (`BrowserRouter`)
- [React Icons](https://react-icons.github.io/react-icons/) (Feather set)
- ESLint 9 with `typescript-eslint`, `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh`

## Getting Started

Prerequisites: Node.js and npm.

```bash
npm install
npm run dev       # start the Vite dev server
npm run build     # type-check (tsc -b) and build to dist/
npm run preview   # serve the production build locally
npm run lint      # run ESLint
```

## Project Structure

```
public/                    # rabana-spec-sheet.txt (placeholder download), favicon
src/
├── App.tsx                # routes, page shell transitions, progress bar
├── main.tsx               # router + theme providers, theme toggle
├── index.css              # theme variables, blueprint textures, utilities
├── components/            # Navbar, Footer, Hero, QuoteForm, CaseStudyCard, Timeline, ...
├── context/               # ThemeContext (dark/light)
├── data/                  # capabilities.ts, industries.ts, caseStudies.ts, jobs.ts
├── hooks/                 # useParallax, usePrefersReducedMotion, useRouteProgress
└── pages/                 # Home, Capabilities, Industries, Projects, ProjectDetail, Quality, Careers, Contact
```

## Deployment

Production builds have been deployed to [Vercel](https://vercel.com) through its GitHub integration. No `vercel.json` is committed, so Vercel's Vite defaults apply: build with `npm run build` and serve `dist/`.

Routing happens client-side, so the host has to rewrite unknown paths to `index.html`. Otherwise a direct link to a route such as `/capabilities` returns a 404.

---

Built by [Awaiz Ahmed](https://github.com/4waiz) · Kanban Studios
