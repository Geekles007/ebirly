export type Lang = 'en' | 'fr' | 'ru';

export type ExpItem = { period: string; role: string; company: string; location: string; desc: string; highlights: string[] };
export type EduItem = { period: string; school: string; location: string; degree: string; href: string };
export type CertItem = { title: string; issuer: string; year: string; href: string };

export type Dict = {
  meta: { title: string; description: string };
  nav: {
    work: string; products: string; skills: string; experience: string; about: string; contact: string;
    cv: string; cvLoading: string; menu: string; close: string; theme: string; lang: string;
    light: string; dark: string; system: string;
  };
  hero: {
    status: string;
    titlePre: string; titleEm: string; titlePost: string;
    desc: string;
    ctaWork: string; ctaCv: string;
    metrics: Array<{ n: string; s?: string; l: string }>;
  };
  work: {
    eyebrow: string; title: string; desc: string; visit: string; featured: string;
    projects: Record<string, { kind: string; desc: string }>;
  };
  products: {
    eyebrow: string; title: string; desc: string;
    tchin: {
      badge: string; tagline: string; desc: string;
      metrics: Array<{ n: string; l: string }>;
      games: Array<{ n: string; p: string }>;
      cta: string;
      m: { room: string; online: string; now: string; secret: string; vote: string; controller: string };
    };
    oss: string; paid: string; github: string; site: string; live: string; pro: string; store: string;
    items: Record<string, string>;
  };
  a11y: {
    eyebrow: string; title: string; quote: string; quoteBy: string; desc: string; cta: string;
    pillars: Array<{ t: string; d: string }>;
  };
  skills: {
    eyebrow: string; title: string; desc: string;
    groups: Record<string, string>;
  };
  exp: { eyebrow: string; title: string; desc: string; cv: string; now: string; items: ExpItem[] };
  edu: { eyebrow: string; title: string; certs: string; items: EduItem[]; certItems: CertItem[] };
  about: {
    eyebrow: string; title: string; p1: string; p2: string;
    langsLabel: string; langs: Array<{ n: string; l: string }>;
    interestsLabel: string; interests: string[];
    based: string; basedValue: string;
  };
  contact: {
    eyebrow: string; title: string; desc: string; email: string; copy: string; copied: string; response: string;
  };
  footer: { rights: string; built: string; top: string };
};

