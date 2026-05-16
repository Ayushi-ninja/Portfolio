# Ayushi Rajput — Portfolio

Personal portfolio website for Ayushi Rajput, Full Stack Developer & CS Student.

## Stack

- **Next.js 14** (App Router, Static Export)
- **Tailwind CSS** — custom dark theme (`#0a0f1e`, `#00d4ff`, `#7c3aed`)
- **Framer Motion** — scroll-reveal animations throughout
- **react-icons** — Feather icons

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build for Production

```bash
node_modules/.bin/next build   # outputs to /out
```

## Deploy

**Netlify** — push to GitHub, connect repo. `netlify.toml` is pre-configured.

**Vercel** — import repo, framework = Next.js. Done.

**GitHub Pages** — upload `/out` folder after build.

## Sections

| Section | Component |
|---|---|
| Hero | `components/Hero.tsx` |
| About | `components/About.tsx` |
| Achievements | `components/Achievements.tsx` |
| Skills | `components/Skills.tsx` |
| Experience | `components/Experience.tsx` |
| Projects | `components/Projects.tsx` |
| Certifications | `components/Certifications.tsx` |
| Contact | `components/Contact.tsx` |
