import { Github, Linkedin, Instagram } from 'lucide-react';

import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNextjs from '/public/images/logos/icon-nextjs.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoExpress from '/public/images/logos/icon-express.svg';
import LogoExpressLight from '/public/images/logos/icon-express-light.svg';
import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
import LogoSass from '/public/images/logos/icon-sass.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoFigma from '/public/images/logos/icon-figma.svg';
import LogoStorybook from '/public/images/logos/icon-storybook.svg';
import LogoGit from '/public/images/logos/icon-git.svg';

import PixelotechLogo from '/public/images/logos/pixelotech-logo.jpeg';
import WooshelfLogo from '/public/images/logos/wooshelf-logo.jpeg';
import F22LabsLogo from '/public/images/logos/f22_labs_logo.jpeg';

import AvatarKrisztian from '/public/images/avatar-krisztian.png';
import AvatarEugen from '/public/images/avatar-eugen.png';
import AvatarDummy from '/public/images/avatar-dummy.svg';

import Kookxtra from '/public/images/projects/kookxtra.webp';

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetailsTypes,
  TestimonialDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/mdashfaque-mamdu-au17',
  GITHUB_REPO: 'https://github.com/mdashfaque-mamdu-au17/ashfaque-portfolio',
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Testimonials',
    href: '#testimonials',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/mdashfaque-mamdu-au17',
  },
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/md-ashfaque-mamdu-b61510211/',
  },
  {
    icon: Instagram,
    url: 'https://www.instagram.com/ashfaque_armani/',
  },
];

export const TECHNOLOGIES: TechDetailsTypes[] = [
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Typescript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Next.js',
    logo: LogoNextjs,
    url: 'https://nextjs.org/',
  },
  {
    label: 'Node.js',
    logo: LogoNodejs,
    url: 'https://nodejs.org/en',
  },
  {
    label: 'Express.js',
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: 'https://expressjs.com/',
  },
  {
    label: 'MongoDB',
    logo: LogoMongoDB,
    url: 'https://www.mongodb.com/',
  },
  {
    label: 'Sass/Scss',
    logo: LogoSass,
    url: 'https://sass-lang.com/',
  },
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
  {
    label: 'Figma',
    logo: LogoFigma,
    url: 'https://www.figma.com/',
  },
  {
    label: 'Storybook',
    logo: LogoStorybook,
    url: 'https://storybook.js.org/',
  },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: PixelotechLogo,
    logoAlt: 'Pixelotech Logo',
    position: 'Frontend Developer',
    startDate: new Date(2023, 7),
    currentlyWorkHere: true,
    summary: [
      'Led project development, overseeing frontend architecture & implementation.',
      'Spearheaded cross-team collaboration transforming project requirements into deliverables.',
      'Mentored junior developers, Conducted code quality maintenance via regular reviews.',
      'Worked directly with stakeholders, ensuring frequent updates & continuous improvement.',
    ],
  },
  {
    logo: WooshelfLogo,
    logoAlt: 'Wooshelf Logo',
    position: 'Frontend Developer',
    startDate: new Date(2023, 2),
    endDate: new Date(2023, 5),
    summary: [
      'Acted as team lead in different projects.',
      'Brainstormed new ideas & gathered requirements for internal projects.',
      'Designed architecture of different projects (frontend + backend).',
      'Worked on enterprise-level projects for a variety of clients.',
      'Handled sprint planning & task distribution.',
    ],
  },
  {
    logo: F22LabsLogo,
    logoAlt: 'F22 Labs logo',
    position: 'Junior Frontend Developer ',
    startDate: new Date(2022, 2),
    endDate: new Date(2022, 8),
    summary: [
      'Successfully converted Figma designs into web applications as part of a collaborative team eﬀort.',
      ' Collaborated closely with the backend team to integrate APIs with the frontend, ensuring seamless data ﬂow and functionality.',
      'Worked in conjunction with the QA team to identify and address bugs, enhancing the overall quality and performance of applications.',
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'Kookxtra',
    description:
      'Kookxtra is a food delivery app where meals are cooked by chefs. It features driver registration for delivery partners, meal subscriptions, event catering, and a platform for new chefs to join and showcase their culinary talents.',
    url: 'https://www.kookxtra.com/en',
    previewImage: Kookxtra,
    technologies: [
      'React',
      'Next.js',
      'Typescript',
      'Tailwind CSS',
      'React Aria',
      'React Query',
    ],
  },
  {
    name: 'Right Angle',
    description:
      'Right Angle is a management software designed for a Godrej furniture dealership. It features lead tracking, customer management, product and order management, delivery tracking, completion certificates, and a dashboard with sales charts and order source analysis.',
    url: '',
    previewImage: '',
    technologies: [
      'React',
      'Javascript',
      'Tailwind CSS',
      'Headless UI',
      'React Query',
    ],
    isPreviewAvailable: false,
  },
  {
    name: 'Relax Techno Fab',
    description:
      'Relax Techno Fab is a management software designed for Relax Techno Fab, focusing primarily on tanker testing. It features customer management, a tanker testing module, an inventory module, and a material management module.',
    url: '',
    previewImage: '',
    technologies: [
      'React',
      'Javascript',
      'Tailwind CSS',
      'React Query',
      'Storybook',
      'React Area',
    ],
    isPreviewAvailable: false,
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: 'Krisztian Gyuris',
    personAvatar: AvatarKrisztian,
    title: 'Founder - inboxgenie.io',
    testimonial:
      'Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.',
  },
  {
    personName: 'Eugen Esanu',
    personAvatar: AvatarEugen,
    title: 'Founder - shosho.design',
    testimonial:
      'Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.',
  },
  {
    personName: 'Joe Matkin',
    personAvatar: AvatarDummy,
    title: 'Freelancer',
    testimonial:
      'Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.',
  },
];
