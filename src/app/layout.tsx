import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import "devicon/devicon.min.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://nfridoy.vercel.app";
const OG_IMAGE = `${SITE_URL}/og.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Md Noman Faysal Ridoy | Full-Stack Web Developer — NF RIDOY",
    template: "%s | NF RIDOY",
  },
  description:
    "Portfolio of Md Noman Faysal Ridoy (NF RIDOY) — Full-Stack Web Developer specializing in Next.js, MERN stack, TypeScript, Node.js, and GSAP animations. Based in Dhaka, Bangladesh.",
  keywords: [
    "Md Noman Faysal Ridoy",
    "NF RIDOY",
    "nfridoy",
    "Full-Stack Developer",
    "Full-Stack Web Developer",
    "Full-Stack Web Engineer",
    "Full-Stack Engineer",
    "Full-Stack Developer Bangladesh",
    "Full-Stack Engineer Bangladesh",
    "Full-Stack Developer Dhaka",
    "Full-Stack Engineer Dhaka",
    "Next.js Developer",
    "Next Developer",
    "React.js Developer",
    "React Developer",
    "MERN Stack",
    "React Developer",
    "TypeScript",
    "TypeScript Developer",
    "Node.js",
    "Node.js Developer",
    "JavaScript",
    "JavaScript Developer",
    "Web Developer Bangladesh",
    "Dhaka Developer",
    "Portfolio",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "GSAP Animations",
    "Tailwind CSS",
    "MongoDB",
    "Express.js",
    "Redux",
    "GraphQL",
    "REST API",
    "OrionT",
    "Computer Science Researcher",
  ],
  authors: [{ name: "Md Noman Faysal Ridoy", url: SITE_URL }],
  creator: "Md Noman Faysal Ridoy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "NF RIDOY — Full-Stack Developer",
    title: "Md Noman Faysal Ridoy | Full-Stack Web Developer",
    description:
      "Full-Stack Developer specializing in Next.js, MERN stack, TypeScript, Node.js, and GSAP animations. Building scalable web engines and interactive digital experiences.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Md Noman Faysal Ridoy — Full-Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Noman Faysal Ridoy | Full-Stack Web Developer",
    description:
      "Full-Stack Developer specializing in Next.js, MERN stack, TypeScript, Node.js, and GSAP animations.",
    images: [OG_IMAGE],
    creator: "@nfridoy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Md Noman Faysal Ridoy",
    alternateName: "NF RIDOY",
    url: SITE_URL,
    image: `${SITE_URL}/profile.jpg`,
    jobTitle: "Full-Stack Web Developer",
    description:
      "Full-stack engineer specializing in Next.js, TypeScript, Node.js, Express, and the MERN stack. Founder & CEO at OrionT.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
    email: "nfridoy@gmail.com",
    sameAs: [
      "https://linkedin.com/in/nfridoy",
      "https://github.com/nfridoy",
      "https://facebook.com/nfridoy",
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "MERN Stack",
      "Full-Stack Web Development",
      "GSAP",
      "Tailwind CSS",
      "GraphQL",
      "REST API",
      "Machine Learning",
      "Reinforcement Learning",
    ],
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Jagannath University",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Bangladesh University of Business and Technology",
      },
    ],
    worksFor: {
      "@type": "Organization",
      name: "OrionT",
      url: SITE_URL,
    },
    hasOccupation: [
      {
        "@type": "Occupation",
        name: "Full Stack Developer",
        skills: "React, Next.js, Node.js, TypeScript, MongoDB, PostgreSQL",
      },
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "NF RIDOY — Portfolio",
    url: SITE_URL,
    author: {
      "@type": "Person",
      name: "Md Noman Faysal Ridoy",
    },
    description:
      "Portfolio of Md Noman Faysal Ridoy — Full-Stack Web Developer specializing in Next.js, MERN stack, APIs, and GSAP animations.",
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
      style={{ colorScheme: "dark" }}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100 selection:bg-emerald-500/30 selection:text-emerald-400">
        {children}
      </body>
    </html>
  );
}
