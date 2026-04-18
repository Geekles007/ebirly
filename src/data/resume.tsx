import { Icons } from '@/components/icons';
import { HomeIcon } from 'lucide-react';
import Link from 'next/link';

export const DATA = {
  name: 'Tondji Niat J. Lee',
  initials: 'TNJL',
  url: 'https://ebirly.com',
  location: 'Cameroon, CM',
  locationLink: 'https://www.google.com/maps/place/douala',
  description:
    'Software Engineer Passionated by Graphic design. I love everything related to creativity.',
  summary:
    "During my all career as developer I learned a lot from others (teammates, customers, etc...) - and with time I acquired a lot of experiences and knowledges. I'm always ready to learn news things and improve myself as person and as developer.",
  avatarUrl: '/ebirly.png',
  skills: [
    'React',
    'Next.js',
    'Typescript',
    'Node.js',
    'Angular 4+',
    'Microfrontends',
    'Git',
    'Affinity Designer',
    'Flutter',
    'Framer Motion',
    'GraphQL',
    'Docker',
    'Aws',
    'Github Actions',
    'PostgreSQL',
    'Laravel',
    'Nest.js',
    'AWS'
  ],
  navbar: [{ href: '/', icon: HomeIcon, label: 'Home' }],
  languages: [
    {
      level: 'Native',
      name: 'French',
    },
    {
      level: 'Intermediate',
      name: 'English',
    },
    {
      level: 'Level B2',
      name: 'Italian',
    },
    {
      level: 'A1 Basic',
      name: 'Russian',
    },
  ],
  contact: {
    email: 'tondjilee@gmail.com',
    tel: '+237652475952',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/Geekles007',
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/lee-tondji-niat/',
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: 'X',
        url: 'https://x.com/leesan30lee',
        icon: Icons.x,

        navbar: true,
      },
      Dribbble: {
        name: 'Dribbble',
        url: 'https://dribbble.com/ibirddesign',
        icon: Icons.dribbble,
        navbar: true,
      },
      email: {
        name: 'Send Email',
        url: 'mailto:tondjilee@gmail.com',
        icon: Icons.email,

        navbar: false,
      },
      cv: {
        name: 'Download CV',
        url: '/cv.pdf',
        icon: Icons.download,
        navbar: true,
      },
    },
  },
  hobbies: [
    {
      icon: Icons.games,
      name: 'Videos games',
      description: 'Souls like games',
    },
    {
      icon: Icons.books,
      name: 'Read books & mangas',
      description: '',
    },
    {
      icon: Icons.coding,
      name: 'Coding',
      description: 'Build funny stuffs fromscatch',
    },
    {
      icon: Icons.design,
      name: 'Art & Design',
      description: 'Draw with Affinity Designer',
    },
    {
      icon: Icons.music,
      name: 'Listen to music',
      description: 'HIP HOP, Rnb, Jazz, Rock, Makossa, etc...',
    },
  ],
  work: [
    {
      company: 'Lokimo AI - Paris, France',
      href: 'https://www.lokimo.ai',
      badges: [],
      location: 'Full remote',
      title: 'Frontend developer',
      logoUrl: '/logo-black.svg',
      start: 'Febuary 2023',
      end: 'Now',
      description: <ul>
        <li>Services for LOKIMO AI</li>
        <li>Analysis, structuring and implementation of new functionalities. - Creation of reusable components and modules.</li>
        <li>Maintenance and continuous improvement of the system.</li>
        <li>System redesign and migration from JavaScript to TypeScript.</li>
        <li>Complete redesign of the website.</li>
      </ul>
    },
    {
      company: 'TSN электро - Nizhny Novgorod, Russia',
      badges: [],
      href: undefined,
      location: 'Nizhny Novgorod, Russia',
      title: 'Lead frontend developer',
      logoUrl: '/no-logo.png',
      start: 'December 2020',
      end: 'Febuary 2022',
      description: <ul>
        <li>{`Gestion d'une équipe de 3 développeurs.`}</li>
        <li>Gestion de projets en méthode Agile SCRUM.</li>
        <li>Analyse et optimisation des systèmes existants.</li>
        <li>{`Conception et implémentation d'une architecture microfrontend. - Développement d'un ERP.`}</li>
        <li>Définition de stratégies de déploiement.</li>
        <li>Formation des collaborateurs.</li>
      </ul>
    },
    {
      company: 'Web mechanica - Nizhny Novgorod, Russia',
      href: undefined,
      badges: [],
      location: 'Nizhny Novgorod, Russia',
      title: 'Fullstack developer',
      logoUrl: '/no-logo.png',
      start: 'May 2020',
      end: 'December 2020',
      description: <div>
        <span>Development of website (fromscratch) for company around the world (Bitrix) System maintenances.</span> <br/>
        <Link href={'https://www.vertex-awp.ru'} target={'_blank'}>(https://www.vertex-awp.ru)</Link> <br/>
        <Link href={'https://www.elac.study'} target={'_blank'}>(https://www.elac.study)</Link>
      </div>,
    },
    {
      company: 'Freelance',
      href: undefined,
      badges: [],
      location: '',
      title: 'Web developer',
      logoUrl: '/no-logo.png',
      start: 'January 2016',
      end: 'August 2019',
      description: <ul>
        <li>Development of a cinema ticket booking application</li>
        <li>Development mobile application for money transaction</li>
        <li>Development of an interactive map</li>
        <li>Development of an audio streaming api</li>
        <li>Development of an article writing system</li>
        <li>Clinic management system</li>
        <li>Development of an application to book travel tickets</li>
      </ul>
    },
    {
      company: 'Kumity - Germany',
      href: undefined,
      badges: [],
      location: 'Germany',
      title: 'JAVA/JAVA EE Developer',
      logoUrl: '/no-logo.png',
      start: 'March 2017',
      end: 'August 2017',
      description:
        'Development of the money transfer module of an electronic currency.',
    },
  ],
  certificates: [
    {
      company: 'Animations on the web',
      href: 'https://animations.dev/certificate/c015f445-d180-4146-8617-9e8fbd8da936',
      title: 'Animations on the Web',
      logoUrl: '/animations.svg',
      start: '2024',
    },
    {
      company: 'Apollo graphql',
      href: 'https://www.apollographql.com/tutorials/certifications/5fd2321a-c700-4412-b393-ee56eb88ffde',
      title: 'Apollo Graph Developer - Associate Certification',
      logoUrl: '/apollo.jpg',
      start: '2023',
    },
    {
      company: 'Freecodecamp',
      href: 'https://www.freecodecamp.org/certification/fcc182b6d0f-8bee-4f97-aed9-2c166a2ca5c1/front-end-development-libraries',
      title: 'Front End Librairies',
      logoUrl: '/freecodecamp.png',
      start: '2022',
    },
    {
      company: 'Freecodecamp',
      href: 'https://www.freecodecamp.org/certification/fcc182b6d0f-8bee-4f97-aed9-2c166a2ca5c1/javascript-algorithms-and-data-structures',
      title: 'Javascript Algorithms and Data Structures',
      logoUrl: '/freecodecamp.png',
      start: '2022',
    },
    {
      company: 'Udemy',
      href: 'https://www.udemy.com/certificate/UC-931e7037-dfd7-4266-8d7e-1040b9012da1/',
      title: 'Microfrontends with React',
      logoUrl: '/udemy.png',
      start: 'April 2021',
    },
    {
      company: 'Udemy',
      href: 'https://www.udemy.com/certificate/UC-f42d1e15-1e1e-4cc5-b9d6-c5d0a41e016c/',
      title: 'NestJS: The complete developer\'s guide',
      logoUrl: '/udemy.png',
      start: 'August 2025',
    },
  ],
  education: [
    {
      school: 'Lobachevsky University - Nizhny Novgorod, Russia',
      href: 'http://eng.unn.ru/',
      degree:
        'Bachelor - Institute of Information Technology, Mathematics and Mechanics',
      logoUrl: '/unn.png',
      start: '2019',
      end: '2022',
    },
    {
      school: '3IL Limoges - France',
      href: 'https://www.3il-ingenieurs.fr/',
      degree: 'Diploma in information system design',
      logoUrl: '/3il.png',
      start: '2015',
      end: '2016',
    },
    {
      school: 'New Brunswick Community College - New Brunswick, Canada',
      href: 'https://ccnb.ca/',
      degree: 'DEC Analysis and Programming',
      logoUrl: '/ccnb.png',
      start: '2013',
      end: '2014',
    },
  ],
  projects: [
    // {
    //   title: 'Birthdays',
    //   // href: "https://magicui.design",
    //   dates: '',
    //   active: true,
    //   description:
    //     'Just a funny component I developed, inspired by a web developer & designer on twitter.',
    //   technologies: ['Next.js', 'Typescript', 'Framer motion', 'TailwindCSS'],
    //   links: [
    //     {
    //       type: 'Website',
    //       href: 'https://birthdays-seven.vercel.app/',
    //       icon: <Icons.globe className='size-3' />,
    //     },
    //     {
    //       type: 'Source',
    //       href: 'https://github.com/Geekles007/birthdays',
    //       icon: <Icons.github className='size-3' />,
    //     },
    //   ],
    //   image: '',
    //   video: '/works/birthdays.mov',
    // },
    {
      title: 'Ibird Agency',
      // href: "https://environnement-immobilier.macif.fr/",
      dates: '',
      active: true,
      description: 'My designer website to show my work and my passion',
      technologies: [
        'Next.js',
        'Typescript',
        'Dribbble API',
        'TailwindCSS',
        'Framer Motion',
        'GSAP',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://ibirdagency.com/',
          icon: <Icons.globe className='size-3' />,
        },
        {
          type: 'Source',
          href: 'https://github.com/Geekles007/ibird',
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: '',
      video: '/works/ibird.mov',
    },
    {
      title: 'Emplacement immo',
      // href: "https://environnement-immobilier.macif.fr/",
      dates: '',
      active: true,
      description: 'Real estate consulting platform for Lokimo',
      technologies: [
        'Next.js',
        'Typescript',
        'Python',
        'TailwindCSS',
        'Framer Motion',
        'GSAP',
        'Vercel',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://emplacement.immo/',
          icon: <Icons.globe className='size-3' />,
        },
      ],
      image: '',
      video: '/works/emplacement.immo.mov',
    },
    {
      title: 'Environnement immobilier Macif',
      // href: "https://environnement-immobilier.macif.fr/",
      dates: '',
      active: true,
      description: 'Real estate consulting platform for Macif.fr',
      technologies: [
        'Next.js',
        'Typescript',
        'Python',
        'TailwindCSS',
        'Framer Motion',
        'GSAP',
        'Vercel',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://environnement-immobilier.macif.fr/',
          icon: <Icons.globe className='size-3' />,
        },
      ],
      image: '',
      video: '/works/environnement.mov',
    },
    {
      title: 'Lokimo ai',
      // href: "https://llm.report",
      // dates: "April 2023 - September 2023",
      active: true,
      description: 'My current company website',
      technologies: [
        'Next.js',
        'Typescript',
        'TailwindCSS',
        'Framer motion',
        'GSAP',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://www.lokimo.ai',
          icon: <Icons.globe className='size-3' />,
        },
      ],
      image: '',
      video: '/works/lokimo.mov',
    },
    {
      title: 'Henspiration',
      // href: "https://automatic.chat",
      // dates: "April 2023 - March 2024",
      active: true,
      description: 'App to promote an artist using spotify api',
      technologies: [
        'React',
        'Sass',
        'Typescript',
        'Spotify API',
        'Node.js',
        'Vite',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://henspiration.vercel.app',
          icon: <Icons.globe className='size-3' />,
        },
        {
          type: 'Source',
          href: 'https://github.com/Geekles007/henspiration',
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: '',
      video: '/works/henspiration.mov',
    },
    {
      title: 'IFCameroun',
      // href: "https://automatic.chat",
      // dates: "April 2023 - March 2024",
      active: true,
      description: "l'Institut Français au Cameroun website",
      technologies: [
        'Next.js',
        'Sass',
        'Framer motion',
        'Typescript',
        'Strapi.io',
        'Node.js',
        'Aws',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://www.ifcameroun.com',
          icon: <Icons.globe className='size-3' />,
        },
      ],
      image: '',
      video: '/works/ifcameroon.mov',
    },
    {
      title: 'Mapping',
      // href: "https://automatic.chat",
      // dates: "April 2023 - March 2024",
      active: true,
      description: 'Map opening with Framer motion',
      technologies: [
        'Next.js',
        'Sass',
        'Framer motion',
        'Typescript',
        'Node.js',
      ],
      links: [
        {
          type: 'Source',
          href: '#',
          icon: <Icons.globe className='size-3' />,
        },
      ],
      image: '',
      video: '/works/mapping.mov',
    },
    // {
    //   title: 'Credit card form',
    //   // href: "https://automatic.chat",
    //   // dates: "April 2023 - March 2024",
    //   active: true,
    //   description: 'Credit card form built with framer motion',
    //   technologies: [
    //     'Next.js',
    //     'Sass',
    //     'Framer motion',
    //     'Typescript',
    //     'Node.js'
    //   ],
    //   links: [
    //     {
    //       type: 'Source',
    //       href: '#',
    //       icon: <Icons.globe className='size-3' />,
    //     },
    //   ],
    //   image: '',
    //   video: '/works/credit-card.mov',
    // },
    {
      title: 'Timeline with Framer motion',
      // href: "https://automatic.chat",
      // dates: "April 2023 - March 2024",
      active: true,
      description: 'Timeline with custom cursor using framer motion',
      technologies: [
        'Next.js',
        'Sass',
        'Typescript',
        'Framer motion',
        'Node.js',
      ],
      links: [
        {
          type: 'Source',
          href: '#',
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: '',
      video: '/works/timeline.mov',
    },
  ],
} as const;
