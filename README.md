# Kushagra Anand — Personal Portfolio Website
### Creative Developer & Systems Engineer (Chennai ➔ Umeå)

A personal portfolio inspired by the brutalist visual language of bajkamalsingh.me, built around the central theme of the **Chennai (SRM '28) ➔ Umeå, Sweden** journey.

---

## 🚀 Live Demo & Deployment

This portfolio is **100% static** and designed to deploy free on **Cloudflare Pages**.

### Deploy to Cloudflare Pages (3 Steps)
1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit of personal portfolio"
   git remote add origin https://github.com/kushagra1829/Protfolio.git
   git push -u origin main
   ```
2. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com) ➔ **Workers & Pages** ➔ **Create application** ➔ **Pages** ➔ **Connect to Git**.
3. Select this repository and set:
   - **Framework preset**: `None`
   - **Build command**: *(leave blank)*
   - **Build output directory**: `/` (root directory)
4. Click **Save and Deploy**. Your website is live at `kushagraanand.pages.dev` with free SSL, global CDN, and zero server maintenance!

---

## 🛠️ Architecture & Tech Stack

| Technology | Purpose | Cost |
|---|---|---|
| **HTML5 & CSS3** | Semantic markup, brutalist borders, hard offset shadows, tape strips | Free |
| **Vanilla JavaScript** | Data-driven DOM rendering, preloader, custom cursor, sound telemetry | Free |
| **Tailwind CSS (CDN)** | Layout grid, typography tokens, responsive utility classes | Free |
| **GSAP 3 & ScrollTrigger** | Motion choreography, page reveals, book 3D scroll tilt | Free |
| **Lenis (CDN)** | Smooth, inertial scrolling | Free |
| **Lucide Icons (CDN)** | High-contrast brutalist icons | Free |
| **Web Audio API** | Native procedural audio synthesis for transit chimes (muted by default) | Free |
| **Google Fonts** | `Caveat`, `Permanent Marker`, `Archivo Black`, `JetBrains Mono`, `Plus Jakarta Sans` | Free |

---

## 📂 File Structure

```text
├── index.html            # Main single-page interactive portfolio
├── privacy.html          # Static privacy disclosure & technical architecture
├── terms.html            # Static legal terms of use
├── css/
│   └── style.css         # Brutalist tokens, tape strips, spotlight mask, route line
├── js/
│   ├── content.js        # Single source of truth data object (edit here)
│   ├── animations.js     # Lenis smooth scroll, GSAP ScrollTrigger, spotlight & travel
│   └── main.js           # Preloader, cursor, route carousel, accordion & dissection overlay
└── assets/               # Crisp SVG schematics, polaroid, developer silhouette & signals
```

---

## 🎨 Creative Theme: Chennai ➔ Umeå

- **Hero**: Dark navy aura, giant handwritten "kushagra", developer silhouette, SRM '28 / Umeå stamp, and 09:00 ➔ 02:00 code runtime log.
- **Origin (The Book)**: Open book double-spread with cursor-following spotlight mask, taped polaroid, places hustled (Axis Bank, SRM, Umeå), and verified stat boxes (9.34 GPA, 1 patent filed, 3 hackathons won).
- **Projects (Section 03)**: Expanding card deck featuring CleanMap, SEEFAA, DNASequenceSimilarity, and Recycling Pant-Machine.
- **Best Work (Section 04)**: The signature Chennai ➔ Umeå route featuring 5 stations:
  1. `01 CHENNAI CENTRAL`: Alert Ride Helmet (Patent-Filed Safety Hardware)
  2. `02 WAYPOINT: BUILD`: CleanMap Platform (3 Hackathons Won)
  3. `03 WAYPOINT: SYSTEMS`: DNASequenceSimilarity (C++20 k-mer SIMD Benchmark)
  4. `04 WAYPOINT: INTELLIGENCE`: SEEFAA CFA Platform (Supabase RLS)
  5. `05 TERMINUS: UMEÅ`: Recycling Pant-Machine (HCAI Robotics Team 1)
- **Visuals (Section 05)**: Radar hover zones tracking across 8 engineering disciplines.
- **Contact (Section 06)**: Full-screen brutalist black terminal with prefilled mailto dispatch link.
- **Footer**: Cream paper aesthetic, handwritten signature, and copyright notice.

---

## 🔒 Privacy & Accuracy Commitment
- Zero tracking cookies.
- No backend database or user accounts.
- All numbers, GPA, patent filings, and hackathon awards are 100% verified.

