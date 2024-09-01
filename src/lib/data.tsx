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
import RestCountries from '/public/images/projects/rest-countries.webp';
import EntertainmentWebApp from '/public/images/projects/entertainment-web-app.webp';
import DesignSolution from '/public/images/projects/design solution.webp';
import InteractiveCard from '/public/images/projects/interactive-card.webp';
import MusicPlayer from '/public/images/projects/music-player.webp';
import ContactApp from '/public/images/projects/contact-app.webp';
import DeveloperPortfolio from '/public/images/projects/developer-portfolio.webp';
import NotificationApp from '/public/images/projects/notification-app.webp';
import CrowdFundingApp from '/public/images/projects/crowd-funding-app.webp';
import UrlShortner from '/public/images/projects/url-shortner.webp';
import Flyo from '/public/images/projects/flyo.webp';
import Officelite from '/public/images/projects/officelite.webp';
import SocialMediaDashboard from '/public/images/projects/social-media-dashboard.webp';
import Todo from '/public/images/projects/todo.webp';

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

export const ALLPROJECTS: ProjectDetails[] = [
  {
    name: 'Rest Countries',
    description:
      'Rest Countries is a Frontend Mentor challenge project where users can search for any country and access key details such as population and languages spoken. This project enhances user interaction with global data through a clean and responsive interface.',
    url: 'https://rest-countries-app-eight.vercel.app/',
    previewImage: RestCountries,
    technologies: [
      'React',
      'Next.js',
      'Javascript',
      'Headless UI',
      'Tailwind CSS',
    ],
  },
  {
    name: 'Entertainment Web Application',
    description:
      'Entertainment Web Application offers a platform to explore movies and TV series, allowing users to search, bookmark favorites, and navigate through various sections. It features user authentication for managing bookmarks with sign-up and login options.',
    url: 'https://entertainment-web-app-frontend.vercel.app/',
    previewImage: EntertainmentWebApp,
    technologies: [
      'React',
      'Javascript',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
    ],
  },
  {
    name: 'Design Solution Landing Page',
    description:
      'Design Solution Landing Page is a responsive landing page featuring a dynamic carousel. This project focuses on delivering a visually appealing and user-friendly interface.',
    url: 'https://single-page-design-portfolio-psi.vercel.app/',
    previewImage: DesignSolution,
    technologies: ['React', 'Javascript', 'Tailwind CSS'],
  },
  {
    name: 'Interactive Card',
    description:
      'Interactive Card is a responsive web application designed to handle card information securely, featuring validations for the card number, CVV, and expiry date. This project ensures a user-friendly experience with real-time validation feedback.',
    url: 'https://interactive-self.vercel.app/',
    previewImage: InteractiveCard,
    technologies: ['React', 'Javascript', 'Formik', 'Tailwind CSS'],
  },
  {
    name: 'Music Player',
    description:
      'Music Player is a versatile application that offers standard music player functionalities along with a search feature, allowing users to easily find and play their favorite tracks.',
    url: 'https://music-player-opal-eight.vercel.app/',
    previewImage: MusicPlayer,
    technologies: ['React', 'Javascript', 'Tailwind CSS'],
  },
  {
    name: 'Contact App',
    description:
      'Contact App is a practical application that enables users to manage their contacts through comprehensive CRUD (Create, Read, Update, Delete) operations, facilitating easy and efficient contact management.',
    url: 'https://contact-details-xi.vercel.app/',
    previewImage: ContactApp,
    technologies: ['React', 'Javascript', 'Tailwind CSS'],
  },
  {
    name: 'Developer Portfolio',
    description:
      'Developer Portfolio Website serves as a professional showcase for a developer, highlighting their experience, diverse skill set, and projects. This site is designed to provide a comprehensive view of the developer’s capabilities and achievements.',
    url: 'https://portfolio-landing-website.netlify.app/',
    previewImage: DeveloperPortfolio,
    technologies: ['React', 'Javascript', 'SASS', 'CSS'],
  },
  {
    name: 'Notification App',
    description:
      'Notification App provides a clear interface for managing notifications, displaying them with distinct read and unread indicators. Users can conveniently mark all notifications as read with a single action, enhancing usability and interaction.',
    url: 'https://notification-page-dun.vercel.app/',
    previewImage: NotificationApp,
    technologies: ['React', 'Javascript', 'CSS'],
  },
  {
    name: 'Crowd Funding App',
    description:
      'Crowdfunding App enables users to support various projects by choosing from a list and contributing any desired amount. The app tracks and displays the funding progress for each project, showing how close it is to achieving its financial goals.',
    url: 'https://crowd-funding-product-page-ashfaque.vercel.app/',
    previewImage: CrowdFundingApp,
    technologies: ['React', 'Javascript', 'CSS'],
  },
  {
    name: 'URL Shortner',
    description:
      'URL Shortener is a tool that provides users with the ability to shorten long URLs into more manageable and shareable links, enhancing usability and accessibility.',
    url: 'https://url-shortening-landing-page-eight.vercel.app/',
    previewImage: UrlShortner,
    technologies: ['React', 'Javscript', 'Tailwind CSS'],
  },
  {
    name: 'Flyo',
    description:
      'Flyo is a conceptual design for Flyo, a fictional cloud file storage service. This landing page features a sleek dark theme, emphasizing modern aesthetics and user-friendly navigation.',
    url: 'https://flyo-dark-theme-landing-page-theta.vercel.app/',
    previewImage: Flyo,
    technologies: ['React', 'Javascript', 'Tailwind CSS'],
  },
  {
    name: 'Officelite',
    description:
      'Officelite is a conceptual SaaS landing page for a complex task manager. It highlights the service offerings and features a countdown timer to the launch date, engaging users with anticipation and detailed insights into the functionalities.',
    url: 'https://officelite-coming-soon-seven.vercel.app/',
    previewImage: Officelite,
    technologies: ['React', 'Javascript', 'Tailwind CSS'],
  },
  {
    name: 'Social Media Dashboard',
    description:
      'Social Media Dashboard offers a comprehensive view of an account’s activity across multiple platforms, including Facebook, Instagram, Twitter, and YouTube. It features a switchable dark and light theme, enhancing user experience and adaptability to different viewing preferences.',
    url: 'https://social-media-dashboard-challenge-ashy.vercel.app/',
    previewImage: SocialMediaDashboard,
    technologies: ['React', 'Javascript', 'Tailwind CSS'],
  },
  {
    name: 'Todo',
    description:
      'Todo App is a task management tool that enables users to organize their to-do list with full CRUD functionalities. It offers both dark and light themes, allowing users to customize their viewing experience for optimal usability.',
    url: 'https://to-do-frontend-fawn.vercel.app/',
    previewImage: Todo,
    technologies: [
      'React',
      'Javascript',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
    ],
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
