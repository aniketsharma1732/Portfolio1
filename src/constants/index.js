import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  gkeep,
  book,
  feed,
  QA,
  vid,
  mp3,
  tnp,
  wed,
  portf,

  gssoc,
  ssoc,
  acme,
  java,
  php,
  codigniter,
  mysql,
  express,
  jsp
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "Projects",
    title: "Projects",
  },
  {
    id: "Skills",
    title: "Skills",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "MERN Stack ",
    icon: mobile,
  },
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },
  {
    title: "Java Full Stack ",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "JSP",
  //   icon: jsp,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "Java",
    icon: java,
  },
  // {
  //   name: "Php",
  //   icon: php,
  // }, 
  // {
  //   name: "CodeIgniter",
  //   icon: codigniter,
  // },
  {
    name: "MySql",
    icon: mysql,
  },
  
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Opn Source Developer",
    company_name: "GSSOC'23",
    icon: gssoc,
    iconBg: "#383E56",
    date: "May 2023 - Present",
    points: [
      "GirlScript Summer Of Code is a three-month-long Open-Source Program conducted every summer by the Girlscript Foundation.",
      "Contributing web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, mentors, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "MERN Developer",
    company_name: "SSOC'23",
    icon: ssoc,
    iconBg: "#E6DEDD",
    date: "June 2023 - Present 2023",
    points: [
      "SSOC is a 2 Month Open Source Program Organized By Social. We aim to promote open source with new age technologies & want everyone to get the right path & gudience through SSOC.",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "JAVA APPRENTICE ",
    company_name: 'ACME Embedded Technologies Pvt Ltd.',
    icon: acme,
    iconBg: "#E6DEDD",
    date: "June 2021 - July 2021",
    points: [
      "Designed and developed a web-app from scratch using JSP and MYSQL which increased user engagement by 80% and enable users to upload, share, and watch videos.",
      "The feature of Project is user can upload videos by creating a channel and can customize videos, channel, comments, profile.",
      "Improved web-app by adding features like login, sign in, like, dislike, comment, subscribe and manage etc",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Real Time Chat App",
    description:
      "A sleek, modern, and responsive real-time chat application built with React, Firebase, and Zustand. This app allows users to register, log in, search for other users, and chat instantly with real-time updates.",
    tags: [
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name:"Firebase",
        color:"orange-text-gradient"
      },
    ],
    image: feed,
    source_code_link: "https://aniketsharma1732.github.io/Real-Time-Chat-App/",
  },
  {
    name: "AI-Powered Health App",
    description:
      "An AI-powered healthcare app that provides preliminary symptom guidance, medical document summaries, and seamless doctor appointment booking based on location, specialty, and language preference.",
    tags: [
      {
        name: "Html5",
        color: "blue-text-gradient",
      },
      {
        name: "Css3",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      { 
        name: "Node.js",
        color: "orange-text-gradient" 
      },
    ],
    image: gkeep,
    source_code_link: "https://sanjeevani-health-app.netlify.app/",
  },
  
  
];

export { services, technologies, experiences, testimonials, projects };
