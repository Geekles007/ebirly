export type Lang = 'en' | 'fr' | 'ru';

export type WorkItem = { d: string; r: string; c: string; x: string };
export type EduItem  = { d: string; s: string; l: string; g: string; h: string };

export type Dict = {
  nav:    Array<{ n: string; l: string; h: string }>;
  menu:   { open: string; close: string; title: string };
  motion: { pause: string; play: string };
  ticker: { location: string; version: string };
  status: { title: string; online: string; rows: Array<[string, string]> };
  hero: {
    kicker: string;
    l1: string; l2: string; l3: string;
    desc: string;
    cta1: string; cta2: string; scroll: string;
    metrics: Array<{ n: string; l: string }>;
  };
  about: {
    label: string; chip: string; title: string;
    intro: string; lede_pre: string; lede_em: string; lede_post: string;
    id_head: string; id_live: string;
    kv: Array<[string, string]>;
  };
  stack:   { label: string; chip: string; title: string };
  work:    { label: string; chip: string; title: string };
  a11y: {
    label: string; chip: string; title: string;
    quote: string; intro: string; cta: string;
    standards: string[];
    pillars: Array<{ t: string; d: string }>;
  };
  builds: {
    label: string; chip: string; title: string; intro: string;
    oss: string; oss_chip: string; paid: string; paid_chip: string; soon: string;
    open: string; pro: string; cta: string; site: string;
    hexagone: string; liasse: string; maattitude: string;
  };
  exp:     { label: string; chip: string; title: string; side: string; items: WorkItem[] };
  edu:     { label: string; chip: string; title: string; side: string; items: EduItem[] };
  certs:   { label: string; chip: string; title: string };
  langs:   { label: string; chip: string };
  contact: { label: string; chip: string; heading_pre: string; heading_link: string };
  footer:  { l: string; r: string };
  cv:      { btn: string; loading: string };
};

