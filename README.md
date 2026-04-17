# Jadier — Cabinet d'expertise comptable

Site vitrine ultra-premium du cabinet Jadier, construit avec Next.js 14 (App
Router), Tailwind CSS, Framer Motion et React Hook Form + Zod.

## Stack
 
- **Framework** : Next.js 14 (App Router) + TypeScript
- **Styling** : Tailwind CSS avec design tokens custom (ivory, olive, sage, moss)
- **Animations** : Framer Motion
- **Icônes** : Lucide React
- **Formulaires** : React Hook Form + Zod

## Démarrage

```bash
npm install
npm run dev
```

Le site est disponible sur [http://localhost:3000](http://localhost:3000).

## Build de production

```bash
npm run build
npm run start
```

## Architecture

```
app/
├── layout.tsx           # Layout racine (Header + Footer + fonts)
├── page.tsx             # Landing page
├── le-cabinet/page.tsx  # Les 5 points forts
├── missions/page.tsx    # Missions (accordéon par catégorie)
├── outils/page.tsx      # Pennylane, Silae, RCA
└── contact/page.tsx     # Formulaire + Google Maps
components/
├── Header.tsx           # Nav sticky avec mobile burger
├── Footer.tsx
├── Logo.tsx
├── Reveal.tsx           # Animation d'apparition au scroll
├── PageHero.tsx         # Hero générique pour pages intérieures
└── ContactForm.tsx      # Formulaire RHF + Zod
lib/
└── missions.ts          # Catalogue des missions
```

## Déploiement

Prêt pour Vercel : `vercel --prod`.

## Charte

| Token | Valeur | Usage |
|---|---|---|
| `ivory` | `#f6f6f4` | Fond principal |
| `ink` | `#1a1a1a` | Texte |
| `olive` | `#2a3124` | Sections fortes, footer |
| `sage` | `#a1a790` | Fonds de section secondaire |
| `moss` | `#7a8468` | CTA et accents |
