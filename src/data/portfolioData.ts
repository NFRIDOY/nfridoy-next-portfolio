export interface Skill {
  id: string;
  name: string;
  icon: string;
  devicon?: string;
  level: string;
  link: string;
  exp: string;
  type?: "Language" | "frontend" | "backend" | "tools" | "other";
}

export interface Project {
  title: string;
  description: string;
  techStack: Skill[];
  live?: string;
  github?: string;
}

export interface PersonalInfo {
  name: string;
  brandAlias: string;
  imgae: string; // Spelled "imgae" in source data, mapping to profile pic path
  title: string[];
  location: string;
  tagline: string;
  bio: string;
  cvlink: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  skills: {
    frontend: Skill[];
    backend: Skill[];
    tools: Skill[];
  };
  projects: Project[];
  aiSystemPrompt: string;
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Md Noman Faysal Ridoy",
    brandAlias: "NF RIDOY | Full-Stack Developer",
    imgae: "/profile.png",
    title: ["Full-Stack Developer", "Front End Developer", "Back End Developer", "Software Engineer", "Software Architect"],
    location: "Dhaka, Bangladesh",
    tagline: "Building scalable web engines, high-performance UI systems, and interactive digital experiences.",
    bio: "Full-stack engineer specializing in Next.js, TypeScript, Node.js, express and the MERN stack. I build robust digital products spanning authentication architectures, complex dashboard systems, and animation-heavy frontends.",
    cvlink: "/Md Noman Faysal Ridoy_Resume.pdf",
    socials: {
      github: "https://github.com/nfridoy",
      linkedin: "https://linkedin.com/in/nfridoy",
      email: "nfridoy@gmail.com",
    },
  },

  skills: {
    frontend: [
      {
        id: "1",
        name: "Next.js",
        icon: "/nextjs.png",
        devicon: "devicon-nextjs-plain",
        level: "Expert",
        link: "https://nextjs.org/",
        exp: "2 year",
        type: "frontend"
      },
      {
        id: "2",
        name: "React",
        icon: "/react.png",
        devicon: "devicon-react-original",
        level: "Expert",
        link: "https://reactjs.org/",
        exp: "2 year",
        type: "frontend"
      },
      {
        id: "3",
        name: "TypeScript",
        icon: "/typescript.png",
        devicon: "devicon-typescript-plain",
        level: "Expert",
        link: "https://www.typescriptlang.org/",
        exp: "2 year",
        type: "Language"
      },
      {
        id: "4",
        name: "Tailwind CSS",
        icon: "/tailwind.png",
        devicon: "devicon-tailwindcss-plain",
        level: "Expert",
        link: "https://tailwindcss.com/",
        exp: "2 year",
        type: "tools"
      },
      {
        id: "5",
        name: "GSAP / Framer Motion",
        icon: "/gsap.png",
        devicon: "devicon-aframe-original-wordmark",
        level: "Expert",
        link: "https://gsap.com/",
        exp: "2 year",
        type: "frontend"
      },
      {
        id: "6",
        name: "Redux Toolkit",
        icon: "/redux.png",
        devicon: "devicon-redux-original",
        level: "Expert",
        link: "https://redux-toolkit.js.org/",
        exp: "2 year",
        type: "frontend"
      },
    ],
    backend: [
      {
        id: "1",
        name: "Node.js & Express.js",
        icon: "/nodejs.png",
        devicon: "devicon-nodejs-plain",
        level: "Expert",
        link: "https://nodejs.org/",
        exp: "2 year",
        type: "backend"
      },
      {
        id: "2",
        name: "MongoDB & Mongoose",
        icon: "/mongodb.png",
        devicon: "devicon-mongodb-plain",
        level: "Expert",
        link: "https://www.mongodb.com/",
        exp: "2 year",
        type: "backend"
      },
      {
        id: "3",
        name: "Sequelize (PostgreSQL/MySQL)",
        icon: "/sequelize.png",
        devicon: "devicon-sequelize-plain",
        level: "Expert",
        link: "https://sequelize.org/",
        exp: "2 year",
        type: "backend"
      },
      {
        id: "4",
        name: "NextAuth.js / JWT Security",
        icon: "/nextauth.png",
        level: "Expert",
        link: "https://next-auth.js.org/",
        exp: "2 year",
        type: "backend"
      },
      {
        id: "5",
        name: "RESTful & GraphQL APIs",
        icon: "/graphql.png",
        devicon: "devicon-graphql-plain",
        level: "Expert",
        link: "https://graphql.org/",
        exp: "2 year",
        type: "backend"
      },
    ],
    tools: [
      {
        id: "1",
        name: "Git",
        icon: "/git.png",
        devicon: "devicon-git-plain",
        level: "Expert",
        link: "https://git-scm.com/",
        exp: "2 year",
        type: "tools"
      },
      {
        id: "2",
        name: "GitHub",
        icon: "/github.png",
        devicon: "devicon-github-plain",
        level: "Expert",
        link: "https://github.com/",
        exp: "2 year",
        type: "tools"
      },
      {
        id: "3",
        name: "Vercel Deployment",
        icon: "/vercel.png",
        devicon: "devicon-vercel-plain",
        level: "Expert",
        link: "https://vercel.com/",
        exp: "2 year",
        type: "tools"
      },
      {
        id: "4",
        name: "VS Code",
        icon: "/vscode.png",
        devicon: "devicon-vscode-plain",
        level: "Expert",
        link: "https://code.visualstudio.com/",
        exp: "2 year",
        type: "tools"
      },
      {
        id: "5",
        name: "Docker Basics",
        icon: "/docker.png",
        devicon: "devicon-docker-plain",
        level: "Expert",
        link: "https://www.docker.com/",
        exp: "2 year",
        type: "tools"
      },
      {
        id: "6",
        name: "Postman",
        icon: "/postman.png",
        level: "Expert",
        link: "https://www.postman.com/",
        exp: "2 year",
        type: "tools"
      },
    ],
  },

  projects: [
    {
      title: "ERP Management System",
      description: "A comprehensive enterprise resource planning (ERP) system designed to manage core business processes in a centralized platform. The system integrates inventory control, supply chain logistics, financial tracking, and employee management, providing real-time visibility and automating workflows to enhance operational efficiency.",
      live: "https://github.com/NFRIDOY/crm-shadcn-m",
      github: "https://github.com/NFRIDOY/crm-shadcn-m",
      techStack: [
        {
          id: "1",
          name: "Next.js",
          icon: "/nextjs.png",
          devicon: "devicon-nextjs-plain",
          level: "Expert",
          link: "https://nextjs.org/",
          exp: "2 year"
        },
        {
          id: "2",
          name: "Express.js",
          icon: "/express.png",
          devicon: "devicon-express-original",
          level: "Expert",
          link: "https://expressjs.com/",
          exp: "2 year"
        },
        {
          id: "3",
          name: "MongoDB",
          icon: "/mongodb.png",
          devicon: "devicon-mongodb-plain",
          level: "Expert",
          link: "https://www.mongodb.com/",
          exp: "2 year"
        },
        {
          id: "4",
          name: "Tailwind CSS",
          icon: "/tailwind.png",
          devicon: "devicon-tailwindcss-plain",
          level: "Expert",
          link: "https://tailwindcss.com/",
          exp: "2 year"
        },
      ],
    },
    {
      title: "Asset Hexa",
      description: "Asset Hexa is an all-in-one financial management platform developed by Hexa Scriptors that empowers individuals and businesses to master their money, visualize cash flow, and build long-term wealth. Launched in 2023, the platform simplifies daily financial health by combining real-time income and expense tracking with interactive cash flow visualizers, robust enterprise-grade security, and dedicated portals for business funding and investment management. Acting as a trusted financial guardian, Asset Hexa bridges the gap between basic accounting and active growth, helping users unlock saving opportunities, secure business capital, and navigate their path to financial freedom with total confidence.",
      live: "https://github.com/NFRIDOY/crm-shadcn-m",
      github: "https://github.com/NFRIDOY/crm-shadcn-m",
      techStack: [
        {
          id: "1",
          name: "Next.js",
          icon: "/nextjs.png",
          devicon: "devicon-nextjs-plain",
          level: "Expert",
          link: "https://nextjs.org/",
          exp: "2 year"
        },
        {
          id: "2",
          name: "NextAuth v5",
          icon: "/nextauth.png",
          level: "Expert",
          link: "https://next-auth.js.org/",
          exp: "2 year"
        },
        {
          id: "3",
          name: "Sequelize",
          icon: "/sequelize.png",
          devicon: "devicon-sequelize-plain",
          level: "Expert",
          link: "https://sequelize.org/",
          exp: "2 year"
        },
        {
          id: "4",
          name: "TypeScript",
          icon: "/typescript.png",
          devicon: "devicon-typescript-plain",
          level: "Expert",
          link: "https://www.typescriptlang.org/",
          exp: "2 year"
        },
      ],
    },
  ],

  aiSystemPrompt: `You are the AI Assistant for Md Noman Faysal Ridoy (brand name: NF RIDOY). 
    Answer visitor questions strictly using his profile context:
    - Base: Dhaka, Bangladesh
    - Profession: Full-Stack Web Developer (MERN Stack, Next.js, TypeScript, GSAP)
    - Key Strengths: Scalable web apps, complex API structures, frontend animation engineering.
    Be professional, concise, and helpful.`,
};

