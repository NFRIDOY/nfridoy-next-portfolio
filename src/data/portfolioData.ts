export interface Skill {
  id: string;
  name: string;
  icon: string;
  level: string;
  link: string;
  exp: string;
}

export interface Project {
  title: string;
  description: string;
  techStack: Skill[];
}

export interface PersonalInfo {
  name: string;
  brandAlias: string;
  imgae: string; // Spelled "imgae" in source data, mapping to profile pic path
  title: string[];
  location: string;
  tagline: string;
  bio: string;
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
    toolsAndWorkflow: Skill[];
  };
  projects: Project[];
  aiSystemPrompt: string;
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Md Noman Faysal Ridoy",
    brandAlias: "NF RIDOY | Full-Stack Developer",
    imgae: "/profile.jpg",
    title: ["Full-Stack Developer", "Front End Developer", "Back End Developer", "Software Engineer", "Software Architect"],
    location: "Dhaka, Bangladesh",
    tagline: "Building scalable web engines, high-performance UI systems, and interactive digital experiences.",
    bio: "Full-stack engineer specializing in Next.js, TypeScript, Node.js, express and the MERN stack. I build robust digital products spanning authentication architectures, complex dashboard systems, and animation-heavy frontends.",
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
        name: "Next.js 15 / React",
        icon: "/nextjs.png",
        level: "Expert",
        link: "https://nextjs.org/",
        exp: "2 year"
      },
      {
        id: "2",
        name: "TypeScript",
        icon: "/typescript.png",
        level: "Expert",
        link: "https://www.typescriptlang.org/",
        exp: "2 year"
      },
      {
        id: "3",
        name: "Tailwind CSS",
        icon: "/tailwind.png",
        level: "Expert",
        link: "https://tailwindcss.com/",
        exp: "2 year"
      },
      {
        id: "4",
        name: "GSAP / Framer Motion",
        icon: "/gsap.png",
        level: "Expert",
        link: "https://gsap.com/",
        exp: "2 year"
      },
      {
        id: "5",
        name: "State Management (Zustand, Redux)",
        icon: "/zustand.png",
        level: "Expert",
        link: "https://zustand-demo.pmnd.rs/",
        exp: "2 year"
      },
    ],
    backend: [
      {
        id: "1",
        name: "Node.js & Express.js",
        icon: "/nodejs.png",
        level: "Expert",
        link: "https://nodejs.org/",
        exp: "2 year"
      },
      {
        id: "2",
        name: "MongoDB & Mongoose",
        icon: "/mongodb.png",
        level: "Expert",
        link: "https://www.mongodb.com/",
        exp: "2 year"
      },
      {
        id: "3",
        name: "Sequelize (PostgreSQL/MySQL)",
        icon: "/sequelize.png",
        level: "Expert",
        link: "https://sequelize.org/",
        exp: "2 year"
      },
      {
        id: "4",
        name: "NextAuth.js / JWT Security",
        icon: "/nextauth.png",
        level: "Expert",
        link: "https://next-auth.js.org/",
        exp: "2 year"
      },
      {
        id: "5",
        name: "RESTful & GraphQL APIs",
        icon: "/graphql.png",
        level: "Expert",
        link: "https://graphql.org/",
        exp: "2 year"
      },
    ],
    toolsAndWorkflow: [
      {
        id: "1",
        name: "Git",
        icon: "/git.png",
        level: "Expert",
        link: "https://git-scm.com/",
        exp: "2 year"
      },
      {
        id: "2",
        name: "GitHub",
        icon: "/github.png",
        level: "Expert",
        link: "https://github.com/",
        exp: "2 year"
      },
      {
        id: "3",
        name: "Vercel Deployment",
        icon: "/vercel.png",
        level: "Expert",
        link: "https://vercel.com/",
        exp: "2 year"
      },
      {
        id: "4",
        name: "VS Code",
        icon: "/vscode.png",
        level: "Expert",
        link: "https://code.visualstudio.com/",
        exp: "2 year"
      },
      {
        id: "5",
        name: "Docker Basics",
        icon: "/docker.png",
        level: "Expert",
        link: "https://www.docker.com/",
        exp: "2 year"
      },
      {
        id: "6",
        name: "Postman",
        icon: "/postman.png",
        level: "Expert",
        link: "https://www.postman.com/",
        exp: "2 year"
      },
    ],
  },

  projects: [
    {
      title: "Delivery & Courier Management System",
      description: "A comprehensive logistics portal featuring a multi-stage workflow tracking system, integrated photo uploads for delivery verification, and real-time status updates to streamline courier operations.",
      techStack: [
        {
          id: "1",
          name: "Next.js",
          icon: "/nextjs.png",
          level: "Expert",
          link: "https://nextjs.org/",
          exp: "2 year"
        },
        {
          id: "2",
          name: "Express.js",
          icon: "/express.png",
          level: "Expert",
          link: "https://expressjs.com/",
          exp: "2 year"
        },
        {
          id: "3",
          name: "MongoDB",
          icon: "/mongodb.png",
          level: "Expert",
          link: "https://www.mongodb.com/",
          exp: "2 year"
        },
        {
          id: "4",
          name: "Tailwind CSS",
          icon: "/tailwind.png",
          level: "Expert",
          link: "https://tailwindcss.com/",
          exp: "2 year"
        },
      ],
    },
    {
      title: "Secure Authentication Ecosystem",
      description: "A robust authentication system engineered with OAuth 2.0 and JWT protocols, ensuring secure, multi-tenant session isolation across diverse subdomains.",
      techStack: [
        {
          id: "1",
          name: "Next.js",
          icon: "/nextjs.png",
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
          level: "Expert",
          link: "https://sequelize.org/",
          exp: "2 year"
        },
        {
          id: "4",
          name: "TypeScript",
          icon: "/typescript.png",
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
