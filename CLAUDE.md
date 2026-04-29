# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

# Kitchen As It Is — Project Brief & Business Bible

> *"Not a restaurant. Not a takeaway chain. A home kitchen in Amsterdam, cooking the food that has existed long before menus did."*

---

## 0. Repository State

Scaffolded 2026-04-29 against §7–8: React 18 + Vite SPA, Tailwind, Framer Motion, GSAP, Lenis. All sections from §7 are stubbed with real copy and animation behaviour pulled from `app/src/data/menu.js`.

**Layout:** the React app lives entirely under `app/`. Root holds only `CLAUDE.md`, `Dockerfile`, `docker-compose.yml`, `nginx.conf`, `.dockerignore`, `.gitignore`. The §7 file tree (originally `kitchen-as-it-is/src/...`) now reads as `app/src/...` — paths in the architecture spec are relative to `app/`.

No GSAP usage yet — pinned/horizontal sections use sticky CSS + plain scroll listeners. Swap to GSAP ScrollTrigger when a richer timeline is needed.

## Commands

Source lives in `app/`. Docker, `.gitignore`, `.dockerignore`, and this file stay at root.

- **Dev (HMR via Docker, run from root):** `docker compose up dev` → http://localhost:5173
- **Prod build + serve (root):** `docker compose up app --build` → http://localhost
- **Local dev (no Docker):** `cd app && npm install && npm run dev`
- **Production build:** `cd app && npm run build` (outputs to `app/dist/`)
- **Lint / test:** not yet defined — add tooling when introduced

---

## 1. Brand Identity

### Name
**Kitchen As It Is**

### Tagline options
- *"Food the way it always tasted."*
- *"Cooked from memory."*
- *"No adaptation. No shortcuts. Just the recipe."*

### The concept
The name says everything. "As It Is" means the recipes are not adapted for a foreign palate, not toned down in spice, not simplified in technique. The biryani is sealed and dum-cooked the traditional way. The pappu is made with real tamarind and fresh greens. The food is as close to the source as a home kitchen in Amsterdam allows.

The owner is an Indian chef who has tasted across kitchens — from Hyderabad's old city to Andhra homes, from roadside dhabas to family tables — and traces every recipe back to the first kitchen they ever knew: their mother's.

### Brand personality
- **Honest** — no pretension, no marketing fluff
- **Precise** — technique matters, shortcuts don't exist here
- **Nostalgic but not sentimental** — grounded in real food memory, not romanticisation
- **Confident** — the food speaks, the chef doesn't over-explain

### Visual identity
- **Fonts**: Cormorant Garamond (display/headings — elegant, editorial serif) + DM Sans (body — clean, modern)
- **Colours**:
  - Cream: `#F7F3EC` — background, warmth
  - Ink: `#1C1A16` — primary text, dark sections
  - Spice: `#C4541A` — brand accent, orange-red like dried chilli
  - Gold: `#D4A843` — prices, highlights
  - Muted: `#8A7F72` — secondary text
  - Surface: `#EDE8DF` — light section backgrounds
- **Aesthetic**: Refined, editorial, warm. Think high-end food magazine meets honest home kitchen. Scroll-driven storytelling like Apple's product pages — each section reveals as you scroll, text and images animate in with purpose.
- **No**: generic food photography placeholders, purple gradients, Inter/Roboto fonts, cookie-cutter layouts

---

## 2. Chef & Story

### Background
Passionate Indian chef specialising in:
- **Hyderabadi / Andhra biryani** — dum technique, traditional spicing
- **Andhra cooking** — pappu, tamarind-heavy, bold and distinct
- **North Indian cooking** — dal makhani, butter chicken, tandoori
- **South Indian cooking** — dosa, sambar, rasam, thali

The chef has tasted recipes across world kitchens, starting from their mother's own kitchen, and attempts to replicate that source-fidelity in every dish cooked.