/* ══════════════════════════════════════════════════════
   FRANÇAIS
══════════════════════════════════════════════════════ */
const fr: Dict = {
  meta: {
    title: 'Tondji Lee — Ingénieur Logiciel & Designer',
    description:
      'Ingénieur logiciel basé à Paris, 9 ans d’expérience. React, Next.js, TypeScript, Node.js, design systems et accessibilité. Disponible pour un nouveau poste.',
  },
  nav: {
    work: 'Projets', products: 'Produits', skills: 'Compétences', experience: 'Parcours', about: 'À propos', contact: 'Contact',
    cv: 'Télécharger le CV', cvLoading: 'Génération…', menu: 'Ouvrir le menu', close: 'Fermer le menu', theme: 'Changer de thème', lang: 'Langue',
    light: 'Clair', dark: 'Sombre', system: 'Système',
  },
  hero: {
    status: 'Disponible · Paris, France',
    titlePre: 'Ingénieur logiciel.',
    titleEm: 'Je conçois des interfaces',
    titlePost: 'précises et vivantes.',
    desc:
      'Neuf ans d’expérience à concevoir des produits web avec React, Next.js et TypeScript. Design systems, accessibilité et performance — du premier pixel à la production.',
    ctaWork: 'Voir mes projets',
    ctaCv: 'Télécharger le CV',
    metrics: [
      { n: '9', s: '+', l: 'ans d’expérience' },
      { n: '20', s: '+', l: 'projets livrés' },
      { n: '7', l: 'produits publiés' },
      { n: '4', l: 'langues parlées' },
    ],
  },
  work: {
    eyebrow: 'Projets sélectionnés',
    title: 'Des produits utilisés, pas des maquettes.',
    desc: 'Une sélection de plateformes et de sites que j’ai conçus et livrés en production.',
    visit: 'Voir le site',
    featured: 'Projet récent',
    projects: {
      emplacement: { kind: 'Plateforme immobilière · Lokimo', desc: 'Diagnostic d’emplacement gratuit pour chaque adresse en France. Front Next.js, cartographie et animations sur mesure.' },
      lokimo: { kind: 'SaaS · Intelligence immobilière', desc: 'Refonte complète du site et de la plateforme SaaS de Lokimo AI : design system, migration TypeScript, nouvelles fonctionnalités.' },
      macif: { kind: 'Plateforme immobilière · Macif', desc: 'Outil d’analyse de l’environnement d’un bien pour les sociétaires Macif. Conforme WCAG 2.1 AA, validé par un testeur aveugle.' },
      ibird: { kind: 'Studio de design · Portfolio', desc: 'Site vitrine de mon activité de designer, branché sur l’API Dribbble, avec des transitions GSAP.' },
      ifcameroun: { kind: 'Site institutionnel · Institut Français', desc: 'Site éditorial de l’Institut Français au Cameroun : CMS Strapi, hébergement AWS, animations Framer Motion.' },
      birthdays: { kind: 'Expérimentation · Motion design', desc: 'Composant d’anniversaires animé, construit pour explorer les transitions de layout et les micro-interactions avec Framer Motion.' },
    },
  },
  products: {
    eyebrow: 'Produits & open source',
    title: 'Ce que je construis en dehors des missions.',
    desc: 'Des outils open source et des produits pensés de bout en bout — de l’idée à la publication.',
    tchin: {
      badge: 'Projet phare · en ligne',
      tagline: 'La borne de party games de vos soirées.',
      desc: 'L’écran partagé fait le show, vos téléphones sont les manettes. L’esprit Jackbox, mais 100 % web : rien à installer, aucun compte, gratuit, en français et en anglais. Huit cartouches, du bluff au duel western.',
      metrics: [{ n: '8', l: 'jeux' }, { n: '20', l: 'joueurs max' }, { n: '100 %', l: 'gratuit' }],
      games: [
        { n: 'Imposteur de mots', p: '3–10 joueurs' },
        { n: 'Tchinsaw', p: '4–10 joueurs' },
        { n: 'Duel au Soleil', p: '2 joueurs' },
        { n: 'Labyrinthe', p: '2–20 joueurs' },
        { n: 'Pioche folle', p: '3–8 joueurs' },
        { n: 'Carrés d’or', p: '2 joueurs' },
        { n: 'Rafle', p: '2–6 joueurs' },
        { n: 'L’Addition', p: '3–10 joueurs' },
      ],
      cta: 'Jouer sur tchin.games',
      m: { room: 'SALON', online: '6 en ligne', now: 'En cours', secret: 'Chut… c’est secret', vote: 'VOTER', controller: 'Ta manette' },
    },
    oss: 'Open source', paid: 'Produits', github: 'GitHub', site: 'Site', live: 'En ligne', pro: 'Offre Pro', store: 'App Store',
    items: {
      ibird: 'L’atelier d’où sortent ces outils : une page par produit, un statut honnête et seulement les liens qui comptent. Statique, sans framework.',
      facturx: 'SDK TypeScript pour la facture électronique française : générer, valider, embarquer et lire des factures Factur-X au profil EN 16931.',
      llmsdk: 'SDK LLM unifié pour Dart & Flutter : Claude, OpenAI et Gemini via une seule interface, streaming, tool calling et sorties structurées.',
      mdkit: 'Registry façon shadcn de composants Markdown/MDX en copier-coller : callouts, steps, tabs, blocs de code, arborescences.',
      ibirdui: 'Composants React « vivants » : chaque état async géré d’office, accessibilité vérifiée avec axe, mise à jour sans écraser vos modifications.',
      maattitude: 'Application compagnon kémite : un chemin de 42 jours autour des principes de Maât, journal et bibliothèque intégrée. Flutter, iOS.',
      blocks: 'Catalogue de blocs d’interface complets, animés et accessibles, bâtis sur les primitives ibirdui. Quatorze blocs marketing, navigation et tarifs, plus des blocs morphing, installés en une commande. Le code reste chez vous.',
    },
  },
  a11y: {
    eyebrow: 'Accessibilité',
    title: 'Accessible. Pour de vrai.',
    quote:
      'Sur la plateforme immobilière de la Macif, l’un de mes testeurs était aveugle. Le jour où il a validé chaque parcours au lecteur d’écran, l’accessibilité a cessé d’être une contrainte — elle est devenue une fierté.',
    quoteBy: 'Projet Environnement immobilier · Macif',
    desc: 'HTML sémantique, ARIA juste, focus maîtrisé, contrastes conformes. Pas une case à cocher en fin de projet, mais une exigence dès la première ligne de code.',
    cta: 'Voir le projet Macif',
    pillars: [
      { t: 'Testé par de vrais utilisateurs', d: 'Validé en conditions réelles par un testeur aveugle, itéré jusqu’à satisfaction totale sur chaque parcours.' },
      { t: 'Lecteurs d’écran', d: 'Repères sémantiques, libellés ARIA et annonces dynamiques pensés pour NVDA, VoiceOver et JAWS.' },
      { t: '100 % clavier', d: 'Ordre de tabulation logique, focus toujours visible, zéro piège au focus. Tout fonctionne sans souris.' },
      { t: 'Contrastes & lisibilité', d: 'Ratios conformes WCAG AA, typographie fluide et zones de clic généreuses pour la basse vision.' },
    ],
  },
  skills: {
    eyebrow: 'Compétences',
    title: 'Du frontend au backend, un socle solide sur tout le produit.',
    desc: 'Je passe du design à la production sans friction : interfaces, API, mobile et déploiement.',
    groups: {
      frontend: 'Frontend', backend: 'Backend & API', mobile: 'Mobile', devops: 'Cloud & DevOps', design: 'Design & accessibilité', methods: 'Méthodes',
    },
  },
  exp: {
    eyebrow: 'Parcours',
    title: 'Neuf ans, trois pays, des équipes de toutes tailles.',
    desc: 'Freelance, startup, agence : je préfère les environnements où je touche à la fois au code, au design et aux décisions produit.',
    cv: 'Télécharger le CV complet',
    now: 'Aujourd’hui',
    items: [
      { period: '2023 — Aujourd’hui', role: 'Développeur Frontend', company: 'Lokimo AI', location: 'Paris · Full remote', desc: 'Refonte complète de la plateforme SaaS et du site de Lokimo AI.', highlights: ['Design system et composants réutilisables', 'Migration JavaScript → TypeScript', 'Livraison de emplacement.immo et environnement-immobilier.macif.fr, de la conception à la production'] },
      { period: '2020 — 2022', role: 'Lead Développeur Frontend', company: 'TSN Electro', location: 'Nijni Novgorod, Russie', desc: 'Direction technique du frontend d’un ERP interne.', highlights: ['Management d’une équipe de 3 développeurs', 'Architecture microfrontend conçue et mise en place', 'Agile SCRUM, stratégies de déploiement, formation'] },
      { period: 'Mai — Déc 2020', role: 'Développeur Fullstack', company: 'Web Mechanica', location: 'Nijni Novgorod, Russie', desc: 'Sites web sur mesure pour des clients internationaux.', highlights: ['Développement from scratch (Bitrix)', 'Livraison de vertex-awp.ru et elac.study'] },
      { period: '2016 — 2019', role: 'Développeur Web', company: 'Freelance', location: 'À distance', desc: 'Applications web et mobiles pour des clients variés.', highlights: ['Réservation de cinéma, transfert d’argent mobile', 'Cartes interactives, API de streaming audio', 'Gestion de clinique, réservation de voyages'] },
      { period: 'Mar — Août 2017', role: 'Développeur Java / Java EE', company: 'Kumity', location: 'Allemagne', desc: 'Module de transfert d’argent d’une monnaie électronique.', highlights: [] },
    ],
  },
  edu: {
    eyebrow: 'Formation & certifications',
    title: 'Un parcours entre le Canada, la France et la Russie.',
    certs: 'Certifications',
    items: [
      { period: '2019 — 2022', school: 'Université Lobatchevski', location: 'Nijni Novgorod, Russie', degree: 'Licence — Technologies de l’information, mathématiques et mécanique', href: 'http://eng.unn.ru/' },
      { period: '2015 — 2016', school: '3IL Limoges', location: 'France', degree: 'Diplôme en conception de systèmes d’information', href: 'https://www.3il-ingenieurs.fr/' },
      { period: '2013 — 2014', school: 'New Brunswick Community College', location: 'Nouveau-Brunswick, Canada', degree: 'DEC — Analyse et programmation', href: 'https://ccnb.ca/' },
    ],
    certItems: [
      { title: 'NestJS : The Complete Developer’s Guide', issuer: 'Udemy', year: '2025', href: 'https://www.udemy.com/certificate/UC-f42d1e15-1e1e-4cc5-b9d6-c5d0a41e016c/' },
      { title: 'Animations on the Web', issuer: 'animations.dev', year: '2024', href: 'https://animations.dev/certificate/c015f445-d180-4146-8617-9e8fbd8da936' },
      { title: 'Apollo Graph Developer — Associate', issuer: 'Apollo GraphQL', year: '2023', href: 'https://www.apollographql.com/tutorials/certifications/5fd2321a-c700-4412-b393-ee56eb88ffde' },
      { title: 'Front End Development Libraries', issuer: 'freeCodeCamp', year: '2022', href: 'https://www.freecodecamp.org/certification/fcc182b6d0f-8bee-4f97-aed9-2c166a2ca5c1/front-end-development-libraries' },
      { title: 'JavaScript Algorithms & Data Structures', issuer: 'freeCodeCamp', year: '2022', href: 'https://www.freecodecamp.org/certification/fcc182b6d0f-8bee-4f97-aed9-2c166a2ca5c1/javascript-algorithms-and-data-structures' },
      { title: 'Microfrontends with React', issuer: 'Udemy', year: '2021', href: 'https://www.udemy.com/certificate/UC-931e7037-dfd7-4266-8d7e-1040b9012da1/' },
    ],
  },
  about: {
    eyebrow: 'À propos',
    title: 'Je code ce que je dessine, et je dessine pour ceux qui cliquent.',
    p1: 'Je m’appelle Tondji Niat J. Lee. Ingénieur logiciel passionné de design graphique, je construis des produits web depuis neuf ans, entre le Canada, la Russie et la France.',
    p2: 'Ce qui me motive : rendre une interface évidente. Le bon espacement, la bonne transition, le bon mot. Et faire en sorte qu’elle fonctionne pour tout le monde, clavier et lecteur d’écran compris.',
    langsLabel: 'Langues',
    langs: [{ n: 'Français', l: 'Natif' }, { n: 'Anglais', l: 'Courant' }, { n: 'Italien', l: 'B2' }, { n: 'Russe', l: 'A1' }],
    interestsLabel: 'En dehors du code',
    interests: ['Illustration vectorielle', 'Jeux vidéo (Souls-like)', 'Mangas & lecture', 'Hip-hop, blues, makossa'],
    based: 'Basé à', basedValue: 'Paris, France',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Un poste, un projet\u202F? Parlons-en.',
    desc: 'Je suis ouvert aux opportunités frontend, backend et fullstack, en CDI ou en freelance, à Paris ou à distance.',
    email: 'M’écrire',
    copy: 'Copier l’adresse',
    copied: 'Adresse copiée',
    response: 'Réponse sous 24 h',
  },
  footer: { rights: '© 2026 Tondji Niat J. Lee', built: 'Conçu et développé à Paris', top: 'Retour en haut' },
};

