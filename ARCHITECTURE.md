# Portfolio Replica — Full Architecture Blueprint
**For:** Kushagra Anand
**Model site:** bajkamalsingh.me (Bajkamal Singh / "Baaz") — audited live 30 Oct 2026, scrolled 0–100%, all 4 Projects cards expanded, 2 of 5 Best Work deep-dives opened, Privacy page read for tech evidence.
**Goal:** Same structure, same interaction system, same look-language — 100% free — filled with *your* content and *your* images/copy. Replicate the system, don't copy his text, photos or poster art.

---

## 1. What the site actually is (verified)

- **One single long page.** No separate project pages. Everything is in-page; only Privacy / Terms are separate static pages.
- **It is custom-coded, not a template.** No Framer / Webflow / Wix / WordPress branding anywhere. His own Privacy page states: hosted on **Cloudflare Pages**, styling **Tailwind CSS**, animation **GSAP**, sound **Tone.js**, smooth scroll **Lenis**, icons **Lucide**, fonts **Google Fonts + CDNFonts**. All of those are free.
- **No backend, no database, no forms, no accounts, no cookies of its own.** Contact is a pre-filled `mailto:` link only. That is why it can be hosted free forever.

### Page order (top → bottom)
1. Preloader (full-screen)
2. Hero (full-screen)
3. Origin / About — a long "open book" section
4. Projects — Section 03, expanding card deck
5. Best Work — Section 04, themed horizontal carousel (his theme: Delhi Metro) + full-page "dissection" deep-dive overlays
6. Visuals — cursor-following poster gallery
7. Contact (full-screen, black)
8. Footer (cream)

### Persistent chrome (on screen the whole time)
- **Top bar, fixed, 3 zones:** left = name block, centre = rotating one-liner messages, right = "You've seen X%" live scroll progress with a blue fill bar.
- **Bottom pill nav, fixed, centred:** Home | Origin | Projects | Best Work | Visuals | Contact. Cream, thick black border, hard offset shadow. Active item = solid royal blue, white text. Clicking does NOT jump instantly — it plays a "travel" transition (page tilts/zooms out, a track bar shows the target, then lands).
- **Sound/mute toggle:** small circular button, bottom-right of hero/preloader.

---

## 2. Design system (copy this exactly)

### Colours (screenshot approximations, not measured CSS)
| Role | Colour | Approx. hex |
|---|---|---|
| Dominant royal / electric blue | Preloader, section intros, active nav, headings | `#0B24FF` |
| Deep navy gradient | Hero background glow | `#00008B → #000033` |
| Cream paper | Book pages, sticky notes, nav, footer | `#F2EFE6` |
| Black | Origin background, cards, Contact, hard shadows | `#000000` |
| Accent yellow | Call-to-action tabs, ticker text, highlights | `#FFC800` |
| Accent red | One stats-box outline, small details | `#C1272D` |
| Accent green | Small star on section titles | — |
| Periwinkle | Deep-dive header panels | `#8A9BFF` |

### Type system (4 fonts, all free on Google Fonts)
1. **Handwritten / marker display** — almost all headings, mixed case, words overlap and tilt on purpose. Free equivalents: `Caveat` (soft) or `Permanent Marker` / `Gochi Hand` (marker feel). Pick ONE.
2. **Heavy condensed sans** — big numbers and shouted statements. Free: `Anton` or `Archivo Black`.
3. **Monospace caps** — labels, section tags, tickers: "SECTION 03", "ARCHIVED". Free: `Space Mono` or `JetBrains Mono`.
4. **Clean small sans (body)** — bullet text inside cards. Free: `Inter` or `Plus Jakarta Sans`. (His uses "Open Sauce One" via CDNFonts — also free, you can use the same.)
+ Optional: a bold Devanagari-capable font for a Hindi headline — `Inter` / `Noto Sans Devanagari`, free.