### Story copy (use on website / Kookxtra profile)
> I've eaten in many kitchens — from Hyderabad's old city lanes to street stalls in Chennai, from Andhra homes where the pappu is made fresh every morning to North Indian tables where the dal simmers all night. But every recipe I cook traces back to one place: the kitchen I grew up in.
>
> "Kitchen As It Is" means exactly that. No adaptation for a foreign palate. No toning down the spice, no simplifying the technique. The biryani is sealed and dum-cooked the traditional way. The pappu is made with real tamarind and fresh greens, the way it's made in every Andhra household. The recipes are as they are — because that's where all the flavour lives.
>
> I'm an Indian chef based in Amsterdam, and I cook because I miss this food, and because the people around me deserve to taste it properly.

---

## 3. Full Menu

### 3a. Biryani — rotating weekly

One biryani offered per week, rotating between:

| Dish | Description | Tags |
|---|---|---|
| **Hyderabadi Dum Biryani** | Slow-sealed dum cooking, saffron basmati, caramelised onions, whole spices. Served with raita and mirchi salan. | Halal, Signature |
| **Fry Piece Biryani** | Andhra-style biryani with deep-fried masala chicken pieces layered into dum-cooked rice. Intense, aromatic — eaten on special occasions. | Halal, Spicy |
| **65 Biryani** | Named after the legendary Chicken 65. Crispy spiced chicken folded into dum biryani — bold, punchy, street-food classic elevated. | Halal, Spicy, Street style |

**Also always available:**
- **Veg Dum Biryani** — seasonal vegetables and paneer, same dum technique. Not a compromise, a choice. (Vegetarian)

---

### 3b. The Andhra Shakti Bowl *(signature dish — key differentiator)*

**Full name:** Andhra Shakti Bowl
*("Shakti" = strength/energy in Sanskrit — perfect for a high-protein bowl)*

**Concept:** A complete Andhra meal in a bowl. Base of slow-cooked toor dal pappu (Andhra style, with tamarind), served over steamed rice, topped with a rotating green, protein, and seasonal vegetable. Finished with ghee tadka and house pickle.

**Rotating components:**

| Component | Options (rotate weekly) |
|---|---|
| **Base** | Andhra toor dal pappu + steamed rice (always) |
| **Green** | Spinach / Moringa / Methi (fenugreek) |
| **Protein** | Chicken tikka / Paneer tikka |
| **Vegetable** | Broccoli / Cabbage / Carrot / Beetroot |
| **Finish** | Ghee tadka + house Andhra pickle + papad |

**Why this works:**
- High-protein, nutrient-dense — appeals to health-conscious Dutch customers
- Andhra pappu is genuinely rare in Amsterdam — unique offering
- Rotating components keep regulars engaged week to week
- Moringa is a wellness trend in Amsterdam — frames tradition in contemporary language
- Instagram-friendly with striking colour variation each week (beetroot red vs broccoli green)

---

### 3c. Andhra & North/South Indian mains

| Dish | Description | Tags |
|---|---|---|
| **Butter Chicken** | North Indian murgh makhani — velvety tomato-cashew sauce, halal chicken, cardamom and fenugreek. | Halal |
| **Dal Makhani** | Black lentils simmered overnight with butter and cream. The dish that rewards patience. | Vegetarian |
| **Paneer Tikka Masala** | Grilled paneer in bold spiced tomato gravy. | Vegetarian |
| **Chana Masala** | Punjabi chickpeas in tangy tomato-onion gravy. Vegan, high-protein. | Vegan |
| **Masala Dosa + sambar & chutneys** | Fermented rice-lentil crepe, spiced potato filling, coconut chutney. Weekend special. | Vegan |
| **South Indian Thali** | Full meal: rice, rasam, sambar, 2 vegetable curries, papad, pickle. | Vegetarian |

---

### 3d. Drinks — three signature house drinks

#### 1. Andhra Majjiga
*"The coolant after the fire"*

Spiced buttermilk the Andhra way — thin-set curd whisked with fresh curry leaves, green chilli, ginger, and a pinch of asafoetida. Drunk at the end of every proper Andhra meal. Genuinely cooling, gently spiced. Not the sweet lassi people expect. **Price: €4**

#### 2. Rose & Cardamom Lassi
*"The one they serve at celebrations"*

Thick, full-fat yoghurt blended with homemade rose syrup, green cardamom, and a whisper of saffron. Cold, fragrant, satisfying enough to be dessert. Rose instead of mango — equally traditional, far more distinctive in Amsterdam where every Indian place does mango lassi. **Price: €5**