/* ══════════════════════════════════════════════════════
   ENGLISH
══════════════════════════════════════════════════════ */
const en: Dict = {
  meta: {
    title: 'Tondji Lee — Software Engineer & Designer',
    description:
      'Software engineer based in Paris with 9 years of experience. React, Next.js, TypeScript, Node.js, design systems and accessibility. Open to new roles.',
  },
  nav: {
    work: 'Work', products: 'Products', skills: 'Skills', experience: 'Experience', about: 'About', contact: 'Contact',
    cv: 'Download CV', cvLoading: 'Generating…', menu: 'Open menu', close: 'Close menu', theme: 'Toggle theme', lang: 'Language',
    light: 'Light', dark: 'Dark', system: 'System',
  },
  hero: {
    status: 'Available · Paris, France',
    titlePre: 'Software engineer.',
    titleEm: 'I build interfaces that are',
    titlePost: 'precise and alive.',
    desc:
      'Nine years designing and shipping web products with React, Next.js and TypeScript. Design systems, accessibility and performance — from the first pixel to production.',
    ctaWork: 'See my work',
    ctaCv: 'Download CV',
    metrics: [
      { n: '9', s: '+', l: 'years of experience' },
      { n: '20', s: '+', l: 'projects shipped' },
      { n: '7', l: 'products released' },
      { n: '4', l: 'languages spoken' },
    ],
  },
  work: {
    eyebrow: 'Selected work',
    title: 'Products people use, not mockups.',
    desc: 'A selection of platforms and websites I designed and shipped to production.',
    visit: 'Visit site',
    featured: 'Recent project',
    projects: {
      emplacement: { kind: 'Real-estate platform · Lokimo', desc: 'Free location diagnosis for any address in France. Next.js front end, custom maps and animations.' },
      lokimo: { kind: 'SaaS · Real-estate intelligence', desc: 'Complete overhaul of Lokimo AI’s website and SaaS platform: design system, TypeScript migration, new features.' },
      macif: { kind: 'Real-estate platform · Macif', desc: 'Neighbourhood analysis tool for Macif members. WCAG 2.1 AA compliant, validated by a blind tester.' },
      ibird: { kind: 'Design studio · Portfolio', desc: 'Showcase of my design work, wired to the Dribbble API with GSAP transitions.' },
      ifcameroun: { kind: 'Institutional website · Institut Français', desc: 'Editorial website for the Institut Français in Cameroon: Strapi CMS, AWS hosting, Framer Motion.' },
      birthdays: { kind: 'Experiment · Motion design', desc: 'An animated birthdays component built to explore layout transitions and micro-interactions with Framer Motion.' },
    },
  },
  products: {
    eyebrow: 'Products & open source',
    title: 'What I build outside client work.',
    desc: 'Open-source tools and products designed end to end — from idea to release.',
    tchin: {
      badge: 'Flagship · live',
      tagline: 'The party-games console for your nights out.',
      desc: 'The shared screen runs the show, your phones are the controllers. Jackbox spirit, 100% web: nothing to install, no account, free, in French and English. Eight cartridges, from bluffing to western duels.',
      metrics: [{ n: '8', l: 'games' }, { n: '20', l: 'players max' }, { n: '100%', l: 'free' }],
      games: [
        { n: 'Word Impostor', p: '3–10 players' },
        { n: 'Tchinsaw', p: '4–10 players' },
        { n: 'Duel au Soleil', p: '2 players' },
        { n: 'Maze', p: '2–20 players' },
        { n: 'Wild Draw', p: '3–8 players' },
        { n: 'Golden Squares', p: '2 players' },
        { n: 'Clean Sweep', p: '2–6 players' },
        { n: 'The Tab', p: '3–10 players' },
      ],
      cta: 'Play on tchin.games',
      m: { room: 'ROOM', online: '6 online', now: 'Now playing', secret: 'Shh… it’s a secret', vote: 'VOTE', controller: 'Your controller' },
    },
    oss: 'Open source', paid: 'Products', github: 'GitHub', site: 'Website', live: 'Live', pro: 'Pro tier', store: 'App Store',
    items: {
      ibird: 'The workshop these tools come from: one page per product, an honest status and only the links that matter. Static, framework-free.',
      facturx: 'Pure TypeScript SDK for French e-invoicing: build, validate, embed and read Factur-X invoices at the EN 16931 profile.',
      llmsdk: 'Unified LLM SDK for Dart & Flutter: Claude, OpenAI and Gemini through one interface, with streaming, tool calling and structured outputs.',
      mdkit: 'A shadcn-style registry of copy-paste Markdown/MDX components: callouts, steps, tabs, code blocks, file trees.',
      ibirdui: '“Living” React components: every async state handled out of the box, accessibility verified with axe, upgrades that survive your edits.',
      maattitude: 'A Kemetic companion app: a 42-day path around the principles of Maât, with journaling and a built-in library. Flutter, iOS.',
      blocks: 'A catalogue of complete, animated, accessible UI blocks built on the ibirdui primitives. Fourteen marketing, navigation and pricing blocks plus morphing ones, installed with a single command. You keep the code.',
    },
  },
  a11y: {
    eyebrow: 'Accessibility',
    title: 'Accessible. For real.',
    quote:
      'On Macif’s real-estate platform, one of my testers was blind. The day he validated every single flow with his screen reader, accessibility stopped being a constraint — it became a point of pride.',
    quoteBy: 'Environnement immobilier project · Macif',
    desc: 'Semantic HTML, precise ARIA, controlled focus, compliant contrast. Not a checkbox at the end of a project, but a requirement from the first line of code.',
    cta: 'View the Macif project',
    pillars: [
      { t: 'Tested by real users', d: 'Validated in real conditions by a blind tester, iterated until full satisfaction on every flow.' },
      { t: 'Screen readers', d: 'Semantic landmarks, ARIA labels and live announcements crafted for NVDA, VoiceOver and JAWS.' },
      { t: '100% keyboard', d: 'Logical tab order, always-visible focus, zero focus traps. Everything works without a mouse.' },
      { t: 'Contrast & legibility', d: 'WCAG AA ratios, fluid type and generous hit areas designed for low vision.' },
    ],
  },
  skills: {
    eyebrow: 'Skills',
    title: 'From frontend to backend, a solid core across the whole product.',
    desc: 'I move from design to production without friction: interfaces, APIs, mobile and deployment.',
    groups: {
      frontend: 'Frontend', backend: 'Backend & APIs', mobile: 'Mobile', devops: 'Cloud & DevOps', design: 'Design & accessibility', methods: 'Ways of working',
    },
  },
  exp: {
    eyebrow: 'Experience',
    title: 'Nine years, three countries, teams of every size.',
    desc: 'Freelance, startup, agency: I prefer environments where I touch code, design and product decisions at once.',
    cv: 'Download the full CV',
    now: 'Now',
    items: [
      { period: '2023 — Now', role: 'Frontend Developer', company: 'Lokimo AI', location: 'Paris · Fully remote', desc: 'Complete overhaul of Lokimo AI’s SaaS platform and website.', highlights: ['Design system and reusable components', 'JavaScript → TypeScript migration', 'Delivered emplacement.immo and environnement-immobilier.macif.fr from concept to production'] },
      { period: '2020 — 2022', role: 'Lead Frontend Developer', company: 'TSN Electro', location: 'Nizhny Novgorod, Russia', desc: 'Technical lead on the front end of an internal ERP.', highlights: ['Managed a team of 3 developers', 'Designed and implemented a microfrontend architecture', 'Agile SCRUM, deployment strategies, team training'] },
      { period: 'May — Dec 2020', role: 'Fullstack Developer', company: 'Web Mechanica', location: 'Nizhny Novgorod, Russia', desc: 'Custom websites for international clients.', highlights: ['Built from scratch (Bitrix)', 'Delivered vertex-awp.ru and elac.study'] },
      { period: '2016 — 2019', role: 'Web Developer', company: 'Freelance', location: 'Remote', desc: 'Web and mobile applications for a range of clients.', highlights: ['Cinema booking, mobile money transfer', 'Interactive maps, audio streaming API', 'Clinic management, travel booking'] },
      { period: 'Mar — Aug 2017', role: 'Java / Java EE Developer', company: 'Kumity', location: 'Germany', desc: 'Money transfer module of an electronic currency.', highlights: [] },
    ],
  },
  edu: {
    eyebrow: 'Education & certifications',
    title: 'A path across Canada, France and Russia.',
    certs: 'Certifications',
    items: [
      { period: '2019 — 2022', school: 'Lobachevsky University', location: 'Nizhny Novgorod, Russia', degree: 'Bachelor — Information Technology, Mathematics and Mechanics', href: 'http://eng.unn.ru/' },
      { period: '2015 — 2016', school: '3IL Limoges', location: 'France', degree: 'Diploma in Information System Design', href: 'https://www.3il-ingenieurs.fr/' },
      { period: '2013 — 2014', school: 'New Brunswick Community College', location: 'New Brunswick, Canada', degree: 'DEC — Analysis and Programming', href: 'https://ccnb.ca/' },
    ],
    certItems: [
      { title: 'NestJS: The Complete Developer’s Guide', issuer: 'Udemy', year: '2025', href: 'https://www.udemy.com/certificate/UC-f42d1e15-1e1e-4cc5-b9d6-c5d0a41e016c/' },
      { title: 'Animations on the Web', issuer: 'animations.dev', year: '2024', href: 'https://animations.dev/certificate/c015f445-d180-4146-8617-9e8fbd8da936' },
      { title: 'Apollo Graph Developer — Associate', issuer: 'Apollo GraphQL', year: '2023', href: 'https://www.apollographql.com/tutorials/certifications/5fd2321a-c700-4412-b393-ee56eb88ffde' },
      { title: 'Front End Development Libraries', issuer: 'freeCodeCamp', year: '2022', href: 'https://www.freecodecamp.org/certification/fcc182b6d0f-8bee-4f97-aed9-2c166a2ca5c1/front-end-development-libraries' },
      { title: 'JavaScript Algorithms & Data Structures', issuer: 'freeCodeCamp', year: '2022', href: 'https://www.freecodecamp.org/certification/fcc182b6d0f-8bee-4f97-aed9-2c166a2ca5c1/javascript-algorithms-and-data-structures' },
      { title: 'Microfrontends with React', issuer: 'Udemy', year: '2021', href: 'https://www.udemy.com/certificate/UC-931e7037-dfd7-4266-8d7e-1040b9012da1/' },
    ],
  },
  about: {
    eyebrow: 'About',
    title: 'I write the code I sketch, and I sketch for the people who click.',
    p1: 'I’m Tondji Niat J. Lee. A software engineer with a passion for graphic design, I’ve been building web products for nine years across Canada, Russia and France.',
    p2: 'What drives me: making an interface feel obvious. The right spacing, the right transition, the right word. And making sure it works for everyone, keyboard and screen reader included.',
    langsLabel: 'Languages',
    langs: [{ n: 'French', l: 'Native' }, { n: 'English', l: 'Fluent' }, { n: 'Italian', l: 'B2' }, { n: 'Russian', l: 'A1' }],
    interestsLabel: 'Beyond code',
    interests: ['Vector illustration', 'Video games (Souls-like)', 'Manga & books', 'Hip-hop, blues, makossa'],
    based: 'Based in', basedValue: 'Paris, France',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'A role, a project? Let’s talk.',
    desc: 'I’m open to frontend, backend and fullstack opportunities, full-time or freelance, in Paris or remote.',
    email: 'Email me',
    copy: 'Copy address',
    copied: 'Address copied',
    response: 'Reply within 24 h',
  },
  footer: { rights: '© 2026 Tondji Niat J. Lee', built: 'Designed and built in Paris', top: 'Back to top' },
};

