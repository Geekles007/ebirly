export type Lang = 'en' | 'fr' | 'ru';

export type WorkItem = { d: string; r: string; c: string; x: string };
export type EduItem  = { d: string; s: string; l: string; g: string; h: string };

export type Dict = {
  nav:    Array<{ n: string; l: string; h: string }>;
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
    { n: '04', l: 'Experience',  h: '#exp'       },
    { n: '05', l: 'Education',   h: '#education' },
    { n: '06', l: 'Certs',       h: '#certs'     },
    { n: '07', l: 'Contact',     h: '#contact'   },
  ],
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
  stack:   { label: '02 — Stack',             chip: '17 technologies · updated 04.2026', title: 'Tools & playground.' },
  work:    { label: '03 — Selected projects',  chip: '2022 — 2026',                       title: 'Recent work.' },
  exp: {
    label: '04 — Experience',
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
    label: '05 — Education',
    chip:  '3 degrees',
    title: 'Formation.',
    side:  'Academic background spanning Canada, France, and Russia — giving a multicultural perspective to every project.',
    items: [
      { d: '2019 — 2022', s: 'Lobachevsky University',            l: 'Nizhny Novgorod, Russia', g: 'Bachelor — Institute of Information Technology, Mathematics and Mechanics', h: 'http://eng.unn.ru/' },
      { d: '2015 — 2016', s: '3IL Limoges',                       l: 'France',                  g: 'Diploma in Information System Design',                                       h: 'https://www.3il-ingenieurs.fr/' },
      { d: '2013 — 2014', s: 'New Brunswick Community College',   l: 'New Brunswick, Canada',   g: 'DEC — Analysis and Programming',                                             h: 'https://ccnb.ca/' },
    ],
  },
  certs:   { label: '06 — Certifications', chip: '06 / 06', title: 'Certified.' },
  langs:   { label: '07 — Languages',      chip: '04 / 04' },
  contact: { label: '08 — Contact', chip: '● Open to work · 2026', heading_pre: "Got an idea?\nLet's talk", heading_link: 'now.' },
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
    { n: '04', l: 'Parcours',    h: '#exp'       },
    { n: '05', l: 'Formation',   h: '#education' },
    { n: '06', l: 'Certifs',     h: '#certs'     },
    { n: '07', l: 'Contact',     h: '#contact'   },
  ],
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
  stack:   { label: '02 — Stack technique',      chip: '17 technologies · màj 04.2026', title: 'Outils & terrain de jeu.' },
  work:    { label: '03 — Projets sélectionnés',  chip: '2022 — 2026',                   title: 'Travaux récents.' },
  exp: {
    label: '04 — Parcours',
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
    label: '05 — Formation',
    chip:  '3 diplômes',
    title: 'Formation.',
    side:  'Parcours académique entre le Canada, la France et la Russie — une perspective multiculturelle sur chaque projet.',
    items: [
      { d: '2019 — 2022', s: 'Université Lobatchevski',           l: 'Nijni Novgorod, Russie', g: 'Licence — Institut des Technologies de l\'Information, Mathématiques et Mécanique', h: 'http://eng.unn.ru/' },
      { d: '2015 — 2016', s: '3IL Limoges',                       l: 'France',                 g: 'Diplôme en conception de systèmes d\'information',                                 h: 'https://www.3il-ingenieurs.fr/' },
      { d: '2013 — 2014', s: 'New Brunswick Community College',   l: 'Nouveau-Brunswick, Canada', g: 'DEC — Analyse et Programmation',                                               h: 'https://ccnb.ca/' },
    ],
  },
  certs:   { label: '06 — Certifications', chip: '06 / 06', title: 'Certifié.' },
  langs:   { label: '07 — Langues',        chip: '04 / 04' },
  contact: { label: '08 — Contact', chip: '● Disponible · 2026', heading_pre: "Une idée ?\nParlons-en", heading_link: 'maintenant.' },
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
    { n: '04', l: 'Опыт',          h: '#exp'       },
    { n: '05', l: 'Образование',   h: '#education' },
    { n: '06', l: 'Сертификаты',   h: '#certs'     },
    { n: '07', l: 'Контакт',       h: '#contact'   },
  ],
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
  stack:   { label: '02 — Стек',               chip: '17 технологий · обновлено 04.2026', title: 'Инструменты и площадка.' },
  work:    { label: '03 — Избранные проекты',   chip: '2022 — 2026',                        title: 'Недавние работы.' },
  exp: {
    label: '04 — Опыт работы',
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
    label: '05 — Образование',
    chip:  '3 диплома',
    title: 'Образование.',
    side:  'Академический путь через Канаду, Францию и Россию — мультикультурная перспектива в каждом проекте.',
    items: [
      { d: '2019 — 2022', s: 'Университет Лобачевского',          l: 'Нижний Новгород, Россия', g: 'Бакалавр — Институт информационных технологий, математики и механики', h: 'http://eng.unn.ru/' },
      { d: '2015 — 2016', s: '3IL Limoges',                        l: 'Франция',                 g: 'Диплом по проектированию информационных систем',                       h: 'https://www.3il-ingenieurs.fr/' },
      { d: '2013 — 2014', s: 'New Brunswick Community College',    l: 'Нью-Брансуик, Канада',    g: 'DEC — Анализ и программирование',                                      h: 'https://ccnb.ca/' },
    ],
  },
  certs:   { label: '06 — Сертификаты', chip: '06 / 06', title: 'Сертифицирован.' },
  langs:   { label: '07 — Языки',       chip: '04 / 04' },
  contact: { label: '08 — Контакт', chip: '● Открыт к работе · 2026', heading_pre: 'Есть идея?\nДавайте обсудим', heading_link: 'прямо сейчас.' },
  footer:  { l: '© 2026 Тонджи Ниат Дж. Ли — Все права защищены.', r: 'Создан на Next.js и Tailwind · Париж' },
  cv:      { btn: '↓ CV', loading: '...' },
};

export const dicts: Record<Lang, Dict> = { en, fr, ru };
