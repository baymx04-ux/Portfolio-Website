# Junaid Kanwar — Portfolio

A precision-editorial personal portfolio for **Junaid Kanwar** (Kanwar Junaid Islam), Full-Stack Developer. Built with Next.js 15, TypeScript, and Tailwind CSS, backed by PostgreSQL (Neon) via Prisma, with email delivery through Resend. Deployable to Cloudflare Workers via OpenNext.

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS** — custom "Precision Editorial" design tokens (Newsreader, IBM Plex Sans, Space Mono)
- **PostgreSQL (Neon)** + **Prisma ORM** — project catalog persistence
- **Resend** — contact form email delivery (`/api/contact`)
- **Cloudflare Workers** — production runtime via `@opennextjs/cloudflare`
- **Hidden admin CMS** at `/dashboard`

## Local Setup

```bash
npm install
npm run prisma:generate   # generate the Prisma client
```

Create a `.env` file (copy `.env.example`) and fill in:

| Variable | Purpose |
| --- | --- |
| `DATABASE_URL` | Postgres connection string (Neon). Used by the app and by `prisma migrate`. |
| `ADMIN_PASSWORD` | CMS passcode. If unset, the app falls back to the dev default in `src/app/api/auth/route.ts`. |
| `RESEND_API_KEY` | Resend API key for the contact form. |
| `CONTACT_FROM_EMAIL` | Sender address (default `onboarding@resend.dev` while developing; switch to your verified domain for production). |
| `CONTACT_TO_EMAIL` | Delivery inbox (default `junaidkanwar04@gmail.com`). |

Apply the schema and seed the initial catalog:

```bash
npm run prisma:migrate
npm run prisma:seed
```

Run locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Admin CMS

The dashboard has no public link by design — navigate directly to `/dashboard`. Set a strong `ADMIN_PASSWORD` in your environment before deploying.

## Cloudflare Deployment

1. Log in to Wrangler: `npx wrangler login`.
2. `npm run preview` — build and run the Workers runtime locally.
3. `npm run deploy` — build and deploy to Cloudflare Workers (Workers Builds/CI can be connected from the Cloudflare dashboard for auto-deploys on push).
4. Set the runtime environment variables from the table above in the Cloudflare dashboard (or use `npm run deploy -- --keep-vars`). `NEXTJS_ENV` selects the Next.js env file when running locally; production uses dashboard vars.

## Project Structure

- `src/app` — App Router pages and API handlers (`/api/auth`, `/api/projects`, `/api/contact`)
- `src/components` — Hero, About, Skills, Projects, Timeline, Contact, Navbar, Footer
- `src/lib` — TypeScript contracts, Prisma client (`db.ts`), storage helpers, seed data
- `prisma` — schema and seed script
- `wrangler.jsonc` / `open-next.config.ts` — Cloudflare Workers runtime configuration

## Documentation

- `design.md` — full "Precision Editorial" design system reference
- `implementation_plan.md` — architecture and implementation notes