#### 3. Tulsi Nimbu Sharbat
*"Temple water, bottled"*

Fresh lemon juice, holy basil (tulsi) infused water, raw cane sugar, black salt, and roasted cumin. A North Indian summer drink made the old way — no soda, no concentrate. Bright, earthy, vegan, and unlike anything else on a menu in Amsterdam. **Price: €4**

---

## 4. Pricing Strategy

### Philosophy
Position as **premium home-cooked** — above mass delivery apps (Thuisbezorgd/Uber Eats Indian) but below Amsterdam restaurant mains. The premium is justified by dum-cooked technique, home-kitchen authenticity, no preservatives, and the story.

### Cost basis (Amsterdam home kitchen estimates)

| Item | Food cost per portion |
|---|---|
| Biryani — chicken (1 portion) | €4.50–5.50 |
| Biryani — veg (1 portion) | €3.00–3.50 |
| Andhra Shakti Bowl — paneer | €3.50–4.00 |
| Andhra Shakti Bowl — chicken | €4.00–4.50 |
| Dal Makhani / Chana Masala | €2.00–2.50 |
| Butter Chicken | €4.00–4.50 |
| Dosa + chutneys | €2.50–3.00 |
| South Indian Thali | €3.50–4.50 |
| Drinks (majjiga, sharbat) | €0.60–0.90 |
| Rose Lassi | €1.00–1.30 |

**Target gross margin: 55–65%**
Accounts for packaging, overhead, and ~10–15% Kookxtra platform commission.

### Retail pricing

#### Biryani

| Format | Price |
|---|---|
| Single — Hyderabadi Dum Chicken | €14 |
| Single — Fry Piece Biryani | €15 |
| Single — 65 Biryani | €15 |
| Single — Veg Dum Biryani | €12 |
| Family pot (3–4 portions) — Chicken | €46–50 |
| Family pot (3–4 portions) — Veg | €38–42 |
| Corporate / bulk (10+ portions) | €11–12 per portion |

> **Pricing psychology:** Always display the family pot alongside the single portion. At €48, the pot makes €14 feel excellent value — and some customers upgrade.

#### Andhra Shakti Bowl

| Protein | Price |
|---|---|
| Paneer tikka | €11 |
| Chicken tikka | €13 |
| Double protein | €15 |

#### Mains

| Dish | Price |
|---|---|
| Butter Chicken (with rice) | €13 |
| Dal Makhani (with rice) | €10 |
| Paneer Tikka Masala (with rice) | €12 |
| Chana Masala (with rice) | €10 |
| Masala Dosa + sambar + 2 chutneys | €11 |
| South Indian Thali | €14 |

#### Add-ons

| Item | Price |
|---|---|
| Garlic Naan (×2) | €3 |
| Extra raita (200ml) | €2 |
| Andhra Majjiga (500ml) | €4 |
| Rose & Cardamom Lassi (400ml) | €5 |
| Tulsi Nimbu Sharbat (400ml) | €4 |
| Kheer (dessert) | €4 |
| House Andhra Pickle jar (weekly) | €5 |

#### Subscription / weekly plans

| Plan | Price |
|---|---|
| Solo 3-dinner plan (3 × 1 portion, rotating menu) | €38–42/week |
| Couple 3-dinner plan (3 × 2 portions) | €65–72/week |
| Corporate lunch (5 days × 1 portion) | €55–60/week |

#### First-order hook
**"Try me" combo:** Biryani single + Andhra Majjiga = €16 (saves ~€2). Use for first 3 months to bring Dutch customers in at low risk.

---

## 5. Market Context (Amsterdam)

### Target audiences
1. **Indian expat community (~10,000 in Amsterdam)** — IT workers at TCS, Infosys, Wipro, Tata. Highest repeat-order potential. They miss home food. Biryani is the dish they can't find made properly. Reach via Indian expat WhatsApp groups, Meetup groups, Diwali/Holi event catering.
2. **Dutch food adventurers** — Already comfortable with Asian spice from colonial Indonesian food history. Position Andhra Shakti Bowl as a "health bowl" for wellness-conscious Dutch urban professionals.
3. **Hindustani-Surinamese community (~120,000 in Netherlands)** — Deep cultural ties to Indian food, discerning palates. Build trust through authenticity.

