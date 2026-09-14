/* Language-independent data. Copy lives in src/lib/i18n.ts, keyed by `id`. */

export type Project = {
  id: string;
  title: string;
  year: string;
  href: string;
  video: string;
  poster: string;
  tags: string[];
  featured?: boolean;
  wide?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: 'emplacement',
    title: 'Emplacement Immo',
    year: '2024',
    href: 'https://emplacement.immo/',
    video: '/works/opt/emplacement.immo.mp4',
    poster: '/works/opt/emplacement.immo.jpg',
    tags: ['Next.js', 'TypeScript', 'Python', 'Framer Motion', 'GSAP'],
    featured: true,
  },
  {
    id: 'lokimo',
    title: 'Lokimo AI',
    year: '2023',
    href: 'https://www.lokimo.ai',
    video: '/works/opt/lokimo.mp4',
    poster: '/works/opt/lokimo.jpg',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
  },
  {
    id: 'macif',
    title: 'Environnement immobilier',
    year: '2023',
    href: 'https://environnement-immobilier.macif.fr/',
    video: '/works/opt/environnement.mp4',
    poster: '/works/opt/environnement.jpg',
    tags: ['Next.js', 'TypeScript', 'WCAG 2.1 AA', 'RGAA'],
  },
  {
    id: 'ibird',
    title: 'Ibird Agency',
    year: '2024',
    href: 'https://ibirdagency.tnjl.me/',
    video: '/works/opt/ibird.mp4',
    poster: '/works/opt/ibird.jpg',
    tags: ['Next.js', 'Dribbble API', 'GSAP'],
  },
  {
    id: 'ifcameroun',
    title: 'Institut Français du Cameroun',
    year: '2022',
    href: 'https://www.ifcameroun.com',
    video: '/works/opt/ifcameroon.mp4',
    poster: '/works/opt/ifcameroon.jpg',
    tags: ['Next.js', 'Strapi', 'AWS', 'Framer Motion'],
  },
  {
    id: 'birthdays',
    title: 'Birthdays',
    year: '2023',
    href: 'https://birthdays-seven.vercel.app/',
    video: '/works/opt/birthdays.mp4',
    poster: '/works/opt/birthdays.jpg',
    tags: ['Next.js', 'Framer Motion', 'Tailwind'],
    wide: true,
  },
];

export type ProductLink = { kind: 'github' | 'site' | 'npm' | 'pub' | 'store'; href: string };
export type Product = {
  id: string;
  name: string;
  logo: string;
  version: string;
  tags: string[];
  badges: Array<'live' | 'mit' | 'pro' | 'ios'>;
  links: ProductLink[];
};

export const PRODUCTS_OSS: Product[] = [
  {
    id: 'ibird',
    name: 'ibird.dev',
    logo: '/ibird.svg',
    version: '5 products',
    tags: ['Static', 'Zero deps'],
    badges: ['live'],
    links: [{ kind: 'site', href: 'https://ibird.dev' }],
  },
  {
    id: 'facturx',
    name: 'facturx',
    logo: '/facturx.svg',
    version: 'v1.0.2',
    tags: ['TypeScript', 'EN 16931', 'PDF/A-3'],
    badges: ['mit'],
    links: [
      { kind: 'github', href: 'https://github.com/Geekles007/facturx' },
      { kind: 'npm', href: 'https://www.npmjs.com/package/facturx-sdk' },
      { kind: 'site', href: 'https://facturx.ibird.dev' },
    ],
  },
  {
    id: 'llmsdk',
    name: 'llm_sdk',
    logo: '/llm-sdk.svg',
    version: 'v0.7.0',
    tags: ['Dart', 'Flutter', 'Streaming'],
    badges: ['mit', 'pro'],
    links: [
      { kind: 'github', href: 'https://github.com/Geekles007/llm_sdk' },
      { kind: 'pub', href: 'https://pub.dev/packages/llm_sdk' },
    ],
  },
  {
    id: 'mdkit',
    name: 'mdkit',
    logo: '/mdkit.svg',
    version: 'v0.1.0',
    tags: ['Registry', 'MDX', 'shadcn CLI'],
    badges: ['mit'],
    links: [
      { kind: 'github', href: 'https://github.com/Geekles007/mdkit' },
      { kind: 'npm', href: 'https://www.npmjs.com/package/mdkit-cli' },
      { kind: 'site', href: 'https://geekles007.github.io/mdkit' },
    ],
  },
  {
    id: 'ibirdui',
    name: 'ibirdui',
    logo: '/ibirdui.svg',
    version: 'v0.2.0',
    tags: ['React', 'Tailwind', 'a11y'],
    badges: ['mit'],
    links: [
      { kind: 'github', href: 'https://github.com/Geekles007/ibirdui' },
      { kind: 'npm', href: 'https://www.npmjs.com/package/ibirdui' },
      { kind: 'site', href: 'https://geekles007.github.io/ibirdui' },
    ],
  },
  {
    id: 'blocks',
    name: 'ibirdui blocks',
    logo: '/blocks.svg',
    version: 'v0.5',
    tags: ['14 blocks', 'Morphing', 'shadcn CLI'],
    badges: ['mit'],
    links: [
      { kind: 'github', href: 'https://github.com/Geekles007/blocks' },
      { kind: 'site', href: 'https://blocks.ibird.dev' },
    ],
  },
  {
    id: 'maattitude',
    name: 'Maattitude',
    logo: '/maattitude.png',
    version: 'v1.0.1',
    tags: ['Flutter', 'Supabase'],
    badges: ['ios'],
    links: [
      { kind: 'store', href: 'https://apps.apple.com/app/6771473679' },
      { kind: 'site', href: 'https://maat.metchera.com' },
    ],
  },
];

export const SKILL_GROUPS: Array<{ id: string; items: string[] }> = [
  { id: 'frontend', items: ['React', 'Next.js', 'TypeScript', 'Angular', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'Microfrontends', 'Design systems'] },
  { id: 'backend', items: ['Node.js', 'NestJS', 'GraphQL', 'REST', 'PostgreSQL', 'Java / Spring Boot', 'Laravel', 'Python'] },
  { id: 'mobile', items: ['Flutter', 'Dart', 'Supabase', 'App Store publishing'] },
  { id: 'devops', items: ['Docker', 'AWS', 'Vercel', 'GitHub Actions', 'CI/CD', 'Static & edge deploys'] },
  { id: 'design', items: ['Affinity Designer', 'Figma', 'WCAG 2.1 AA', 'RGAA 4', 'ARIA', 'Motion design'] },
  { id: 'methods', items: ['Agile / SCRUM', 'Code review', 'Team lead', 'Mentoring', 'Product thinking'] },
];

export const SOCIALS = [
  { id: 'linkedin', label: 'LinkedIn', handle: 'lee-tondji-niat', href: 'https://www.linkedin.com/in/lee-tondji-niat/' },
  { id: 'github', label: 'GitHub', handle: 'Geekles007', href: 'https://github.com/Geekles007' },
  { id: 'dribbble', label: 'Dribbble', handle: 'ibirddesign', href: 'https://dribbble.com/ibirddesign' },
  { id: 'x', label: 'X', handle: '@leesan30lee', href: 'https://x.com/leesan30lee' },
] as const;

export const EMAIL = 'tondjilee@gmail.com';
export const SITE_URL = 'https://ebirly.com';