### Layout language (this is what makes it look like his, not generic)
- Almost every section is **full-viewport height**, generous uneven spacing, no tidy 12-column grid.
- Signature devices everywhere: **tilted cards, tape strips on notes, thick black borders (2–3px), hard offset shadows** (solid black shadow displaced down-right, no blur), **overlapping type, hand-drawn circles / arrows / scribbles, sticker-style elements, blueprint-grid and grid-paper backgrounds.**
- Imagery is collage, not a clean gallery grid.

---

## 3. Interaction system (one special interaction per section)

| # | Interaction | How his works | Library |
|---|---|---|---|
| 1 | Preloader | Counter 0→100%, thin progress bar, big handwritten slogan, "SKIP →" button | Vanilla JS + GSAP |
| 2 | Custom cursor | Small ring/dot replaces pointer; a label follows it and changes per area ("click to expand", "scroll down", "drag to explore") | Vanilla JS + GSAP `quickTo` |
| 3 | Smooth scroll | Eased, heavy scroll feel; normal jump scrolling is overridden | **Lenis** |
| 4 | Scroll progress | Top-right % = scrolled fraction of page, updated live | Lenis scroll event |
| 5 | Rotating top-bar lines | One-liners cycle in the centre of the top bar | `setInterval` + array in content file |
| 6 | Nav travel transition | Click pill → zoom/tilt out → target track bar → land on section | GSAP timeline + Lenis `scrollTo` |
| 7 | Book spotlight | Origin book text is blurred/greyed; a circular spotlight follows the mouse and reveals it; book tilts with scroll | CSS `mask-image: radial-gradient` on mouse vars + GSAP ScrollTrigger |
| 8 | Expanding project deck | Cards stacked/rotated like a deck; click expands in place (2 bullets left, 3 big stats right); click again closes | GSAP height animation / accordion |
| 9 | Themed carousel | Horizontal "stations"; ←/→ buttons, arrow keys, swipe; route-map line fills as you advance; LED ticker updates per station | GSAP `translateX` track |
| 10 | Dissection overlay | Yellow tab on each carousel card opens a full-page deep-dive **on the same URL**; "← Return" closes it | Hidden overlay sections, show/hide + GSAP |
| 11 | Cursor poster gallery | In Visuals, posters follow the cursor and swap depending on which skill-label zone you hover | GSAP `quickTo` + hover zones |
| 12 | Sound toggle | Optional ambient/UI sound | Tone.js — **optional, do it last or skip** |

---

## 4. Your version — section-by-section mapping

Replace his theme, keep his structure. Suggested theme swap: his is Delhi Metro because he's a Delhi designer. Yours: a **Chennai → Umeå route / "runtime" theme** fits a CS builder split between SRM Chennai and Umeå — e.g. Best Work as stations/stops on one line: CHENNAI — SRM — AXIS BANK — UMEÅ — TERMINUS. Or keep it simpler: a terminal/boot sequence theme. Decide before building Section 04, everything else is theme-independent.

### 0. Preloader
- Royal blue screen, your handwritten line (write your own — e.g. your take on building things), counter 0–100%, SKIP button.

### 1. Hero
- His: dark silhouette portrait on navy glow, giant handwritten nickname in cream, sticker "SRCC '27 / Delhi, India", left column Started as → Became → Currently, top-right handwritten line + a small 20:00→00:00 chart (static, NOT a live clock).
- **Yours:** your silhouette/photo on the same navy glow; giant name — "kushagra" or a short nickname you actually use; sticker: **"SRM '28 / Umeå, Sweden"**; left column: *Started as / CS student → Became / Full-stack builder → Currently / Human-Centered AI, Umeå*; top-right: your own line + a small static chart (e.g. Chennai → Umeå, or 09:00 → 02:00 coding hours); bottom button: "GO ON, SCROLL DOWN".

### 2. Origin / Book
- His: philosophy line, places he's worked, 3 stat boxes, then his origin story in huge condensed type.
- **Yours:** philosophy = building things that close the gap between reporting a problem and solving it (your words); "places I've hustled at" = **Axis Bank (Backend Intern, Jun–Jul 2026), SRM Chennai, Umeå University exchange**; 3 stat boxes — use ONLY verified numbers: **9.34 GPA (SRM)**, **1 patent filed (Alert Ride Helmet)**, **3 hackathons won (CleanMap)** — confirm each before publishing; origin story in huge type = how/why you started coding, in your own words; polaroid = your own photo.

