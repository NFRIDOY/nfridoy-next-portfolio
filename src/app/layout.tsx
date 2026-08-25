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
const OG_IMAGE = `${SITE_URL}/api/og`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Md Noman Faysal Ridoy | Full-Stack Web Developer — NF RIDOY",
    template: "%s | NF RIDOY",
  },
  description:
    "Md Noman Faysal Ridoy (NF RIDOY) — Full-Stack Web Developer from Dhaka, Bangladesh. Specializing in Next.js, React, TypeScript, Node.js, MongoDB, and the MERN stack. Building scalable web engines and interactive digital experiences.",
  keywords: [
    "Md Noman Faysal Ridoy",
    "NF RIDOY",
    "nfridoy",
    "Full-Stack Developer Bangladesh",
    "Full-Stack Web Developer Dhaka",
    "Next.js Developer",
    "React Developer",
    "MERN Stack Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "Web Developer Bangladesh",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer Bangladesh",
    "GSAP Animations",
    "Tailwind CSS",
    "MongoDB",
    "PostgreSQL",
    "Express.js",
    "Redux Toolkit",
    "GraphQL",
    "REST API",
    "OrionT CEO",
    "Computer Science Researcher",
    "ICCIT 2023 Research Paper",
    "Portfolio",
    "Hire Web Developer",
  ],
  authors: [{ name: "Md Noman Faysal Ridoy", url: SITE_URL }],
  creator: "Md Noman Faysal Ridoy",
  publisher: "Md Noman Faysal Ridoy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "NF RIDOY — Full-Stack Web Developer Portfolio",
    title: "Md Noman Faysal Ridoy | Full-Stack Web Developer",
    description:
      "Full-Stack Web Developer from Dhaka, Bangladesh. Specializing in Next.js, React, TypeScript, Node.js, MongoDB, and the MERN stack. Founder & CEO at OrionT.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Md Noman Faysal Ridoy — Full-Stack Web Developer Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Noman Faysal Ridoy | Full-Stack Web Developer",
    description:
      "Full-Stack Web Developer from Dhaka, Bangladesh. Next.js, React, TypeScript, Node.js, MERN stack.",
    images: [OG_IMAGE],
    creator: "@nfridoy",
    site: "@nfridoy",
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
    shortcut: "/favicon.ico",
  },
  verification: {
    google: "google-site-verification=77AkC-RqA0cTiKKjFVJ5IE8DZeUHNR-hzDCkeugGL2w",
    // google: "your-google-search-console-verification-code",
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
    alternateName: ["NF RIDOY", "nfridoy"],
    url: SITE_URL,
    image: `${SITE_URL}/profile.jpg`,
    jobTitle: "Full-Stack Web Developer",
    description:
      "Full-stack engineer specializing in Next.js, TypeScript, Node.js, Express, and the MERN stack. Founder & CEO at OrionT. Researcher in Machine Learning and Reinforcement Learning.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressRegion: "Dhaka Division",
      addressCountry: "BD",
    },
    email: "nfridoy@gmail.com",
    telephone: "+880",
    nationality: {
      "@type": "Country",
      name: "Bangladesh",
    },
    sameAs: [
      "https://linkedin.com/in/nfridoy",
      "https://github.com/nfridoy",
      "https://facebook.com/nfridoy",
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "MERN Stack",
      "Full-Stack Web Development",
      "GSAP",
      "Framer Motion",
      "Tailwind CSS",
      "Redux Toolkit",
      "GraphQL",
      "REST API",
      "JWT Authentication",
      "NextAuth.js",
      "Machine Learning",
      "Reinforcement Learning",
      "Vehicle Routing Problem",
    ],
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Jagannath University",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dhaka",
          addressCountry: "BD",
        },
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Bangladesh University of Business and Technology",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dhaka",
          addressCountry: "BD",
        },
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
        skills: "React, Next.js, Node.js, TypeScript, MongoDB, PostgreSQL, Express.js, GSAP, Tailwind CSS",
        occupationalCategory: "Software Developer",
      },
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "publication",
        recognizedBy: {
          "@type": "Organization",
          name: "IEEE",
        },
        description: "Co-authored research paper on Vehicle Routing Problem Solving Using Reinforcement Learning, published at ICCIT 2023",
      },
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Md Noman Faysal Ridoy — Portfolio",
    url: SITE_URL,
    author: {
      "@type": "Person",
      name: "Md Noman Faysal Ridoy",
    },
    description:
      "Portfolio of Md Noman Faysal Ridoy — Full-Stack Web Developer specializing in Next.js, MERN stack, TypeScript, Node.js, and GSAP animations.",
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const portfolioJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Md Noman Faysal Ridoy",
      alternateName: "NF RIDOY",
      url: SITE_URL,
      jobTitle: "Full-Stack Web Developer",
      description:
        "Full-stack engineer specializing in Next.js, TypeScript, Node.js, Express, and the MERN stack.",
      image: `${SITE_URL}/profile.jpg`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dhaka",
        addressCountry: "BD",
      },
      sameAs: [
        "https://linkedin.com/in/nfridoy",
        "https://github.com/nfridoy",
        "https://facebook.com/nfridoy",
      ],
    },
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
      style={{ colorScheme: "dark" }}
    >
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100 selection:bg-emerald-500/30 selection:text-emerald-400">
        {children}
      </body>
    </html>
  );
}
