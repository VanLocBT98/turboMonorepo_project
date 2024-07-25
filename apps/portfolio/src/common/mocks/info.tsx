import {
  LetterOpenedIcon,
  PhoneCallingIcon,
  SocialFacebookOutIcon,
  SocialGithubOutIcon,
  SocialLinkedinOutIcon,
} from "@styles/ui-mui/icons";

export const InfoMocks = {
  color: "rgb(165, 180, 252)",
  name: "Van Loc",
  role: ["Frontend Developer", "Software Engineer"],
  summary: [
    "With nearly 3 years of experience as a Front-End Developer, I specialize in creating dynamic and responsive web applications using React and Next.js. My expertise includes developing robust user interfaces, implementing state management, and ensuring seamless performance across various devices. I am proficient in HTML, CSS, and JavaScript, and have a strong background in TypeScript and modern front-end libraries such as Redux. I have a proven track record of delivering high-quality, maintainable code, collaborating effectively with cross-functional teams, and continuously learning and adapting to new technologies.",
  ],
  resume:
    "https://drive.google.com/file/d/1Tn7WbJkUsb1MbdzHX83Nn3d1WtR2-64E/view?usp=sharing",
  socials: [
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/nguyen-van-loc-a063a1240/",
      icon: <SocialLinkedinOutIcon fontSize="large" linearColor="white" />,
    },
    {
      name: "github",
      link: "https://github.com/VanLocBT98",
      icon: <SocialGithubOutIcon fontSize="large" linearColor="white" />,
    },
    {
      name: "facebook",
      link: "https://www.facebook.com/dag.phan.1",
      icon: <SocialFacebookOutIcon fontSize="large" linearColor="white" />,
    },
  ],
  techStacks: [
    {
      title: "Languages & frameworks",
      keys: [
        "HTML",
        "CSS",
        "Javascript",
        "Typescript",
        "ReactJS",
        "Angular",
        "NextJS",
        "GraphQL",
        "Redux",
      ],
    },
    {
      title: "UI libraries",
      keys: [
        "Bootstrap 4-5",
        "React Bootstrap",
        "Tailwind CSS",
        "Chakra-UI",
        "Ant Design",
        "Ng-Zorro",
        "Angular Material",
        "MUI React",
        "Framer Motion",
        "GSAP",
        "Styled-components",
      ],
    },
    {
      title: "HeadlessCMS",
      keys: ["Hygraph", "Strapi"],
    },
    {
      title: "Testing tools",
      keys: ["Cypress", "Jest", "Post man"],
    },
    {
      title: "Database",
      keys: ["MongoDB", "Firebase"],
    },
    {
      title: "Other",
      keys: [
        "Git",
        "Nodejs",
        "NestJS",
        "SEO",
        "Docker",
        "Nginx",
        "Github Actions",
        "Jenkins",
        "Monorepos (Turbo)",
        "Micro-Frontend (Nx)",
        "Figma",
        "Adobe Photoshop",
      ],
    },
  ],
  experiences: [
    {
      company: ["Sanbul Solutions"],
      position: ["Frontend Developer"],
      startDate: "06/03/2023",
      endDate: "30/06/2024",
      responsibilities: [
        "Create and assign tasks using Jira.",
        "Develop the source code structure following Atomic-Design principles.",
        "Establish a process for code pushing and committing using Husky, Commit-lint, and GitHub Actions.",
        "Implement the website interface based on design specifications, from management pages to user pages, utilizing Turbo (Vercel) for monorepos.",
        "Configure Socket connections with the Backend and develop Service Workers.",
        "Configure Storybook for documenting components and write comprehensive README files.",
        "Create Dockerfile and Nginx configurations, and deploy the website.",
        "Code Maintenance (Review, clean, and refactor code).",
        "Integrate OAuth for login with Google, Facebook, Naver, and KakaoTalk.",
      ],
      techStacks: [
        {
          title: "Programming languages:",
          keys: "ReactJS 18, NextJS 13, HTML, SCSS, Javascript, Typescript.",
        },
        {
          title: "UI libraries:",
          keys: "Ant Design, MUI React.",
        },
        {
          title: "Other:",
          keys: "Vite configuration, Redux, Redux-toolkit, React-Query (Tanstack-query), Storybook V7, Styled-component, Socket.io, Service Workers, Docker, Nginx, Github Actions, Jest,....",
        },
      ],
    },
    {
      company: ["Nova E-Force (3Forcom)"],
      position: ["Frontend Developer"],
      startDate: "2022",
      endDate: "28/02/2023",
      responsibilities: [
        "Create and assign tasks using Jira.",
        "Develop the source code structure following Atomic-Design principles.",
        "Establish a process for code pushing and committing using Husky, Commit-lint, and GitHub Actions.",
        "Implement the website interface based on design specifications, from management pages to user pages, utilizing Turbo (Vercel) for monorepos.",
        "Configure Socket connections with the Backend and develop Service Workers.",
        "Configure Storybook for documenting components and write comprehensive README files.",
        "Create Dockerfile and Nginx configurations, and deploy the website.",
        "Maintain the company's old projects",
        "Implement motion effects and animations.",
        "Trigger event send Google Analytics.",
        "Deploy the application with PM2 or Docker.",
        "Communicate with Backend developers for integration APIs",
        "Analyzed and suggested solutions to solve problems of the stakeholder",
      ],
      techStacks: [
        {
          title: "Programming languages:",
          keys: "React TS, NextJS 10/12, HTML, SCSS, Javascript, Typescript.",
        },
        {
          title: "UI libraries:",
          keys: "Ant Design, ChartJS, Bootstrap 5, Animate.css, Owl Carousel, GSAP, React MUI, AOS(Animate On Scroll), tsParticles ",
        },
      ],
    },
  ],
  projects: [
    {
      title: "Nova Phan Thiet",
      link: "https://novaworldphanthiet.com.vn/",
      desc: "Participate in building components from small to large according to the design in Figma and integrate APIs from the back-end team. Collaborate with stakeholders to fulfill customer requirements, fix bugs, and make improvements to ensure the project stays on schedule. The goal is to introduce Nova Group's real estate projects in Phan Thiết. Use ReactTS, Bootstrap, Redux, React Query,axios, i18next, etc.",
    },
    {
      title: "Nova Aqua City",
      link: "https://aquacity.com.vn/",
      desc: "Participate in building small to large components according to designs in Figma and integrating APIs from the back-end team. Collaborate with stakeholders to meet customer requirements, fix bugs, and make improvements to keep projects on schedule. The goal is to introduce Nova Group's real estate projects, Aqua City project in the eastern area of ​​Ho Chi Minh City. Use ReactTS, Bootstrap, Redux, React Query,axios, i18next, etc.",
    },
    {
      title: "DAIKIN",
      link: "https://www.daikin.com.vn/",
      desc: "Maintain the projects according to the client's plan for the two websites, Daikin and Daikineshop. Upgrade and rebuild them using the existing technology to the latest version and develop new features.",
    },
    {
      title: "Gumac",
      link: "https://gumac.vn/",
      desc: "Develop features and integrate APIs according to requirements from start to finish of the project. Fix bugs as they arise and support team members in their work. Collaborate with design, QA, BA, and backend teams to ensure progress according to schedule.Use ReactTS, Bootstrap, Redux, React Query,axios, i18next, etc.",
    },
  ],
  moreLink: "",
  contact: [
    {
      icon: <LetterOpenedIcon fontSize="large" />,
      link: "vanlocforwork.nv@gmail.com",
      key: "mailto:",
    },
    {
      icon: <PhoneCallingIcon fontSize="large" />,
      link: "(+84)829574920",
      key: "tel:",
    },
  ],
};
