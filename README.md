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

## Déploiement

Chaque push sur `master` déclenche [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) : build de l'export statique, puis envoi du dossier `out/` sur Hetzner en FTPS.

### Secrets à définir

Dans le dépôt GitHub, `Settings → Secrets and variables → Actions → Secrets` :

| Secret | Valeur |
| --- | --- |
| `FTP_SERVER` | `www690.your-server.de`, le serveur Hetzner de ce compte. Sans `ftp://` |
| `FTP_USERNAME` | Nom de l'utilisateur FTP |
| `FTP_PASSWORD` | Mot de passe de cet utilisateur |

### Variables optionnelles

À définir au choix en secret ou en variable, uniquement si les valeurs par défaut ne conviennent pas. Le workflow lit le secret en priorité, puis la variable, puis le défaut :

| Variable | Défaut | Quand la définir |
| --- | --- | --- |
| `FTP_SERVER_DIR` | `/public_html/` | Le site vit dans un autre dossier. Terminer par `/` |
| `FTP_PROTOCOL` | `ftps` | À ne pas changer : le serveur rejette le FTP non chiffré |
| `FTP_PORT` | `21` | Port FTP non standard |

### Notes

- L'action conserve un fichier `.ftp-deploy-sync-state.json` à la racine distante : seuls les fichiers modifiés sont renvoyés à chaque déploiement.
- Pour purger d'anciens fichiers restés sur le serveur, lancer le workflow à la main depuis l'onglet Actions en cochant *Vider le dossier distant avant l'envoi*. À n'utiliser qu'une fois : cette option supprime tout le contenu de la destination avant de renvoyer le site.
- Le serveur impose le TLS explicite. Une tentative en FTP simple renvoie `550 SSL/TLS required on the control channel`.
- Le job échoue avant tout transfert si un secret manque ou si le build n'a rien produit, pour ne jamais écraser le site en ligne par un export vide.