/* ══════════════════════════════════════════════════════
   РУССКИЙ
══════════════════════════════════════════════════════ */
const ru: Dict = {
  meta: {
    title: 'Тонджи Ли — Инженер-программист и дизайнер',
    description:
      'Инженер-программист из Парижа, 9 лет опыта. React, Next.js, TypeScript, Node.js, дизайн-системы и доступность. Открыт к новым предложениям.',
  },
  nav: {
    work: 'Проекты', products: 'Продукты', skills: 'Навыки', experience: 'Опыт', about: 'Обо мне', contact: 'Контакт',
    cv: 'Скачать резюме', cvLoading: 'Генерация…', menu: 'Открыть меню', close: 'Закрыть меню', theme: 'Сменить тему', lang: 'Язык',
    light: 'Светлая', dark: 'Тёмная', system: 'Системная',
  },
  hero: {
    status: 'Открыт к работе · Париж, Франция',
    titlePre: 'Инженер-программист.',
    titleEm: 'Я создаю интерфейсы —',
    titlePost: 'точные и живые.',
    desc:
      'Девять лет проектирую и запускаю веб-продукты на React, Next.js и TypeScript. Дизайн-системы, доступность и производительность — от первого пикселя до продакшена.',
    ctaWork: 'Смотреть проекты',
    ctaCv: 'Скачать резюме',
    metrics: [
      { n: '9', s: '+', l: 'лет опыта' },
      { n: '20', s: '+', l: 'проектов' },
      { n: '7', l: 'продуктов' },
      { n: '4', l: 'языка' },
    ],
  },
  work: {
    eyebrow: 'Избранные проекты',
    title: 'Продукты, которыми пользуются, а не макеты.',
    desc: 'Платформы и сайты, которые я спроектировал и довёл до продакшена.',
    visit: 'Открыть сайт',
    featured: 'Недавний проект',
    projects: {
      emplacement: { kind: 'Платформа недвижимости · Lokimo', desc: 'Бесплатная диагностика расположения для любого адреса во Франции. Next.js, карты и анимации на заказ.' },
      lokimo: { kind: 'SaaS · Аналитика недвижимости', desc: 'Полная переработка сайта и SaaS-платформы Lokimo AI: дизайн-система, миграция на TypeScript, новые функции.' },
      macif: { kind: 'Платформа недвижимости · Macif', desc: 'Инструмент анализа окружения объекта для клиентов Macif. WCAG 2.1 AA, проверено незрячим тестировщиком.' },
      ibird: { kind: 'Дизайн-студия · Портфолио', desc: 'Витрина моих дизайн-работ, подключённая к API Dribbble, с переходами на GSAP.' },
      ifcameroun: { kind: 'Институциональный сайт · Institut Français', desc: 'Редакционный сайт Французского института в Камеруне: Strapi CMS, AWS, Framer Motion.' },
      birthdays: { kind: 'Эксперимент · Motion design', desc: 'Анимированный компонент дней рождения — исследование layout-переходов и микровзаимодействий на Framer Motion.' },
    },
  },
  products: {
    eyebrow: 'Продукты и open source',
    title: 'Что я создаю помимо клиентских проектов.',
    desc: 'Open-source инструменты и продукты, продуманные от идеи до релиза.',
    tchin: {
      badge: 'Главный проект · онлайн',
      tagline: 'Консоль вечериночных игр для ваших встреч.',
      desc: 'Общий экран ведёт шоу, ваши телефоны — пульты. В духе Jackbox, но полностью в вебе: ничего не устанавливать, без аккаунта, бесплатно, на французском и английском. Восемь картриджей — от блефа до вестерн-дуэлей.',
      metrics: [{ n: '8', l: 'игр' }, { n: '20', l: 'игроков' }, { n: '100 %', l: 'бесплатно' }],
      games: [
        { n: 'Word Impostor', p: '3–10 игроков' },
        { n: 'Tchinsaw', p: '4–10 игроков' },
        { n: 'Duel au Soleil', p: '2 игрока' },
        { n: 'Maze', p: '2–20 игроков' },
        { n: 'Wild Draw', p: '3–8 игроков' },
        { n: 'Golden Squares', p: '2 игрока' },
        { n: 'Clean Sweep', p: '2–6 игроков' },
        { n: 'The Tab', p: '3–10 игроков' },
      ],
      cta: 'Играть на tchin.games',
      m: { room: 'КОМНАТА', online: '6 онлайн', now: 'Идёт игра', secret: 'Тсс… это секрет', vote: 'ГОЛОС', controller: 'Твой пульт' },
    },
    oss: 'Open source', paid: 'Продукты', github: 'GitHub', site: 'Сайт', live: 'Онлайн', pro: 'Pro-тариф', store: 'App Store',
    items: {
      ibird: 'Мастерская, из которой выходят эти инструменты: страница на продукт, честный статус и только нужные ссылки. Статика без фреймворка.',
      facturx: 'Чистый TypeScript-SDK для французских электронных счетов: создание, валидация, вложение и чтение Factur-X профиля EN 16931.',
      llmsdk: 'Единый LLM SDK для Dart и Flutter: Claude, OpenAI и Gemini через один интерфейс, стриминг, вызов инструментов и структурированный вывод.',
      mdkit: 'Registry в стиле shadcn из копируемых Markdown/MDX-компонентов: callout, steps, tabs, блоки кода, деревья файлов.',
      ibirdui: '«Живые» React-компоненты: каждое асинхронное состояние из коробки, доступность проверена axe, обновления не затирают ваши правки.',
      maattitude: 'Кемитское приложение-компаньон: 42-дневный путь по принципам Маат, дневник и встроенная библиотека. Flutter, iOS.',
      blocks: 'Каталог готовых анимированных и доступных UI-блоков на примитивах ibirdui. Четырнадцать блоков для маркетинга, навигации и тарифов плюс morphing-блоки, установка одной командой. Код остаётся у вас.',
    },
  },
  a11y: {
    eyebrow: 'Доступность',
    title: 'Доступно. По-настоящему.',
    quote:
      'На платформе недвижимости Macif один из тестировщиков был незрячим. В день, когда он проверил каждый сценарий с экранным диктором, доступность перестала быть ограничением — и стала поводом для гордости.',
    quoteBy: 'Проект Environnement immobilier · Macif',
    desc: 'Семантический HTML, точный ARIA, управляемый фокус, соответствующий контраст. Не галочка в конце проекта, а требование с первой строки кода.',
    cta: 'Открыть проект Macif',
    pillars: [
      { t: 'Проверено реальными людьми', d: 'Протестировано незрячим тестировщиком в реальных условиях и доработано до полного удовлетворения.' },
      { t: 'Экранные дикторы', d: 'Семантические ориентиры, ARIA-метки и динамические объявления для NVDA, VoiceOver и JAWS.' },
      { t: '100 % клавиатура', d: 'Логичный порядок табуляции, всегда видимый фокус, никаких ловушек. Всё работает без мыши.' },
      { t: 'Контраст и читаемость', d: 'Контраст по WCAG AA, плавная типографика и крупные зоны нажатия для слабовидящих.' },
    ],
  },
  skills: {
    eyebrow: 'Навыки',
    title: 'От фронтенда до бэкенда — прочная база на весь продукт.',
    desc: 'Перехожу от дизайна к продакшену без трения: интерфейсы, API, мобильные приложения и деплой.',
    groups: {
      frontend: 'Frontend', backend: 'Backend и API', mobile: 'Мобильные', devops: 'Cloud и DevOps', design: 'Дизайн и доступность', methods: 'Методы работы',
    },
  },
  exp: {
    eyebrow: 'Опыт',
    title: 'Девять лет, три страны, команды любого размера.',
    desc: 'Фриланс, стартап, агентство: предпочитаю среды, где одновременно влияю на код, дизайн и продуктовые решения.',
    cv: 'Скачать полное резюме',
    now: 'Сейчас',
    items: [
      { period: '2023 — сейчас', role: 'Frontend-разработчик', company: 'Lokimo AI', location: 'Париж · Удалённо', desc: 'Полная переработка SaaS-платформы и сайта Lokimo AI.', highlights: ['Дизайн-система и переиспользуемые компоненты', 'Миграция JavaScript → TypeScript', 'Запуск emplacement.immo и environnement-immobilier.macif.fr от концепции до продакшена'] },
      { period: '2020 — 2022', role: 'Lead Frontend-разработчик', company: 'TSN Electro', location: 'Нижний Новгород, Россия', desc: 'Техническое руководство фронтендом внутренней ERP.', highlights: ['Управление командой из 3 разработчиков', 'Спроектировал и внедрил микрофронтенд-архитектуру', 'Agile SCRUM, стратегии деплоя, обучение команды'] },
      { period: 'Май — Дек 2020', role: 'Fullstack-разработчик', company: 'Web Mechanica', location: 'Нижний Новгород, Россия', desc: 'Сайты на заказ для международных клиентов.', highlights: ['Разработка с нуля (Bitrix)', 'Запуск vertex-awp.ru и elac.study'] },
      { period: '2016 — 2019', role: 'Веб-разработчик', company: 'Фриланс', location: 'Удалённо', desc: 'Веб- и мобильные приложения для разных клиентов.', highlights: ['Бронирование кино, мобильные переводы', 'Интерактивные карты, API аудиостриминга', 'Управление клиникой, бронирование билетов'] },
      { period: 'Мар — Авг 2017', role: 'Разработчик Java / Java EE', company: 'Kumity', location: 'Германия', desc: 'Модуль денежных переводов электронной валюты.', highlights: [] },
    ],
  },
  edu: {
    eyebrow: 'Образование и сертификаты',
    title: 'Путь через Канаду, Францию и Россию.',
    certs: 'Сертификаты',
    items: [
      { period: '2019 — 2022', school: 'Университет Лобачевского', location: 'Нижний Новгород, Россия', degree: 'Бакалавр — Информационные технологии, математика и механика', href: 'http://eng.unn.ru/' },
      { period: '2015 — 2016', school: '3IL Limoges', location: 'Франция', degree: 'Диплом по проектированию информационных систем', href: 'https://www.3il-ingenieurs.fr/' },
      { period: '2013 — 2014', school: 'New Brunswick Community College', location: 'Нью-Брансуик, Канада', degree: 'DEC — Анализ и программирование', href: 'https://ccnb.ca/' },
    ],
    certItems: [
      { title: 'NestJS: The Complete Developer’s Guide', issuer: 'Udemy', year: '2025', href: 'https://www.udemy.com/certificate/UC-f42d1e15-1e1e-4cc5-b9d6-c5d0a41e016c/' },
      { title: 'Animations on the Web', issuer: 'animations.dev', year: '2024', href: 'https://animations.dev/certificate/c015f445-d180-4146-8617-9e8fbd8da936' },
      { title: 'Apollo Graph Developer — Associate', issuer: 'Apollo GraphQL', year: '2023', href: 'https://www.apollographql.com/tutorials/certifications/5fd2321a-c700-4412-b393-ee56eb88ffde' },
      { title: 'Front End Development Libraries', issuer: 'freeCodeCamp', year: '2022', href: 'https://www.freecodecamp.org/certification/fcc182b6d0f-8bee-4f97-aed9-2c166a2ca5c1/front-end-development-libraries' },
      { title: 'JavaScript Algorithms & Data Structures', issuer: 'freeCodeCamp', year: '2022', href: 'https://www.freecodecamp.org/certification/fcc182b6d0f-8bee-4f97-aed9-2c166a2ca5c1/javascript-algorithms-and-data-structures' },
      { title: 'Microfrontends with React', issuer: 'Udemy', year: '2021', href: 'https://www.udemy.com/certificate/UC-931e7037-dfd7-4266-8d7e-1040b9012da1/' },
    ],
  },
  about: {
    eyebrow: 'Обо мне',
    title: 'Я пишу код, который рисую, и рисую для тех, кто кликает.',
    p1: 'Меня зовут Тонджи Ниат Дж. Ли. Инженер-программист с увлечением графическим дизайном, девять лет создаю веб-продукты в Канаде, России и Франции.',
    p2: 'Что меня мотивирует: сделать интерфейс очевидным. Правильный отступ, правильный переход, правильное слово. И чтобы всё работало для каждого — с клавиатуры и с экранным диктором.',
    langsLabel: 'Языки',
    langs: [{ n: 'Французский', l: 'Родной' }, { n: 'Английский', l: 'Свободно' }, { n: 'Итальянский', l: 'B2' }, { n: 'Русский', l: 'A1' }],
    interestsLabel: 'Вне кода',
    interests: ['Векторная иллюстрация', 'Видеоигры (Souls-like)', 'Манга и книги', 'Хип-хоп, блюз, макосса'],
    based: 'Живу в', basedValue: 'Париж, Франция',
  },
  contact: {
    eyebrow: 'Контакт',
    title: 'Вакансия или проект? Давайте обсудим.',
    desc: 'Открыт к frontend-, backend- и fullstack-предложениям, в штат или на фрилансе, в Париже или удалённо.',
    email: 'Написать',
    copy: 'Скопировать адрес',
    copied: 'Адрес скопирован',
    response: 'Ответ в течение 24 ч',
  },
  footer: { rights: '© 2026 Тонджи Ниат Дж. Ли', built: 'Спроектировано и разработано в Париже', top: 'Наверх' },
};

export const dicts: Record<Lang, Dict> = { en, fr, ru };
