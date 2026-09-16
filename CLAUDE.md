# pay-photo

Portfolio site for a photographer, built with React + TypeScript + Vite. Deployed on Cloudflare Pages. The only dynamic feature is a contact form that submits to a Supabase Edge Function, which sends email via Resend and stores the submission in a Supabase table.

## Non-negotiables

- **Pixel-match the Figma mockups.** Every page has an exact mockup. Layout, spacing, type, and color must match what's in Figma — this is not a "close enough" job. If a mockup is ambiguous or missing for something being built, stop and ask rather than guessing.
- **When the user hands you a reference image for a page or section (a Figma export, a screenshot of the live site, a mockup), treat every detail in it as exact, not a rough guide.** Before writing code, read off the concrete specifics you can verify directly from the image — which text is literally in which font family/style, where an element sits relative to the *whole* composition (not just the nearest layout column), what's present vs. absent — and match those, rather than approximating with "close enough" values or filling gaps with a plausible-looking guess. A deviation the user then has to catch and correct (wrong font, wrong position, an element that should've been deleted entirely rather than kept in a lighter form) is a failure to get it right the first time. If a detail genuinely can't be determined from the image, ask instead of guessing.
- **No unfounded assumptions.** If a requirement, copy, behavior, or design detail isn't specified, ask. Don't invent content, routes, or behavior to fill gaps.
- **Clean, intentional code.** Minimal fluff. No dead code, no speculative abstraction, no comments that restate the code. Every component, hook, and function should exist because the app needs it right now, not because it might be useful later.
- **Images lazy and fast, without visible quality loss.** See Images below.
- **Responsive at every breakpoint.** Every component must be checked at mobile, tablet, and desktop widths before it's considered done — not just the primary breakpoint from the mockup.

## Pages / routes

Routed with `react-router`. Six routes, each with its own Figma mockup:

- `/` — Home
- `/about` — About
- `/contact` — Contact (the contact form lives here, not on About)
- `/weddings` — Weddings gallery
- `/couples` — Couples gallery
- `/portraits` — Portraits gallery

## Stack

- **React + TypeScript + Vite**
- **Styling: styled-components.** One or more styled components colocated with the component that uses them. No global utility-class framework, no inline `style` props for anything that isn't a computed/dynamic value. Design tokens (colors, spacing, font sizes/families from Figma) live in a shared theme, not hardcoded per-component.
- **Routing: react-router**
- **Backend: Supabase.** Postgres table for contact submissions; a Supabase Edge Function receives the contact form POST, validates it, writes the row, and calls Resend to send the notification email. The React app never talks to Resend directly.
- **Hosting: Cloudflare Pages** for the built static site.

## Images

- All photos are stored locally in the repo (`src/assets/...`), not fetched from a CMS or external host.
- Real photos aren't final yet. Every gallery/page reads its images from a **per-page manifest** in `src/content/images/` (e.g. `weddings.ts`) — a `.ts` file, not JSON: vite-imagetools needs a static `import` per file to process it at build time, so each manifest is one `import` line per photo feeding an exported `{ picture, alt }[]` array in display order. Swapping a photo later means changing the import path in the manifest — never adding a new `import` scattered through a component. Use placeholder images at the manifest paths until real photos arrive.
- Built with **vite-imagetools**: source images are transformed at build time into responsive, modern-format output (AVIF/WebP with a fallback, multiple widths) so the browser picks the right size — no visible quality loss, minimal bytes.
- All images lazy-load (`loading="lazy"`, plus explicit `width`/`height` or `aspect-ratio` to avoid layout shift) except anything above the fold on a page, which should load eagerly.

## Working process

- Confirm which Figma frame/breakpoint you're building against before implementing a page or component.
- Keep components small and single-purpose; share layout/section primitives instead of duplicating styled-component definitions across pages.
- Ask before introducing a new dependency that isn't already listed under Stack.
- Don't spin up a dev server, install Playwright, or take screenshots to self-verify UI work. Ship the change (passing typecheck/lint/build) and the user will check the rendered result themselves and report back what's wrong.
