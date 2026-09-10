# Implementation Plan: Precision Editorial Portfolio & Hidden CMS for Junaid Kanwar

> **Status: Implemented.** The build described below is live in this repository. This document now reflects the delivered architecture; details that diverged during implementation (storage backend, fonts, file layout) have been updated to match the running code.

Build a high-performance, responsive portfolio web application for **Junaid Kanwar** (Kanwar Junaid Islam), Full-Stack Developer, faithfully adhering to the **Precision Editorial** design system from Stitch project `374798012846551119` and `design.md`, populated with his actual resume achievements, and featuring a hidden password-protected `/dashboard` CMS (`secret04`).

---

## User Review Required

> [!IMPORTANT]
> - **Public View Concealment**: Per your request, the public portfolio navbar, header, and footer will contain **zero** references or links to the admin console. The dashboard is accessible solely by navigating directly to `/dashboard`.
> - **Authentication**: Entering `/dashboard` prompts for the single administrative password (`secret04`). Once verified, the administrative session is retained (via an authenticated cookie), allowing full CRUD project management.
> - **Data Persistence**: Projects are stored in a JSON-backed store (`data/projects.json`) initialized with your 4 resume projects (*Code Arena*, *Game Craft*, *Home Cook*, *2J Blogs*). Adding, editing, or deleting projects in `/dashboard` instantly updates the live public portfolio.

---

## Content & Design Mapping (Stitch `374798012846551119` + Resume)

### 1. Palette & Typography Tokens (from `design.md` & Stitch)
- **Background**: `#F1F2EC` (Warm paper tone)
- **Surface**: `#E9EBE3` (Clean panel backgrounds)
- **Ink**: `#171D1A` (Primary typography)
- **Ink Muted**: `#5B645E` (Secondary typography, timestamps, captions)
- **Pine (Primary)**: `#2B6455` (Active states, buttons, links, status dot)
- **Copper (Accent)**: `#B8622F` (Sparing single highlight per screen: Featured badge, active terminal marker)
- **Border**: `#DBDED3` (Hairline rules)
- **Fonts**:
  - Display / Headlines: `Newsreader`
  - Body: `IBM Plex Sans`
  - Monospace: `Space Mono`

### 2. Sections Overview
1. **Blueprint Top Meta Bar**:
   - `REF: ARCH-2026.JK` | `SYS_ENV: WEB_PROD` | `LOC: 33.6844° N, 73.0479° E (Islamabad, PK)` | `DAEMON ACTIVE`
2. **Hero Section**:
   - Status: Pulsing Pine Dot — `"Available for full-time roles & engineering contracts"`
   - Name: **Kanwar Junaid Islam** (Display headline: **Junaid Kanwar**)
   - Tagline: *"Full-Stack Developer building scalable web applications, robust REST APIs, and responsive digital experiences."*
   - CTAs: `Button.Primary` "View projects" + `Button.Secondary` "Get in touch" + Resume link
   - Runtime Diagnostic Panel: Real terminal telemetry showing Node.js v22, Express/MongoDB connected status, Docker healthy, and platform metrics (100% responsive, sub-second latency).
3. **About Section**:
   - Left: Professional story based on resume (Air University BS CS student, full-stack expertise, mechanical sympathy, clean API boundaries).
   - Right: Structured Specification & Index table (Location: Islamabad, PK; Education: Air University BS CS; Focus: Full-Stack Web, Scalable Web Apps; Core Stack: React, Node.js, Express, MongoDB, Docker).
4. **Skills Section (Technical Taxonomy)**:
   - Grouped into 3 structured blueprint panels:
     - *Frontend & Client*: React, JavaScript (ES6+), HTML5/CSS3, Tailwind CSS, Responsive UI, Blazor
     - *Backend & APIs*: Node.js, Express.js, RESTful APIs, Postman, JWT Auth, Microservices
     - *Databases & DevOps*: MongoDB, Microsoft SQL Server, Firebase, Docker, Git & GitHub
   - Professional competencies: Leadership, Problem Solving, Communication, Teamwork
5. **Projects Section (Selected Work)**:
   - Full-width `ProjectRow`s with alternating image/content layout, hairline dividers, tech tags, and live/GitHub links:
     - **Code Arena** (Featured — Solitary Copper badge): Tiered Progression Coding Competition Website with Static Code Analysis (Final Year Project) — MERN Stack, Docker.
     - **Game Craft**: Gaming PC Components store built with MERN stack featuring product specs, filtering, and admin dashboard.
     - **Home Cook**: Homemade food delivery app with chef listings, order management, and payment simulation.
     - **2J Blogs**: Responsive blogging platform with Blazor .NET and MS SQL Server.