export const skills = [
  // Frontend
  {
    id: "1",
    name: "Next.js",
    icon: "/nextjs.png",
    devicon: "devicon-nextjs-plain",
    level: "Expert",
    link: "https://nextjs.org/",
    exp: "2 year",
    type: "frontend"
  },
  {
    id: "2",
    name: "React",
    icon: "/react.png",
    devicon: "devicon-react-original",
    level: "Expert",
    link: "https://reactjs.org/",
    exp: "2 year",
    type: "frontend"
  },
  {
    id: "3",
    name: "TypeScript",
    icon: "/typescript.png",
    devicon: "devicon-typescript-plain",
    level: "Expert",
    link: "https://www.typescriptlang.org/",
    exp: "2 year",
    type: "Language"
  },

  // Newly added backend skills at 4–7
  {
    id: "4",
    name: "Node.js",
    icon: "/nodejs.png",
    devicon: "devicon-nodejs-plain",
    level: "Expert",
    link: "https://nodejs.org/",
    exp: "2 year",
    type: "backend"
  },
  {
    id: "5",
    name: "Express.js",
    icon: "/express.png",
    devicon: "devicon-express-original",
    level: "Expert",
    link: "https://expressjs.com/",
    exp: "2 year",
    type: "backend"
  },
  {
    id: "6",
    name: "NestJS",
    icon: "/nestjs.png",
    devicon: "devicon-nestjs-plain",
    level: "Expert",
    link: "https://nestjs.com/",
    exp: "2 year",
    type: "backend"
  },
  {
    id: "7",
    name: "Docker",
    icon: "/docker.png",
    devicon: "devicon-docker-plain",
    level: "Expert",
    link: "https://www.docker.com/",
    exp: "2 year",
    type: "tools"
  },

  // Continue with frontend
  {
    id: "8",
    name: "Tailwind CSS",
    icon: "/tailwind.png",
    devicon: "devicon-tailwindcss-plain",
    level: "Expert",
    link: "https://tailwindcss.com/",
    exp: "2 year",
    type: "tools"
  },
  {
    id: "9",
    name: "GSAP",
    icon: "/gsap.png",
    devicon: "devicon-gsap-plain",
    level: "Expert",
    link: "https://gsap.com/",
    exp: "2 year",
    type: "frontend"
  },
  {
    id: "10",
    name: "Redux Toolkit",
    icon: "/redux.png",
    devicon: "devicon-redux-original",
    level: "Expert",
    link: "https://redux-toolkit.js.org/",
    exp: "2 year",
    type: "frontend"
  },

  // Backend
  {
    id: "11",
    name: "MongoDB & Mongoose",
    icon: "/mongodb.png",
    devicon: "devicon-mongodb-plain",
    level: "Expert",
    link: "https://www.mongodb.com/",
    exp: "2 year",
    type: "backend"
  },
  {
    id: "12",
    name: "Sequelize (PostgreSQL/MySQL)",
    icon: "/sequelize.png",
    devicon: "devicon-sequelize-plain",
    level: "Expert",
    link: "https://sequelize.org/",
    exp: "2 year",
    type: "backend"
  },
  {
    id: "13",
    name: "NextAuth.js / JWT Security",
    icon: "/nextauth.png",
    level: "Expert",
    link: "https://next-auth.js.org/",
    exp: "2 year",
    type: "backend"
  },
  {
    id: "14",
    name: "RESTful & GraphQL APIs",
    icon: "/graphql.png",
    devicon: "devicon-graphql-plain",
    level: "Expert",
    link: "https://graphql.org/",
    exp: "2 year",
    type: "backend"
  },

  // Tools & Workflow
  {
    id: "15",
    name: "Git",
    icon: "/git.png",
    devicon: "devicon-git-plain",
    level: "Expert",
    link: "https://git-scm.com/",
    exp: "2 year",
    type: "tools"
  },
  {
    id: "16",
    name: "GitHub",
    icon: "/github.png",
    devicon: "devicon-github-plain",
    level: "Expert",
    link: "https://github.com/",
    exp: "2 year",
    type: "tools"
  },
  {
    id: "17",
    name: "Vercel Deployment",
    icon: "/vercel.png",
    devicon: "devicon-vercel-plain",
    level: "Expert",
    link: "https://vercel.com/",
    exp: "2 year",
    type: "tools"
  },
  {
    id: "18",
    name: "VS Code",
    icon: "/vscode.png",
    devicon: "devicon-vscode-plain",
    level: "Expert",
    link: "https://code.visualstudio.com/",
    exp: "2 year",
    type: "tools"
  },
  {
    id: "19",
    name: "Postman",
    icon: "/postman.png",
    level: "Expert",
    link: "https://www.postman.com/",
    exp: "2 year",
    type: "tools"
  },
]