### 3. Projects — Section 03 (expanding deck, 4 cards)
Same card format: name, one-liner, role // duration, 2 bullets, 3 stats, "ARCHIVED" tag.
1. **CleanMap** — community waste reporting & cleanup platform (map, photo evidence, volunteers claim cleanups, leaderboard). Live demo + GitHub already exist.
2. **SEEFAA** — CFA Level I exam-prep platform (Lovable / Supabase, auth-gated).
3. **DNASequenceSimilarity** — C++ k-mer Jaccard similarity tool, k=1–32, with benchmark/mutation experiments (Performance Programming, Umeå).
4. **Recycling Pant-Machine** — HCAI course group project: AI recycling machine with multi-sensor material recognition, fill-level / mold-risk prediction (group "AI in Robotics 1").
*Stats per card: fill only from the real project (e.g. DNA: k 1–32, 2 strategies, crossover k≈12–13). Leave a `[TODO: confirm stat]` rather than inventing one.*

### 4. Best Work — Section 04 (carousel + dissections)
Pick your 3–5 strongest and give each a "station" + a dissection overlay using his layout:
Header (role · project, tagline, 3 tags) → Problem block → Your answer/approach block → Evidence (screenshots / demo / repo) → Numbers row → Marquee formula line → Teardown / deep-dive link.
Suggested order: **Alert Ride Helmet** (patent-filed, impact + drowsiness alerts — your strongest single story) → **CleanMap** → **SEEFAA** → **DNASequenceSimilarity**. Axis Bank internship can be a station too if you want an experience entry.
Dissection content rule: problem → approach → what YOU built → result, with a GitHub / live-demo link where his says "dissect on LinkedIn".

### 5. Visuals
- His: posters follow the cursor, hover zones are skill labels.
- **Yours:** hover zones = your skills (AI/ML, COMPUTER VISION, ROBOTICS, FULL-STACK, C++, EMBEDDED, UI/UX, DATA); the following image = project screenshots / demo stills / hackathon photos — yours only.