6. **Timeline / Education & Certifications**:
   - Sequential chronology with hairline vertical connector and pine marker dots:
     - `2022 — 2026`: BS Computer Science — Air University (Islamabad, Pakistan)
     - `2020 — 2022`: F.Sc. Pre-Engineering — Army Public School and College, EME Campus
     - `2018 — 2020`: Matriculation in Science — Progressive Model School
     - Certifications: Microsoft AI Skills Challenge, Saylor Academy Computer Architecture
7. **Contact Section**:
   - Centered headline: *"Let's build something durable."*
   - Direct links: `junaidkanwar04@gmail.com` | `+92 315 5128728` | LinkedIn | GitHub
   - Clean contact inquiry form with instant submission feedback.
8. **Footer**:
   - Location, copyright, and verified links to GitHub (`baymx04-ux`), LinkedIn, and live portfolio.
   - **No admin link** present.
9. **Hidden Dashboard (`/dashboard`)**:
   - **Auth Gate**: Minimalist passcode modal requiring `"secret04"`. Invalid password rejects with feedback.
   - **CMS Console**:
     - System metrics (Total projects, Published, Featured, Database health).
     - Full projects index table with sorting, edit, delete, and feature toggles.
     - Add/Edit Project Drawer with form fields: Title, Slug, Abstract/Description, Tech Stack tags, Live URL, GitHub URL, Featured toggle, and Image URL.
     - Add / Edit / Delete immediately syncs with the database.

---

## Proposed Technical Stack & Architecture

- **Framework**: Next.js 14+ (App Router) + TypeScript
- **Styling**: Tailwind CSS configured with the exact color tokens, font families, and typography scales from Stitch (`content.md`) and `design.md`
- **Database / Storage**: Local JSON-backed store (`data/projects.json`) via `src/lib/storage.ts` — zero-configuration, robust local persistence with instant public propagation
- **API Endpoints**:
  - `GET /api/auth`: Check administrative session validity
  - `POST /api/auth`: Validate `"secret04"` and issue session cookie
  - `DELETE /api/auth`: Invalidate admin session
  - `GET /api/projects`: Fetch all projects for public view, or all (drafts included) when authenticated with `?all=true`
  - `POST /api/projects`: Create a new project (admin auth)
  - `PUT /api/projects/[id]`: Update project details (admin auth)
  - `DELETE /api/projects/[id]`: Remove a project (admin auth)

---

## Proposed Changes & File Structure

```
d:\Personal_Portfolio\
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
├── next.config.mjs
├── data/
│   └── projects.json                    # JSON-backed project store
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx                    # Public portfolio page
│   │   ├── globals.css                 # Custom font imports, resets, tokens
│   │   ├── icon.svg                    # Favicon
│   │   ├── dashboard/
│   │   │   └── page.tsx                # Password gate & Admin CMS
│   │   └── api/
│   │       ├── auth/
│   │       │   └── route.ts            # Auth: GET (check) / POST (login) / DELETE (logout)
│   │       └── projects/
│   │           ├── route.ts            # GET / POST projects
│   │           └── [id]/
│   │               └── route.ts        # PUT / DELETE project
│   ├── components/
│   │   ├── Navbar.tsx                  # Public navbar (no admin link)
│   │   ├── Hero.tsx                    # Editorial hero + diagnostic terminal
│   │   ├── About.tsx                   # Bio + specs panel
│   │   ├── Skills.tsx                  # Technical taxonomy (Frontend, Backend, DevOps)
│   │   ├── Projects.tsx                # Dynamic ProjectRows from database
│   │   ├── Timeline.tsx                # Education & certifications timeline
│   │   ├── Contact.tsx                 # Transmission contact form & mailto
│   │   └── Footer.tsx                  # Clean footer with socials
│   └── lib/
│       ├── types.ts                    # Project & Auth type contracts
│       ├── storage.ts                  # JSON persistence read/write helpers
│       └── initial-projects.ts         # Seed data from resume
```

---

## Verification Plan

### Automated & Build Checks
- Run `npm run build` to verify clean TypeScript compilation and Next.js static/dynamic route optimization.
- Confirm `data/projects.json` is seeded with the initial project payload on first access.

### Manual Verification Flows
1. **Public Site Testing**:
   - Inspect public landing page at `http://localhost:3000`.
   - Verify all information accurately reflects Junaid Kanwar's resume.
   - Confirm that **no** link, button, or mention of Admin or Dashboard exists anywhere in the navigation, header, or footer.
   - Verify smooth scrolling, responsive grid on mobile and desktop, and image lift on hover.
2. **Dashboard Security & Access Testing**:
   - Navigate to `http://localhost:3000/dashboard`.
   - Enter wrong password (e.g. `test123`) -> Ensure access is denied with error message.
   - Enter `secret04` -> Confirm successful authentication and dashboard unlock.
3. **CMS Functionality Testing**:
   - Add a new test project through the drawer -> Verify it appears in the table.
   - Switch back to the public homepage -> Confirm the new project immediately appears in the Projects section.
   - Edit the project -> Confirm update propagates.
   - Delete the test project -> Confirm deletion propagates.
