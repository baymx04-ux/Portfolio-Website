---
colors:
  background: "#F1F2EC"
  surface: "#E9EBE3"
  ink: "#171D1A"
  inkMuted: "#5B645E"
  primary: "#2B6455"
  accent: "#B8622F"
  border: "#DBDED3"

typography:
  display:
    fontFamily: "Newsreader"
    fontSize: 64
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: -0.5
  body:
    fontFamily: "IBM Plex Sans"
    fontSize: 17
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  mono:
    fontFamily: "Space Mono"
    fontSize: 13
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.2

spacing:
  scale: [4, 8, 12, 16, 24, 32, 48, 64, 96]

radius:
  scale: [0, 2, 4]
---

## Overview

A personal portfolio for a full-stack web developer. Audience: recruiters, potential freelance clients, and other engineers evaluating both technical skill and taste. The site's job is to make real project work easy to scan and easy to trust — not to perform "creativity" through decoration.

Design direction: **precision over polish**. Think of a technical drawing or a well-kept engineering notebook — confident structure, generous whitespace, almost no ornament, and one warm human accent (copper) against a cool, quiet base (paper + pine). Content is the design; typography and grid do the work, not gradients or cards.

Replace `[Your Name]`, `[role]`, and project/bio placeholders throughout with real content before handing this to Stitch — specific content produces a more specific layout.

## Colors

| Token | Hex | Role |
|---|---|---|
| `background` | `#F1F2EC` | Page background — soft warm-grey paper, not pure white |
| `surface` | `#E9EBE3` | Slightly deeper panels: admin dashboard, form backgrounds, code blocks |
| `ink` | `#171D1A` | Primary text, headlines |
| `inkMuted` | `#5B645E` | Secondary text, captions, dates, meta |
| `primary` | `#2B6455` | Links, buttons, active states, the "available for work" indicator |
| `accent` | `#B8622F` | Sparing use only — one highlight per screen max (a single tag, a hover state, a small marker). Never the dominant color |
| `border` | `#DBDED3` | Hairline rules, dividers, input borders |

Rule: `accent` (copper) appears at most once per screen as a deliberate highlight, not as a repeated decorative color. Everything else is `ink`, `inkMuted`, `primary`, or neutral.

## Typography

- **Display (Newsreader)** — name, page headline, and section intros only. Large, confident, a little editorial. Never used for body copy or UI labels.
- **Body (IBM Plex Sans)** — everything a visitor reads: bio, project descriptions, nav, buttons, form labels.
- **Mono (Space Mono)** — used only where it's functionally honest: tech-stack tags, dates/timestamps, code snippets. Not used as a generic "techy" label font everywhere.

Line length for body paragraphs: under 80 characters — constrain body text columns to ~640px even on wide screens.

## Layout

- 12-column grid, max content width **1200px**, gutter = `spacing[4]` (24px).
- Primary alignment: **left-aligned, asymmetric**. Nothing is center-stacked except the contact section's closing line.
- Section vertical rhythm: `spacing[8]` (96px) between major sections on desktop, `spacing[6]` (48px) on mobile.
- Content generally sits in columns 2–11, leaving a visible outer margin — the page never runs edge-to-edge except for full-bleed project images.

```
Hero:        [ headline + intro : 7 cols ] [ terminal detail : 4 cols, offset ]
About:       [ bio text : 6 cols ]         [ facts panel : 4 cols ]
Projects:    [ full-width rows, hairline-divided, image/content alternate sides ]
Timeline:    [ date : 2 cols ] [ vertical line ] [ role + description : 8 cols ]
Contact:     [ centered headline ] [ email + form, narrow column ]
```

## Elevation & Depth

**No drop shadows anywhere.** Hierarchy is built with whitespace, hairline borders (`border` token), and type weight — not elevation. The one motion exception: on hover, project images shift `translateY(-2px)` — a position change, never a shadow.

## Shapes

- Default radius is `0` — rectangular, precise, blueprint-like.
- `radius[1]` (2px) is used only on interactive controls: buttons, inputs, tags.
- `radius[2]` (4px) is reserved for the profile photo only.
- Fully round is used in exactly one place: the small "available for work" status dot. That contrast — one soft circle in an otherwise rectilinear page — is deliberate, not decorative.

## Components

**Button.Primary**
`background: primary` · `color: background` · `radius: radius[1]` · `typography: body, weight 600` · `padding: spacing[2] spacing[4]` · hover darkens background ~8%, no shadow, no arrow glyph appended to label.

**Button.Secondary**
`background: transparent` · `border: 1px solid border` · `color: ink` · hover: `border-color: primary`.