/* ══════════════════════════════════════════════════════
   ENGLISH
══════════════════════════════════════════════════════ */
const en: Dict = {
  nav: [
    { n: '01', l: 'About',       h: '#about'     },
    { n: '02', l: 'Stack',       h: '#stack'     },
    { n: '03', l: 'Work',        h: '#work'      },
    { n: '★',  l: 'A11y',        h: '#a11y'      },
    { n: '04', l: 'Builds',      h: '#builds'    },
    { n: '05', l: 'Experience',  h: '#exp'       },
    { n: '06', l: 'Education',   h: '#education' },
    { n: '07', l: 'Certs',       h: '#certs'     },
    { n: '08', l: 'Contact',     h: '#contact'   },
  ],
  menu:   { open: 'Menu', close: 'Close', title: 'Index' },
  motion: { pause: 'Pause the scrolling tech ticker', play: 'Resume the scrolling tech ticker' },
  ticker: { location: 'Paris, FR', version: 'v5.0.0' },
  status: {
    title:  'System status',
    online: 'Online',
    rows:   [['Availability','Open'],['Timezone','GMT+1 · Paris'],['Response','< 24 h'],['Focus','React · Next.js']],
  },
  hero: {
    kicker:  'Software Engineer · Designer · Paris FR · Open to work',
    l1: 'I build',
    l2: 'fast, precise',
    l3: 'interfaces',
    desc:    'Software engineer passionate about graphic design. I craft <strong>polished interfaces</strong>, build <strong>scalable products</strong>, and bridge the gap between engineering and aesthetics — with React & Next.js as my weapons of choice.',
    cta1:    '→ See projects',
    cta2:    'Get in touch',
    scroll:  '↓ scroll · 07 sections',
    metrics: [{ n: '9+', l: 'Years exp.' }, { n: '20+', l: 'Projects shipped' }, { n: '5', l: 'Companies' }],
  },
  about: {
    label:     '01 — About',
    chip:      'Bio · 1 min',
    title:     'Engineer & designer.',
    intro:     "I'm",
    lede_pre:  '. For 9 years I\'ve been engineering web products and crafting interfaces that feel alive.',
    lede_em:   'Code, design, and everything in between.',
    lede_post: 'I write the code I sketch — and I sketch for the people who click.',
    id_head:   'ID // TNJL-0099',
    id_live:   '● LIVE',
    kv: [
      ['Name',   'Tondji Niat J. Lee'],
      ['Role',   'Eng · Designer'],
      ['Based',  'Paris, France'],
      ['Stack',  'React / Next.js'],
      ['Langs',  'FR · EN · IT · RU'],
      ['Status', 'Open to work'],
    ],
  },
  stack:   { label: '02 — Stack',             chip: '18 technologies · updated 04.2026', title: 'Tools & playground.' },
  work:    { label: '03 — Selected projects',  chip: '2022 — 2026',                       title: 'Recent work.' },
  a11y: {
    label:    '★ Spotlight — Accessibility',
    chip:     'WCAG 2.1 AA · RGAA',
    title:    'Accessible. For real.',
    quote:    "On Macif's real-estate platform, one of my testers was blind. The mission: let him browse, understand and act without the slightest friction. The day he validated every single flow with his screen reader, accessibility stopped being a constraint — it became a point of pride.",
    intro:    'I build interfaces everyone can use — by keyboard, by screen reader, in high contrast. Not a checkbox bolted on at the end, but a requirement baked in from the first line of code: semantic HTML, precise ARIA, controlled focus and compliant contrast.',
    cta:      'View the Macif project',
    standards: ['WCAG 2.1 AA', 'RGAA 4', 'ARIA', 'NVDA · VoiceOver · JAWS', 'Keyboard-first', 'Semantic HTML'],
    pillars: [
      { t: 'Tested by real users',     d: 'Validated in real conditions by a blind tester — iterated until full satisfaction on every flow, not a lab simulation.' },
      { t: 'Screen-reader ready',      d: 'Semantic landmarks, ARIA labels and live announcements crafted for NVDA, VoiceOver and JAWS.' },
      { t: '100% keyboard navigable',  d: 'Logical tab order, always-visible focus and zero focus traps — the whole product works without a mouse.' },
      { t: 'Contrast & legibility',    d: 'AA-compliant contrast ratios, fluid type and generous hit areas designed for low-vision users.' },
    ],
  },
  builds: {
    label:     '04 — Products & Open source',
    chip:      '2 shipped · more soon',
    title:     'Things I build.',
    intro:     'Beyond client work, I design and ship my own products — open-source tools and paid software, crafted end to end.',
    oss:       'Open source',
    oss_chip:  '01 / 01 · free',
    paid:      'Paid products',
    paid_chip: 'live on iOS',
    soon:      'Trouvy · Liasse — in the works.',
    open:      'Open source',
    pro:       'Pro tier',
    cta:       'View on GitHub',
    site:      'Website',
    hexagone:  'A shadcn-style registry of React map components wired to official French open data (IGN/Géoplateforme, BAN, cadastre, PLU, DVF, Géorisques) — drop-in via the shadcn CLI.',
    liasse:    'An Office-as-code toolkit: describe a document once with a typed DSL and render it to Excel, PowerPoint, Word and PDF — plus EN 16931-compliant Factur-X e-invoices (PDF/A-3b). Own-your-code components via the liasse CLI.',
    maattitude: 'A Kemetic companion app — a 42-day path of inner alignment around the principles of Maât, with daily laws, journaling and a built-in library. Built with Flutter.',
  },
  exp: {
    label: '05 — Experience',
    chip:  '5 roles · 9 years',
    title: 'Experience.',
    side:  'Nine years across freelance, startup, and agency. I prefer environments where I can touch code, design, and product decisions at once.',
    items: [
      { d: '2023 — Now',      r: 'Frontend Developer',         c: 'Lokimo AI · Paris',      x: 'Complete overhaul of the Lokimo AI SaaS platform. New features, design system, JS→TS migration. Delivered emplacement.immo and environnement-immobilier.macif.fr from concept to production.' },
      { d: '2020 — 2022',     r: 'Lead Frontend Developer',    c: 'TSN Electro · Russia',   x: 'Managed a team of 3 developers. Designed and implemented a microfrontend architecture for an internal ERP. Agile SCRUM, deployment strategies, team training.' },
      { d: 'May — Dec 2020',  r: 'Fullstack Developer',        c: 'Web Mechanica · Russia', x: 'Built websites from scratch for international clients (Bitrix). System maintenance and feature development. Delivered vertex-awp.ru and elac.study.' },
      { d: '2016 — 2019',     r: 'Web Developer',              c: 'Freelance',              x: 'Cinema booking app, mobile money transfer, interactive maps, audio streaming API, clinic management system, and travel booking platform.' },
      { d: 'Mar — Aug 2017',  r: 'Java / Java EE Developer',   c: 'Kumity · Germany',       x: 'Development of the money transfer module of an electronic currency application.' },
    ],
  },
  edu: {
    label: '06 — Education',
    chip:  '3 degrees',
    title: 'Formation.',
    side:  'Academic background spanning Canada, France, and Russia — giving a multicultural perspective to every project.',
    items: [
      { d: '2019 — 2022', s: 'Lobachevsky University',            l: 'Nizhny Novgorod, Russia', g: 'Bachelor — Institute of Information Technology, Mathematics and Mechanics', h: 'http://eng.unn.ru/' },
      { d: '2015 — 2016', s: '3IL Limoges',                       l: 'France',                  g: 'Diploma in Information System Design',                                       h: 'https://www.3il-ingenieurs.fr/' },
      { d: '2013 — 2014', s: 'New Brunswick Community College',   l: 'New Brunswick, Canada',   g: 'DEC — Analysis and Programming',                                             h: 'https://ccnb.ca/' },
    ],
  },
  certs:   { label: '07 — Certifications', chip: '06 / 06', title: 'Certified.' },
  langs:   { label: '08 — Languages',      chip: '04 / 04' },
  contact: { label: '09 — Contact', chip: '● Open to work · 2026', heading_pre: "Got an idea?\nLet's talk", heading_link: 'now.' },
  footer:  { l: '© 2026 Tondji Niat J. Lee — All rights reserved.', r: 'Built with Next.js & Tailwind · Paris' },
  cv:      { btn: '↓ CV', loading: '...' },
};

