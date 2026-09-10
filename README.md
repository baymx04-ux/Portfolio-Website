# Junaid Kanwar — Portfolio

A precision-editorial personal portfolio for **Junaid Kanwar** (Kanwar Junaid Islam), Full-Stack Developer. Built with Next.js 14, TypeScript, and Tailwind CSS, featuring a hidden password-protected CMS for managing projects.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** — custom "Precision Editorial" design tokens (Newsreader, IBM Plex Sans, Space Mono)
- **JSON-backed project store** (`data/projects.json`)
- **Hidden admin CMS** at `/dashboard`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the site.

## Production Build

```bash
npm run build
npm start
```

## Admin CMS

The dashboard has no public link by design — navigate directly to `/dashboard`. The administrative passcode is configured in `src/app/api/auth/route.ts`; change it before deploying.

## Project Structure

- `src/app` — App Router pages, API handlers (`/api/auth`, `/api/projects`)
- `src/components` — Hero, About, Skills, Projects, Timeline, Contact, Navbar, Footer
- `src/lib` — TypeScript contracts, JSON storage helpers, seed data
- `data/projects.json` — live project store backing both the public site and the CMS

## Documentation

- `design.md` — full "Precision Editorial" design system reference
- `implementation_plan.md` — architecture and implementation notes