### Competition gap
Amsterdam has Indian restaurants covered. What it lacks:
- Authentic **dum biryani made to order** from a home kitchen
- **Andhra-specific cooking** — almost invisible in Amsterdam
- **Home-cooked South Indian** (proper dosa, rasam, moringa pappu)

### Expansion targets
- **Amstelveen** — 4,500+ Indians, densest Indian community near Amsterdam
- **Indian corporate canteens** — 100+ Indian companies in Amsterdam (TCS, Infosys, Wipro). Target HR for weekly lunch contracts.
- **Festival catering** — Bollywood & Indian Food Festival (September, sells out annually), Diwali Amstelveen (October), Holi Amsterdam (March)

---

## 6. Operations

### Setup checklist
- [ ] Get **HACCP certified** (Kookxtra provides free training — mandatory)
- [ ] Source **halal meat supplier** in Amsterdam
- [ ] Set up **Kookxtra profile** with pre-order enabled for biryani (24–48h lead time)
- [ ] Create **WhatsApp community group** ("Ghar ka Khana — Amsterdam")
- [ ] Set up **Instagram** with first biryani dum-opening video

### Weekly schedule

| Day | Activity |
|---|---|
| Monday | Post weekly menu — WhatsApp + Instagram + Kookxtra |
| Tue–Thu | Accept pre-orders |
| Friday | Cook biryani batch for Friday evening delivery |
| Saturday | Main cooking day — highest order volume |
| Sunday | Dosa / thali day (South Indian weekend special) |

### Kookxtra commission
- Pickup / self-delivery: **10%** of order total
- Kookxtra delivery: negotiated rate with account executive
- All retail prices above are set to absorb 10–15% platform cost

---

## 7. Tech Stack — Website

### Framework choice: **React + Vite**
React is chosen over Vue for this project because:
- **Framer Motion** — the best scroll-animation library available, makes Apple-style scroll storytelling straightforward
- **GSAP ScrollTrigger** — for pinned sections and timeline-driven scroll sequences
- **Ecosystem maturity** — more animation libraries, better TypeScript support
- Vite for instant HMR and fast production builds

### Core dependencies

```json
{
  "dependencies": {
    "react": "^18",
    "react-dom": "^18",
    "framer-motion": "^11",
    "gsap": "^3",
    "@studio-freight/lenis": "^1"
  },
  "devDependencies": {
    "vite": "^5",
    "@vitejs/plugin-react": "^4",
    "tailwindcss": "^3",
    "autoprefixer": "^10",
    "postcss": "^8"
  }
}
```

### Key libraries explained