/* ══════════════════════════════════════════════════════
   FRANÇAIS
══════════════════════════════════════════════════════ */
const fr: Dict = {
  nav: [
    { n: '01', l: 'À propos',    h: '#about'     },
    { n: '02', l: 'Stack',       h: '#stack'     },
    { n: '03', l: 'Projets',     h: '#work'      },
    { n: '★',  l: 'A11y',        h: '#a11y'      },
    { n: '04', l: 'Produits',    h: '#builds'    },
    { n: '05', l: 'Parcours',    h: '#exp'       },
    { n: '06', l: 'Formation',   h: '#education' },
    { n: '07', l: 'Certifs',     h: '#certs'     },
    { n: '08', l: 'Contact',     h: '#contact'   },
  ],
  menu:   { open: 'Menu', close: 'Fermer', title: 'Index' },
  motion: { pause: 'Mettre en pause le bandeau défilant', play: 'Reprendre le bandeau défilant' },
  ticker: { location: 'Paris, FR', version: 'v5.0.0' },
  status: {
    title:  'Statut système',
    online: 'En ligne',
    rows:   [['Disponibilité','Ouverte'],['Fuseau','GMT+1 · Paris'],['Réponse','< 24 h'],['Focus','React · Next.js']],
  },
  hero: {
    kicker:  'Ingénieur Logiciel · Designer · Paris FR · Disponible',
    l1: 'Je construis',
    l2: 'des interfaces',
    l3: 'précises.',
    desc:    'Ingénieur logiciel passionné de design graphique. Je crée des <strong>interfaces soignées</strong>, des <strong>produits évolutifs</strong> et comble le fossé entre l\'ingénierie et l\'esthétique — avec React et Next.js comme armes de prédilection.',
    cta1:    '→ Voir les projets',
    cta2:    'Me contacter',
    scroll:  '↓ défiler · 07 sections',
    metrics: [{ n: '9+', l: 'Ans d\'expérience' }, { n: '20+', l: 'Projets livrés' }, { n: '5', l: 'Entreprises' }],
  },
  about: {
    label:     '01 — À propos',
    chip:      'Bio · 1 min',
    title:     'Ingénieur & designer.',
    intro:     'Je m\'appelle',
    lede_pre:  '. Depuis 9 ans, je conçois des produits web et des interfaces qui prennent vie.',
    lede_em:   'Code, design et tout ce qui se trouve entre les deux.',
    lede_post: 'Je code ce que je dessine — et je dessine pour ceux qui cliquent.',
    id_head:   'ID // TNJL-0099',
    id_live:   '● LIVE',
    kv: [
      ['Nom',     'Tondji Niat J. Lee'],
      ['Rôle',    'Ing. · Designer'],
      ['Basé à',  'Paris, France'],
      ['Stack',   'React / Next.js'],
      ['Langues', 'FR · EN · IT · RU'],
      ['Statut',  'Disponible'],
    ],
  },
  stack:   { label: '02 — Stack technique',      chip: '18 technologies · màj 04.2026', title: 'Outils & terrain de jeu.' },
  work:    { label: '03 — Projets sélectionnés',  chip: '2022 — 2026',                   title: 'Travaux récents.' },
  a11y: {
    label:    '★ Focus — Accessibilité',
    chip:     'WCAG 2.1 AA · RGAA',
    title:    'Accessible. Pour de vrai.',
    quote:    "Sur la plateforme immobilière de la MACIF, l'un de mes testeurs était aveugle. La mission : qu'il navigue, comprenne et agisse sans la moindre friction. Le jour où il a validé chaque parcours au lecteur d'écran, l'accessibilité a cessé d'être une contrainte — elle est devenue une fierté.",
    intro:    "Je conçois des interfaces utilisables par tout le monde — au clavier, au lecteur d'écran, en contraste élevé. Pas une case à cocher en fin de projet, mais une exigence intégrée dès la première ligne de code : HTML sémantique, ARIA juste, focus maîtrisé et contrastes conformes.",
    cta:      'Voir le projet MACIF',
    standards: ['WCAG 2.1 AA', 'RGAA 4', 'ARIA', 'NVDA · VoiceOver · JAWS', 'Clavier d\'abord', 'HTML sémantique'],
    pillars: [
      { t: 'Testé par de vrais utilisateurs', d: 'Validé en conditions réelles par un testeur aveugle — itéré jusqu\'à une satisfaction totale sur chaque parcours, loin d\'une simulation en labo.' },
      { t: 'Compatible lecteurs d\'écran',     d: 'Repères sémantiques, libellés ARIA et annonces dynamiques pensés pour NVDA, VoiceOver et JAWS.' },
      { t: '100 % navigable au clavier',       d: 'Ordre de tabulation logique, focus toujours visible et zéro piège au focus — tout le produit fonctionne sans souris.' },
      { t: 'Contrastes & lisibilité',          d: 'Ratios de contraste conformes AA, typographie fluide et zones de clic généreuses pensées pour la basse vision.' },
    ],
  },
  builds: {
    label:     '04 — Produits & Open source',
    chip:      '2 publiés · bientôt plus',
    title:     'Ce que je construis.',
    intro:     'Au-delà des missions clients, je conçois et publie mes propres produits — outils open source et logiciels payants, pensés de bout en bout.',
    oss:       'Open source',
    oss_chip:  '01 / 01 · gratuit',
    paid:      'Produits payants',
    paid_chip: 'dispo sur iOS',
    soon:      'Trouvy · Liasse — en préparation.',
    open:      'Open source',
    pro:       'Offre Pro',
    cta:       'Voir sur GitHub',
    site:      'Site web',
    hexagone:  'Un registry façon shadcn de composants cartographiques React câblés sur les données ouvertes officielles françaises (IGN/Géoplateforme, BAN, cadastre, PLU, DVF, Géorisques) — installables via le CLI shadcn.',
    liasse:    'Un toolkit Office-as-code : décris un document une fois en DSL typé et génère-le en Excel, PowerPoint, Word et PDF — plus des factures électroniques Factur-X conformes EN 16931 (PDF/A-3b). Composants own-your-code via la CLI liasse.',
    maattitude: 'Une compagne kémite — un chemin d’éveil en 42 jours autour des principes de Maât, avec lois quotidiennes, journal et bibliothèque intégrée. Développée en Flutter.',
  },
  exp: {
    label: '05 — Parcours',
    chip:  '5 postes · 9 ans',
    title: 'Expérience.',
    side:  'Neuf ans entre le freelance, la startup et l\'agence. Je préfère les environnements où je peux toucher à la fois au code, au design et aux décisions produit.',
    items: [
      { d: '2023 — Présent',  r: 'Développeur Frontend',         c: 'Lokimo AI · Paris',      x: 'Refonte complète de la plateforme SaaS Lokimo AI. Nouvelles fonctionnalités, système de design, migration JS→TS. Livraison de emplacement.immo et environnement-immobilier.macif.fr de la conception à la production.' },
      { d: '2020 — 2022',     r: 'Lead Développeur Frontend',    c: 'TSN Electro · Russie',   x: 'Gestion d\'une équipe de 3 développeurs. Conception et implémentation d\'une architecture microfrontend pour un ERP interne. Agile SCRUM, stratégies de déploiement, formation de l\'équipe.' },
      { d: 'Mai — Déc 2020',  r: 'Développeur Fullstack',        c: 'Web Mechanica · Russie', x: 'Développement de sites web from scratch pour des clients internationaux (Bitrix). Maintenance des systèmes et développement de fonctionnalités. Livraison de vertex-awp.ru et elac.study.' },
      { d: '2016 — 2019',     r: 'Développeur Web',              c: 'Freelance',              x: 'Application de réservation de cinéma, transfert d\'argent mobile, cartes interactives, API de streaming audio, système de gestion de clinique, plateforme de réservation de voyages.' },
      { d: 'Mar — Août 2017', r: 'Développeur Java / Java EE',   c: 'Kumity · Allemagne',     x: 'Développement du module de transfert d\'argent d\'une monnaie électronique.' },
    ],
  },
  edu: {
    label: '06 — Formation',
    chip:  '3 diplômes',
    title: 'Formation.',
    side:  'Parcours académique entre le Canada, la France et la Russie — une perspective multiculturelle sur chaque projet.',
    items: [
      { d: '2019 — 2022', s: 'Université Lobatchevski',           l: 'Nijni Novgorod, Russie', g: 'Licence — Institut des Technologies de l\'Information, Mathématiques et Mécanique', h: 'http://eng.unn.ru/' },
      { d: '2015 — 2016', s: '3IL Limoges',                       l: 'France',                 g: 'Diplôme en conception de systèmes d\'information',                                 h: 'https://www.3il-ingenieurs.fr/' },
      { d: '2013 — 2014', s: 'New Brunswick Community College',   l: 'Nouveau-Brunswick, Canada', g: 'DEC — Analyse et Programmation',                                               h: 'https://ccnb.ca/' },
    ],
  },
  certs:   { label: '07 — Certifications', chip: '06 / 06', title: 'Certifié.' },
  langs:   { label: '08 — Langues',        chip: '04 / 04' },
  contact: { label: '09 — Contact', chip: '● Disponible · 2026', heading_pre: "Une idée ?\nParlons-en", heading_link: 'maintenant.' },
  footer:  { l: '© 2026 Tondji Niat J. Lee — Tous droits réservés.', r: 'Construit avec Next.js & Tailwind · Paris' },
  cv:      { btn: '↓ CV', loading: '...' },
};