### 6. Contact
- Black full-screen, giant overlapping handwritten title, left text, right a big handwritten mailto link with a pre-filled subject + body, small links: Instagram – LinkedIn – Mail – GitHub (add GitHub, he doesn't have it, you should).
- Yours: `mailto:anandkushagra1@gmail.com` with pre-filled subject/body in your voice.

### 7. Footer + legal
- Cream footer: playful bye line (your words), handwritten signature "Kushagra Anand", bottom line © 2026 KUSHAGRA ANAND + PRIVACY POLICY + TERMS OF USE as two tiny static pages (copy the *structure* of his privacy page, write yours to match your actual stack — it doubles as honest tech documentation).

---

## 5. Technical architecture

```
Browser (static, no server code)
│
├─ index.html          ← all sections + dissection overlays
├─ privacy.html
├─ terms.html
├─ css/style.css       ← Tailwind CDN + custom CSS (shadows, tape, masks, ticker)
├─ js/content.js       ← ALL text/data in one object (see §6) — edit this, not HTML
├─ js/main.js          ← preloader, cursor, top bar, pill nav, deck, carousel, overlays
├─ js/animations.js    ← GSAP + ScrollTrigger + Lenis wiring
└─ assets/             ← your photos, polaroid, poster/screenshot images (compressed WebP)
        │
        ▼
GitHub repo (free) ──auto-deploy──► Cloudflare Pages (free) ──► yourname.pages.dev
                                        └─ optional: custom domain (see §7)
```

**Libraries — all free, load by CDN exactly like his:**
- Tailwind CSS — `cdn.tailwindcss.com`
- GSAP + ScrollTrigger — `cdnjs` (free; do NOT need the paid Club plugins — he uses none visibly)
- Lenis — `unpkg` (`lenis` package)
- Lucide icons — `jsDelivr`
- Tone.js — `cdnjs` (optional)
- Fonts — Google Fonts + optionally CDNFonts

**Why no framework needed:** it's one static page. Plain HTML/CSS/JS is the fastest path to an identical result and deploys anywhere. If you prefer components later, Astro (free) compiles to the same static output — but don't start there, start vanilla.

## 6. Content model (single source of truth)

Keep every word/number in one JS object so the page is data-driven like a real app:

```js
const CONTENT = {
  name, nickname, sticker, heroRoles: [], heroLine,
  topBarLines: [ /* 5–6 rotating one-liners, yours */ ],
  stats: [ { value, label, note } ],               // book section, x3
  projects: [ { id, name, oneliner, role, weeks, bullets: [2], stats: [3] } ],  // x4
  bestWork: [ { id, station, category, headline, bullets: [3], stats: [3],
                dissection: { role, tags: [3], problem, answer, evidence: [], links } } ],
  visuals: [ { skill, image } ],
  contact: { email, subject, body, socials: { linkedin, github, instagram } }
}
```
Render Projects / Best Work / Visuals from this object with JS templates. Changing a project later = editing one object, no HTML surgery.

## 7. Cost — ₹0 breakdown

| Item | His | Yours (free route) |
|---|---|---|
| Code / libraries / fonts / icons | Free (above) | Same — ₹0 |
| Hosting | Cloudflare Pages free tier | Same — ₹0, unlimited bandwidth on free tier |
| Analytics | Cloudflare Web Analytics | Same — ₹0 |
| Domain | He pays for `.me` (only paid bit) | **₹0 option:** `kushagraanand.pages.dev`. **₹0 for 1 yr option:** GitHub Student Developer Pack → free `.me` domain via Namecheap (check current eligibility). Paid only if you buy a domain outright later (~₹800–1,500/yr typical for .me — verify live before buying) |
| Forms / backend | None | None — mailto only |

## 8. Build order (do it in this sequence)

1. **Skeleton (half day):** repo, `index.html` with all 7 sections as plain stacked blocks, Tailwind CDN, fonts, palette variables. Deploy to Cloudflare Pages on day 1 so the live link exists.
2. **Chrome:** top bar (rotating lines + scroll %) and bottom pill nav with Lenis smooth scroll + anchor scrolling.
3. **Hero + preloader:** counter, skip, silhouette, giant name, stickers.
4. **Projects deck:** render from `content.js`, click-to-expand accordion.
5. **Book:** two-page layout, stickers/polaroid, spotlight mask reveal, ScrollTrigger tilt.
6. **Best Work:** carousel track, arrows/keys/swipe, route map fill, ticker, dissection overlays from `content.js`.
7. **Visuals + Contact + Footer:** cursor-follow images, mailto link, legal pages.
8. **Polish:** custom cursor with labels, GSAP reveals, sound toggle (optional), compress images to WebP, test on a real phone.

## 9. Not verified / risks

- **Mobile was NOT tested in the audit** (no viewport control in that session). His design uses swipe in the carousel and a thumb-reachable pill nav, but you must test the book spotlight, overlapping titles and metro illustration on a real phone — plan a simplified mobile fallback: disable custom cursor + spotlight, stack the book pages, keep carousel swipe.
- Colours above are screenshot approximations, not extracted CSS values.
- 3 of his 5 dissections were not opened; the layout was confirmed identical on the 2 opened, and cards for all 5 were read.
- Sound: toggle exists, audio content was not tested (left muted).

## 10. What I need from you to build it

1. Theme call for Best Work: Chennai→Umeå route, terminal/boot theme, or keep a metro but make it Chennai Metro?
2. One good portrait photo (for the silhouette hero) + one polaroid-style photo.
3. Your nickname/short name for the giant hero word, or use "kushagra".
4. Confirm the 3 book stat boxes (GPA / patent / hackathons) and each project's 3 stats — nothing invented.
5. Your origin story + philosophy + top-bar one-liners, in your words (I'll structure, you write).
