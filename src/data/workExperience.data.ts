// types/timeline.ts

export interface HighlightDetail {
  id: string;
  heading: string;
  description: string;
}

export interface TimelineItem {
  id: string;
  period: string; // e.g., "2021 — Now"
  position: 'left' | 'right'; // Controls alignment on the main timeline
  title: string;
  description: string;
  isCurrent?: boolean; // Set to true to display in the highlighted right sidebar
  sidebarHighlights?: HighlightDetail[];
}

export const WORK_EXPERIENCE_DATA: TimelineItem[] = [
  {
    id: '1',
    period: '2021 — Now',
    position: 'right',
    title: 'Senior Frontend Engineer',
    description: 'Leading UI architecture, design systems, and component libraries using Next.js and Tailwind CSS.',
    isCurrent: true,
    sidebarHighlights: [
      {
        id: 'hl-1',
        heading: 'Architecture & Performance',
        description: 'Optimized Core Web Vitals resulting in a 40% reduction in page load time.',
      },
      {
        id: 'hl-2',
        heading: 'Team Leadership',
        description: 'Mentored junior developers and established code review standards across teams.',
      },
      {
        id: 'hl-3',
        heading: 'Design Integration',
        description: 'Collaborated with product designers to build accessible, reusable React UI components.',
      },
    ],
  },
  {
    id: '2',
    period: '2019 — 2021',
    position: 'left',
    title: 'Frontend Developer',
    description: 'Developed scalable client-side web applications and integrated REST & GraphQL APIs.',
  },
  {
    id: 'exp-3',
    period: '2017 — 2019',
    position: 'right',
    title: 'UI/UX Developer',
    description: 'Designed interactive wireframes and translated design specs into responsive web layouts.',
  },
  {
    id: 'exp-4',
    period: '2015 — 2017',
    position: 'left',
    title: 'Junior Web Developer',
    description: 'Maintained legacy frontend applications and fixed cross-browser compatibility issues.',
  },
  {
    id: 'exp-5',
    period: '2010 — 2015',
    position: 'right',
    title: 'Freelance Web Designer',
    description: 'Created custom websites and branding packages for small business clients.',
  },
];