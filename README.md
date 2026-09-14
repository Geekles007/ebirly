# ebirly.com — Portfolio de Tondji Niat J. Lee

Site vitrine statique (Next.js 14, App Router, `output: 'export'`) déployé sur Hetzner via GitHub Actions.

## Développement

```bash
yarn install
yarn dev        # http://localhost:3000
yarn build      # export statique dans ./out
```

## Structure

- `src/app/` — layout (polices Inter + Instrument Serif, thème clair/sombre, langue) et page unique.
- `src/components/site/` — une section par fichier : hero, work, products, a11y, skills, experience, education, about, contact, nav, footer.
- `src/components/motion.tsx` — primitives d'animation (Reveal, Stagger, Counter, Words) basées sur Framer Motion, avec respect de `prefers-reduced-motion`.
- `src/lib/i18n.ts` — tous les textes en FR / EN / RU.
- `src/data/portfolio.ts` — données indépendantes de la langue (projets, produits, compétences, liens).
- `src/data/resume.tsx` + `src/lib/cv-generator.tsx` — source et rendu du CV PDF généré côté client.
- `public/works/opt/` — vidéos des projets (mp4 H.264, 1280 px, 12 s) et posters jpg.

## Mettre à jour le contenu

- Un projet : ajouter l'entrée dans `PROJECTS` (`src/data/portfolio.ts`) puis ses textes dans `work.projects` de chaque langue (`src/lib/i18n.ts`).
- Un produit : idem avec `PRODUCTS_OSS` et `products.items`.
- Le CV PDF : modifier `src/data/resume.tsx`.

Pour ajouter une vidéo de projet, encoder depuis la capture d'origine :

```bash
ffmpeg -i capture.mov -t 12 -vf "scale=1280:-2,fps=30" -c:v libx264 -crf 27 -pix_fmt yuv420p -movflags +faststart -an public/works/opt/nom.mp4
ffmpeg -ss 2 -i capture.mov -frames:v 1 -vf "scale=1280:-2" -q:v 4 public/works/opt/nom.jpg
```