/* ══════════════════════════════════════════════════════
   РУССКИЙ
══════════════════════════════════════════════════════ */
const ru: Dict = {
  nav: [
    { n: '01', l: 'О себе',        h: '#about'     },
    { n: '02', l: 'Стек',          h: '#stack'     },
    { n: '03', l: 'Проекты',       h: '#work'      },
    { n: '★',  l: 'A11y',          h: '#a11y'      },
    { n: '04', l: 'Продукты',      h: '#builds'    },
    { n: '05', l: 'Опыт',          h: '#exp'       },
    { n: '06', l: 'Образование',   h: '#education' },
    { n: '07', l: 'Сертификаты',   h: '#certs'     },
    { n: '08', l: 'Контакт',       h: '#contact'   },
  ],
  menu:   { open: 'Меню', close: 'Закрыть', title: 'Индекс' },
  motion: { pause: 'Остановить бегущую строку', play: 'Возобновить бегущую строку' },
  ticker: { location: 'Париж, Франция', version: 'v5.0.0' },
  status: {
    title:  'Статус системы',
    online: 'Онлайн',
    rows:   [['Доступность','Открыт'],['Часовой пояс','GMT+1 · Париж'],['Ответ','< 24 ч'],['Фокус','React · Next.js']],
  },
  hero: {
    kicker:  'Инженер ПО · Дизайнер · Париж · Открыт к работе',
    l1: 'Я создаю',
    l2: 'точные',
    l3: 'интерфейсы.',
    desc:    'Инженер-программист с увлечением графическим дизайном. Я создаю <strong>отполированные интерфейсы</strong>, <strong>масштабируемые продукты</strong> и соединяю инженерию с эстетикой — используя React и Next.js как основные инструменты.',
    cta1:    '→ Проекты',
    cta2:    'Написать',
    scroll:  '↓ прокрутить · 07 разделов',
    metrics: [{ n: '9+', l: 'Лет опыта' }, { n: '20+', l: 'Проектов' }, { n: '5', l: 'Компаний' }],
  },
  about: {
    label:     '01 — О себе',
    chip:      'Биография · 1 мин',
    title:     'Инженер и дизайнер.',
    intro:     'Меня зовут',
    lede_pre:  '. Уже 9 лет я разрабатываю веб-продукты и создаю интерфейсы, которые оживают.',
    lede_em:   'Код, дизайн и всё между ними.',
    lede_post: 'Я пишу код, который рисую — и рисую для тех, кто кликает.',
    id_head:   'ID // TNJL-0099',
    id_live:   '● LIVE',
    kv: [
      ['Имя',       'Тонджи Ниат Дж. Ли'],
      ['Роль',      'Инж. · Дизайнер'],
      ['Город',     'Париж, Франция'],
      ['Стек',      'React / Next.js'],
      ['Языки',     'FR · EN · IT · RU'],
      ['Статус',    'Открыт к работе'],
    ],
  },
  stack:   { label: '02 — Стек',               chip: '18 технологий · обновлено 04.2026', title: 'Инструменты и площадка.' },
  work:    { label: '03 — Избранные проекты',   chip: '2022 — 2026',                        title: 'Недавние работы.' },
  a11y: {
    label:    '★ В фокусе — Доступность',
    chip:     'WCAG 2.1 AA · RGAA',
    title:    'Доступно. По-настоящему.',
    quote:    'На платформе недвижимости MACIF один из тестировщиков был незрячим. Задача — чтобы он перемещался, понимал и действовал без малейших затруднений. В день, когда он проверил каждый сценарий с экранным диктором, доступность перестала быть ограничением — и стала поводом для гордости.',
    intro:    'Я создаю интерфейсы, которыми может пользоваться каждый — с клавиатуры, с экранным диктором, в высоком контрасте. Не галочка в конце проекта, а требование с первой строки кода: семантический HTML, точный ARIA, управляемый фокус и соответствующий контраст.',
    cta:      'Открыть проект MACIF',
    standards: ['WCAG 2.1 AA', 'RGAA 4', 'ARIA', 'NVDA · VoiceOver · JAWS', 'Клавиатура прежде всего', 'Семантика HTML'],
    pillars: [
      { t: 'Проверено реальными людьми',     d: 'Протестировано в реальных условиях незрячим тестировщиком — доработано до полного удовлетворения на каждом сценарии, а не в лаборатории.' },
      { t: 'Готово к экранным дикторам',     d: 'Семантические ориентиры, ARIA-метки и динамические объявления для NVDA, VoiceOver и JAWS.' },
      { t: '100% навигация с клавиатуры',    d: 'Логичный порядок табуляции, всегда видимый фокус и отсутствие ловушек фокуса — продукт работает без мыши.' },
      { t: 'Контраст и читаемость',          d: 'Контраст по уровню AA, плавная типографика и крупные зоны нажатия для слабовидящих.' },
    ],
  },
  builds: {
    label:     '04 — Продукты и Open source',
    chip:      '2 выпущено · скоро ещё',
    title:     'Что я создаю.',
    intro:     'Помимо клиентских проектов, я разрабатываю и выпускаю собственные продукты — open-source инструменты и платное ПО, созданные от и до.',
    oss:       'Open source',
    oss_chip:  '01 / 01 · бесплатно',
    paid:      'Платные продукты',
    paid_chip: 'в App Store',
    soon:      'Trouvy · Liasse — в разработке.',
    open:      'Open source',
    pro:       'Pro-тариф',
    cta:       'Открыть на GitHub',
    site:      'Сайт',
    hexagone:  'Registry в стиле shadcn из React-компонентов карт, подключённых к официальным открытым данным Франции (IGN/Géoplateforme, BAN, кадастр, PLU, DVF, Géorisques) — устанавливается через CLI shadcn.',
    liasse:    'Инструментарий Office-as-code: опиши документ один раз на типизированном DSL и сгенерируй его в Excel, PowerPoint, Word и PDF — плюс электронные счета Factur-X по стандарту EN 16931 (PDF/A-3b). Компоненты own-your-code через CLI liasse.',
    maattitude: 'Кемитское приложение-компаньон — 42-дневный путь внутреннего согласия с принципами Маат: ежедневные законы, дневник и встроенная библиотека. Сделано на Flutter.',
  },
  exp: {
    label: '05 — Опыт работы',
    chip:  '5 должностей · 9 лет',
    title: 'Опыт.',
    side:  'Девять лет в стартапах, агентствах и на фрилансе. Предпочитаю среды, где можно влиять на код, дизайн и продуктовые решения одновременно.',
    items: [
      { d: '2023 — сейчас',   r: 'Фронтенд-разработчик',        c: 'Lokimo AI · Париж',   x: 'Полная переработка SaaS-платформы Lokimo AI. Новые функции, дизайн-система, миграция JS→TS. Разработка emplacement.immo и environnement-immobilier.macif.fr от концепции до продакшена.' },
      { d: '2020 — 2022',     r: 'Lead Фронтенд-разработчик',   c: 'TSN Electro · Россия', x: 'Руководил командой из 3 разработчиков. Разработал микрофронтенд-архитектуру для внутренней ERP. Agile SCRUM, стратегии деплоя, обучение команды.' },
      { d: 'Май — Дек 2020',  r: 'Fullstack-разработчик',       c: 'Web Mechanica · Россия', x: 'Разработка сайтов с нуля для международных клиентов (Bitrix). Поддержка систем и разработка новых функций. Сдал vertex-awp.ru и elac.study.' },
      { d: '2016 — 2019',     r: 'Веб-разработчик',             c: 'Фриланс',              x: 'Приложение бронирования кино, мобильные денежные переводы, интерактивные карты, API аудиостриминга, система управления клиникой, платформа бронирования билетов.' },
      { d: 'Мар — Авг 2017',  r: 'Разработчик Java / Java EE',  c: 'Kumity · Германия',    x: 'Разработка модуля денежных переводов для электронной валюты.' },
    ],
  },
  edu: {
    label: '06 — Образование',
    chip:  '3 диплома',
    title: 'Образование.',
    side:  'Академический путь через Канаду, Францию и Россию — мультикультурная перспектива в каждом проекте.',
    items: [
      { d: '2019 — 2022', s: 'Университет Лобачевского',          l: 'Нижний Новгород, Россия', g: 'Бакалавр — Институт информационных технологий, математики и механики', h: 'http://eng.unn.ru/' },
      { d: '2015 — 2016', s: '3IL Limoges',                        l: 'Франция',                 g: 'Диплом по проектированию информационных систем',                       h: 'https://www.3il-ingenieurs.fr/' },
      { d: '2013 — 2014', s: 'New Brunswick Community College',    l: 'Нью-Брансуик, Канада',    g: 'DEC — Анализ и программирование',                                      h: 'https://ccnb.ca/' },
    ],
  },
  certs:   { label: '07 — Сертификаты', chip: '06 / 06', title: 'Сертифицирован.' },
  langs:   { label: '08 — Языки',       chip: '04 / 04' },
  contact: { label: '09 — Контакт', chip: '● Открыт к работе · 2026', heading_pre: 'Есть идея?\nДавайте обсудим', heading_link: 'прямо сейчас.' },
  footer:  { l: '© 2026 Тонджи Ниат Дж. Ли — Все права защищены.', r: 'Создан на Next.js и Tailwind · Париж' },
  cv:      { btn: '↓ CV', loading: '...' },
};

export const dicts: Record<Lang, Dict> = { en, fr, ru };