| Library | Purpose |
|---|---|
| **Framer Motion** | Component-level scroll animations, `useInView`, `useScroll`, `useTransform` — handles 90% of the scroll reveals |
| **GSAP + ScrollTrigger** | Pinned scroll sections (like Apple's iPhone feature reveals), timeline-driven sequences, horizontal scroll panels |
| **Lenis** | Smooth scroll — replaces browser native scroll with buttery momentum-based scrolling, the exact feel of Apple.com |
| **Tailwind CSS** | Utility-first styling, keeps component CSS co-located and consistent |

### Animation design — Apple-scroll philosophy
Every section should feel like it *earns* its reveal. Key patterns to implement:

1. **Sticky pin + scrub** — Section sticks to viewport while content animates driven by scroll position (used for biryani feature breakdown, Shakti Bowl component reveal)
2. **Fade + translate on enter** — Every heading fades up as it enters the viewport (`useInView` with Framer Motion)
3. **Parallax layers** — Background elements move at different speeds from foreground on scroll
4. **Horizontal scroll panel** — Menu cards scroll horizontally while the page scrolls vertically (GSAP horizontal scroll)
5. **Text split animation** — Hero headline reveals word-by-word on load (staggered children in Framer Motion)
6. **Counter animation** — Stats (10,000 customers, 3 regions, 0 shortcuts) count up when scrolled into view
7. **Smooth scroll momentum** — Lenis wraps the entire app for that signature "heavy" scroll feel

### Project structure

```
kitchen-as-it-is/
├── public/
│   └── fonts/                    # Self-hosted Cormorant Garamond + DM Sans
├── src/
│   ├── components/
│   │   ├── Nav.jsx               # Fixed nav, transparent → solid on scroll
│   │   ├── Hero.jsx              # Full-viewport, word-by-word headline reveal
│   │   ├── Story.jsx             # Parallax text + sticky image panel
│   │   ├── BiryaniShowcase.jsx   # GSAP pin — one biryani at a time, scroll to reveal
│   │   ├── ShaktiBowl.jsx        # Interactive bowl builder — hover to see components
│   │   ├── MenuScroll.jsx        # Horizontal scroll menu cards (GSAP)
│   │   ├── Drinks.jsx            # Three drink cards with staggered reveal
│   │   ├── HowItWorks.jsx        # Numbered steps, line draws on scroll
│   │   ├── OrderCTA.jsx          # Spice-red full-screen CTA
│   │   └── Footer.jsx
│   ├── hooks/
│   │   ├── useLenis.js           # Lenis smooth scroll setup
│   │   └── useScrollProgress.js  # Generic scroll progress hook
│   ├── styles/
│   │   ├── globals.css           # CSS variables, font-face declarations
│   │   └── animations.css        # Shared animation keyframes
│   ├── data/
│   │   └── menu.js               # All menu items, prices, tags as data objects
│   ├── App.jsx                   # Root — Lenis provider wraps all sections
│   └── main.jsx
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
├── .dockerignore
├── vite.config.js
├── tailwind.config.js
└── package.json
```

### Section-by-section animation spec

#### Hero
- Background: full-viewport, cream with subtle animated grain texture (CSS noise)
- Headline: `"Food the way it always tasted."` — each word fades + translates up with 80ms stagger, Framer Motion
- Sub-text and CTA fade in after headline completes
- Right panel: rotating spice names (Dum / Andhra / Saffron / Tamarind) cycle with crossfade

#### Story / Chef narrative
- GSAP ScrollTrigger pin: text block stays fixed while background image slowly zooms (Ken Burns)
- Three stat counters animate up when scrolled into view: 3+ cuisines / 100% home-cooked / 0 shortcuts

#### Biryani Showcase
- GSAP pinned section — viewport locked while three biryanis scroll into view one at a time
- Each biryani: name flies in from left, description from right, price number counts up
- Progress dots on right edge show which of the three you're on

#### Andhra Shakti Bowl
- Interactive: four "slots" visible (Green / Protein / Veg / Base)
- On scroll, each slot flips in sequentially (card-flip animation, CSS 3D transform)
- Hover each component to see the rotating options

#### Menu — horizontal scroll
- GSAP horizontal scroll: cards translate left as you scroll down
- Each card: dish name (Cormorant Garamond large), tag pills, price, one-line description
- Total scroll distance = number of cards × card width

#### Drinks
- Three cards stagger in from bottom (Framer Motion `staggerChildren`)
- Each card: icon animates in first, then name, tagline, description, price

#### How it works
- Four steps: SVG line animates from step to step as you scroll through
- Each step number counts in, text fades up

#### Order CTA
- Full-screen spice red, large Cormorant headline
- Two buttons: Kookxtra (white) + WhatsApp (outline white)
- Subtle: background slowly shifts hue from spice red to deeper terracotta on scroll

---

## 8. Docker Setup

### Strategy
- **Development**: Vite dev server with HMR via Docker Compose volume mount
- **Production**: Multi-stage build — Node builds the React app, Nginx serves the static output. Final image is ~25MB.

### `Dockerfile`

```dockerfile
# ── Stage 1: Build ──────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ── Stage 2: Serve ──────────────────────────────────────────────
FROM nginx:alpine AS production

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

### `nginx.conf`

```nginx
server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    # SPA routing — all paths serve index.html
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets aggressively
    location ~* \.(js|css|woff2|woff|ttf|svg|ico|png|jpg|webp)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";
    add_header Referrer-Policy "strict-origin-when-cross-origin";

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml image/svg+xml;
    gzip_min_length 1024;
}
```

### `docker-compose.yml`

```yaml
services:

  # ── Development ─────────────────────────────────────────────────
  dev:
    image: node:20-alpine
    working_dir: /app
    volumes:
      - .:/app
      - /app/node_modules          # anonymous volume prevents host override
    ports:
      - "5173:5173"
    command: sh -c "npm install && npm run dev -- --host 0.0.0.0"
    environment:
      - NODE_ENV=development

  # ── Production ──────────────────────────────────────────────────
  app:
    build:
      context: .
      target: production
    ports:
      - "80:80"
    restart: unless-stopped
    environment:
      - NODE_ENV=production