**Tag** (tech-stack label on a project)
`typography: mono` · `background: transparent` · `border: 1px solid border` · `color: inkMuted` · `radius: radius[1]` · small horizontal padding only, no fill, no icon.

**ProjectRow**
Full-width row, `1px solid border` as a top rule (not a boxed card, no shadow). Image occupies ~40% width, content ~60%, sides alternate on even/odd rows for rhythm. Title in `display` font at ~32px. Description in `body`, `inkMuted`. Tags wrap below description. On hover: image lifts per Elevation rule, title color shifts to `primary`.

**TimelineItem** (experience section — genuinely sequential, so a marker is earned here)
Left: date in `mono`, `inkMuted`. Right: role + company in `body`, `ink`, with a short description below. A 6px filled `primary` circle marks each entry, connected by a 1px `border`-colored vertical line.

**NavBar**
Transparent over the hero; gains a `1px solid border` bottom rule only after scroll. Links in `body`, weight 500, no underline until hover (underline slides in, don't use color-only hover states). Link labels must be identical to the section eyebrow markers they point to (e.g. `About` ↔ `01 // About`) so navigation and section identification never diverge.

**Form Input**
`background: surface` · `border: 1px solid border` · focus state changes `border-color` to `primary` — no glow, no shadow.

**StatusDot**
8px, fully round, `primary` fill, subtle opacity pulse (this is the one ambient motion moment allowed outside the hero).

**AdminDashboard** (separate, utility-first — does not need the brand's editorial flourish)
Plain table for project list (`surface` background, `border` rules between rows), standard form inputs per the Form Input spec above, `Button.Primary` for Save/Publish, `Button.Secondary` for Cancel. Prioritize clarity and speed over personality here — this screen is for you, not visitors.

## Do's and Don'ts

**Do:**
- Let real project screenshots and real copy drive layout decisions — write actual project descriptions before generating screens, not lorem ipsum.
- Use the timeline's numbered/dated markers only in Experience — it's the one section that's a genuine sequence.
- Keep every screen to one `accent` (copper) moment maximum.

**Don't:**
- Don't add a tracked-out ALL-CAPS eyebrow label above every section heading.
- Don't join meta text with middle dots ("React · Node · 2024") — use plain separators or stacked lines instead.
- Don't turn the Projects section into identical rounded cards with soft grey shadows — use the ProjectRow spec above.
- Don't append "→" to every button and link label.
- Don't use `mono` as a generic label font outside tags, dates, and actual code — it should always read as functionally meaningful, not decorative.
- Don't add fade-and-slide-up entrance animation to every section on scroll — one orchestrated hero moment is enough.

---

## Screens & Content Reference

*(Beyond the core DESIGN.md spec — practical per-screen notes for prompting Stitch. Feed this alongside the tokens above.)*

**1. Home / Hero**
Goal: identify who this is and what they do, in under 3 seconds. Left: `[Your Name]` in `display`, then role line ("Full-stack developer building [what you build]") in `body`, `inkMuted`, then `StatusDot` + "Available for freelance work" if true, then `Button.Primary` "View projects" + `Button.Secondary` "Get in touch". Right or bottom: one small functional detail in `mono` (e.g. a real, short terminal-style line — not decorative ASCII art).

**2. About**
Left column (6 cols): 2–3 short paragraphs, real voice, no buzzwords. Right column (4 cols): a plain `surface` panel with a definition-list — Location, Focus, Currently building, Stack — labels in `mono`/`inkMuted`, values in `body`/`ink`.

**3. Skills**
Grouped by category (Frontend / Backend / Tools) as inline wrapped `Tag` components, not icon-grid cards. Category label in `body`, weight 600.

**4. Projects**
List of `ProjectRow` components, most recent first. Each: title, 1–2 sentence description, tech `Tag`s, live link + GitHub link as `Button.Secondary`-style text links (no icon-only buttons).

**5. Experience**
Vertical list of `TimelineItem`s, most recent first.

**6. Contact**
Centered `display` headline ("Let's build something" or similar, in your voice), a direct mailto link, and a short form (name, email, message) styled per Form Input spec. No card wrapper around the form.

**7. Admin — Login**
Centered, minimal: email + password `Form Input`s, `Button.Primary` "Log in". Uses `surface` background to visually separate it from the public site.

**8. Admin — Dashboard**
`AdminDashboard` component: table of projects (title, status, last updated, edit/delete actions), `Button.Primary` "Add project" top-right.

**9. Admin — Add/Edit Project**
Form: title, slug, description (rich text), tech stack (tag input), image upload, live URL, GitHub URL, featured toggle, Save/Cancel buttons.