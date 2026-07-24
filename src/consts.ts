export const SITE = {
  title: 'Arun Chaitanya Miriappalli',
  description:
    'Engineering leader writing about fintech, SaaS platforms, AI-enabled systems, and building teams.',
  url: 'https://arunmiriappalli.com',
  author: 'Arun Chaitanya Miriappalli',
};

export const SOCIAL = {
  github: 'arunmiriappalli',
  linkedin: 'arunchaitanyam',
  twitter: 'arunmiriappalli',
  stackoverflow: 'users/3445161/chaitan64arun',
  email: 'arunmchaitanya@outlook.com',
};

export const NAV_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/projects', label: 'Projects' },
  { href: '/resume', label: 'Resume' },
  { href: '/presentations', label: 'Slides' },
];

// GA4 Measurement ID — set GA_MEASUREMENT_ID at build time (e.g. via repo/env var).
// Analytics script only renders when this is a real "G-XXXXXXX" id, so local/dev
// builds never send data.
export const GA_MEASUREMENT_ID = import.meta.env.PUBLIC_GA_MEASUREMENT_ID ?? '';