```

### `.dockerignore`

```
node_modules
dist
.git
.gitignore
*.md
.env*
.DS_Store
```

### `vite.config.js`

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',     // required for Docker dev
    port: 5173,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion', 'gsap'],
        }
      }
    }
  }
})
```

### Commands

```bash
# Development (hot reload, volume-mounted)
docker compose up dev

# Production build + serve
docker compose up app --build

# Build image standalone
docker build -t kitchen-as-it-is .

# Run production container
docker run -p 80:80 kitchen-as-it-is

# Shell into running container
docker exec -it <container_id> sh
```

---

## 9. Copy Assets

### Chef bio (English — Kookxtra)
Hi, I'm [Your Name] — an Indian home cook based in Amsterdam, specialising in authentic Biryani and regional Indian cooking from both the North and South.

I grew up cooking the way it's meant to be done: slow, patient, and full of love. My Hyderabadi Dum Biryani is cooked the traditional way — sealed and slow-cooked over low heat so every grain of rice absorbs the flavour of the whole spices and saffron beneath it.

Living in Amsterdam, I cook the food I miss from home — and share it with anyone who wants to eat something real. No shortcuts, no restaurant tricks. Just home food, made the way my family taught me.

All my non-vegetarian dishes are halal. Vegetarian and vegan options always available.

---

### Chef bio (Dutch — Kookxtra)
Hallo, ik ben [Jouw Naam] — een Indiase thuiskok in Amsterdam, gespecialiseerd in authentieke Biryani en regionale Indiase gerechten uit zowel Noord- als Zuid-India.

Ik kook zoals het hoort: rustig, met geduld en veel liefde. Mijn Hyderabadi Dum Biryani wordt op traditionele wijze bereid — afgesloten en langzaam gegaard, zodat elke rijstkorrel de smaak van de hele kruiden en saffraan opneemt.

In Amsterdam maak ik het eten dat ik mis van thuis — en deel ik het met iedereen die echt lekker wil eten. Geen shortcuts. Gewoon huisgemaakt eten, zoals mijn familie het mij heeft geleerd.

Alle niet-vegetarische gerechten zijn halal. Vegetarische en veganistische opties zijn altijd beschikbaar.

---

### Launch post
Excited to finally share this — I've just launched my home kitchen on Kookxtra!

I'm [Name], and I cook authentic Indian food the way it's made at home: slow, patient, and with whole spices. My speciality is Hyderabadi Dum Biryani — sealed, slow-cooked, made to order. I also cook Andhra, South Indian, and North Indian — including my signature Andhra Shakti Bowl, a high-protein Andhra lentil bowl with fresh greens and grilled protein.

Based in [neighbourhood], Amsterdam. All non-veg dishes halal. Vegetarian and vegan always available.

Find me on Kookxtra — search "Kitchen As It Is". Pre-orders open now.

---

### Weekly biryani drop post
This [day]: [Biryani name].

[One-line description of what makes this week's biryani specific.]

Single portions and family pots available. Order before [day] evening — I only make what's ordered, zero waste.

Order on Kookxtra: [link] or DM directly.

---

## 10. Future Ideas

- **Pickle subscription** — weekly jar of house Andhra pickle, posted or collected. €5/jar, recurring relationship
- **Cooking kit / ingredient box** — biryani masala + rice + recipe card. Sell via Kookxtra's product marketplace
- **Private Andhra dinner** — seated home dining for 4–6 guests, €45–55 per person
- **Corporate lunch contract** — weekly biryani or shakti bowl plan for Indian IT offices (TCS, Infosys, Wipro)
- **Diwali catering package** — biryani pot + shakti bowls + drinks + kheer, priced per head

---

*Last updated: April 2026 | Kitchen As It Is — Amsterdam*